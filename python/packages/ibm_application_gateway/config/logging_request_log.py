# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 19.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class LoggingRequestLog(object):
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
        'file': 'LoggingRequestLogFile',
        'format': 'str'
    }

    attribute_map = {
        'file': 'file',
        'format': 'format'
    }

    def __init__(self, file=None, format='"%h %u %t %r %s %b"'):  # noqa: E501
        """LoggingRequestLog - a model defined in OpenAPI"""  # noqa: E501

        self._file = None
        self._format = None
        self.discriminator = None

        if file is not None:
            self.file = file
        if format is not None:
            self.format = format

    @property
    def file(self):
        """Gets the file of this LoggingRequestLog.  # noqa: E501


        :return: The file of this LoggingRequestLog.  # noqa: E501
        :rtype: LoggingRequestLogFile
        """
        return self._file

    @file.setter
    def file(self, file):
        """Sets the file of this LoggingRequestLog.


        :param file: The file of this LoggingRequestLog.  # noqa: E501
        :type: LoggingRequestLogFile
        """

        self._file = file

    @property
    def format(self):
        """Gets the format of this LoggingRequestLog.  # noqa: E501

        The format of the events written to the request log. See the Log Format table above for the available directives.   # noqa: E501

        :return: The format of this LoggingRequestLog.  # noqa: E501
        :rtype: str
        """
        return self._format

    @format.setter
    def format(self, format):
        """Sets the format of this LoggingRequestLog.

        The format of the events written to the request log. See the Log Format table above for the available directives.   # noqa: E501

        :param format: The format of this LoggingRequestLog.  # noqa: E501
        :type: str
        """

        self._format = format

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
        if not isinstance(other, LoggingRequestLog):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, LoggingRequestLog):
            return True

        return self.to_dict() != other.to_dict()