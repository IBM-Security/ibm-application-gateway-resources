# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.04
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerHealthPing(object):
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
        'method': 'str',
        'url': 'str',
        'policy': 'ResourceServerHealthPingPolicy',
        'rule': 'list[str]'
    }

    attribute_map = {
        'method': 'method',
        'url': 'url',
        'policy': 'policy',
        'rule': 'rule'
    }

    def __init__(self, method=None, url=None, policy=None, rule=None):  # noqa: E501
        """ResourceServerHealthPing - a model defined in OpenAPI"""  # noqa: E501

        self._method = None
        self._url = None
        self._policy = None
        self._rule = None
        self.discriminator = None

        if method is not None:
            self.method = method
        if url is not None:
            self.url = url
        if policy is not None:
            self.policy = policy
        if rule is not None:
            self.rule = rule

    @property
    def method(self):
        """Gets the method of this ResourceServerHealthPing.  # noqa: E501

        The HTTP method which will be used in the ping request.   # noqa: E501

        :return: The method of this ResourceServerHealthPing.  # noqa: E501
        :rtype: str
        """
        return self._method

    @method.setter
    def method(self, method):
        """Sets the method of this ResourceServerHealthPing.

        The HTTP method which will be used in the ping request.   # noqa: E501

        :param method: The method of this ResourceServerHealthPing.  # noqa: E501
        :type: str
        """

        self._method = method

    @property
    def url(self):
        """Gets the url of this ResourceServerHealthPing.  # noqa: E501

        The URL to which the ping request will be sent.   # noqa: E501

        :return: The url of this ResourceServerHealthPing.  # noqa: E501
        :rtype: str
        """
        return self._url

    @url.setter
    def url(self, url):
        """Sets the url of this ResourceServerHealthPing.

        The URL to which the ping request will be sent.   # noqa: E501

        :param url: The url of this ResourceServerHealthPing.  # noqa: E501
        :type: str
        """

        self._url = url

    @property
    def policy(self):
        """Gets the policy of this ResourceServerHealthPing.  # noqa: E501


        :return: The policy of this ResourceServerHealthPing.  # noqa: E501
        :rtype: ResourceServerHealthPingPolicy
        """
        return self._policy

    @policy.setter
    def policy(self, policy):
        """Sets the policy of this ResourceServerHealthPing.


        :param policy: The policy of this ResourceServerHealthPing.  # noqa: E501
        :type: ResourceServerHealthPingPolicy
        """

        self._policy = policy

    @property
    def rule(self):
        """Gets the rule of this ResourceServerHealthPing.  # noqa: E501

        Regular (client initiated) requests can also be observed to determine the resource server health. This entry is an ordered list of rules based on the response status codes. Status codes prefixed with a '+' are considered healthy, and codes prefixed with '-' unhealthy. The wildcard characters '*' and '?' can be used.   # noqa: E501

        :return: The rule of this ResourceServerHealthPing.  # noqa: E501
        :rtype: list[str]
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this ResourceServerHealthPing.

        Regular (client initiated) requests can also be observed to determine the resource server health. This entry is an ordered list of rules based on the response status codes. Status codes prefixed with a '+' are considered healthy, and codes prefixed with '-' unhealthy. The wildcard characters '*' and '?' can be used.   # noqa: E501

        :param rule: The rule of this ResourceServerHealthPing.  # noqa: E501
        :type: list[str]
        """

        self._rule = rule

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
        if not isinstance(other, ResourceServerHealthPing):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerHealthPing):
            return True

        return self.to_dict() != other.to_dict()
