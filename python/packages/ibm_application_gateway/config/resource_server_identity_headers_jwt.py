# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 25.03
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerIdentityHeadersJwt(object):
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
        'certificate': 'list[str]',
        'hdr_name': 'str',
        'claims': 'list[ResourceServerIdentityHeadersJwtClaims]'
    }

    attribute_map = {
        'certificate': 'certificate',
        'hdr_name': 'hdr_name',
        'claims': 'claims'
    }

    def __init__(self, certificate=None, hdr_name='jwt', claims=None):  # noqa: E501
        """ResourceServerIdentityHeadersJwt - a model defined in OpenAPI"""  # noqa: E501

        self._certificate = None
        self._hdr_name = None
        self._claims = None
        self.discriminator = None

        if certificate is not None:
            self.certificate = certificate
        if hdr_name is not None:
            self.hdr_name = hdr_name
        if claims is not None:
            self.claims = claims

    @property
    def certificate(self):
        """Gets the certificate of this ResourceServerIdentityHeadersJwt.  # noqa: E501

        PEM based personal certificate files which will be used to sign the JWT.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).   # noqa: E501

        :return: The certificate of this ResourceServerIdentityHeadersJwt.  # noqa: E501
        :rtype: list[str]
        """
        return self._certificate

    @certificate.setter
    def certificate(self, certificate):
        """Sets the certificate of this ResourceServerIdentityHeadersJwt.

        PEM based personal certificate files which will be used to sign the JWT.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).   # noqa: E501

        :param certificate: The certificate of this ResourceServerIdentityHeadersJwt.  # noqa: E501
        :type: list[str]
        """

        self._certificate = certificate

    @property
    def hdr_name(self):
        """Gets the hdr_name of this ResourceServerIdentityHeadersJwt.  # noqa: E501

        The name of the HTTP header which will contain the generated JWT.   # noqa: E501

        :return: The hdr_name of this ResourceServerIdentityHeadersJwt.  # noqa: E501
        :rtype: str
        """
        return self._hdr_name

    @hdr_name.setter
    def hdr_name(self, hdr_name):
        """Sets the hdr_name of this ResourceServerIdentityHeadersJwt.

        The name of the HTTP header which will contain the generated JWT.   # noqa: E501

        :param hdr_name: The hdr_name of this ResourceServerIdentityHeadersJwt.  # noqa: E501
        :type: str
        """

        self._hdr_name = hdr_name

    @property
    def claims(self):
        """Gets the claims of this ResourceServerIdentityHeadersJwt.  # noqa: E501

        The claims which are to be added to the JWT.  The claim can either be obtained from a literal string, or from the value of a credential attribute.   # noqa: E501

        :return: The claims of this ResourceServerIdentityHeadersJwt.  # noqa: E501
        :rtype: list[ResourceServerIdentityHeadersJwtClaims]
        """
        return self._claims

    @claims.setter
    def claims(self, claims):
        """Sets the claims of this ResourceServerIdentityHeadersJwt.

        The claims which are to be added to the JWT.  The claim can either be obtained from a literal string, or from the value of a credential attribute.   # noqa: E501

        :param claims: The claims of this ResourceServerIdentityHeadersJwt.  # noqa: E501
        :type: list[ResourceServerIdentityHeadersJwtClaims]
        """

        self._claims = claims

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
        if not isinstance(other, ResourceServerIdentityHeadersJwt):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersJwt):
            return True

        return self.to_dict() != other.to_dict()
