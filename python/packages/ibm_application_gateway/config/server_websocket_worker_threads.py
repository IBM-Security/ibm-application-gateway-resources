# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerWebsocketWorkerThreads(object):
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
        'max': 'float',
        'idle': 'float'
    }

    attribute_map = {
        'max': 'max',
        'idle': 'idle'
    }

    def __init__(self, max=0, idle=0):  # noqa: E501
        """ServerWebsocketWorkerThreads - a model defined in OpenAPI"""  # noqa: E501

        self._max = None
        self._idle = None
        self.discriminator = None

        if max is not None:
            self.max = max
        if idle is not None:
            self.idle = idle

    @property
    def max(self):
        """Gets the max of this ServerWebsocketWorkerThreads.  # noqa: E501

        The maximum number of threads which will be used used to proxy web socket connections through the gateway. A value of zero will cause web sockets to be blocked. Each web socket connection will require two worker threads. If more than the max value are in use, the daemon will immediately close the web socket even if the web socket upgrade request to the application succeeded. The web socket threads operate independently from the server:worker_threads entry.   # noqa: E501

        :return: The max of this ServerWebsocketWorkerThreads.  # noqa: E501
        :rtype: float
        """
        return self._max

    @max.setter
    def max(self, max):
        """Sets the max of this ServerWebsocketWorkerThreads.

        The maximum number of threads which will be used used to proxy web socket connections through the gateway. A value of zero will cause web sockets to be blocked. Each web socket connection will require two worker threads. If more than the max value are in use, the daemon will immediately close the web socket even if the web socket upgrade request to the application succeeded. The web socket threads operate independently from the server:worker_threads entry.   # noqa: E501

        :param max: The max of this ServerWebsocketWorkerThreads.  # noqa: E501
        :type: float
        """
        if (max is not None and max < 0):  # noqa: E501
            raise ValueError("Invalid value for `max`, must be a value greater than or equal to `0`")  # noqa: E501

        self._max = max

    @property
    def idle(self):
        """Gets the idle of this ServerWebsocketWorkerThreads.  # noqa: E501

        To avoid the overhead of starting and stopping web socket worker threads a number of threads can be left running idle. This will consume memory resources to keep them alive and idle when not in use, but will save CPU and thread start-up time when a new web socket requires threads. This option specifies the maximum count of cached idle worker threads. A value of zero will disable the caching of idle threads.   # noqa: E501

        :return: The idle of this ServerWebsocketWorkerThreads.  # noqa: E501
        :rtype: float
        """
        return self._idle

    @idle.setter
    def idle(self, idle):
        """Sets the idle of this ServerWebsocketWorkerThreads.

        To avoid the overhead of starting and stopping web socket worker threads a number of threads can be left running idle. This will consume memory resources to keep them alive and idle when not in use, but will save CPU and thread start-up time when a new web socket requires threads. This option specifies the maximum count of cached idle worker threads. A value of zero will disable the caching of idle threads.   # noqa: E501

        :param idle: The idle of this ServerWebsocketWorkerThreads.  # noqa: E501
        :type: float
        """
        if (idle is not None and idle < 0):  # noqa: E501
            raise ValueError("Invalid value for `idle`, must be a value greater than or equal to `0`")  # noqa: E501

        self._idle = idle

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
        if not isinstance(other, ServerWebsocketWorkerThreads):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerWebsocketWorkerThreads):
            return True

        return self.to_dict() != other.to_dict()
