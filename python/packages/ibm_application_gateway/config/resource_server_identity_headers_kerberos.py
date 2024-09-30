# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerIdentityHeadersKerberos(object):
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
        'resource_spn': 'str',
        'always_send_tokens': 'bool',
        'user_identity': 'ResourceServerIdentityHeadersKerberosUserIdentity'
    }

    attribute_map = {
        'resource_spn': 'resource_spn',
        'always_send_tokens': 'always_send_tokens',
        'user_identity': 'user_identity'
    }

    def __init__(self, resource_spn=None, always_send_tokens=False, user_identity=None):  # noqa: E501
        """ResourceServerIdentityHeadersKerberos - a model defined in OpenAPI"""  # noqa: E501

        self._resource_spn = None
        self._always_send_tokens = None
        self._user_identity = None
        self.discriminator = None

        if resource_spn is not None:
            self.resource_spn = resource_spn
        if always_send_tokens is not None:
            self.always_send_tokens = always_send_tokens
        if user_identity is not None:
            self.user_identity = user_identity

    @property
    def resource_spn(self):
        """Gets the resource_spn of this ResourceServerIdentityHeadersKerberos.  # noqa: E501

        The the service principal name of the target when requesting a Kerberos token. The service principal name can be determined by executing the Microsoft utility `setspn` (that is, `setspn -L user`, where `user` is the identity of the back-end web servers account).   # noqa: E501

        :return: The resource_spn of this ResourceServerIdentityHeadersKerberos.  # noqa: E501
        :rtype: str
        """
        return self._resource_spn

    @resource_spn.setter
    def resource_spn(self, resource_spn):
        """Sets the resource_spn of this ResourceServerIdentityHeadersKerberos.

        The the service principal name of the target when requesting a Kerberos token. The service principal name can be determined by executing the Microsoft utility `setspn` (that is, `setspn -L user`, where `user` is the identity of the back-end web servers account).   # noqa: E501

        :param resource_spn: The resource_spn of this ResourceServerIdentityHeadersKerberos.  # noqa: E501
        :type: str
        """

        self._resource_spn = resource_spn

    @property
    def always_send_tokens(self):
        """Gets the always_send_tokens of this ResourceServerIdentityHeadersKerberos.  # noqa: E501

        Indicates whether IAG sends a security token for every HTTP request or whether IAG waits for a 401 response before it adds the security token.   # noqa: E501

        :return: The always_send_tokens of this ResourceServerIdentityHeadersKerberos.  # noqa: E501
        :rtype: bool
        """
        return self._always_send_tokens

    @always_send_tokens.setter
    def always_send_tokens(self, always_send_tokens):
        """Sets the always_send_tokens of this ResourceServerIdentityHeadersKerberos.

        Indicates whether IAG sends a security token for every HTTP request or whether IAG waits for a 401 response before it adds the security token.   # noqa: E501

        :param always_send_tokens: The always_send_tokens of this ResourceServerIdentityHeadersKerberos.  # noqa: E501
        :type: bool
        """

        self._always_send_tokens = always_send_tokens

    @property
    def user_identity(self):
        """Gets the user_identity of this ResourceServerIdentityHeadersKerberos.  # noqa: E501


        :return: The user_identity of this ResourceServerIdentityHeadersKerberos.  # noqa: E501
        :rtype: ResourceServerIdentityHeadersKerberosUserIdentity
        """
        return self._user_identity

    @user_identity.setter
    def user_identity(self, user_identity):
        """Sets the user_identity of this ResourceServerIdentityHeadersKerberos.


        :param user_identity: The user_identity of this ResourceServerIdentityHeadersKerberos.  # noqa: E501
        :type: ResourceServerIdentityHeadersKerberosUserIdentity
        """

        self._user_identity = user_identity

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
        if not isinstance(other, ResourceServerIdentityHeadersKerberos):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersKerberos):
            return True

        return self.to_dict() != other.to_dict()
