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

class ServerRateLimiting(object):
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
        'cache_size': 'float',
        'redis': 'ServerRateLimitingRedis',
        'response_headers': 'bool'
    }

    attribute_map = {
        'cache_size': 'cache_size',
        'redis': 'redis',
        'response_headers': 'response_headers'
    }

    def __init__(self, cache_size=16384, redis=None, response_headers=False):  # noqa: E501
        """ServerRateLimiting - a model defined in OpenAPI"""  # noqa: E501

        self._cache_size = None
        self._redis = None
        self._response_headers = None
        self.discriminator = None

        if cache_size is not None:
            self.cache_size = cache_size
        if redis is not None:
            self.redis = redis
        if response_headers is not None:
            self.response_headers = response_headers

    @property
    def cache_size(self):
        """Gets the cache_size of this ServerRateLimiting.  # noqa: E501

        The number of unique records to cache locally for the rate limiting capability. When this cache is exhausted, the oldest  cached records are ejected. This effectively resets the rate limiting counters for this client(s). This number needs to be  higher than the number of requests being rate limited across a  refresh interval.   # noqa: E501

        :return: The cache_size of this ServerRateLimiting.  # noqa: E501
        :rtype: float
        """
        return self._cache_size

    @cache_size.setter
    def cache_size(self, cache_size):
        """Sets the cache_size of this ServerRateLimiting.

        The number of unique records to cache locally for the rate limiting capability. When this cache is exhausted, the oldest  cached records are ejected. This effectively resets the rate limiting counters for this client(s). This number needs to be  higher than the number of requests being rate limited across a  refresh interval.   # noqa: E501

        :param cache_size: The cache_size of this ServerRateLimiting.  # noqa: E501
        :type: float
        """
        if (cache_size is not None and cache_size < 1):  # noqa: E501
            raise ValueError("Invalid value for `cache_size`, must be a value greater than or equal to `1`")  # noqa: E501

        self._cache_size = cache_size

    @property
    def redis(self):
        """Gets the redis of this ServerRateLimiting.  # noqa: E501


        :return: The redis of this ServerRateLimiting.  # noqa: E501
        :rtype: ServerRateLimitingRedis
        """
        return self._redis

    @redis.setter
    def redis(self, redis):
        """Sets the redis of this ServerRateLimiting.


        :param redis: The redis of this ServerRateLimiting.  # noqa: E501
        :type: ServerRateLimitingRedis
        """

        self._redis = redis

    @property
    def response_headers(self):
        """Gets the response_headers of this ServerRateLimiting.  # noqa: E501

        Specifies whether or not the gateway will insert the rate limiting headers into responses. By default, the rate limiting response headers are disabled.   # noqa: E501

        :return: The response_headers of this ServerRateLimiting.  # noqa: E501
        :rtype: bool
        """
        return self._response_headers

    @response_headers.setter
    def response_headers(self, response_headers):
        """Sets the response_headers of this ServerRateLimiting.

        Specifies whether or not the gateway will insert the rate limiting headers into responses. By default, the rate limiting response headers are disabled.   # noqa: E501

        :param response_headers: The response_headers of this ServerRateLimiting.  # noqa: E501
        :type: bool
        """

        self._response_headers = response_headers

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
        if not isinstance(other, ServerRateLimiting):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerRateLimiting):
            return True

        return self.to_dict() != other.to_dict()
