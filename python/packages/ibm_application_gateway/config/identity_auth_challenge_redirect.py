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

class IdentityAuthChallengeRedirect(object):
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
        'url': 'str',
        'parameters': 'list[IdentityAuthChallengeRedirectParameters]'
    }

    attribute_map = {
        'url': 'url',
        'parameters': 'parameters'
    }

    def __init__(self, url=None, parameters=None):  # noqa: E501
        """IdentityAuthChallengeRedirect - a model defined in OpenAPI"""  # noqa: E501

        self._url = None
        self._parameters = None
        self.discriminator = None

        if url is not None:
            self.url = url
        if parameters is not None:
            self.parameters = parameters

    @property
    def url(self):
        """Gets the url of this IdentityAuthChallengeRedirect.  # noqa: E501

        The URI which a client will be redirected to in order to start the authentication process. This URI can be absolute or server relative.   # noqa: E501

        :return: The url of this IdentityAuthChallengeRedirect.  # noqa: E501
        :rtype: str
        """
        return self._url

    @url.setter
    def url(self, url):
        """Sets the url of this IdentityAuthChallengeRedirect.

        The URI which a client will be redirected to in order to start the authentication process. This URI can be absolute or server relative.   # noqa: E501

        :param url: The url of this IdentityAuthChallengeRedirect.  # noqa: E501
        :type: str
        """

        self._url = url

    @property
    def parameters(self):
        """Gets the parameters of this IdentityAuthChallengeRedirect.  # noqa: E501

        Additional parameters which can be included in the redirect URI as query string arguments.   # noqa: E501

        :return: The parameters of this IdentityAuthChallengeRedirect.  # noqa: E501
        :rtype: list[IdentityAuthChallengeRedirectParameters]
        """
        return self._parameters

    @parameters.setter
    def parameters(self, parameters):
        """Sets the parameters of this IdentityAuthChallengeRedirect.

        Additional parameters which can be included in the redirect URI as query string arguments.   # noqa: E501

        :param parameters: The parameters of this IdentityAuthChallengeRedirect.  # noqa: E501
        :type: list[IdentityAuthChallengeRedirectParameters]
        """

        self._parameters = parameters

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
        if not isinstance(other, IdentityAuthChallengeRedirect):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, IdentityAuthChallengeRedirect):
            return True

        return self.to_dict() != other.to_dict()
