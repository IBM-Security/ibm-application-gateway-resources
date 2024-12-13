# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerServers(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'host': 'str',
        'port': 'float',
        'virtual_host': 'str',
        'ssl': 'ResourceServerSsl',
        'url_style': 'ResourceServerUrlStyle',
        'priority': 'float',
        'uuid': 'str'
    }

    attribute_map = {
        'host': 'host',
        'port': 'port',
        'virtual_host': 'virtual_host',
        'ssl': 'ssl',
        'url_style': 'url_style',
        'priority': 'priority',
        'uuid': 'uuid'
    }

    def __init__(self, host=None, port=443, virtual_host=None, ssl=None, url_style=None, priority=9, uuid=None):  # noqa: E501
        """ResourceServerServers - a model defined in OpenAPI"""  # noqa: E501

        self._host = None
        self._port = None
        self._virtual_host = None
        self._ssl = None
        self._url_style = None
        self._priority = None
        self._uuid = None
        self.discriminator = None

        if host is not None:
            self.host = host
        if port is not None:
            self.port = port
        if virtual_host is not None:
            self.virtual_host = virtual_host
        if ssl is not None:
            self.ssl = ssl
        if url_style is not None:
            self.url_style = url_style
        if priority is not None:
            self.priority = priority
        if uuid is not None:
            self.uuid = uuid

    @property
    def host(self):
        """Gets the host of this ResourceServerServers.  # noqa: E501

        The name or IP address of the server.   # noqa: E501

        :return: The host of this ResourceServerServers.  # noqa: E501
        :rtype: str
        """
        return self._host

    @host.setter
    def host(self, host):
        """Sets the host of this ResourceServerServers.

        The name or IP address of the server.   # noqa: E501

        :param host: The host of this ResourceServerServers.  # noqa: E501
        :type: str
        """

        self._host = host

    @property
    def port(self):
        """Gets the port of this ResourceServerServers.  # noqa: E501

        The port on which the server is listening.   # noqa: E501

        :return: The port of this ResourceServerServers.  # noqa: E501
        :rtype: float
        """
        return self._port

    @port.setter
    def port(self, port):
        """Sets the port of this ResourceServerServers.

        The port on which the server is listening.   # noqa: E501

        :param port: The port of this ResourceServerServers.  # noqa: E501
        :type: float
        """
        if (port is not None and port > 65535):  # noqa: E501
            raise ValueError("Invalid value for `port`, must be a value less than or equal to `65535`")  # noqa: E501
        if (port is not None and port < 0):  # noqa: E501
            raise ValueError("Invalid value for `port`, must be a value greater than or equal to `0`")  # noqa: E501

        self._port = port

    @property
    def virtual_host(self):
        """Gets the virtual_host of this ResourceServerServers.  # noqa: E501

        If the resource server resides on a virtual host, this parameter can be used to specify the hostname which the reverse proxy should present in the host header for requests to this resource server. If this resource server definition is for a virtual host, this will be inherited from the resource server definition and should not be specified.   # noqa: E501

        :return: The virtual_host of this ResourceServerServers.  # noqa: E501
        :rtype: str
        """
        return self._virtual_host

    @virtual_host.setter
    def virtual_host(self, virtual_host):
        """Sets the virtual_host of this ResourceServerServers.

        If the resource server resides on a virtual host, this parameter can be used to specify the hostname which the reverse proxy should present in the host header for requests to this resource server. If this resource server definition is for a virtual host, this will be inherited from the resource server definition and should not be specified.   # noqa: E501

        :param virtual_host: The virtual_host of this ResourceServerServers.  # noqa: E501
        :type: str
        """

        self._virtual_host = virtual_host

    @property
    def ssl(self):
        """Gets the ssl of this ResourceServerServers.  # noqa: E501


        :return: The ssl of this ResourceServerServers.  # noqa: E501
        :rtype: ResourceServerSsl
        """
        return self._ssl

    @ssl.setter
    def ssl(self, ssl):
        """Sets the ssl of this ResourceServerServers.


        :param ssl: The ssl of this ResourceServerServers.  # noqa: E501
        :type: ResourceServerSsl
        """

        self._ssl = ssl

    @property
    def url_style(self):
        """Gets the url_style of this ResourceServerServers.  # noqa: E501


        :return: The url_style of this ResourceServerServers.  # noqa: E501
        :rtype: ResourceServerUrlStyle
        """
        return self._url_style

    @url_style.setter
    def url_style(self, url_style):
        """Sets the url_style of this ResourceServerServers.


        :param url_style: The url_style of this ResourceServerServers.  # noqa: E501
        :type: ResourceServerUrlStyle
        """

        self._url_style = url_style

    @property
    def priority(self):
        """Gets the priority of this ResourceServerServers.  # noqa: E501

        The priority group for this server. The load balancing algorithm in IAG will forward client requests to any currently available  server with the highest priority.   # noqa: E501

        :return: The priority of this ResourceServerServers.  # noqa: E501
        :rtype: float
        """
        return self._priority

    @priority.setter
    def priority(self, priority):
        """Sets the priority of this ResourceServerServers.

        The priority group for this server. The load balancing algorithm in IAG will forward client requests to any currently available  server with the highest priority.   # noqa: E501

        :param priority: The priority of this ResourceServerServers.  # noqa: E501
        :type: float
        """
        if (priority is not None and priority > 9):  # noqa: E501
            raise ValueError("Invalid value for `priority`, must be a value less than or equal to `9`")  # noqa: E501
        if (priority is not None and priority < 1):  # noqa: E501
            raise ValueError("Invalid value for `priority`, must be a value greater than or equal to `1`")  # noqa: E501

        self._priority = priority

    @property
    def uuid(self):
        """Gets the uuid of this ResourceServerServers.  # noqa: E501

        The UUID for this server. The UUID of the server is used if this  is a stateful resource server to ensure that client requests are always handled by the same server. This field is optional and will be automatically generated if not provided. The UUID only needs to be manually set when multiple instances  of IAG are handling the same stateful traffic. That is, so that  each IAG instance is using the same UUIDs for the same servers.   # noqa: E501

        :return: The uuid of this ResourceServerServers.  # noqa: E501
        :rtype: str
        """
        return self._uuid

    @uuid.setter
    def uuid(self, uuid):
        """Sets the uuid of this ResourceServerServers.

        The UUID for this server. The UUID of the server is used if this  is a stateful resource server to ensure that client requests are always handled by the same server. This field is optional and will be automatically generated if not provided. The UUID only needs to be manually set when multiple instances  of IAG are handling the same stateful traffic. That is, so that  each IAG instance is using the same UUIDs for the same servers.   # noqa: E501

        :param uuid: The uuid of this ResourceServerServers.  # noqa: E501
        :type: str
        """

        self._uuid = uuid

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ResourceServerServers):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerServers):
            return True

        return self.to_dict() != other.to_dict()
