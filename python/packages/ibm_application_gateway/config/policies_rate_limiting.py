# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 25.06
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class PoliciesRateLimiting(object):
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
        'name': 'str',
        'methods': 'list[str]',
        'paths': 'list[str]',
        'rule': 'str'
    }

    attribute_map = {
        'name': 'name',
        'methods': 'methods',
        'paths': 'paths',
        'rule': 'rule'
    }

    def __init__(self, name=None, methods=None, paths=None, rule=None):  # noqa: E501
        """PoliciesRateLimiting - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._methods = None
        self._paths = None
        self._rule = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if methods is not None:
            self.methods = methods
        if paths is not None:
            self.paths = paths
        if rule is not None:
            self.rule = rule

    @property
    def name(self):
        """Gets the name of this PoliciesRateLimiting.  # noqa: E501

        The name to be associated with this rate limiting rule.   # noqa: E501

        :return: The name of this PoliciesRateLimiting.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this PoliciesRateLimiting.

        The name to be associated with this rate limiting rule.   # noqa: E501

        :param name: The name of this PoliciesRateLimiting.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def methods(self):
        """Gets the methods of this PoliciesRateLimiting.  # noqa: E501

        The methods to which this rate limiting rule will be applied. If the wildcard \"*\" is specified all methods will be matched.   # noqa: E501

        :return: The methods of this PoliciesRateLimiting.  # noqa: E501
        :rtype: list[str]
        """
        return self._methods

    @methods.setter
    def methods(self, methods):
        """Sets the methods of this PoliciesRateLimiting.

        The methods to which this rate limiting rule will be applied. If the wildcard \"*\" is specified all methods will be matched.   # noqa: E501

        :param methods: The methods of this PoliciesRateLimiting.  # noqa: E501
        :type: list[str]
        """

        self._methods = methods

    @property
    def paths(self):
        """Gets the paths of this PoliciesRateLimiting.  # noqa: E501

        The paths to which this rate limiting rule will be applied. The path supports wildcards. This entry is an array and can be used to specify multiple paths. Note that the policy will be duplicated and applied for each specified path, multiple paths do not share a common request bucket. To share a common request bucket for multiple paths, provide a single path pattern which matches all required paths.   # noqa: E501

        :return: The paths of this PoliciesRateLimiting.  # noqa: E501
        :rtype: list[str]
        """
        return self._paths

    @paths.setter
    def paths(self, paths):
        """Sets the paths of this PoliciesRateLimiting.

        The paths to which this rate limiting rule will be applied. The path supports wildcards. This entry is an array and can be used to specify multiple paths. Note that the policy will be duplicated and applied for each specified path, multiple paths do not share a common request bucket. To share a common request bucket for multiple paths, provide a single path pattern which matches all required paths.   # noqa: E501

        :param paths: The paths of this PoliciesRateLimiting.  # noqa: E501
        :type: list[str]
        """

        self._paths = paths

    @property
    def rule(self):
        """Gets the rule of this PoliciesRateLimiting.  # noqa: E501

        The rate limiting rule.   # noqa: E501

        :return: The rule of this PoliciesRateLimiting.  # noqa: E501
        :rtype: str
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this PoliciesRateLimiting.

        The rate limiting rule.   # noqa: E501

        :param rule: The rule of this PoliciesRateLimiting.  # noqa: E501
        :type: str
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
        if not isinstance(other, PoliciesRateLimiting):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesRateLimiting):
            return True

        return self.to_dict() != other.to_dict()
