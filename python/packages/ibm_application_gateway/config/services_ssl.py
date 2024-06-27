# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.06
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServicesSsl(object):
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
        'server_dn': 'str',
        'sni': 'str'
    }

    attribute_map = {
        'certificate': 'certificate',
        'server_dn': 'server_dn',
        'sni': 'sni'
    }

    def __init__(self, certificate=None, server_dn=None, sni=None):  # noqa: E501
        """ServicesSsl - a model defined in OpenAPI"""  # noqa: E501

        self._certificate = None
        self._server_dn = None
        self._sni = None
        self.discriminator = None

        if certificate is not None:
            self.certificate = certificate
        if server_dn is not None:
            self.server_dn = server_dn
        if sni is not None:
            self.sni = sni

    @property
    def certificate(self):
        """Gets the certificate of this ServicesSsl.  # noqa: E501

        PEM based personal certificate files which will be used when communicating with the resource server.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).   # noqa: E501

        :return: The certificate of this ServicesSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._certificate

    @certificate.setter
    def certificate(self, certificate):
        """Sets the certificate of this ServicesSsl.

        PEM based personal certificate files which will be used when communicating with the resource server.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).   # noqa: E501

        :param certificate: The certificate of this ServicesSsl.  # noqa: E501
        :type: list[str]
        """

        self._certificate = certificate

    @property
    def server_dn(self):
        """Gets the server_dn of this ServicesSsl.  # noqa: E501

        Specifies the accepted DN of the certificate presented by the credential service. If this entry is empty, any DN will be accepted.   # noqa: E501

        :return: The server_dn of this ServicesSsl.  # noqa: E501
        :rtype: str
        """
        return self._server_dn

    @server_dn.setter
    def server_dn(self, server_dn):
        """Sets the server_dn of this ServicesSsl.

        Specifies the accepted DN of the certificate presented by the credential service. If this entry is empty, any DN will be accepted.   # noqa: E501

        :param server_dn: The server_dn of this ServicesSsl.  # noqa: E501
        :type: str
        """

        self._server_dn = server_dn

    @property
    def sni(self):
        """Gets the sni of this ServicesSsl.  # noqa: E501

        The server name (SNI) which will be indicated when establishing a connection to the credential service. If this entry is empty, no name will be indicated.   # noqa: E501

        :return: The sni of this ServicesSsl.  # noqa: E501
        :rtype: str
        """
        return self._sni

    @sni.setter
    def sni(self, sni):
        """Sets the sni of this ServicesSsl.

        The server name (SNI) which will be indicated when establishing a connection to the credential service. If this entry is empty, no name will be indicated.   # noqa: E501

        :param sni: The sni of this ServicesSsl.  # noqa: E501
        :type: str
        """

        self._sni = sni

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
        if not isinstance(other, ServicesSsl):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServicesSsl):
            return True

        return self.to_dict() != other.to_dict()
