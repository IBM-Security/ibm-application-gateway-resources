# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 23.10
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class IdentityAuthCompleteRedirectParameters(object):
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
        'source': 'str',
        'value': 'str',
        'name': 'str'
    }

    attribute_map = {
        'source': 'source',
        'value': 'value',
        'name': 'name'
    }

    def __init__(self, source=None, value=None, name=None):  # noqa: E501
        """IdentityAuthCompleteRedirectParameters - a model defined in OpenAPI"""  # noqa: E501

        self._source = None
        self._value = None
        self._name = None
        self.discriminator = None

        if source is not None:
            self.source = source
        if value is not None:
            self.value = value
        if name is not None:
            self.name = name

    @property
    def source(self):
        """Gets the source of this IdentityAuthCompleteRedirectParameters.  # noqa: E501

        The source the value should be taken from.   # noqa: E501

        :return: The source of this IdentityAuthCompleteRedirectParameters.  # noqa: E501
        :rtype: str
        """
        return self._source

    @source.setter
    def source(self, source):
        """Sets the source of this IdentityAuthCompleteRedirectParameters.

        The source the value should be taken from.   # noqa: E501

        :param source: The source of this IdentityAuthCompleteRedirectParameters.  # noqa: E501
        :type: str
        """
        allowed_values = ["macro", "header", "credential"]  # noqa: E501
        if source not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `source` ({0}), must be one of {1}"  # noqa: E501
                .format(source, allowed_values)
            )

        self._source = source

    @property
    def value(self):
        """Gets the value of this IdentityAuthCompleteRedirectParameters.  # noqa: E501

        The name of the macro, HTTP header or credential attribute the value will be taken from. When using the `macro` type source, valid values are:    - `USERNAME`   - `URL`   - `HOSTNAME`   - `PROTOCOL`   # noqa: E501

        :return: The value of this IdentityAuthCompleteRedirectParameters.  # noqa: E501
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this IdentityAuthCompleteRedirectParameters.

        The name of the macro, HTTP header or credential attribute the value will be taken from. When using the `macro` type source, valid values are:    - `USERNAME`   - `URL`   - `HOSTNAME`   - `PROTOCOL`   # noqa: E501

        :param value: The value of this IdentityAuthCompleteRedirectParameters.  # noqa: E501
        :type: str
        """

        self._value = value

    @property
    def name(self):
        """Gets the name of this IdentityAuthCompleteRedirectParameters.  # noqa: E501

        The name which should be used to name the parameter inserted into the redirect URL. If this value is not specified, the parameter will be named accordingly:    - For `macro` sources, the name will be used verbatim.   - For `header` sources, the name will be of the format `HTTPHDR_<name>`   - For `credential` sources, the name will be of the format `CREDATTR_<name>`   # noqa: E501

        :return: The name of this IdentityAuthCompleteRedirectParameters.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this IdentityAuthCompleteRedirectParameters.

        The name which should be used to name the parameter inserted into the redirect URL. If this value is not specified, the parameter will be named accordingly:    - For `macro` sources, the name will be used verbatim.   - For `header` sources, the name will be of the format `HTTPHDR_<name>`   - For `credential` sources, the name will be of the format `CREDATTR_<name>`   # noqa: E501

        :param name: The name of this IdentityAuthCompleteRedirectParameters.  # noqa: E501
        :type: str
        """

        self._name = name

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
        if not isinstance(other, IdentityAuthCompleteRedirectParameters):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, IdentityAuthCompleteRedirectParameters):
            return True

        return self.to_dict() != other.to_dict()
