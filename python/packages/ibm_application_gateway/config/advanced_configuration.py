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

class AdvancedConfiguration(object):
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
        'stanza': 'str',
        'entry': 'str',
        'operation': 'str',
        'value': 'list[str]'
    }

    attribute_map = {
        'stanza': 'stanza',
        'entry': 'entry',
        'operation': 'operation',
        'value': 'value'
    }

    def __init__(self, stanza=None, entry=None, operation=None, value=None):  # noqa: E501
        """AdvancedConfiguration - a model defined in OpenAPI"""  # noqa: E501

        self._stanza = None
        self._entry = None
        self._operation = None
        self._value = None
        self.discriminator = None

        if stanza is not None:
            self.stanza = stanza
        if entry is not None:
            self.entry = entry
        if operation is not None:
            self.operation = operation
        if value is not None:
            self.value = value

    @property
    def stanza(self):
        """Gets the stanza of this AdvancedConfiguration.  # noqa: E501

        The name of the configuration stanza which contains the configuration entry.   # noqa: E501

        :return: The stanza of this AdvancedConfiguration.  # noqa: E501
        :rtype: str
        """
        return self._stanza

    @stanza.setter
    def stanza(self, stanza):
        """Sets the stanza of this AdvancedConfiguration.

        The name of the configuration stanza which contains the configuration entry.   # noqa: E501

        :param stanza: The stanza of this AdvancedConfiguration.  # noqa: E501
        :type: str
        """

        self._stanza = stanza

    @property
    def entry(self):
        """Gets the entry of this AdvancedConfiguration.  # noqa: E501

        The name of the configuration entry.   # noqa: E501

        :return: The entry of this AdvancedConfiguration.  # noqa: E501
        :rtype: str
        """
        return self._entry

    @entry.setter
    def entry(self, entry):
        """Sets the entry of this AdvancedConfiguration.

        The name of the configuration entry.   # noqa: E501

        :param entry: The entry of this AdvancedConfiguration.  # noqa: E501
        :type: str
        """

        self._entry = entry

    @property
    def operation(self):
        """Gets the operation of this AdvancedConfiguration.  # noqa: E501

        The operation to be perform on the configuration entry.   # noqa: E501

        :return: The operation of this AdvancedConfiguration.  # noqa: E501
        :rtype: str
        """
        return self._operation

    @operation.setter
    def operation(self, operation):
        """Sets the operation of this AdvancedConfiguration.

        The operation to be perform on the configuration entry.   # noqa: E501

        :param operation: The operation of this AdvancedConfiguration.  # noqa: E501
        :type: str
        """
        allowed_values = ["delete", "add", "set"]  # noqa: E501
        if operation not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `operation` ({0}), must be one of {1}"  # noqa: E501
                .format(operation, allowed_values)
            )

        self._operation = operation

    @property
    def value(self):
        """Gets the value of this AdvancedConfiguration.  # noqa: E501

        The value(s) for the new configuration entry. The value is only required for the `add` and `set` operations.  # noqa: E501

        :return: The value of this AdvancedConfiguration.  # noqa: E501
        :rtype: list[str]
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this AdvancedConfiguration.

        The value(s) for the new configuration entry. The value is only required for the `add` and `set` operations.  # noqa: E501

        :param value: The value of this AdvancedConfiguration.  # noqa: E501
        :type: list[str]
        """

        self._value = value

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
        if not isinstance(other, AdvancedConfiguration):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AdvancedConfiguration):
            return True

        return self.to_dict() != other.to_dict()
