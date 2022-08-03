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

class ResourceServerIdentityHeadersKerberosUserIdentity(object):
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
        'username': 'str',
        'realm': 'str'
    }

    attribute_map = {
        'username': 'username',
        'realm': 'realm'
    }

    def __init__(self, username=None, realm=None):  # noqa: E501
        """ResourceServerIdentityHeadersKerberosUserIdentity - a model defined in OpenAPI"""  # noqa: E501

        self._username = None
        self._realm = None
        self.discriminator = None

        if username is not None:
            self.username = username
        if realm is not None:
            self.realm = realm

    @property
    def username(self):
        """Gets the username of this ResourceServerIdentityHeadersKerberosUserIdentity.  # noqa: E501

        An administrator can overwrite the UPN or sections of the UPN for Kerberos constrained delegation users with this entry. The replacement information can be either plain text or names of credential attributes that store the required information. If you specify plain text, the text is directly copied into the UPN sections. If you specify names of credential attributes by surrounding the text with braces eg. `{preferred_username}`, the replacement text is fetched from the value of the corresponding credential attribute.   # noqa: E501

        :return: The username of this ResourceServerIdentityHeadersKerberosUserIdentity.  # noqa: E501
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this ResourceServerIdentityHeadersKerberosUserIdentity.

        An administrator can overwrite the UPN or sections of the UPN for Kerberos constrained delegation users with this entry. The replacement information can be either plain text or names of credential attributes that store the required information. If you specify plain text, the text is directly copied into the UPN sections. If you specify names of credential attributes by surrounding the text with braces eg. `{preferred_username}`, the replacement text is fetched from the value of the corresponding credential attribute.   # noqa: E501

        :param username: The username of this ResourceServerIdentityHeadersKerberosUserIdentity.  # noqa: E501
        :type: str
        """

        self._username = username

    @property
    def realm(self):
        """Gets the realm of this ResourceServerIdentityHeadersKerberosUserIdentity.  # noqa: E501

        The realm to append to the client credential for Kerberos constrained delegation. The realm value must be uppercase. Any input data that is not uppercase is automatically converted to uppercase. The realm must also be added as a realm to the Kerberos configuration in the Services module.   # noqa: E501

        :return: The realm of this ResourceServerIdentityHeadersKerberosUserIdentity.  # noqa: E501
        :rtype: str
        """
        return self._realm

    @realm.setter
    def realm(self, realm):
        """Sets the realm of this ResourceServerIdentityHeadersKerberosUserIdentity.

        The realm to append to the client credential for Kerberos constrained delegation. The realm value must be uppercase. Any input data that is not uppercase is automatically converted to uppercase. The realm must also be added as a realm to the Kerberos configuration in the Services module.   # noqa: E501

        :param realm: The realm of this ResourceServerIdentityHeadersKerberosUserIdentity.  # noqa: E501
        :type: str
        """

        self._realm = realm

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
        if not isinstance(other, ResourceServerIdentityHeadersKerberosUserIdentity):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersKerberosUserIdentity):
            return True

        return self.to_dict() != other.to_dict()