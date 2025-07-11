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

class PoliciesWafConfiguration(object):
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
        'content': 'str',
        'type': 'str'
    }

    attribute_map = {
        'content': 'content',
        'type': 'type'
    }

    def __init__(self, content=None, type=None):  # noqa: E501
        """PoliciesWafConfiguration - a model defined in OpenAPI"""  # noqa: E501

        self._content = None
        self._type = None
        self.discriminator = None

        if content is not None:
            self.content = content
        if type is not None:
            self.type = type

    @property
    def content(self):
        """Gets the content of this PoliciesWafConfiguration.  # noqa: E501

        The content which will be used for configuring the ModSecurity  engine.   # noqa: E501

        :return: The content of this PoliciesWafConfiguration.  # noqa: E501
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this PoliciesWafConfiguration.

        The content which will be used for configuring the ModSecurity  engine.   # noqa: E501

        :param content: The content of this PoliciesWafConfiguration.  # noqa: E501
        :type: str
        """

        self._content = content

    @property
    def type(self):
        """Gets the type of this PoliciesWafConfiguration.  # noqa: E501

        The type of content which is being supplied.  Either a zip  file or a directory name.   # noqa: E501

        :return: The type of this PoliciesWafConfiguration.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this PoliciesWafConfiguration.

        The type of content which is being supplied.  Either a zip  file or a directory name.   # noqa: E501

        :param type: The type of this PoliciesWafConfiguration.  # noqa: E501
        :type: str
        """
        allowed_values = ["zip", "path"]  # noqa: E501
        if type not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

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
        if not isinstance(other, PoliciesWafConfiguration):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesWafConfiguration):
            return True

        return self.to_dict() != other.to_dict()
