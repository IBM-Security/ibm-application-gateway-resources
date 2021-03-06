# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.12
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
        'ciphers': 'list[str]'
    }

    attribute_map = {
        'front_end': 'front_end',
        'applications': 'applications',
        'ciphers': 'ciphers'
    }

    def __init__(self, front_end=None, applications=None, ciphers=None):  # noqa: E501
        """ServerSsl - a model defined in OpenAPI"""  # noqa: E501

        self._front_end = None
        self._applications = None
        self._ciphers = None
        self.discriminator = None

        if front_end is not None:
            self.front_end = front_end
        if applications is not None:
            self.applications = applications
        if ciphers is not None:
            self.ciphers = ciphers

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

        Specifies the ciphers and cipher suites which will be permitted for all secure communications. The following tables show the list of available ciphers.  ## Supported Cipher Names  Name | ---- | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_128\\_CCM | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_256\\_CCM | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_128\\_CCM | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_256\\_CCM | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_3DES\\_EDE\\_CBC\\_SHA | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_CBC\\_SHA256 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_CBC\\_SHA | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_256\\_CBC\\_SHA384 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_256\\_CBC\\_SHA | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_RC4\\_128\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_3DES\\_EDE\\_CBC\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA256 | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA384 | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_ECDHE\\_RSA\\_WITH\\_RC4\\_128\\_SHA | TLS\\_PSK\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_PSK\\_WITH\\_AES\\_128\\_CCM | TLS\\_PSK\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_PSK\\_WITH\\_AES\\_256\\_CCM | TLS\\_RSA\\_EXPORT1024\\_WITH\\_DES\\_CBC\\_SHA | TLS\\_RSA\\_EXPORT1024\\_WITH\\_RC4\\_56\\_SHA | TLS\\_RSA\\_EXPORT\\_WITH\\_RC2\\_CBC\\_40\\_MD5 | TLS\\_RSA\\_EXPORT\\_WITH\\_RC4\\_40\\_MD5 | TLS\\_RSA\\_WITH\\_3DES\\_EDE\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA256 | TLS\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_RSA\\_WITH\\_AES\\_128\\_CCM | TLS\\_RSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA256 | TLS\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_RSA\\_WITH\\_AES\\_256\\_CCM | TLS\\_RSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_RSA\\_WITH\\_DES\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_NULL\\_MD5 | TLS\\_RSA\\_WITH\\_NULL\\_NULL | TLS\\_RSA\\_WITH\\_NULL\\_SHA | TLS\\_RSA\\_WITH\\_RC4\\_128\\_MD5 | TLS\\_RSA\\_WITH\\_RC4\\_128\\_SHA | TLS\\_RSA\\_WITH\\_NULL\\_SHA256 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_NULL\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_NULL\\_SHA |  ## Supported TLSv1.3 Cipher Names  Name | ---- | TLS\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_CHACHA20\\_POLY1305\\_SHA256 | TLS\\_AES\\_128\\_CCM\\_SHA256 | TLS\\_AES\\_128\\_CCM\\_8\\_SHA256 |  Example: server:              ssl:                  ciphers:                      - TLS_PSK_WITH_AES_256_CCM                      - TLS_AES_128_CCM_8_SHA256   # noqa: E501

        :return: The ciphers of this ServerSsl.  # noqa: E501
        :rtype: list[str]
        """
        return self._ciphers

    @ciphers.setter
    def ciphers(self, ciphers):
        """Sets the ciphers of this ServerSsl.

        Specifies the ciphers and cipher suites which will be permitted for all secure communications. The following tables show the list of available ciphers.  ## Supported Cipher Names  Name | ---- | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_128\\_CCM | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_DHE\\_PSK\\_WITH\\_AES\\_256\\_CCM | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_128\\_CCM | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_256\\_CCM | TLS\\_DHE\\_RSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_3DES\\_EDE\\_CBC\\_SHA | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_CBC\\_SHA256 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_CBC\\_SHA | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_256\\_CBC\\_SHA384 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_256\\_CBC\\_SHA | TLS\\_ECDHE\\_ECDSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_RC4\\_128\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_3DES\\_EDE\\_CBC\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA256 | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA384 | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_ECDHE\\_RSA\\_WITH\\_RC4\\_128\\_SHA | TLS\\_PSK\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_PSK\\_WITH\\_AES\\_128\\_CCM | TLS\\_PSK\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_PSK\\_WITH\\_AES\\_256\\_CCM | TLS\\_RSA\\_EXPORT1024\\_WITH\\_DES\\_CBC\\_SHA | TLS\\_RSA\\_EXPORT1024\\_WITH\\_RC4\\_56\\_SHA | TLS\\_RSA\\_EXPORT\\_WITH\\_RC2\\_CBC\\_40\\_MD5 | TLS\\_RSA\\_EXPORT\\_WITH\\_RC4\\_40\\_MD5 | TLS\\_RSA\\_WITH\\_3DES\\_EDE\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA256 | TLS\\_RSA\\_WITH\\_AES\\_128\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_AES\\_128\\_CCM\\_8 | TLS\\_RSA\\_WITH\\_AES\\_128\\_CCM | TLS\\_RSA\\_WITH\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA256 | TLS\\_RSA\\_WITH\\_AES\\_256\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_AES\\_256\\_CCM\\_8 | TLS\\_RSA\\_WITH\\_AES\\_256\\_CCM | TLS\\_RSA\\_WITH\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_RSA\\_WITH\\_DES\\_CBC\\_SHA | TLS\\_RSA\\_WITH\\_NULL\\_MD5 | TLS\\_RSA\\_WITH\\_NULL\\_NULL | TLS\\_RSA\\_WITH\\_NULL\\_SHA | TLS\\_RSA\\_WITH\\_RC4\\_128\\_MD5 | TLS\\_RSA\\_WITH\\_RC4\\_128\\_SHA | TLS\\_RSA\\_WITH\\_NULL\\_SHA256 | TLS\\_ECDHE\\_ECDSA\\_WITH\\_NULL\\_SHA | TLS\\_ECDHE\\_RSA\\_WITH\\_NULL\\_SHA |  ## Supported TLSv1.3 Cipher Names  Name | ---- | TLS\\_AES\\_128\\_GCM\\_SHA256 | TLS\\_AES\\_256\\_GCM\\_SHA384 | TLS\\_CHACHA20\\_POLY1305\\_SHA256 | TLS\\_AES\\_128\\_CCM\\_SHA256 | TLS\\_AES\\_128\\_CCM\\_8\\_SHA256 |  Example: server:              ssl:                  ciphers:                      - TLS_PSK_WITH_AES_256_CCM                      - TLS_AES_128_CCM_8_SHA256   # noqa: E501

        :param ciphers: The ciphers of this ServerSsl.  # noqa: E501
        :type: list[str]
        """

        self._ciphers = ciphers

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
