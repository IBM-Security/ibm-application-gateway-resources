# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 19.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerSession(object):
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
        'cookie_name': 'str',
        'max_sessions': 'float',
        'timeout': 'float',
        'inactive_timeout': 'float'
    }

    attribute_map = {
        'cookie_name': 'cookie_name',
        'max_sessions': 'max_sessions',
        'timeout': 'timeout',
        'inactive_timeout': 'inactive_timeout'
    }

    def __init__(self, cookie_name=None, max_sessions=4096, timeout=3600, inactive_timeout=600):  # noqa: E501
        """ServerSession - a model defined in OpenAPI"""  # noqa: E501

        self._cookie_name = None
        self._max_sessions = None
        self._timeout = None
        self._inactive_timeout = None
        self.discriminator = None

        if cookie_name is not None:
            self.cookie_name = cookie_name
        if max_sessions is not None:
            self.max_sessions = max_sessions
        if timeout is not None:
            self.timeout = timeout
        if inactive_timeout is not None:
            self.inactive_timeout = inactive_timeout

    @property
    def cookie_name(self):
        """Gets the cookie_name of this ServerSession.  # noqa: E501

        The name of the session cookie presented to clients.   # noqa: E501

        :return: The cookie_name of this ServerSession.  # noqa: E501
        :rtype: str
        """
        return self._cookie_name

    @cookie_name.setter
    def cookie_name(self, cookie_name):
        """Sets the cookie_name of this ServerSession.

        The name of the session cookie presented to clients.   # noqa: E501

        :param cookie_name: The cookie_name of this ServerSession.  # noqa: E501
        :type: str
        """

        self._cookie_name = cookie_name

    @property
    def max_sessions(self):
        """Gets the max_sessions of this ServerSession.  # noqa: E501

        The maximum number of concurrent sessions.   # noqa: E501

        :return: The max_sessions of this ServerSession.  # noqa: E501
        :rtype: float
        """
        return self._max_sessions

    @max_sessions.setter
    def max_sessions(self, max_sessions):
        """Sets the max_sessions of this ServerSession.

        The maximum number of concurrent sessions.   # noqa: E501

        :param max_sessions: The max_sessions of this ServerSession.  # noqa: E501
        :type: float
        """
        if (max_sessions is not None and max_sessions < 1):  # noqa: E501
            raise ValueError("Invalid value for `max_sessions`, must be a value greater than or equal to `1`")  # noqa: E501

        self._max_sessions = max_sessions

    @property
    def timeout(self):
        """Gets the timeout of this ServerSession.  # noqa: E501

        The maximum lifetime (in seconds) for a session. If set to 0 the sessions will not have a maximum lifetime, however once max_sessions is reached sessions will be reaped using a least recently used algorithm.   # noqa: E501

        :return: The timeout of this ServerSession.  # noqa: E501
        :rtype: float
        """
        return self._timeout

    @timeout.setter
    def timeout(self, timeout):
        """Sets the timeout of this ServerSession.

        The maximum lifetime (in seconds) for a session. If set to 0 the sessions will not have a maximum lifetime, however once max_sessions is reached sessions will be reaped using a least recently used algorithm.   # noqa: E501

        :param timeout: The timeout of this ServerSession.  # noqa: E501
        :type: float
        """
        if (timeout is not None and timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._timeout = timeout

    @property
    def inactive_timeout(self):
        """Gets the inactive_timeout of this ServerSession.  # noqa: E501

        The maximum lifetime (in seconds) a session can remain inactive before it is expired. If set to 0 the sessions will not have a maximum inactive lifetime.   # noqa: E501

        :return: The inactive_timeout of this ServerSession.  # noqa: E501
        :rtype: float
        """
        return self._inactive_timeout

    @inactive_timeout.setter
    def inactive_timeout(self, inactive_timeout):
        """Sets the inactive_timeout of this ServerSession.

        The maximum lifetime (in seconds) a session can remain inactive before it is expired. If set to 0 the sessions will not have a maximum inactive lifetime.   # noqa: E501

        :param inactive_timeout: The inactive_timeout of this ServerSession.  # noqa: E501
        :type: float
        """
        if (inactive_timeout is not None and inactive_timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `inactive_timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._inactive_timeout = inactive_timeout

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
        if not isinstance(other, ServerSession):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerSession):
            return True

        return self.to_dict() != other.to_dict()
