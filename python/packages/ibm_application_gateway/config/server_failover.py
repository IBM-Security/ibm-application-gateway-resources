# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.04
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerFailover(object):
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
        'key': 'str',
        'cookie_name': 'str',
        'domain_cookie': 'bool'
    }

    attribute_map = {
        'key': 'key',
        'cookie_name': 'cookie_name',
        'domain_cookie': 'domain_cookie'
    }

    def __init__(self, key=None, cookie_name=None, domain_cookie=False):  # noqa: E501
        """ServerFailover - a model defined in OpenAPI"""  # noqa: E501

        self._key = None
        self._cookie_name = None
        self._domain_cookie = None
        self.discriminator = None

        if key is not None:
            self.key = key
        if cookie_name is not None:
            self.cookie_name = cookie_name
        if domain_cookie is not None:
            self.domain_cookie = domain_cookie

    @property
    def key(self):
        """Gets the key of this ServerFailover.  # noqa: E501

        The key which is used to protect the failover JWE cookie. This key should be 512 bits in length. If the key is greater than this size it will be truncated, and if it is less than this size it will be right-padded with 0's. An example openssl command to create this key is: 'openssl rand -out oct-512-bit.bin 64'   # noqa: E501

        :return: The key of this ServerFailover.  # noqa: E501
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key):
        """Sets the key of this ServerFailover.

        The key which is used to protect the failover JWE cookie. This key should be 512 bits in length. If the key is greater than this size it will be truncated, and if it is less than this size it will be right-padded with 0's. An example openssl command to create this key is: 'openssl rand -out oct-512-bit.bin 64'   # noqa: E501

        :param key: The key of this ServerFailover.  # noqa: E501
        :type: str
        """

        self._key = key

    @property
    def cookie_name(self):
        """Gets the cookie_name of this ServerFailover.  # noqa: E501

        The name of the cookie which will be used to store the failover JWE.   # noqa: E501

        :return: The cookie_name of this ServerFailover.  # noqa: E501
        :rtype: str
        """
        return self._cookie_name

    @cookie_name.setter
    def cookie_name(self, cookie_name):
        """Sets the cookie_name of this ServerFailover.

        The name of the cookie which will be used to store the failover JWE.   # noqa: E501

        :param cookie_name: The cookie_name of this ServerFailover.  # noqa: E501
        :type: str
        """

        self._cookie_name = cookie_name

    @property
    def domain_cookie(self):
        """Gets the domain_cookie of this ServerFailover.  # noqa: E501

        A boolean flag indicating whether or not the failover cookie should include a domain. By including a domain the failover cookie will be sent to any server within the same DNS domain. For example, a failover cookie which is generated by server_a.ibm.com will also be sent to server_b.ibm.com. The name of the domain which is used in the failover cookie is derived from the Host header in the HTTP request.   # noqa: E501

        :return: The domain_cookie of this ServerFailover.  # noqa: E501
        :rtype: bool
        """
        return self._domain_cookie

    @domain_cookie.setter
    def domain_cookie(self, domain_cookie):
        """Sets the domain_cookie of this ServerFailover.

        A boolean flag indicating whether or not the failover cookie should include a domain. By including a domain the failover cookie will be sent to any server within the same DNS domain. For example, a failover cookie which is generated by server_a.ibm.com will also be sent to server_b.ibm.com. The name of the domain which is used in the failover cookie is derived from the Host header in the HTTP request.   # noqa: E501

        :param domain_cookie: The domain_cookie of this ServerFailover.  # noqa: E501
        :type: bool
        """

        self._domain_cookie = domain_cookie

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
        if not isinstance(other, ServerFailover):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerFailover):
            return True

        return self.to_dict() != other.to_dict()
