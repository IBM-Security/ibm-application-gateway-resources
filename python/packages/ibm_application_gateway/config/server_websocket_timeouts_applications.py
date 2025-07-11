# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 25.06
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerWebsocketTimeoutsApplications(object):
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
        'read': 'float',
        'write': 'float'
    }

    attribute_map = {
        'read': 'read',
        'write': 'write'
    }

    def __init__(self, read=120, write=20):  # noqa: E501
        """ServerWebsocketTimeoutsApplications - a model defined in OpenAPI"""  # noqa: E501

        self._read = None
        self._write = None
        self.discriminator = None

        if read is not None:
            self.read = read
        if write is not None:
            self.write = write

    @property
    def read(self):
        """Gets the read of this ServerWebsocketTimeoutsApplications.  # noqa: E501

        The maximum length of time (in seconds) to wait on a read operation to complete.   # noqa: E501

        :return: The read of this ServerWebsocketTimeoutsApplications.  # noqa: E501
        :rtype: float
        """
        return self._read

    @read.setter
    def read(self, read):
        """Sets the read of this ServerWebsocketTimeoutsApplications.

        The maximum length of time (in seconds) to wait on a read operation to complete.   # noqa: E501

        :param read: The read of this ServerWebsocketTimeoutsApplications.  # noqa: E501
        :type: float
        """
        if (read is not None and read < 1):  # noqa: E501
            raise ValueError("Invalid value for `read`, must be a value greater than or equal to `1`")  # noqa: E501

        self._read = read

    @property
    def write(self):
        """Gets the write of this ServerWebsocketTimeoutsApplications.  # noqa: E501

        The maximum length of time (in seconds) to wait on a write operation to complete.   # noqa: E501

        :return: The write of this ServerWebsocketTimeoutsApplications.  # noqa: E501
        :rtype: float
        """
        return self._write

    @write.setter
    def write(self, write):
        """Sets the write of this ServerWebsocketTimeoutsApplications.

        The maximum length of time (in seconds) to wait on a write operation to complete.   # noqa: E501

        :param write: The write of this ServerWebsocketTimeoutsApplications.  # noqa: E501
        :type: float
        """
        if (write is not None and write < 1):  # noqa: E501
            raise ValueError("Invalid value for `write`, must be a value greater than or equal to `1`")  # noqa: E501

        self._write = write

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
        if not isinstance(other, ServerWebsocketTimeoutsApplications):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerWebsocketTimeoutsApplications):
            return True

        return self.to_dict() != other.to_dict()
