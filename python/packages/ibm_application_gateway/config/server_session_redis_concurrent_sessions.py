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

class ServerSessionRedisConcurrentSessions(object):
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
        'prompt_for_displacement': 'bool',
        'max_user_sessions': 'float',
        'user_identity_attribute_name': 'str'
    }

    attribute_map = {
        'enabled': 'enabled',
        'prompt_for_displacement': 'prompt_for_displacement',
        'max_user_sessions': 'max_user_sessions',
        'user_identity_attribute_name': 'user_identity_attribute_name'
    }

    def __init__(self, enabled=True, prompt_for_displacement=True, max_user_sessions=0, user_identity_attribute_name='AZN_CRED_PRINCIPAL_NAME'):  # noqa: E501
        """ServerSessionRedisConcurrentSessions - a model defined in OpenAPI"""  # noqa: E501

        self._enabled = None
        self._prompt_for_displacement = None
        self._max_user_sessions = None
        self._user_identity_attribute_name = None
        self.discriminator = None

        if enabled is not None:
            self.enabled = enabled
        if prompt_for_displacement is not None:
            self.prompt_for_displacement = prompt_for_displacement
        if max_user_sessions is not None:
            self.max_user_sessions = max_user_sessions
        if user_identity_attribute_name is not None:
            self.user_identity_attribute_name = user_identity_attribute_name

    @property
    def enabled(self):
        """Gets the enabled of this ServerSessionRedisConcurrentSessions.  # noqa: E501

        Is concurrent user session tracking and management enabled?   # noqa: E501

        :return: The enabled of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :rtype: bool
        """
        return self._enabled

    @enabled.setter
    def enabled(self, enabled):
        """Sets the enabled of this ServerSessionRedisConcurrentSessions.

        Is concurrent user session tracking and management enabled?   # noqa: E501

        :param enabled: The enabled of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :type: bool
        """

        self._enabled = enabled

    @property
    def prompt_for_displacement(self):
        """Gets the prompt_for_displacement of this ServerSessionRedisConcurrentSessions.  # noqa: E501

        If enabled the gateway will prompt users before automatically displacing existing sessions with the same user identity.  If disabled the gateway will automatically log out the existing user session.   # noqa: E501

        :return: The prompt_for_displacement of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :rtype: bool
        """
        return self._prompt_for_displacement

    @prompt_for_displacement.setter
    def prompt_for_displacement(self, prompt_for_displacement):
        """Sets the prompt_for_displacement of this ServerSessionRedisConcurrentSessions.

        If enabled the gateway will prompt users before automatically displacing existing sessions with the same user identity.  If disabled the gateway will automatically log out the existing user session.   # noqa: E501

        :param prompt_for_displacement: The prompt_for_displacement of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :type: bool
        """

        self._prompt_for_displacement = prompt_for_displacement

    @property
    def max_user_sessions(self):
        """Gets the max_user_sessions of this ServerSessionRedisConcurrentSessions.  # noqa: E501

        The maximum number of concurrent sessions which are allowed for a single user.  A value of `0` indicates that an unlimited number of sessions are allowed, and a value of `-1` indicates that only a single session is allowed for the user and that any existing sessions will be displaced by the new session.  The maximum number of user sessions for a particular session can also be defined using the `tagvalue_max_concurrent_web_sessions` attribute of the credential.   # noqa: E501

        :return: The max_user_sessions of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :rtype: float
        """
        return self._max_user_sessions

    @max_user_sessions.setter
    def max_user_sessions(self, max_user_sessions):
        """Sets the max_user_sessions of this ServerSessionRedisConcurrentSessions.

        The maximum number of concurrent sessions which are allowed for a single user.  A value of `0` indicates that an unlimited number of sessions are allowed, and a value of `-1` indicates that only a single session is allowed for the user and that any existing sessions will be displaced by the new session.  The maximum number of user sessions for a particular session can also be defined using the `tagvalue_max_concurrent_web_sessions` attribute of the credential.   # noqa: E501

        :param max_user_sessions: The max_user_sessions of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :type: float
        """
        if (max_user_sessions is not None and max_user_sessions < -1):  # noqa: E501
            raise ValueError("Invalid value for `max_user_sessions`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._max_user_sessions = max_user_sessions

    @property
    def user_identity_attribute_name(self):
        """Gets the user_identity_attribute_name of this ServerSessionRedisConcurrentSessions.  # noqa: E501

        The name of the credential attribute which holds the unique user identity for the session.  If the configured attribute does not exist in the credential the default user identity of `unknown` will be used.   # noqa: E501

        :return: The user_identity_attribute_name of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :rtype: str
        """
        return self._user_identity_attribute_name

    @user_identity_attribute_name.setter
    def user_identity_attribute_name(self, user_identity_attribute_name):
        """Sets the user_identity_attribute_name of this ServerSessionRedisConcurrentSessions.

        The name of the credential attribute which holds the unique user identity for the session.  If the configured attribute does not exist in the credential the default user identity of `unknown` will be used.   # noqa: E501

        :param user_identity_attribute_name: The user_identity_attribute_name of this ServerSessionRedisConcurrentSessions.  # noqa: E501
        :type: str
        """

        self._user_identity_attribute_name = user_identity_attribute_name

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
        if not isinstance(other, ServerSessionRedisConcurrentSessions):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerSessionRedisConcurrentSessions):
            return True

        return self.to_dict() != other.to_dict()
