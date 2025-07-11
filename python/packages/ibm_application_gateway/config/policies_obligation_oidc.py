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

class PoliciesObligationOidc(object):
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
        'acr_values': 'str',
        'prompt': 'str',
        'max_age': 'float'
    }

    attribute_map = {
        'acr_values': 'acr_values',
        'prompt': 'prompt',
        'max_age': 'max_age'
    }

    def __init__(self, acr_values=None, prompt=None, max_age=None):  # noqa: E501
        """PoliciesObligationOidc - a model defined in OpenAPI"""  # noqa: E501

        self._acr_values = None
        self._prompt = None
        self._max_age = None
        self.discriminator = None

        if acr_values is not None:
            self.acr_values = acr_values
        if prompt is not None:
            self.prompt = prompt
        if max_age is not None:
            self.max_age = max_age

    @property
    def acr_values(self):
        """Gets the acr_values of this PoliciesObligationOidc.  # noqa: E501

        A string of ACR (Authentication Context Class References) to pass to the identity provider. Refer to \"acr_values\" in section 3.1.2 of the OpenID Connect Core specification for further information. Valid ACRs are defined by the identity provider. Refer to your identity provider for further information about the ACRs which it supports.   # noqa: E501

        :return: The acr_values of this PoliciesObligationOidc.  # noqa: E501
        :rtype: str
        """
        return self._acr_values

    @acr_values.setter
    def acr_values(self, acr_values):
        """Sets the acr_values of this PoliciesObligationOidc.

        A string of ACR (Authentication Context Class References) to pass to the identity provider. Refer to \"acr_values\" in section 3.1.2 of the OpenID Connect Core specification for further information. Valid ACRs are defined by the identity provider. Refer to your identity provider for further information about the ACRs which it supports.   # noqa: E501

        :param acr_values: The acr_values of this PoliciesObligationOidc.  # noqa: E501
        :type: str
        """

        self._acr_values = acr_values

    @property
    def prompt(self):
        """Gets the prompt of this PoliciesObligationOidc.  # noqa: E501

        A string of prompt options to pass to the identity provider. Refer to \"prompt\" in section 3.1.2 of the OpenID Connect Core specification for further information. Prompt options are optional and may not be supported by all identity providers. Refer to your identity provider for further information about support prompt values.   # noqa: E501

        :return: The prompt of this PoliciesObligationOidc.  # noqa: E501
        :rtype: str
        """
        return self._prompt

    @prompt.setter
    def prompt(self, prompt):
        """Sets the prompt of this PoliciesObligationOidc.

        A string of prompt options to pass to the identity provider. Refer to \"prompt\" in section 3.1.2 of the OpenID Connect Core specification for further information. Prompt options are optional and may not be supported by all identity providers. Refer to your identity provider for further information about support prompt values.   # noqa: E501

        :param prompt: The prompt of this PoliciesObligationOidc.  # noqa: E501
        :type: str
        """

        self._prompt = prompt

    @property
    def max_age(self):
        """Gets the max_age of this PoliciesObligationOidc.  # noqa: E501

        The maximum age of the authentication. Refer to  \"max_age\" in section 3.1.2 of the OpenID Connect Core  specification for further information. Setting this to '0' indicates to the provider that the user should re-authenticate immediately. This  parameter also forces the provider to include the auth_time parameter in the returned id token, which is used by IAG to determine when the user last performed a re-authentication.   # noqa: E501

        :return: The max_age of this PoliciesObligationOidc.  # noqa: E501
        :rtype: float
        """
        return self._max_age

    @max_age.setter
    def max_age(self, max_age):
        """Sets the max_age of this PoliciesObligationOidc.

        The maximum age of the authentication. Refer to  \"max_age\" in section 3.1.2 of the OpenID Connect Core  specification for further information. Setting this to '0' indicates to the provider that the user should re-authenticate immediately. This  parameter also forces the provider to include the auth_time parameter in the returned id token, which is used by IAG to determine when the user last performed a re-authentication.   # noqa: E501

        :param max_age: The max_age of this PoliciesObligationOidc.  # noqa: E501
        :type: float
        """

        self._max_age = max_age

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
        if not isinstance(other, PoliciesObligationOidc):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesObligationOidc):
            return True

        return self.to_dict() != other.to_dict()
