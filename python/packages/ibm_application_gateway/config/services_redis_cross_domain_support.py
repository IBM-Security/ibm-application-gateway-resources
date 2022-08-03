# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 22.07
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServicesRedisCrossDomainSupport(object):
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
        'master_authn_server_url': 'str',
        'master_session_code_lifetime': 'float'
    }

    attribute_map = {
        'master_authn_server_url': 'master_authn_server_url',
        'master_session_code_lifetime': 'master_session_code_lifetime'
    }

    def __init__(self, master_authn_server_url=None, master_session_code_lifetime=30):  # noqa: E501
        """ServicesRedisCrossDomainSupport - a model defined in OpenAPI"""  # noqa: E501

        self._master_authn_server_url = None
        self._master_session_code_lifetime = None
        self.discriminator = None

        if master_authn_server_url is not None:
            self.master_authn_server_url = master_authn_server_url
        if master_session_code_lifetime is not None:
            self.master_session_code_lifetime = master_session_code_lifetime

    @property
    def master_authn_server_url(self):
        """Gets the master_authn_server_url of this ServicesRedisCrossDomainSupport.  # noqa: E501

        The base URL of the master authentication server for this collection of Redis servers.  The master authentication server, if specified, will be responsible for the generation of all new sessions for this collection.  The entry should be of the format: `http{s}://server{:port}`.   # noqa: E501

        :return: The master_authn_server_url of this ServicesRedisCrossDomainSupport.  # noqa: E501
        :rtype: str
        """
        return self._master_authn_server_url

    @master_authn_server_url.setter
    def master_authn_server_url(self, master_authn_server_url):
        """Sets the master_authn_server_url of this ServicesRedisCrossDomainSupport.

        The base URL of the master authentication server for this collection of Redis servers.  The master authentication server, if specified, will be responsible for the generation of all new sessions for this collection.  The entry should be of the format: `http{s}://server{:port}`.   # noqa: E501

        :param master_authn_server_url: The master_authn_server_url of this ServicesRedisCrossDomainSupport.  # noqa: E501
        :type: str
        """

        self._master_authn_server_url = master_authn_server_url

    @property
    def master_session_code_lifetime(self):
        """Gets the master_session_code_lifetime of this ServicesRedisCrossDomainSupport.  # noqa: E501

        The maximum number of seconds that a session code, used when communicating the session information from the master authentication server, will remain valid.   # noqa: E501

        :return: The master_session_code_lifetime of this ServicesRedisCrossDomainSupport.  # noqa: E501
        :rtype: float
        """
        return self._master_session_code_lifetime

    @master_session_code_lifetime.setter
    def master_session_code_lifetime(self, master_session_code_lifetime):
        """Sets the master_session_code_lifetime of this ServicesRedisCrossDomainSupport.

        The maximum number of seconds that a session code, used when communicating the session information from the master authentication server, will remain valid.   # noqa: E501

        :param master_session_code_lifetime: The master_session_code_lifetime of this ServicesRedisCrossDomainSupport.  # noqa: E501
        :type: float
        """
        if (master_session_code_lifetime is not None and master_session_code_lifetime < 1):  # noqa: E501
            raise ValueError("Invalid value for `master_session_code_lifetime`, must be a value greater than or equal to `1`")  # noqa: E501

        self._master_session_code_lifetime = master_session_code_lifetime

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
        if not isinstance(other, ServicesRedisCrossDomainSupport):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServicesRedisCrossDomainSupport):
            return True

        return self.to_dict() != other.to_dict()
