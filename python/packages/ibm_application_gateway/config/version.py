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

class Version(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    allowed enum values
    """
    _19_12 = "19.12"
    _20_01 = "20.01"
    _20_04 = "20.04"
    _20_07 = "20.07"
    _20_09 = "20.09"
    _20_12 = "20.12"
    _21_02 = "21.02"
    _21_04 = "21.04"
    _21_06 = "21.06"
    _21_09 = "21.09"
    _21_12 = "21.12"
    _22_07 = "22.07"
    _23_04 = "23.04"
    _23_10 = "23.10"
    _24_03 = "24.03"
    _24_06 = "24.06"
    _24_09 = "24.09"

    allowable_values = [_19_12, _20_01, _20_04, _20_07, _20_09, _20_12, _21_02, _21_04, _21_06, _21_09, _21_12, _22_07, _23_04, _23_10, _24_03, _24_06, _24_09]  # noqa: E501

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
    }

    attribute_map = {
    }

    def __init__(self):  # noqa: E501
        """Version - a model defined in OpenAPI"""  # noqa: E501
        self.discriminator = None

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
        if not isinstance(other, Version):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Version):
            return True

        return self.to_dict() != other.to_dict()