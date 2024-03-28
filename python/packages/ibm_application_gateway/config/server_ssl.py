# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.03
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerSsl(object):
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
        'front_end': 'ServerSslFrontEnd',
        'applications': 'ServerSslApplications',
        'ciphers': 'list[str]',
        'trust_certificates': 'list[str]'
    }

    attribute_map = {
        'front_end': 'front_end',
        'applications': 'applications',
        'ciphers': 'ciphers',
        'trust_certificates': 'trust_certificates'
    }

    def __init__(self, front_end=None, applications=None, ciphers=None, trust_certificates=None):  # noqa: E501
        """ServerSsl - a model defined in OpenAPI"""  # noqa: E501

        self._front_end = None
        self._applications = None
        self._ciphers = None
        self._trust_certificates = None
        self.discriminator = None

        if front_end is not None:
            self.front_end = front_end
        if applications is not None:
            self.applications = applications
        if ciphers is not None:
            self.ciphers = ciphers
        if trust_certificates is not None:
            self.trust_certificates = trust_certificates

    @property
    def front_end(self):
        """Gets the front_end of this ServerSsl.  # noqa: E501


        :return: The front_end of this ServerSsl.  # noqa: E501
        :rtype: ServerSslFrontEnd
        """
        return self._front_end

    @front_end.setter
    def front_end(self, front_end):
        """Sets the front_end of this ServerSsl.


        :param front_end: The front_end of this ServerSsl.  # noqa: E501
        :type: ServerSslFrontEnd
        """

        self._front_end = front_end

    @property
    def applications(self):
        """Gets the applications of this ServerSsl.  # noqa: E501


        :return: The applications of this ServerSsl.  # noqa: E501
        :rtype: ServerSslApplications
        """
        return self._applications

    @applications.setter
    def applications(self, applications):
        """Sets the applications of this ServerSsl.


        :param applications: The applications of this ServerSsl.  # noqa: E501
        :type: ServerSslApplications
        """

        self._applications = applications

    @property
    def ciphers(self):
        """Gets the ciphers of this ServerSsl.  # noqa: E501

        Specifies the ciphers and cipher suites which will be permitted for all secure communications.  The following tables show the list of available ciphers.  ### Supported Cipher Names  Name | ---- | TLS_DHE_PSK_WITH_AES_128_CCM_8 | TLS_DHE_PSK_WITH_AES_128_CCM | TLS_DHE_PSK_WITH_AES_256_CCM_8 | TLS_DHE_PSK_WITH_AES_256_CCM | TLS_DHE_RSA_WITH_AES_128_CCM_8 | TLS_DHE_RSA_WITH_AES_128_CCM | TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 | TLS_DHE_RSA_WITH_AES_256_CCM_8 | TLS_DHE_RSA_WITH_AES_256_CCM | TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 | TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA | TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 | TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA | TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 | TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 | TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 | TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA | TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | TLS_ECDHE_ECDSA_WITH_RC4_128_SHA | TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA | TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 | TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA | TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 | TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 | TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA | TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 | TLS_ECDHE_RSA_WITH_RC4_128_SHA | TLS_PSK_WITH_AES_128_CCM_8 | TLS_PSK_WITH_AES_128_CCM | TLS_PSK_WITH_AES_256_CCM_8 | TLS_PSK_WITH_AES_256_CCM | TLS_RSA_EXPORT1024_WITH_DES_CBC_SHA | TLS_RSA_EXPORT1024_WITH_RC4_56_SHA | TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5 | TLS_RSA_EXPORT_WITH_RC4_40_MD5 | TLS_RSA_WITH_3DES_EDE_CBC_SHA | TLS_RSA_WITH_AES_128_CBC_SHA256 | TLS_RSA_WITH_AES_128_CBC_SHA | TLS_RSA_WITH_AES_128_CCM_8 | TLS_RSA_WITH_AES_128_CCM | TLS_RSA_WITH_AES_128_GCM_SHA256 | TLS_RSA_WITH_AES_256_CBC_SHA256 | TLS_RSA_WITH_AES_256_CBC_SHA | TLS_RSA_WITH_AES_256_CCM_8 | TLS_RSA_WITH_AES_256_CCM | TLS_RSA_WITH_AES_256_GCM_SHA384 | TLS_RSA_WITH_DES_CBC_SHA | TLS_RSA_WITH_NULL_MD5 | TLS_RSA_WITH_NULL_NULL | TLS_RSA_WITH_NULL_SHA | TLS_RSA_WITH_RC4_128_MD5 | TLS_RSA_WITH_RC4_128_SHA | TLS_RSA_WITH_NULL_SHA256 | TLS_ECDHE_ECDSA_WITH_NULL_SHA | TLS_ECDHE_RSA_WITH_NULL_SHA |  ### Supported TLSv1.3 Cipher Names  Name | ---- | TLS_AES_128_GCM_SHA256 | TLS_AES_256_GCM_SHA384 | TLS_CHACHA20_POLY1305_SHA256 | TLS_AES_128_CCM_SHA256 | TLS_AES_128_CCM_8_SHA256 |   # noqa: E501

        :return: The ciphers of this ServerSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._ciphers

    @ciphers.setter
    def ciphers(self, ciphers):
        """Sets the ciphers of this ServerSsl.

        Specifies the ciphers and cipher suites which will be permitted for all secure communications.  The following tables show the list of available ciphers.  ### Supported Cipher Names  Name | ---- | TLS_DHE_PSK_WITH_AES_128_CCM_8 | TLS_DHE_PSK_WITH_AES_128_CCM | TLS_DHE_PSK_WITH_AES_256_CCM_8 | TLS_DHE_PSK_WITH_AES_256_CCM | TLS_DHE_RSA_WITH_AES_128_CCM_8 | TLS_DHE_RSA_WITH_AES_128_CCM | TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 | TLS_DHE_RSA_WITH_AES_256_CCM_8 | TLS_DHE_RSA_WITH_AES_256_CCM | TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 | TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA | TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 | TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA | TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 | TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 | TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 | TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA | TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | TLS_ECDHE_ECDSA_WITH_RC4_128_SHA | TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA | TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 | TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA | TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 | TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 | TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA | TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 | TLS_ECDHE_RSA_WITH_RC4_128_SHA | TLS_PSK_WITH_AES_128_CCM_8 | TLS_PSK_WITH_AES_128_CCM | TLS_PSK_WITH_AES_256_CCM_8 | TLS_PSK_WITH_AES_256_CCM | TLS_RSA_EXPORT1024_WITH_DES_CBC_SHA | TLS_RSA_EXPORT1024_WITH_RC4_56_SHA | TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5 | TLS_RSA_EXPORT_WITH_RC4_40_MD5 | TLS_RSA_WITH_3DES_EDE_CBC_SHA | TLS_RSA_WITH_AES_128_CBC_SHA256 | TLS_RSA_WITH_AES_128_CBC_SHA | TLS_RSA_WITH_AES_128_CCM_8 | TLS_RSA_WITH_AES_128_CCM | TLS_RSA_WITH_AES_128_GCM_SHA256 | TLS_RSA_WITH_AES_256_CBC_SHA256 | TLS_RSA_WITH_AES_256_CBC_SHA | TLS_RSA_WITH_AES_256_CCM_8 | TLS_RSA_WITH_AES_256_CCM | TLS_RSA_WITH_AES_256_GCM_SHA384 | TLS_RSA_WITH_DES_CBC_SHA | TLS_RSA_WITH_NULL_MD5 | TLS_RSA_WITH_NULL_NULL | TLS_RSA_WITH_NULL_SHA | TLS_RSA_WITH_RC4_128_MD5 | TLS_RSA_WITH_RC4_128_SHA | TLS_RSA_WITH_NULL_SHA256 | TLS_ECDHE_ECDSA_WITH_NULL_SHA | TLS_ECDHE_RSA_WITH_NULL_SHA |  ### Supported TLSv1.3 Cipher Names  Name | ---- | TLS_AES_128_GCM_SHA256 | TLS_AES_256_GCM_SHA384 | TLS_CHACHA20_POLY1305_SHA256 | TLS_AES_128_CCM_SHA256 | TLS_AES_128_CCM_8_SHA256 |   # noqa: E501

        :param ciphers: The ciphers of this ServerSsl.  # noqa: E501
        :type: list[str]
        """

        self._ciphers = ciphers

    @property
    def trust_certificates(self):
        """Gets the trust_certificates of this ServerSsl.  # noqa: E501

        PEM based signer certificates or signer certificate chains which  should be added to IAG's trust store. These can be signer  certificates which are required for secure communication with  resource servers or external services.   # noqa: E501

        :return: The trust_certificates of this ServerSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._trust_certificates

    @trust_certificates.setter
    def trust_certificates(self, trust_certificates):
        """Sets the trust_certificates of this ServerSsl.

        PEM based signer certificates or signer certificate chains which  should be added to IAG's trust store. These can be signer  certificates which are required for secure communication with  resource servers or external services.   # noqa: E501

        :param trust_certificates: The trust_certificates of this ServerSsl.  # noqa: E501
        :type: list[str]
        """

        self._trust_certificates = trust_certificates

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
        if not isinstance(other, ServerSsl):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerSsl):
            return True

        return self.to_dict() != other.to_dict()
