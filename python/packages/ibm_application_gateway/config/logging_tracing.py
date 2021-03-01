# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.02
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class LoggingTracing(object):
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
        'component': 'str',
        'file_name': 'str',
        'level': 'float'
    }

    attribute_map = {
        'component': 'component',
        'file_name': 'file_name',
        'level': 'level'
    }

    def __init__(self, component=None, file_name=None, level=0):  # noqa: E501
        """LoggingTracing - a model defined in OpenAPI"""  # noqa: E501

        self._component = None
        self._file_name = None
        self._level = None
        self.discriminator = None

        if component is not None:
            self.component = component
        if file_name is not None:
            self.file_name = file_name
        if level is not None:
            self.level = level

    @property
    def component(self):
        """Gets the component of this LoggingTracing.  # noqa: E501

        The name of the tracing component to be enabled. Refer to the troubleshooting documentation for the full list of component names.   # noqa: E501

        :return: The component of this LoggingTracing.  # noqa: E501
        :rtype: str
        """
        return self._component

    @component.setter
    def component(self, component):
        """Sets the component of this LoggingTracing.

        The name of the tracing component to be enabled. Refer to the troubleshooting documentation for the full list of component names.   # noqa: E501

        :param component: The component of this LoggingTracing.  # noqa: E501
        :type: str
        """

        self._component = component

    @property
    def file_name(self):
        """Gets the file_name of this LoggingTracing.  # noqa: E501

        The name of the generated log file.  If the file name  is supplied without any path information the file will be written to the '/var/iag/logs' directory.  If the file name contains path information the hosting directory must be created and available before the container is started.   # noqa: E501

        :return: The file_name of this LoggingTracing.  # noqa: E501
        :rtype: str
        """
        return self._file_name

    @file_name.setter
    def file_name(self, file_name):
        """Sets the file_name of this LoggingTracing.

        The name of the generated log file.  If the file name  is supplied without any path information the file will be written to the '/var/iag/logs' directory.  If the file name contains path information the hosting directory must be created and available before the container is started.   # noqa: E501

        :param file_name: The file_name of this LoggingTracing.  # noqa: E501
        :type: str
        """

        self._file_name = file_name

    @property
    def level(self):
        """Gets the level of this LoggingTracing.  # noqa: E501

        The level of detail to be gathered by the tracing component in the range 0 to 9. Level 1 specifies the least detailed output and level 9 specifies the most detailed output. Level 0 will disable tracing for the component.   # noqa: E501

        :return: The level of this LoggingTracing.  # noqa: E501
        :rtype: float
        """
        return self._level

    @level.setter
    def level(self, level):
        """Sets the level of this LoggingTracing.

        The level of detail to be gathered by the tracing component in the range 0 to 9. Level 1 specifies the least detailed output and level 9 specifies the most detailed output. Level 0 will disable tracing for the component.   # noqa: E501

        :param level: The level of this LoggingTracing.  # noqa: E501
        :type: float
        """
        if (level is not None and level > 9):  # noqa: E501
            raise ValueError("Invalid value for `level`, must be a value less than or equal to `9`")  # noqa: E501
        if (level is not None and level < 0):  # noqa: E501
            raise ValueError("Invalid value for `level`, must be a value greater than or equal to `0`")  # noqa: E501

        self._level = level

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
        if not isinstance(other, LoggingTracing):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, LoggingTracing):
            return True

        return self.to_dict() != other.to_dict()