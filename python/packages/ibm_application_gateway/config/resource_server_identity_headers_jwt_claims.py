# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 22.07
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerIdentityHeadersJwtClaims(object):
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
        'name': 'str',
        'text': 'OneOfstringarray',
        'type': 'str',
        'attr': 'str'
    }

    attribute_map = {
        'name': 'name',
        'text': 'text',
        'type': 'type',
        'attr': 'attr'
    }

    def __init__(self, name=None, text=None, type='string', attr=None):  # noqa: E501
        """ResourceServerIdentityHeadersJwtClaims - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._text = None
        self._type = None
        self._attr = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if text is not None:
            self.text = text
        if type is not None:
            self.type = type
        if attr is not None:
            self.attr = attr

    @property
    def name(self):
        """Gets the name of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501

        The name of the claim which is to be added to the JWT. If the name is not specified, and the claim value is obtained from an attribute name, the name of the claim will match the name of the attribute.   Nested objects can be specified, separating the name of each object field with a . (dot).  If the name of a field itself embeds a dot it should be escaped with a backslash character.   # noqa: E501

        :return: The name of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ResourceServerIdentityHeadersJwtClaims.

        The name of the claim which is to be added to the JWT. If the name is not specified, and the claim value is obtained from an attribute name, the name of the claim will match the name of the attribute.   Nested objects can be specified, separating the name of each object field with a . (dot).  If the name of a field itself embeds a dot it should be escaped with a backslash character.   # noqa: E501

        :param name: The name of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def text(self):
        """Gets the text of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501

        The literal text to be used as the claim value.  If both a `text` value and an `attr` value is specified the `text` value will be used.  If an array is supplied in the configuration the claim will be added to the JWT as a JSON array.   # noqa: E501

        :return: The text of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :rtype: OneOfstringarray
        """
        return self._text

    @text.setter
    def text(self, text):
        """Sets the text of this ResourceServerIdentityHeadersJwtClaims.

        The literal text to be used as the claim value.  If both a `text` value and an `attr` value is specified the `text` value will be used.  If an array is supplied in the configuration the claim will be added to the JWT as a JSON array.   # noqa: E501

        :param text: The text of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :type: OneOfstringarray
        """

        self._text = text

    @property
    def type(self):
        """Gets the type of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501

        The type of textual data which is being provided.  This will control the JSON type which is used in the JWT. Please note that this field is only valid if a `text` value has been specified and will be ignored if an `attr` value is specified.   # noqa: E501

        :return: The type of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this ResourceServerIdentityHeadersJwtClaims.

        The type of textual data which is being provided.  This will control the JSON type which is used in the JWT. Please note that this field is only valid if a `text` value has been specified and will be ignored if an `attr` value is specified.   # noqa: E501

        :param type: The type of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :type: str
        """
        allowed_values = ["string", "bool", "int"]  # noqa: E501
        if type not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

    @property
    def attr(self):
        """Gets the attr of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501

        The name of the credential attribute from which the claim value will be obtained.  The `*` and `?` pattern matching characters can be used to match multiple attributes, however the pattern matching characters will be ignored if a claim `name` is specified.  If both a `text` value and an `attr` value is specified the `text` value will be used.   # noqa: E501

        :return: The attr of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :rtype: str
        """
        return self._attr

    @attr.setter
    def attr(self, attr):
        """Sets the attr of this ResourceServerIdentityHeadersJwtClaims.

        The name of the credential attribute from which the claim value will be obtained.  The `*` and `?` pattern matching characters can be used to match multiple attributes, however the pattern matching characters will be ignored if a claim `name` is specified.  If both a `text` value and an `attr` value is specified the `text` value will be used.   # noqa: E501

        :param attr: The attr of this ResourceServerIdentityHeadersJwtClaims.  # noqa: E501
        :type: str
        """

        self._attr = attr

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
        if not isinstance(other, ResourceServerIdentityHeadersJwtClaims):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersJwtClaims):
            return True

        return self.to_dict() != other.to_dict()
