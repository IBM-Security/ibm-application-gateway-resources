# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 25.06
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerSessionRedis(object):
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
        'enabled': 'bool',
        'client_list_cache_lifetime': 'float',
        'concurrent_sessions': 'ServerSessionRedisConcurrentSessions'
    }

    attribute_map = {
        'enabled': 'enabled',
        'client_list_cache_lifetime': 'client_list_cache_lifetime',
        'concurrent_sessions': 'concurrent_sessions'
    }

    def __init__(self, enabled=None, client_list_cache_lifetime=10, concurrent_sessions=None):  # noqa: E501
        """ServerSessionRedis - a model defined in OpenAPI"""  # noqa: E501

        self._enabled = None
        self._client_list_cache_lifetime = None
        self._concurrent_sessions = None
        self.discriminator = None

        if enabled is not None:
            self.enabled = enabled
        if client_list_cache_lifetime is not None:
            self.client_list_cache_lifetime = client_list_cache_lifetime
        if concurrent_sessions is not None:
            self.concurrent_sessions = concurrent_sessions

    @property
    def enabled(self):
        """Gets the enabled of this ServerSessionRedis.  # noqa: E501

        Enables the Redis session cache.   # noqa: E501

        :return: The enabled of this ServerSessionRedis.  # noqa: E501
        :rtype: bool
        """
        return self._enabled

    @enabled.setter
    def enabled(self, enabled):
        """Sets the enabled of this ServerSessionRedis.

        Enables the Redis session cache.   # noqa: E501

        :param enabled: The enabled of this ServerSessionRedis.  # noqa: E501
        :type: bool
        """

        self._enabled = enabled

    @property
    def client_list_cache_lifetime(self):
        """Gets the client_list_cache_lifetime of this ServerSessionRedis.  # noqa: E501

        The server needs to manually delete stale entries from the Redis cache during session creation and idle timeout events.  In order to be able to delete the stale entries it needs an up-to-date list of active clients of the Redis server (using the `CLIENT LIST` Redis command).  This command, depending on the number of clients which are registered with the Redis server, can be expensive and so IAG will cache and reuse the returned list of clients for a small period of time.  This configuration entry controls the length of time, in seconds, that a client list will be cached.   # noqa: E501

        :return: The client_list_cache_lifetime of this ServerSessionRedis.  # noqa: E501
        :rtype: float
        """
        return self._client_list_cache_lifetime

    @client_list_cache_lifetime.setter
    def client_list_cache_lifetime(self, client_list_cache_lifetime):
        """Sets the client_list_cache_lifetime of this ServerSessionRedis.

        The server needs to manually delete stale entries from the Redis cache during session creation and idle timeout events.  In order to be able to delete the stale entries it needs an up-to-date list of active clients of the Redis server (using the `CLIENT LIST` Redis command).  This command, depending on the number of clients which are registered with the Redis server, can be expensive and so IAG will cache and reuse the returned list of clients for a small period of time.  This configuration entry controls the length of time, in seconds, that a client list will be cached.   # noqa: E501

        :param client_list_cache_lifetime: The client_list_cache_lifetime of this ServerSessionRedis.  # noqa: E501
        :type: float
        """
        if (client_list_cache_lifetime is not None and client_list_cache_lifetime < 0):  # noqa: E501
            raise ValueError("Invalid value for `client_list_cache_lifetime`, must be a value greater than or equal to `0`")  # noqa: E501

        self._client_list_cache_lifetime = client_list_cache_lifetime

    @property
    def concurrent_sessions(self):
        """Gets the concurrent_sessions of this ServerSessionRedis.  # noqa: E501


        :return: The concurrent_sessions of this ServerSessionRedis.  # noqa: E501
        :rtype: ServerSessionRedisConcurrentSessions
        """
        return self._concurrent_sessions

    @concurrent_sessions.setter
    def concurrent_sessions(self, concurrent_sessions):
        """Sets the concurrent_sessions of this ServerSessionRedis.


        :param concurrent_sessions: The concurrent_sessions of this ServerSessionRedis.  # noqa: E501
        :type: ServerSessionRedisConcurrentSessions
        """

        self._concurrent_sessions = concurrent_sessions

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
        if not isinstance(other, ServerSessionRedis):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerSessionRedis):
            return True

        return self.to_dict() != other.to_dict()
