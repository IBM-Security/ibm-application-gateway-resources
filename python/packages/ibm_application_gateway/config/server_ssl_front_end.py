# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.02
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerSslFrontEnd(object):
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
        'tlsv10': 'bool',
        'tlsv11': 'bool',
        'tlsv12': 'bool',
        'tlsv13': 'bool',
        'sni': 'list[ServerSslFrontEndSni]'
    }

    attribute_map = {
        'certificate': 'certificate',
        'tlsv10': 'tlsv10',
        'tlsv11': 'tlsv11',
        'tlsv12': 'tlsv12',
        'tlsv13': 'tlsv13',
        'sni': 'sni'
    }

    def __init__(self, certificate=None, tlsv10=False, tlsv11=False, tlsv12=True, tlsv13=False, sni=None):  # noqa: E501
        """ServerSslFrontEnd - a model defined in OpenAPI"""  # noqa: E501

        self._certificate = None
        self._tlsv10 = None
        self._tlsv11 = None
        self._tlsv12 = None
        self._tlsv13 = None
        self._sni = None
        self.discriminator = None

        if certificate is not None:
            self.certificate = certificate
        if tlsv10 is not None:
            self.tlsv10 = tlsv10
        if tlsv11 is not None:
            self.tlsv11 = tlsv11
        if tlsv12 is not None:
            self.tlsv12 = tlsv12
        if tlsv13 is not None:
            self.tlsv13 = tlsv13
        if sni is not None:
            self.sni = sni

    @property
    def certificate(self):
        """Gets the certificate of this ServerSslFrontEnd.  # noqa: E501

        PEM based personal certificate files which will be used when communicating with the client.  These certificate files should include the private key, a certificate signed with the  private key, and the signer certificate or signer certificate  chain (if required). If a certificate is not provided, the gateway will generate  a self-signed certificate during bootstrapping.   # noqa: E501

        :return: The certificate of this ServerSslFrontEnd.  # noqa: E501
        :rtype: list[str]
        """
        return self._certificate

    @certificate.setter
    def certificate(self, certificate):
        """Sets the certificate of this ServerSslFrontEnd.

        PEM based personal certificate files which will be used when communicating with the client.  These certificate files should include the private key, a certificate signed with the  private key, and the signer certificate or signer certificate  chain (if required). If a certificate is not provided, the gateway will generate  a self-signed certificate during bootstrapping.   # noqa: E501

        :param certificate: The certificate of this ServerSslFrontEnd.  # noqa: E501
        :type: list[str]
        """

        self._certificate = certificate

    @property
    def tlsv10(self):
        """Gets the tlsv10 of this ServerSslFrontEnd.  # noqa: E501

        A boolean which indicates whether or not TLS v1.0 is enabled.   # noqa: E501

        :return: The tlsv10 of this ServerSslFrontEnd.  # noqa: E501
        :rtype: bool
        """
        return self._tlsv10

    @tlsv10.setter
    def tlsv10(self, tlsv10):
        """Sets the tlsv10 of this ServerSslFrontEnd.

        A boolean which indicates whether or not TLS v1.0 is enabled.   # noqa: E501

        :param tlsv10: The tlsv10 of this ServerSslFrontEnd.  # noqa: E501
        :type: bool
        """

        self._tlsv10 = tlsv10

    @property
    def tlsv11(self):
        """Gets the tlsv11 of this ServerSslFrontEnd.  # noqa: E501

        A boolean which indicates whether or not TLS v1.1 is enabled.   # noqa: E501

        :return: The tlsv11 of this ServerSslFrontEnd.  # noqa: E501
        :rtype: bool
        """
        return self._tlsv11

    @tlsv11.setter
    def tlsv11(self, tlsv11):
        """Sets the tlsv11 of this ServerSslFrontEnd.

        A boolean which indicates whether or not TLS v1.1 is enabled.   # noqa: E501

        :param tlsv11: The tlsv11 of this ServerSslFrontEnd.  # noqa: E501
        :type: bool
        """

        self._tlsv11 = tlsv11

    @property
    def tlsv12(self):
        """Gets the tlsv12 of this ServerSslFrontEnd.  # noqa: E501

        A boolean which indicates whether or not TLS v1.2 is enabled.   # noqa: E501

        :return: The tlsv12 of this ServerSslFrontEnd.  # noqa: E501
        :rtype: bool
        """
        return self._tlsv12

    @tlsv12.setter
    def tlsv12(self, tlsv12):
        """Sets the tlsv12 of this ServerSslFrontEnd.

        A boolean which indicates whether or not TLS v1.2 is enabled.   # noqa: E501

        :param tlsv12: The tlsv12 of this ServerSslFrontEnd.  # noqa: E501
        :type: bool
        """

        self._tlsv12 = tlsv12

    @property
    def tlsv13(self):
        """Gets the tlsv13 of this ServerSslFrontEnd.  # noqa: E501

        A boolean which indicates whether or not TLS v1.3 is enabled.   # noqa: E501

        :return: The tlsv13 of this ServerSslFrontEnd.  # noqa: E501
        :rtype: bool
        """
        return self._tlsv13

    @tlsv13.setter
    def tlsv13(self, tlsv13):
        """Sets the tlsv13 of this ServerSslFrontEnd.

        A boolean which indicates whether or not TLS v1.3 is enabled.   # noqa: E501

        :param tlsv13: The tlsv13 of this ServerSslFrontEnd.  # noqa: E501
        :type: bool
        """

        self._tlsv13 = tlsv13

    @property
    def sni(self):
        """Gets the sni of this ServerSslFrontEnd.  # noqa: E501

        Specifies a list of SNI certificate to hostname mappings for the front end.   # noqa: E501

        :return: The sni of this ServerSslFrontEnd.  # noqa: E501
        :rtype: list[ServerSslFrontEndSni]
        """
        return self._sni

    @sni.setter
    def sni(self, sni):
        """Sets the sni of this ServerSslFrontEnd.

        Specifies a list of SNI certificate to hostname mappings for the front end.   # noqa: E501

        :param sni: The sni of this ServerSslFrontEnd.  # noqa: E501
        :type: list[ServerSslFrontEndSni]
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
        if not isinstance(other, ServerSslFrontEnd):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerSslFrontEnd):
            return True

        return self.to_dict() != other.to_dict()
