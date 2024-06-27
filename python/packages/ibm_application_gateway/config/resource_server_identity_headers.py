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

class ResourceServerIdentityHeaders(object):
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
        'kerberos': 'ResourceServerIdentityHeadersKerberos',
        'encoding': 'str',
        'basic_auth': 'ResourceServerIdentityHeadersBasicAuth',
        'ip_address': 'bool',
        'iv_creds': 'bool',
        'attributes': 'list[ResourceServerIdentityHeadersAttributes]',
        'session_cookie': 'bool',
        'jwt': 'ResourceServerIdentityHeadersJwt',
        'ltpa': 'ResourceServerIdentityHeadersLtpa'
    }

    attribute_map = {
        'kerberos': 'kerberos',
        'encoding': 'encoding',
        'basic_auth': 'basic_auth',
        'ip_address': 'ip_address',
        'iv_creds': 'iv_creds',
        'attributes': 'attributes',
        'session_cookie': 'session_cookie',
        'jwt': 'jwt',
        'ltpa': 'ltpa'
    }

    def __init__(self, kerberos=None, encoding='utf8_uri', basic_auth=None, ip_address=False, iv_creds=False, attributes=None, session_cookie=False, jwt=None, ltpa=None):  # noqa: E501
        """ResourceServerIdentityHeaders - a model defined in OpenAPI"""  # noqa: E501

        self._kerberos = None
        self._encoding = None
        self._basic_auth = None
        self._ip_address = None
        self._iv_creds = None
        self._attributes = None
        self._session_cookie = None
        self._jwt = None
        self._ltpa = None
        self.discriminator = None

        if kerberos is not None:
            self.kerberos = kerberos
        if encoding is not None:
            self.encoding = encoding
        if basic_auth is not None:
            self.basic_auth = basic_auth
        if ip_address is not None:
            self.ip_address = ip_address
        if iv_creds is not None:
            self.iv_creds = iv_creds
        if attributes is not None:
            self.attributes = attributes
        if session_cookie is not None:
            self.session_cookie = session_cookie
        if jwt is not None:
            self.jwt = jwt
        if ltpa is not None:
            self.ltpa = ltpa

    @property
    def kerberos(self):
        """Gets the kerberos of this ResourceServerIdentityHeaders.  # noqa: E501


        :return: The kerberos of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: ResourceServerIdentityHeadersKerberos
        """
        return self._kerberos

    @kerberos.setter
    def kerberos(self, kerberos):
        """Sets the kerberos of this ResourceServerIdentityHeaders.


        :param kerberos: The kerberos of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: ResourceServerIdentityHeadersKerberos
        """

        self._kerberos = kerberos

    @property
    def encoding(self):
        """Gets the encoding of this ResourceServerIdentityHeaders.  # noqa: E501

        The encoding type to use for any identity headers passed to the resource server. See the [Encoding](#encoding) table for a  description of the available options.   # noqa: E501

        :return: The encoding of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: str
        """
        return self._encoding

    @encoding.setter
    def encoding(self, encoding):
        """Sets the encoding of this ResourceServerIdentityHeaders.

        The encoding type to use for any identity headers passed to the resource server. See the [Encoding](#encoding) table for a  description of the available options.   # noqa: E501

        :param encoding: The encoding of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: str
        """
        allowed_values = ["utf8_bin", "utf8_uri", "lcp_bin", "lcp_uri"]  # noqa: E501
        if encoding not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `encoding` ({0}), must be one of {1}"  # noqa: E501
                .format(encoding, allowed_values)
            )

        self._encoding = encoding

    @property
    def basic_auth(self):
        """Gets the basic_auth of this ResourceServerIdentityHeaders.  # noqa: E501


        :return: The basic_auth of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: ResourceServerIdentityHeadersBasicAuth
        """
        return self._basic_auth

    @basic_auth.setter
    def basic_auth(self, basic_auth):
        """Sets the basic_auth of this ResourceServerIdentityHeaders.


        :param basic_auth: The basic_auth of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: ResourceServerIdentityHeadersBasicAuth
        """

        self._basic_auth = basic_auth

    @property
    def ip_address(self):
        """Gets the ip_address of this ResourceServerIdentityHeaders.  # noqa: E501

        A boolean flag indicating whether or not to provide the client IP address as a HTTP header in requests forwarded to the resource server.  The IP address will be added in the `iv-remote-address` HTTP header.   # noqa: E501

        :return: The ip_address of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: bool
        """
        return self._ip_address

    @ip_address.setter
    def ip_address(self, ip_address):
        """Sets the ip_address of this ResourceServerIdentityHeaders.

        A boolean flag indicating whether or not to provide the client IP address as a HTTP header in requests forwarded to the resource server.  The IP address will be added in the `iv-remote-address` HTTP header.   # noqa: E501

        :param ip_address: The ip_address of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: bool
        """

        self._ip_address = ip_address

    @property
    def iv_creds(self):
        """Gets the iv_creds of this ResourceServerIdentityHeaders.  # noqa: E501

        A boolean flag indicating whether or not to provide an ASN.1 encoded version of the credential as a HTTP header in requests forwarded to the resource server.  The credential will be added in the `iv-creds` HTTP header.   # noqa: E501

        :return: The iv_creds of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: bool
        """
        return self._iv_creds

    @iv_creds.setter
    def iv_creds(self, iv_creds):
        """Sets the iv_creds of this ResourceServerIdentityHeaders.

        A boolean flag indicating whether or not to provide an ASN.1 encoded version of the credential as a HTTP header in requests forwarded to the resource server.  The credential will be added in the `iv-creds` HTTP header.   # noqa: E501

        :param iv_creds: The iv_creds of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: bool
        """

        self._iv_creds = iv_creds

    @property
    def attributes(self):
        """Gets the attributes of this ResourceServerIdentityHeaders.  # noqa: E501

        Specifies a list of attributes from the authenticated credential which will be inserted into the HTTP requests sent to the resource server.   # noqa: E501

        :return: The attributes of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: list[ResourceServerIdentityHeadersAttributes]
        """
        return self._attributes

    @attributes.setter
    def attributes(self, attributes):
        """Sets the attributes of this ResourceServerIdentityHeaders.

        Specifies a list of attributes from the authenticated credential which will be inserted into the HTTP requests sent to the resource server.   # noqa: E501

        :param attributes: The attributes of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: list[ResourceServerIdentityHeadersAttributes]
        """

        self._attributes = attributes

    @property
    def session_cookie(self):
        """Gets the session_cookie of this ResourceServerIdentityHeaders.  # noqa: E501

        A boolean flag indicating whether or not to forward the reverse proxy cookie to the resource server. The name of this cookie is configured in the `server/session/cookie_name` entry.   # noqa: E501

        :return: The session_cookie of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: bool
        """
        return self._session_cookie

    @session_cookie.setter
    def session_cookie(self, session_cookie):
        """Sets the session_cookie of this ResourceServerIdentityHeaders.

        A boolean flag indicating whether or not to forward the reverse proxy cookie to the resource server. The name of this cookie is configured in the `server/session/cookie_name` entry.   # noqa: E501

        :param session_cookie: The session_cookie of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: bool
        """

        self._session_cookie = session_cookie

    @property
    def jwt(self):
        """Gets the jwt of this ResourceServerIdentityHeaders.  # noqa: E501


        :return: The jwt of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: ResourceServerIdentityHeadersJwt
        """
        return self._jwt

    @jwt.setter
    def jwt(self, jwt):
        """Sets the jwt of this ResourceServerIdentityHeaders.


        :param jwt: The jwt of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: ResourceServerIdentityHeadersJwt
        """

        self._jwt = jwt

    @property
    def ltpa(self):
        """Gets the ltpa of this ResourceServerIdentityHeaders.  # noqa: E501


        :return: The ltpa of this ResourceServerIdentityHeaders.  # noqa: E501
        :rtype: ResourceServerIdentityHeadersLtpa
        """
        return self._ltpa

    @ltpa.setter
    def ltpa(self, ltpa):
        """Sets the ltpa of this ResourceServerIdentityHeaders.


        :param ltpa: The ltpa of this ResourceServerIdentityHeaders.  # noqa: E501
        :type: ResourceServerIdentityHeadersLtpa
        """

        self._ltpa = ltpa

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
        if not isinstance(other, ResourceServerIdentityHeaders):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeaders):
            return True

        return self.to_dict() != other.to_dict()
