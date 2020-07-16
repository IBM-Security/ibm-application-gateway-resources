# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.07
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class Identity(object):
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
        'ci_oidc': 'CiOidc',
        'oidc': 'Oidc'
    }

    attribute_map = {
        'ci_oidc': 'ci_oidc',
        'oidc': 'oidc'
    }

    def __init__(self, ci_oidc=None, oidc=None):  # noqa: E501
        """Identity - a model defined in OpenAPI"""  # noqa: E501

        self._ci_oidc = None
        self._oidc = None
        self.discriminator = None

        if ci_oidc is not None:
            self.ci_oidc = ci_oidc
        if oidc is not None:
            self.oidc = oidc

    @property
    def ci_oidc(self):
        """Gets the ci_oidc of this Identity.  # noqa: E501


        :return: The ci_oidc of this Identity.  # noqa: E501
        :rtype: CiOidc
        """
        return self._ci_oidc

    @ci_oidc.setter
    def ci_oidc(self, ci_oidc):
        """Sets the ci_oidc of this Identity.


        :param ci_oidc: The ci_oidc of this Identity.  # noqa: E501
        :type: CiOidc
        """

        self._ci_oidc = ci_oidc

    @property
    def oidc(self):
        """Gets the oidc of this Identity.  # noqa: E501


        :return: The oidc of this Identity.  # noqa: E501
        :rtype: Oidc
        """
        return self._oidc

    @oidc.setter
    def oidc(self, oidc):
        """Sets the oidc of this Identity.


        :param oidc: The oidc of this Identity.  # noqa: E501
        :type: Oidc
        """

        self._oidc = oidc

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
        if not isinstance(other, Identity):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Identity):
            return True

        return self.to_dict() != other.to_dict()
