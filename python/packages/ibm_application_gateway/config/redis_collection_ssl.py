# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class RedisCollectionSsl(object):
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
        'trust_certificates': 'list[str]',
        'client_certificate': 'list[str]',
        'sni': 'str'
    }

    attribute_map = {
        'trust_certificates': 'trust_certificates',
        'client_certificate': 'client_certificate',
        'sni': 'sni'
    }

    def __init__(self, trust_certificates=None, client_certificate=None, sni=None):  # noqa: E501
        """RedisCollectionSsl - a model defined in OpenAPI"""  # noqa: E501

        self._trust_certificates = None
        self._client_certificate = None
        self._sni = None
        self.discriminator = None

        if trust_certificates is not None:
            self.trust_certificates = trust_certificates
        if client_certificate is not None:
            self.client_certificate = client_certificate
        if sni is not None:
            self.sni = sni

    @property
    def trust_certificates(self):
        """Gets the trust_certificates of this RedisCollectionSsl.  # noqa: E501

        The PEM based certificates which are to be trusted when communicating with the Redis server.  The trusted certificates should include the CA certificate for the Redis server certificate, as well as any intermediate certificates used to sign the client certificate (if mutual authentication is in use).  SSL/TLS will not be used when communicating with the Redis server if no trust certificates are specified.   # noqa: E501

        :return: The trust_certificates of this RedisCollectionSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._trust_certificates

    @trust_certificates.setter
    def trust_certificates(self, trust_certificates):
        """Sets the trust_certificates of this RedisCollectionSsl.

        The PEM based certificates which are to be trusted when communicating with the Redis server.  The trusted certificates should include the CA certificate for the Redis server certificate, as well as any intermediate certificates used to sign the client certificate (if mutual authentication is in use).  SSL/TLS will not be used when communicating with the Redis server if no trust certificates are specified.   # noqa: E501

        :param trust_certificates: The trust_certificates of this RedisCollectionSsl.  # noqa: E501
        :type: list[str]
        """

        self._trust_certificates = trust_certificates

    @property
    def client_certificate(self):
        """Gets the client_certificate of this RedisCollectionSsl.  # noqa: E501

        The PEM based personal certificate files which will be used when performing mutual authentication with the resource server.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).   # noqa: E501

        :return: The client_certificate of this RedisCollectionSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._client_certificate

    @client_certificate.setter
    def client_certificate(self, client_certificate):
        """Sets the client_certificate of this RedisCollectionSsl.

        The PEM based personal certificate files which will be used when performing mutual authentication with the resource server.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).   # noqa: E501

        :param client_certificate: The client_certificate of this RedisCollectionSsl.  # noqa: E501
        :type: list[str]
        """

        self._client_certificate = client_certificate

    @property
    def sni(self):
        """Gets the sni of this RedisCollectionSsl.  # noqa: E501

        The Server Name Indication (SNI) value which is provided when establishing the SSL connection with the Redis server.   # noqa: E501

        :return: The sni of this RedisCollectionSsl.  # noqa: E501
        :rtype: str
        """
        return self._sni

    @sni.setter
    def sni(self, sni):
        """Sets the sni of this RedisCollectionSsl.

        The Server Name Indication (SNI) value which is provided when establishing the SSL connection with the Redis server.   # noqa: E501

        :param sni: The sni of this RedisCollectionSsl.  # noqa: E501
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
        if not isinstance(other, RedisCollectionSsl):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RedisCollectionSsl):
            return True

        return self.to_dict() != other.to_dict()
