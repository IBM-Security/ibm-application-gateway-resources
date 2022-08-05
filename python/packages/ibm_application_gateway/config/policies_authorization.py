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

class PoliciesAuthorization(object):
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
        'host': 'str',
        'paths': 'list[str]',
        'methods': 'list[str]',
        'rule': 'str',
        'action': 'str',
        'obligation': 'PoliciesObligation'
    }

    attribute_map = {
        'name': 'name',
        'host': 'host',
        'paths': 'paths',
        'methods': 'methods',
        'rule': 'rule',
        'action': 'action',
        'obligation': 'obligation'
    }

    def __init__(self, name=None, host=None, paths=None, methods=None, rule=None, action=None, obligation=None):  # noqa: E501
        """PoliciesAuthorization - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._host = None
        self._paths = None
        self._methods = None
        self._rule = None
        self._action = None
        self._obligation = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if host is not None:
            self.host = host
        if paths is not None:
            self.paths = paths
        if methods is not None:
            self.methods = methods
        if rule is not None:
            self.rule = rule
        if action is not None:
            self.action = action
        if obligation is not None:
            self.obligation = obligation

    @property
    def name(self):
        """Gets the name of this PoliciesAuthorization.  # noqa: E501

        A name for this policy, which is used to refer to this policy in audit events.   # noqa: E501

        :return: The name of this PoliciesAuthorization.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this PoliciesAuthorization.

        A name for this policy, which is used to refer to this policy in audit events.   # noqa: E501

        :param name: The name of this PoliciesAuthorization.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def host(self):
        """Gets the host of this PoliciesAuthorization.  # noqa: E501

        The host (obtained from the host header in the request) for which this policy will be applied. If no host header is specified all hosts will be matched.   # noqa: E501

        :return: The host of this PoliciesAuthorization.  # noqa: E501
        :rtype: str
        """
        return self._host

    @host.setter
    def host(self, host):
        """Sets the host of this PoliciesAuthorization.

        The host (obtained from the host header in the request) for which this policy will be applied. If no host header is specified all hosts will be matched.   # noqa: E501

        :param host: The host of this PoliciesAuthorization.  # noqa: E501
        :type: str
        """

        self._host = host

    @property
    def paths(self):
        """Gets the paths of this PoliciesAuthorization.  # noqa: E501

        The paths which this policy will be applied. Each path may contain the `*?` pattern matching characters. This entry is an array and can be used to specify multiple paths.   # noqa: E501

        :return: The paths of this PoliciesAuthorization.  # noqa: E501
        :rtype: list[str]
        """
        return self._paths

    @paths.setter
    def paths(self, paths):
        """Sets the paths of this PoliciesAuthorization.

        The paths which this policy will be applied. Each path may contain the `*?` pattern matching characters. This entry is an array and can be used to specify multiple paths.   # noqa: E501

        :param paths: The paths of this PoliciesAuthorization.  # noqa: E501
        :type: list[str]
        """

        self._paths = paths

    @property
    def methods(self):
        """Gets the methods of this PoliciesAuthorization.  # noqa: E501

        The method(s) which this policy applies to. If this is not defined, the policy will apply to all methods.   # noqa: E501

        :return: The methods of this PoliciesAuthorization.  # noqa: E501
        :rtype: list[str]
        """
        return self._methods

    @methods.setter
    def methods(self, methods):
        """Sets the methods of this PoliciesAuthorization.

        The method(s) which this policy applies to. If this is not defined, the policy will apply to all methods.   # noqa: E501

        :param methods: The methods of this PoliciesAuthorization.  # noqa: E501
        :type: list[str]
        """

        self._methods = methods

    @property
    def rule(self):
        """Gets the rule of this PoliciesAuthorization.  # noqa: E501

        If a rule string is not defined here, the gateway will look for a named rule (with the same name as this policy) in the authorization section of the configuration YAML. Refer to the authorization section of this template for an explanation of rule syntax. The predefined rules anyuser or anyauth can also be referenced here.   # noqa: E501

        :return: The rule of this PoliciesAuthorization.  # noqa: E501
        :rtype: str
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this PoliciesAuthorization.

        If a rule string is not defined here, the gateway will look for a named rule (with the same name as this policy) in the authorization section of the configuration YAML. Refer to the authorization section of this template for an explanation of rule syntax. The predefined rules anyuser or anyauth can also be referenced here.   # noqa: E501

        :param rule: The rule of this PoliciesAuthorization.  # noqa: E501
        :type: str
        """

        self._rule = rule

    @property
    def action(self):
        """Gets the action of this PoliciesAuthorization.  # noqa: E501

        Defines the action to perform if the rule matches. If the action is obligate, the obligation property must also be set for this authorization rule.   # noqa: E501

        :return: The action of this PoliciesAuthorization.  # noqa: E501
        :rtype: str
        """
        return self._action

    @action.setter
    def action(self, action):
        """Sets the action of this PoliciesAuthorization.

        Defines the action to perform if the rule matches. If the action is obligate, the obligation property must also be set for this authorization rule.   # noqa: E501

        :param action: The action of this PoliciesAuthorization.  # noqa: E501
        :type: str
        """
        allowed_values = ["permit", "deny", "obligate", "reauth"]  # noqa: E501
        if action not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `action` ({0}), must be one of {1}"  # noqa: E501
                .format(action, allowed_values)
            )

        self._action = action

    @property
    def obligation(self):
        """Gets the obligation of this PoliciesAuthorization.  # noqa: E501


        :return: The obligation of this PoliciesAuthorization.  # noqa: E501
        :rtype: PoliciesObligation
        """
        return self._obligation

    @obligation.setter
    def obligation(self, obligation):
        """Sets the obligation of this PoliciesAuthorization.


        :param obligation: The obligation of this PoliciesAuthorization.  # noqa: E501
        :type: PoliciesObligation
        """

        self._obligation = obligation

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
        if not isinstance(other, PoliciesAuthorization):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesAuthorization):
            return True

        return self.to_dict() != other.to_dict()
