# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 25.03
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerWebsocket(object):
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
        'worker_threads': 'ServerWebsocketWorkerThreads',
        'timeouts': 'ServerWebsocketTimeouts'
    }

    attribute_map = {
        'worker_threads': 'worker_threads',
        'timeouts': 'timeouts'
    }

    def __init__(self, worker_threads=None, timeouts=None):  # noqa: E501
        """ServerWebsocket - a model defined in OpenAPI"""  # noqa: E501

        self._worker_threads = None
        self._timeouts = None
        self.discriminator = None

        if worker_threads is not None:
            self.worker_threads = worker_threads
        if timeouts is not None:
            self.timeouts = timeouts

    @property
    def worker_threads(self):
        """Gets the worker_threads of this ServerWebsocket.  # noqa: E501


        :return: The worker_threads of this ServerWebsocket.  # noqa: E501
        :rtype: ServerWebsocketWorkerThreads
        """
        return self._worker_threads

    @worker_threads.setter
    def worker_threads(self, worker_threads):
        """Sets the worker_threads of this ServerWebsocket.


        :param worker_threads: The worker_threads of this ServerWebsocket.  # noqa: E501
        :type: ServerWebsocketWorkerThreads
        """

        self._worker_threads = worker_threads

    @property
    def timeouts(self):
        """Gets the timeouts of this ServerWebsocket.  # noqa: E501


        :return: The timeouts of this ServerWebsocket.  # noqa: E501
        :rtype: ServerWebsocketTimeouts
        """
        return self._timeouts

    @timeouts.setter
    def timeouts(self, timeouts):
        """Sets the timeouts of this ServerWebsocket.


        :param timeouts: The timeouts of this ServerWebsocket.  # noqa: E501
        :type: ServerWebsocketTimeouts
        """

        self._timeouts = timeouts

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
        if not isinstance(other, ServerWebsocket):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerWebsocket):
            return True

        return self.to_dict() != other.to_dict()
