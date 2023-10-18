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

class OidcSsl(object):
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
        'certificate': 'list[str]'
    }

    attribute_map = {
        'certificate': 'certificate'
    }

    def __init__(self, certificate=None):  # noqa: E501
        """OidcSsl - a model defined in OpenAPI"""  # noqa: E501

        self._certificate = None
        self.discriminator = None

        if certificate is not None:
            self.certificate = certificate

    @property
    def certificate(self):
        """Gets the certificate of this OidcSsl.  # noqa: E501

        If required, any signer certificates required for the reverse proxy to trust the identity provider can be specified here in PEM format.   # noqa: E501

        :return: The certificate of this OidcSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._certificate

    @certificate.setter
    def certificate(self, certificate):
        """Sets the certificate of this OidcSsl.

        If required, any signer certificates required for the reverse proxy to trust the identity provider can be specified here in PEM format.   # noqa: E501

        :param certificate: The certificate of this OidcSsl.  # noqa: E501
        :type: list[str]
        """

        self._certificate = certificate

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
        if not isinstance(other, OidcSsl):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OidcSsl):
            return True

        return self.to_dict() != other.to_dict()
