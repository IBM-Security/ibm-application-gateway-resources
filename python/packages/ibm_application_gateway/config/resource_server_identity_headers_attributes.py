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

class ResourceServerIdentityHeadersAttributes(object):
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
        'attribute': 'str',
        'header': 'str'
    }

    attribute_map = {
        'attribute': 'attribute',
        'header': 'header'
    }

    def __init__(self, attribute=None, header=None):  # noqa: E501
        """ResourceServerIdentityHeadersAttributes - a model defined in OpenAPI"""  # noqa: E501

        self._attribute = None
        self._header = None
        self.discriminator = None

        if attribute is not None:
            self.attribute = attribute
        if header is not None:
            self.header = header

    @property
    def attribute(self):
        """Gets the attribute of this ResourceServerIdentityHeadersAttributes.  # noqa: E501

        The name of the credential attribute.  # noqa: E501

        :return: The attribute of this ResourceServerIdentityHeadersAttributes.  # noqa: E501
        :rtype: str
        """
        return self._attribute

    @attribute.setter
    def attribute(self, attribute):
        """Sets the attribute of this ResourceServerIdentityHeadersAttributes.

        The name of the credential attribute.  # noqa: E501

        :param attribute: The attribute of this ResourceServerIdentityHeadersAttributes.  # noqa: E501
        :type: str
        """

        self._attribute = attribute

    @property
    def header(self):
        """Gets the header of this ResourceServerIdentityHeadersAttributes.  # noqa: E501

        The name of the HTTP header which will contain the credential attribute. If no name is supplied the name of the credential attribute itself will be used.   # noqa: E501

        :return: The header of this ResourceServerIdentityHeadersAttributes.  # noqa: E501
        :rtype: str
        """
        return self._header

    @header.setter
    def header(self, header):
        """Sets the header of this ResourceServerIdentityHeadersAttributes.

        The name of the HTTP header which will contain the credential attribute. If no name is supplied the name of the credential attribute itself will be used.   # noqa: E501

        :param header: The header of this ResourceServerIdentityHeadersAttributes.  # noqa: E501
        :type: str
        """

        self._header = header

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
        if not isinstance(other, ResourceServerIdentityHeadersAttributes):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersAttributes):
            return True

        return self.to_dict() != other.to_dict()
