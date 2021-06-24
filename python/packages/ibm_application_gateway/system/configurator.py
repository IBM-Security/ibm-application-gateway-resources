#!/usr/local/bin/python3

"""
Copyright contributors to the Application Gateway project
"""

import logging as sys_logging
import os
import base64
import traceback
import yaml

from tempfile import mkstemp

from ibm_application_gateway.config             import *
from ibm_application_gateway.system.environment import Environment
from ibm_application_gateway.system.container   import Container

#############################################################################

logger = sys_logging.getLogger(__name__)

class Configurator(object):
    """
    This class is used to produce the configuration which can be used
    when starting an IBM Application Gateway (IAG) container.
    """

    def __init__(self,
                    version          = "21.06",
                    server           = None,
                    identity         = None,
                    authorization    = None,
                    policies         = None,
                    resource_servers = None,
                    logging          = None,
                    advanced         = None,
                    services         = None,
                    secrets          = None):
        """
        Initialise this class instance.  The parameters are as follows:

        @param version       : The version of the IAG container for which this
                               configuration will be written (e.g. 19.12).
        @param server        : An ibm_application_gateway.server
                               object which is used to define the configuration
                               of the front-end part of IAG.
        @param identity      : An ibm_application_gateway.identity object which
                               is used to identify the identity source for the
                               container.
        @param authorization : An ibm_application_gateway.authorization
                               object which contains an array of authorization
                               rules which may be referenced by applications.
        @param policies      : An ibm_application_gateway.policies
                               object which define the path based policies that
                               will be applied by the container.
        @param resource_servers : An array of
                               ibm_application_gateway.resource_servers
                               objects which define the resource servers that
                               will provide content for the gateway.
        @param logging       : An ibm_application_gateway.logging object
                               which defines the logging to be used by the
                               container.
        @param advanced      : An ibm_application_gateway.advanced object
                               which defines any advanced configuration for the
                               container.
        @param services      : An ibm_application_gateway services object
                               which defines any services configuration for the
                               container.
        @param secrets       : An ibm_application_gateway.secrets object
                               which defines the encryption secrets for the
                               configuration data.
        """

        super(Configurator, self).__init__()

        self.version       = self.__validate(str, version)
        self.server        = self.__validate(Server, server)
        self.identity      = self.__validate(Identity, identity)
        self.authorization = self.__validate(Authorization, authorization)
        self.policies      = self.__validate(Policies, policies)
        self.logging       = self.__validate(Logging, logging)
        self.advanced      = self.__validate(Advanced, advanced)
        self.services      = self.__validate(Services, services)
        self.secrets       = self.__validate(Secrets, secrets)
        self.custom_data   = None

        self.resource_servers = \
                self.__validateList(ResourceServer, resource_servers)

    def addCustomData(self, custom_data):
        """
        This method is used to add some custom data to the constructed
        yaml file.
        """

        self.custom_data = custom_data

    def toYaml(self):
        """
        Produce a dictionary representing this configuration which is
        appropriate for writing as YAML data.

        :return: The data for this object as a pruned dictionary.
        """
        data = {}
        for name, value in vars(self).items():
            if value is not None:
                if isinstance(value, list):
                    data[name] = []
                    for entry in value:
                        data[name].append(entry.to_dict())
                elif isinstance(value, dict):
                    data.update(value)
                elif isinstance(value, str):
                    data[name] = value
                else:
                    data[name] = value.to_dict()

        # Remove empty nodes from the dictionary.
        data = self.__stripEmpty(data)

        return data

    def write(self, filename = None):
        """
        Write the current configuration as a yaml file which can be used by
        the container.

        @param filename : The name of the file to write.  If no file is
                          specified a temporary file will be created.

        @retval The name of the file which has been written.
        """

        data = self.toYaml()

        # If we have not been provided with a file name we create a file name
        # now.
        if filename is None:
            dir = Container.config_volume_path \
                    if Environment.is_container_context() else None

            fd, filename = mkstemp(suffix = ".yml", dir=dir)

            if Environment.is_container_context():
                os.fchown(fd, Environment.iag_user, Environment.iag_group)

            os.close(fd)

        # Write the data.
        with open(filename, 'w') as outfile:
            yaml.dump(data, outfile, width=float("inf"))

        logger.info("Wrote the IBM Application Gateway configuration to {0}".\
                format(filename))

        return filename

    def dump(self):
        """
        Print the YAML to stdout. This should only be used for debugging purposes.
        """
        print(yaml.dump(self.toYaml(), width=float("inf")))

    @classmethod
    def __stripEmpty(self, data):
        """
        This private method is used to strip empty nodes from the specified
        dictionary.
        """

        new_data = {}

        for k, v in data.items():
            if isinstance(v, dict):
                v = self.__stripEmpty(v)
            elif isinstance(v, list):
                data = []
                for entry in v:
                    if isinstance(entry, dict):
                        data.append(self.__stripEmpty(entry))
                    elif entry is not None:
                        data.append(entry)
                v = data

            if not v in (u'', None, {}, []):
                new_data[k] = v

        return new_data

    @classmethod
    def __validate(self, data_type, data):
        """
        This private method is used to check to ensure that the specified data
        is of the correct data type.  An exception will be thrown if the data
        type is incorrect.

        @param data_type : The type of data
        @param data      : The data itself

        @retval The data
        """

        if data is not None and not isinstance(data, data_type):
            raise Exception("Data of an incorrect type was specified.")

        return data

    @classmethod
    def __validateList(self, data_type, data):
        """
        This private method is used to check to ensure that the specified data
        is of the correct data type.  An exception will be thrown if the data
        type is incorrect.

        @param data_type : The type of data
        @param data      : The data itself

        @retval The data
        """

        if data is not None:
            if not isinstance(data, list):
                raise Exception("Data of an incorrect type was specified.")

            if len(data) > 0 and not isinstance(data[0], data_type):
                raise Exception("Data of an incorrect type was specified.")

        return data

#############################################################################

class ConfiguratorFile(object):
    """
    This class is used to represent a file which will be base-64 encoded,
    ready for inclusion in the container configuration.
    """

    def __init__(self, name = None, content = None):
        """
        Initialise this class instance.  The parameters are as follows:

        @param name:    The name of the file which is to be used.
        @param content: The actual content of the file.  The name will take
                        precedence over the content if both parameters are
                        specified.
        """

        super(ConfiguratorFile, self).__init__()

        if name is not None and not isinstance(name, str):
            raise Exception("Data of an incorrect type was specified.")

        if content is not None and not isinstance(content, str):
            raise Exception("Data of an incorrect type was specified.")

        if name is not None:
            if not os.path.isfile(name):
                raise Exception("File does not exist: {0}".format(name))

            with open(name, "rb") as fh:
                self.value = "B64:{0}".format(
                    base64.b64encode(fh.read()).decode("utf-8"))
        else:
            self.value = "B64:{0}".format(base64.b64encode(
                                    content.encode("utf-8")).decode("utf-8"))

    def __str__(self):
        return self.value

    def content(self):
        return self.value

#############################################################################
