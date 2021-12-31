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

class RedisCollection(object):
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
        'name': 'str',
        'matching_host': 'str',
        'max_pooled_connections': 'float',
        'idle_timeout': 'float',
        'connect_timeout': 'float',
        'io_timeout': 'float',
        'health_check_interval': 'float',
        'cross_domain_support': 'RedisCollectionCrossDomainSupport',
        'servers': 'list[RedisCollectionServers]'
    }

    attribute_map = {
        'name': 'name',
        'matching_host': 'matching_host',
        'max_pooled_connections': 'max_pooled_connections',
        'idle_timeout': 'idle_timeout',
        'connect_timeout': 'connect_timeout',
        'io_timeout': 'io_timeout',
        'health_check_interval': 'health_check_interval',
        'cross_domain_support': 'cross_domain_support',
        'servers': 'servers'
    }

    def __init__(self, name=None, matching_host=None, max_pooled_connections=50, idle_timeout=10, connect_timeout=2, io_timeout=30, health_check_interval=10, cross_domain_support=None, servers=None):  # noqa: E501
        """RedisCollection - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._matching_host = None
        self._max_pooled_connections = None
        self._idle_timeout = None
        self._connect_timeout = None
        self._io_timeout = None
        self._health_check_interval = None
        self._cross_domain_support = None
        self._servers = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if matching_host is not None:
            self.matching_host = matching_host
        if max_pooled_connections is not None:
            self.max_pooled_connections = max_pooled_connections
        if idle_timeout is not None:
            self.idle_timeout = idle_timeout
        if connect_timeout is not None:
            self.connect_timeout = connect_timeout
        if io_timeout is not None:
            self.io_timeout = io_timeout
        if health_check_interval is not None:
            self.health_check_interval = health_check_interval
        if cross_domain_support is not None:
            self.cross_domain_support = cross_domain_support
        if servers is not None:
            self.servers = servers

    @property
    def name(self):
        """Gets the name of this RedisCollection.  # noqa: E501

        The name of the redis collection.   # noqa: E501

        :return: The name of this RedisCollection.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this RedisCollection.

        The name of the redis collection.   # noqa: E501

        :param name: The name of this RedisCollection.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def matching_host(self):
        """Gets the matching_host of this RedisCollection.  # noqa: E501

        Any specific hosts (obtained from the Host header of the HTTP request) for which this collection should be used. This entry is only applicable to Redis collections being used  for storing session data.   # noqa: E501

        :return: The matching_host of this RedisCollection.  # noqa: E501
        :rtype: str
        """
        return self._matching_host

    @matching_host.setter
    def matching_host(self, matching_host):
        """Sets the matching_host of this RedisCollection.

        Any specific hosts (obtained from the Host header of the HTTP request) for which this collection should be used. This entry is only applicable to Redis collections being used  for storing session data.   # noqa: E501

        :param matching_host: The matching_host of this RedisCollection.  # noqa: E501
        :type: str
        """

        self._matching_host = matching_host

    @property
    def max_pooled_connections(self):
        """Gets the max_pooled_connections of this RedisCollection.  # noqa: E501

        The maximum number of pooled connections to a Redis server.   # noqa: E501

        :return: The max_pooled_connections of this RedisCollection.  # noqa: E501
        :rtype: float
        """
        return self._max_pooled_connections

    @max_pooled_connections.setter
    def max_pooled_connections(self, max_pooled_connections):
        """Sets the max_pooled_connections of this RedisCollection.

        The maximum number of pooled connections to a Redis server.   # noqa: E501

        :param max_pooled_connections: The max_pooled_connections of this RedisCollection.  # noqa: E501
        :type: float
        """
        if (max_pooled_connections is not None and max_pooled_connections < 0):  # noqa: E501
            raise ValueError("Invalid value for `max_pooled_connections`, must be a value greater than or equal to `0`")  # noqa: E501

        self._max_pooled_connections = max_pooled_connections

    @property
    def idle_timeout(self):
        """Gets the idle_timeout of this RedisCollection.  # noqa: E501

        The maximum number of seconds a pooled connection can remain idle before the connection is closed.   # noqa: E501

        :return: The idle_timeout of this RedisCollection.  # noqa: E501
        :rtype: float
        """
        return self._idle_timeout

    @idle_timeout.setter
    def idle_timeout(self, idle_timeout):
        """Sets the idle_timeout of this RedisCollection.

        The maximum number of seconds a pooled connection can remain idle before the connection is closed.   # noqa: E501

        :param idle_timeout: The idle_timeout of this RedisCollection.  # noqa: E501
        :type: float
        """
        if (idle_timeout is not None and idle_timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `idle_timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._idle_timeout = idle_timeout

    @property
    def connect_timeout(self):
        """Gets the connect_timeout of this RedisCollection.  # noqa: E501

        The maximum number of seconds to wait for a connection to be established with a Redis server.   # noqa: E501

        :return: The connect_timeout of this RedisCollection.  # noqa: E501
        :rtype: float
        """
        return self._connect_timeout

    @connect_timeout.setter
    def connect_timeout(self, connect_timeout):
        """Sets the connect_timeout of this RedisCollection.

        The maximum number of seconds to wait for a connection to be established with a Redis server.   # noqa: E501

        :param connect_timeout: The connect_timeout of this RedisCollection.  # noqa: E501
        :type: float
        """
        if (connect_timeout is not None and connect_timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `connect_timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._connect_timeout = connect_timeout

    @property
    def io_timeout(self):
        """Gets the io_timeout of this RedisCollection.  # noqa: E501

        The maximum number of seconds to wait for a valid response from a Redis server.   # noqa: E501

        :return: The io_timeout of this RedisCollection.  # noqa: E501
        :rtype: float
        """
        return self._io_timeout

    @io_timeout.setter
    def io_timeout(self, io_timeout):
        """Sets the io_timeout of this RedisCollection.

        The maximum number of seconds to wait for a valid response from a Redis server.   # noqa: E501

        :param io_timeout: The io_timeout of this RedisCollection.  # noqa: E501
        :type: float
        """
        if (io_timeout is not None and io_timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `io_timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._io_timeout = io_timeout

    @property
    def health_check_interval(self):
        """Gets the health_check_interval of this RedisCollection.  # noqa: E501

        The interval (in seconds) between health check requests sent to the Redis server.   # noqa: E501

        :return: The health_check_interval of this RedisCollection.  # noqa: E501
        :rtype: float
        """
        return self._health_check_interval

    @health_check_interval.setter
    def health_check_interval(self, health_check_interval):
        """Sets the health_check_interval of this RedisCollection.

        The interval (in seconds) between health check requests sent to the Redis server.   # noqa: E501

        :param health_check_interval: The health_check_interval of this RedisCollection.  # noqa: E501
        :type: float
        """
        if (health_check_interval is not None and health_check_interval < 1):  # noqa: E501
            raise ValueError("Invalid value for `health_check_interval`, must be a value greater than or equal to `1`")  # noqa: E501

        self._health_check_interval = health_check_interval

    @property
    def cross_domain_support(self):
        """Gets the cross_domain_support of this RedisCollection.  # noqa: E501


        :return: The cross_domain_support of this RedisCollection.  # noqa: E501
        :rtype: RedisCollectionCrossDomainSupport
        """
        return self._cross_domain_support

    @cross_domain_support.setter
    def cross_domain_support(self, cross_domain_support):
        """Sets the cross_domain_support of this RedisCollection.


        :param cross_domain_support: The cross_domain_support of this RedisCollection.  # noqa: E501
        :type: RedisCollectionCrossDomainSupport
        """

        self._cross_domain_support = cross_domain_support

    @property
    def servers(self):
        """Gets the servers of this RedisCollection.  # noqa: E501

        Used to define the configuration for the individual Redis servers within the collection.   # noqa: E501

        :return: The servers of this RedisCollection.  # noqa: E501
        :rtype: list[RedisCollectionServers]
        """
        return self._servers

    @servers.setter
    def servers(self, servers):
        """Sets the servers of this RedisCollection.

        Used to define the configuration for the individual Redis servers within the collection.   # noqa: E501

        :param servers: The servers of this RedisCollection.  # noqa: E501
        :type: list[RedisCollectionServers]
        """

        self._servers = servers

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
        if not isinstance(other, RedisCollection):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RedisCollection):
            return True

        return self.to_dict() != other.to_dict()
