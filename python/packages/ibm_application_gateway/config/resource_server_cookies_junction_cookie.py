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

class ResourceServerCookiesJunctionCookie(object):
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
        'position': 'str',
        'version': 'str',
        'ensure_unique': 'bool',
        'preserve_name': 'bool'
    }

    attribute_map = {
        'position': 'position',
        'version': 'version',
        'ensure_unique': 'ensure_unique',
        'preserve_name': 'preserve_name'
    }

    def __init__(self, position=None, version=None, ensure_unique=False, preserve_name=False):  # noqa: E501
        """ResourceServerCookiesJunctionCookie - a model defined in OpenAPI"""  # noqa: E501

        self._position = None
        self._version = None
        self._ensure_unique = None
        self._preserve_name = None
        self.discriminator = None

        if position is not None:
            self.position = position
        if version is not None:
            self.version = version
        if ensure_unique is not None:
            self.ensure_unique = ensure_unique
        if preserve_name is not None:
            self.preserve_name = preserve_name

    @property
    def position(self):
        """Gets the position of this ResourceServerCookiesJunctionCookie.  # noqa: E501

        Controls the position in which the \\<script\\> block will be inserted. Refer to the Junction Cookie Positions table above for an explanation of these values.   # noqa: E501

        :return: The position of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :rtype: str
        """
        return self._position

    @position.setter
    def position(self, position):
        """Sets the position of this ResourceServerCookiesJunctionCookie.

        Controls the position in which the \\<script\\> block will be inserted. Refer to the Junction Cookie Positions table above for an explanation of these values.   # noqa: E501

        :param position: The position of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :type: str
        """
        allowed_values = ["inhead", "trailer", "httpheader"]  # noqa: E501
        if position not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `position` ({0}), must be one of {1}"  # noqa: E501
                .format(position, allowed_values)
            )

        self._position = position

    @property
    def version(self):
        """Gets the version of this ResourceServerCookiesJunctionCookie.  # noqa: E501

        Controls how the cookie is set. This option is only valid for the **inhead** and **trailer** positions. Refer to the Junction Cookie Versions table above for an explanation of these values.   # noqa: E501

        :return: The version of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this ResourceServerCookiesJunctionCookie.

        Controls how the cookie is set. This option is only valid for the **inhead** and **trailer** positions. Refer to the Junction Cookie Versions table above for an explanation of these values.   # noqa: E501

        :param version: The version of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :type: str
        """
        allowed_values = ["onfocus", "xhtml10"]  # noqa: E501
        if version not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `version` ({0}), must be one of {1}"  # noqa: E501
                .format(version, allowed_values)
            )

        self._version = version

    @property
    def ensure_unique(self):
        """Gets the ensure_unique of this ResourceServerCookiesJunctionCookie.  # noqa: E501

        A boolean flag indicating whether or not to insert the resource server path or host to ensure that the cookie is unique.   # noqa: E501

        :return: The ensure_unique of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :rtype: bool
        """
        return self._ensure_unique

    @ensure_unique.setter
    def ensure_unique(self, ensure_unique):
        """Sets the ensure_unique of this ResourceServerCookiesJunctionCookie.

        A boolean flag indicating whether or not to insert the resource server path or host to ensure that the cookie is unique.   # noqa: E501

        :param ensure_unique: The ensure_unique of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :type: bool
        """

        self._ensure_unique = ensure_unique

    @property
    def preserve_name(self):
        """Gets the preserve_name of this ResourceServerCookiesJunctionCookie.  # noqa: E501

        A boolean flag indicating whether or not to preserve the original cookie name. When set to false, non-domain cookies are renamed AMWEBJCT!\\<path\\>.   # noqa: E501

        :return: The preserve_name of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :rtype: bool
        """
        return self._preserve_name

    @preserve_name.setter
    def preserve_name(self, preserve_name):
        """Sets the preserve_name of this ResourceServerCookiesJunctionCookie.

        A boolean flag indicating whether or not to preserve the original cookie name. When set to false, non-domain cookies are renamed AMWEBJCT!\\<path\\>.   # noqa: E501

        :param preserve_name: The preserve_name of this ResourceServerCookiesJunctionCookie.  # noqa: E501
        :type: bool
        """

        self._preserve_name = preserve_name

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
        if not isinstance(other, ResourceServerCookiesJunctionCookie):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerCookiesJunctionCookie):
            return True

        return self.to_dict() != other.to_dict()
