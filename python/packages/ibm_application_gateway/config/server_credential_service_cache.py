# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.02
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerCredentialServiceCache(object):
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
        'cache_enabled': 'bool',
        'cache_size': 'float',
        'entry_lifetime': 'float',
        'entry_idle_timeout': 'float',
        'login_clear_user': 'bool'
    }

    attribute_map = {
        'cache_enabled': 'cache_enabled',
        'cache_size': 'cache_size',
        'entry_lifetime': 'entry_lifetime',
        'entry_idle_timeout': 'entry_idle_timeout',
        'login_clear_user': 'login_clear_user'
    }

    def __init__(self, cache_enabled=False, cache_size=1024, entry_lifetime=900, entry_idle_timeout=900, login_clear_user=False):  # noqa: E501
        """ServerCredentialServiceCache - a model defined in OpenAPI"""  # noqa: E501

        self._cache_enabled = None
        self._cache_size = None
        self._entry_lifetime = None
        self._entry_idle_timeout = None
        self._login_clear_user = None
        self.discriminator = None

        if cache_enabled is not None:
            self.cache_enabled = cache_enabled
        if cache_size is not None:
            self.cache_size = cache_size
        if entry_lifetime is not None:
            self.entry_lifetime = entry_lifetime
        if entry_idle_timeout is not None:
            self.entry_idle_timeout = entry_idle_timeout
        if login_clear_user is not None:
            self.login_clear_user = login_clear_user

    @property
    def cache_enabled(self):
        """Gets the cache_enabled of this ServerCredentialServiceCache.  # noqa: E501

        A boolean to indicate whether the credential service cache is  enabled or not.   # noqa: E501

        :return: The cache_enabled of this ServerCredentialServiceCache.  # noqa: E501
        :rtype: bool
        """
        return self._cache_enabled

    @cache_enabled.setter
    def cache_enabled(self, cache_enabled):
        """Sets the cache_enabled of this ServerCredentialServiceCache.

        A boolean to indicate whether the credential service cache is  enabled or not.   # noqa: E501

        :param cache_enabled: The cache_enabled of this ServerCredentialServiceCache.  # noqa: E501
        :type: bool
        """

        self._cache_enabled = cache_enabled

    @property
    def cache_size(self):
        """Gets the cache_size of this ServerCredentialServiceCache.  # noqa: E501

        The cache size, the number of entries which will be cached.   # noqa: E501

        :return: The cache_size of this ServerCredentialServiceCache.  # noqa: E501
        :rtype: float
        """
        return self._cache_size

    @cache_size.setter
    def cache_size(self, cache_size):
        """Sets the cache_size of this ServerCredentialServiceCache.

        The cache size, the number of entries which will be cached.   # noqa: E501

        :param cache_size: The cache_size of this ServerCredentialServiceCache.  # noqa: E501
        :type: float
        """
        if (cache_size is not None and cache_size < 0):  # noqa: E501
            raise ValueError("Invalid value for `cache_size`, must be a value greater than or equal to `0`")  # noqa: E501

        self._cache_size = cache_size

    @property
    def entry_lifetime(self):
        """Gets the entry_lifetime of this ServerCredentialServiceCache.  # noqa: E501

        The entry lifetime, the maximum number of seconds entries will be  cached for, regardless of whether they are being used or not.   # noqa: E501

        :return: The entry_lifetime of this ServerCredentialServiceCache.  # noqa: E501
        :rtype: float
        """
        return self._entry_lifetime

    @entry_lifetime.setter
    def entry_lifetime(self, entry_lifetime):
        """Sets the entry_lifetime of this ServerCredentialServiceCache.

        The entry lifetime, the maximum number of seconds entries will be  cached for, regardless of whether they are being used or not.   # noqa: E501

        :param entry_lifetime: The entry_lifetime of this ServerCredentialServiceCache.  # noqa: E501
        :type: float
        """
        if (entry_lifetime is not None and entry_lifetime < 0):  # noqa: E501
            raise ValueError("Invalid value for `entry_lifetime`, must be a value greater than or equal to `0`")  # noqa: E501

        self._entry_lifetime = entry_lifetime

    @property
    def entry_idle_timeout(self):
        """Gets the entry_idle_timeout of this ServerCredentialServiceCache.  # noqa: E501

        The entry idle timeout, the number of seconds a cache entry which is not being used will remain cached for.   # noqa: E501

        :return: The entry_idle_timeout of this ServerCredentialServiceCache.  # noqa: E501
        :rtype: float
        """
        return self._entry_idle_timeout

    @entry_idle_timeout.setter
    def entry_idle_timeout(self, entry_idle_timeout):
        """Sets the entry_idle_timeout of this ServerCredentialServiceCache.

        The entry idle timeout, the number of seconds a cache entry which is not being used will remain cached for.   # noqa: E501

        :param entry_idle_timeout: The entry_idle_timeout of this ServerCredentialServiceCache.  # noqa: E501
        :type: float
        """
        if (entry_idle_timeout is not None and entry_idle_timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `entry_idle_timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._entry_idle_timeout = entry_idle_timeout

    @property
    def login_clear_user(self):
        """Gets the login_clear_user of this ServerCredentialServiceCache.  # noqa: E501

        If set to true, on successful authentication any existing cached  credentials for the authenticating user will be cleared.   # noqa: E501

        :return: The login_clear_user of this ServerCredentialServiceCache.  # noqa: E501
        :rtype: bool
        """
        return self._login_clear_user

    @login_clear_user.setter
    def login_clear_user(self, login_clear_user):
        """Sets the login_clear_user of this ServerCredentialServiceCache.

        If set to true, on successful authentication any existing cached  credentials for the authenticating user will be cleared.   # noqa: E501

        :param login_clear_user: The login_clear_user of this ServerCredentialServiceCache.  # noqa: E501
        :type: bool
        """

        self._login_clear_user = login_clear_user

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
        if not isinstance(other, ServerCredentialServiceCache):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerCredentialServiceCache):
            return True

        return self.to_dict() != other.to_dict()