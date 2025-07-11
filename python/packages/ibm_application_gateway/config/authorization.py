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

class Authorization(object):
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
        'rules': 'list[AuthorizationRules]'
    }

    attribute_map = {
        'rules': 'rules'
    }

    def __init__(self, rules=None):  # noqa: E501
        """Authorization - a model defined in OpenAPI"""  # noqa: E501

        self._rules = None
        self.discriminator = None

        if rules is not None:
            self.rules = rules

    @property
    def rules(self):
        """Gets the rules of this Authorization.  # noqa: E501

        The gateway can apply authorization rules to incoming requests. These rules can be either:   * Defined directly in a policies:authorization entry.   * Defined here in the authorization section and reference by name in a policies:authorization entry.  This entry defines authorization rules which can be referred to by name in a policies/authorization entry.  This entry is an array and can be used to specify multiple rules.  ### Rule Format  Authorization rules are composed of credential attributes and the following operators:  Name | Values ---- | ------ logical operators | and, or, not multi-valued operators | any, all relational operators | =, !=, matches, >, >=, <, <=, exists  Parenthesis can be used for controlling the order of evaluation.  Examples:  Rule | Description ---- | ----------- (any groupIds = \"administrator\") | Match when the user is in the administrator group. (all authenticationLevels >= \"2\") | Match when all credential authenticationLevels are at least level 2. (attribute_a matches \"a(?:bc)*\") | Match when the value of the credential attribute \"attribute_a\" matches the regular expression. (level >= \"2\") and (any groupIds = \"forbidden\") | Match when the credential attribute \"level\" is at least level 2 and the user is in the forbidden group. (not exists attribute_c) | Match when the credential does not have an attribute named \"attribute_c\". (AZN_CRED_PRINCIPAL_NAME = \"user_a\") | Match when the credential attribute \"AZN_CRED_PRINCIPAL_NAME\" is equal to \"user_a\".   # noqa: E501

        :return: The rules of this Authorization.  # noqa: E501
        :rtype: list[AuthorizationRules]
        """
        return self._rules

    @rules.setter
    def rules(self, rules):
        """Sets the rules of this Authorization.

        The gateway can apply authorization rules to incoming requests. These rules can be either:   * Defined directly in a policies:authorization entry.   * Defined here in the authorization section and reference by name in a policies:authorization entry.  This entry defines authorization rules which can be referred to by name in a policies/authorization entry.  This entry is an array and can be used to specify multiple rules.  ### Rule Format  Authorization rules are composed of credential attributes and the following operators:  Name | Values ---- | ------ logical operators | and, or, not multi-valued operators | any, all relational operators | =, !=, matches, >, >=, <, <=, exists  Parenthesis can be used for controlling the order of evaluation.  Examples:  Rule | Description ---- | ----------- (any groupIds = \"administrator\") | Match when the user is in the administrator group. (all authenticationLevels >= \"2\") | Match when all credential authenticationLevels are at least level 2. (attribute_a matches \"a(?:bc)*\") | Match when the value of the credential attribute \"attribute_a\" matches the regular expression. (level >= \"2\") and (any groupIds = \"forbidden\") | Match when the credential attribute \"level\" is at least level 2 and the user is in the forbidden group. (not exists attribute_c) | Match when the credential does not have an attribute named \"attribute_c\". (AZN_CRED_PRINCIPAL_NAME = \"user_a\") | Match when the credential attribute \"AZN_CRED_PRINCIPAL_NAME\" is equal to \"user_a\".   # noqa: E501

        :param rules: The rules of this Authorization.  # noqa: E501
        :type: list[AuthorizationRules]
        """

        self._rules = rules

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
        if not isinstance(other, Authorization):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Authorization):
            return True

        return self.to_dict() != other.to_dict()
