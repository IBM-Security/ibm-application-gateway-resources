# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerUrlStyle(object):
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
        'case_insensitive': 'bool',
        'windows': 'bool'
    }

    attribute_map = {
        'case_insensitive': 'case_insensitive',
        'windows': 'windows'
    }

    def __init__(self, case_insensitive=False, windows=False):  # noqa: E501
        """ResourceServerUrlStyle - a model defined in OpenAPI"""  # noqa: E501

        self._case_insensitive = None
        self._windows = None
        self.discriminator = None

        if case_insensitive is not None:
            self.case_insensitive = case_insensitive
        if windows is not None:
            self.windows = windows

    @property
    def case_insensitive(self):
        """Gets the case_insensitive of this ResourceServerUrlStyle.  # noqa: E501

        A boolean flag indicating whether or not URLs are case insensitive.   # noqa: E501

        :return: The case_insensitive of this ResourceServerUrlStyle.  # noqa: E501
        :rtype: bool
        """
        return self._case_insensitive

    @case_insensitive.setter
    def case_insensitive(self, case_insensitive):
        """Sets the case_insensitive of this ResourceServerUrlStyle.

        A boolean flag indicating whether or not URLs are case insensitive.   # noqa: E501

        :param case_insensitive: The case_insensitive of this ResourceServerUrlStyle.  # noqa: E501
        :type: bool
        """

        self._case_insensitive = case_insensitive

    @property
    def windows(self):
        """Gets the windows of this ResourceServerUrlStyle.  # noqa: E501

        A boolean flag indicating whether or not to forbid requests to URLs that appear to be Windows style file name aliases. If this entry is set to `true` it will also enforce that URLs are case insensitive.   # noqa: E501

        :return: The windows of this ResourceServerUrlStyle.  # noqa: E501
        :rtype: bool
        """
        return self._windows

    @windows.setter
    def windows(self, windows):
        """Sets the windows of this ResourceServerUrlStyle.

        A boolean flag indicating whether or not to forbid requests to URLs that appear to be Windows style file name aliases. If this entry is set to `true` it will also enforce that URLs are case insensitive.   # noqa: E501

        :param windows: The windows of this ResourceServerUrlStyle.  # noqa: E501
        :type: bool
        """

        self._windows = windows

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
        if not isinstance(other, ResourceServerUrlStyle):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerUrlStyle):
            return True

        return self.to_dict() != other.to_dict()
