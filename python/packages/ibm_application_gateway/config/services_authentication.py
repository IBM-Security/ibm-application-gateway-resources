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

class ServicesAuthentication(object):
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
        'sso': 'ServicesAuthenticationSso',
        'access_token': 'ServicesAuthenticationAccessToken',
        'ba': 'ServicesAuthenticationBa'
    }

    attribute_map = {
        'sso': 'sso',
        'access_token': 'access_token',
        'ba': 'ba'
    }

    def __init__(self, sso=None, access_token=None, ba=None):  # noqa: E501
        """ServicesAuthentication - a model defined in OpenAPI"""  # noqa: E501

        self._sso = None
        self._access_token = None
        self._ba = None
        self.discriminator = None

        if sso is not None:
            self.sso = sso
        if access_token is not None:
            self.access_token = access_token
        if ba is not None:
            self.ba = ba

    @property
    def sso(self):
        """Gets the sso of this ServicesAuthentication.  # noqa: E501


        :return: The sso of this ServicesAuthentication.  # noqa: E501
        :rtype: ServicesAuthenticationSso
        """
        return self._sso

    @sso.setter
    def sso(self, sso):
        """Sets the sso of this ServicesAuthentication.


        :param sso: The sso of this ServicesAuthentication.  # noqa: E501
        :type: ServicesAuthenticationSso
        """

        self._sso = sso

    @property
    def access_token(self):
        """Gets the access_token of this ServicesAuthentication.  # noqa: E501


        :return: The access_token of this ServicesAuthentication.  # noqa: E501
        :rtype: ServicesAuthenticationAccessToken
        """
        return self._access_token

    @access_token.setter
    def access_token(self, access_token):
        """Sets the access_token of this ServicesAuthentication.


        :param access_token: The access_token of this ServicesAuthentication.  # noqa: E501
        :type: ServicesAuthenticationAccessToken
        """

        self._access_token = access_token

    @property
    def ba(self):
        """Gets the ba of this ServicesAuthentication.  # noqa: E501


        :return: The ba of this ServicesAuthentication.  # noqa: E501
        :rtype: ServicesAuthenticationBa
        """
        return self._ba

    @ba.setter
    def ba(self, ba):
        """Sets the ba of this ServicesAuthentication.


        :param ba: The ba of this ServicesAuthentication.  # noqa: E501
        :type: ServicesAuthenticationBa
        """

        self._ba = ba

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
        if not isinstance(other, ServicesAuthentication):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServicesAuthentication):
            return True

        return self.to_dict() != other.to_dict()
