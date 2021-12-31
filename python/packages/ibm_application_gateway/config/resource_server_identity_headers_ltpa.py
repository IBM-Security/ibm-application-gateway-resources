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

class ResourceServerIdentityHeadersLtpa(object):
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
        'key': 'str',
        'key_password': 'str',
        'version': 'float'
    }

    attribute_map = {
        'key': 'key',
        'key_password': 'key_password',
        'version': 'version'
    }

    def __init__(self, key=None, key_password=None, version=1):  # noqa: E501
        """ResourceServerIdentityHeadersLtpa - a model defined in OpenAPI"""  # noqa: E501

        self._key = None
        self._key_password = None
        self._version = None
        self.discriminator = None

        if key is not None:
            self.key = key
        if key_password is not None:
            self.key_password = key_password
        if version is not None:
            self.version = version

    @property
    def key(self):
        """Gets the key of this ResourceServerIdentityHeadersLtpa.  # noqa: E501

        The key which is used to protect the LTPA token.  This key must be in the correct proprietary format for an LTPA key.   # noqa: E501

        :return: The key of this ResourceServerIdentityHeadersLtpa.  # noqa: E501
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key):
        """Sets the key of this ResourceServerIdentityHeadersLtpa.

        The key which is used to protect the LTPA token.  This key must be in the correct proprietary format for an LTPA key.   # noqa: E501

        :param key: The key of this ResourceServerIdentityHeadersLtpa.  # noqa: E501
        :type: str
        """

        self._key = key

    @property
    def key_password(self):
        """Gets the key_password of this ResourceServerIdentityHeadersLtpa.  # noqa: E501

        The password which is used to access the LTPA key.   # noqa: E501

        :return: The key_password of this ResourceServerIdentityHeadersLtpa.  # noqa: E501
        :rtype: str
        """
        return self._key_password

    @key_password.setter
    def key_password(self, key_password):
        """Sets the key_password of this ResourceServerIdentityHeadersLtpa.

        The password which is used to access the LTPA key.   # noqa: E501

        :param key_password: The key_password of this ResourceServerIdentityHeadersLtpa.  # noqa: E501
        :type: str
        """

        self._key_password = key_password

    @property
    def version(self):
        """Gets the version of this ResourceServerIdentityHeadersLtpa.  # noqa: E501

        The version of the LTPA token to create.  Valid versions are 1 or 2, with a default of 1.   # noqa: E501

        :return: The version of this ResourceServerIdentityHeadersLtpa.  # noqa: E501
        :rtype: float
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this ResourceServerIdentityHeadersLtpa.

        The version of the LTPA token to create.  Valid versions are 1 or 2, with a default of 1.   # noqa: E501

        :param version: The version of this ResourceServerIdentityHeadersLtpa.  # noqa: E501
        :type: float
        """
        if (version is not None and version > 2):  # noqa: E501
            raise ValueError("Invalid value for `version`, must be a value less than or equal to `2`")  # noqa: E501
        if (version is not None and version < 1):  # noqa: E501
            raise ValueError("Invalid value for `version`, must be a value greater than or equal to `1`")  # noqa: E501

        self._version = version

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
        if not isinstance(other, ResourceServerIdentityHeadersLtpa):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersLtpa):
            return True

        return self.to_dict() != other.to_dict()
