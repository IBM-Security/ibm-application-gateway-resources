# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class PoliciesHttpTransformationRule(object):
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
        'method': 'str',
        'rule': 'str',
        'attributes': 'list[str]'
    }

    attribute_map = {
        'name': 'name',
        'host': 'host',
        'paths': 'paths',
        'method': 'method',
        'rule': 'rule',
        'attributes': 'attributes'
    }

    def __init__(self, name=None, host=None, paths=None, method=None, rule=None, attributes=None):  # noqa: E501
        """PoliciesHttpTransformationRule - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._host = None
        self._paths = None
        self._method = None
        self._rule = None
        self._attributes = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if host is not None:
            self.host = host
        if paths is not None:
            self.paths = paths
        if method is not None:
            self.method = method
        if rule is not None:
            self.rule = rule
        if attributes is not None:
            self.attributes = attributes

    @property
    def name(self):
        """Gets the name of this PoliciesHttpTransformationRule.  # noqa: E501

        The name which is associated with this transformation.   # noqa: E501

        :return: The name of this PoliciesHttpTransformationRule.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this PoliciesHttpTransformationRule.

        The name which is associated with this transformation.   # noqa: E501

        :param name: The name of this PoliciesHttpTransformationRule.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def host(self):
        """Gets the host of this PoliciesHttpTransformationRule.  # noqa: E501

        The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.   # noqa: E501

        :return: The host of this PoliciesHttpTransformationRule.  # noqa: E501
        :rtype: str
        """
        return self._host

    @host.setter
    def host(self, host):
        """Sets the host of this PoliciesHttpTransformationRule.

        The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.   # noqa: E501

        :param host: The host of this PoliciesHttpTransformationRule.  # noqa: E501
        :type: str
        """

        self._host = host

    @property
    def paths(self):
        """Gets the paths of this PoliciesHttpTransformationRule.  # noqa: E501

        The paths for which this transformation will take place. If the wildcard \"*\" is specified all paths will be matched.  This entry is an array and can  be used to specify multiple paths.   # noqa: E501

        :return: The paths of this PoliciesHttpTransformationRule.  # noqa: E501
        :rtype: list[str]
        """
        return self._paths

    @paths.setter
    def paths(self, paths):
        """Sets the paths of this PoliciesHttpTransformationRule.

        The paths for which this transformation will take place. If the wildcard \"*\" is specified all paths will be matched.  This entry is an array and can  be used to specify multiple paths.   # noqa: E501

        :param paths: The paths of this PoliciesHttpTransformationRule.  # noqa: E501
        :type: list[str]
        """

        self._paths = paths

    @property
    def method(self):
        """Gets the method of this PoliciesHttpTransformationRule.  # noqa: E501

        The HTTP method for which this transformation will take place. If the wildcard \"*\" is specified all methods will be matched.   # noqa: E501

        :return: The method of this PoliciesHttpTransformationRule.  # noqa: E501
        :rtype: str
        """
        return self._method

    @method.setter
    def method(self, method):
        """Sets the method of this PoliciesHttpTransformationRule.

        The HTTP method for which this transformation will take place. If the wildcard \"*\" is specified all methods will be matched.   # noqa: E501

        :param method: The method of this PoliciesHttpTransformationRule.  # noqa: E501
        :type: str
        """

        self._method = method

    @property
    def rule(self):
        """Gets the rule of this PoliciesHttpTransformationRule.  # noqa: E501

        The HTTP transformation rule.   # noqa: E501

        :return: The rule of this PoliciesHttpTransformationRule.  # noqa: E501
        :rtype: str
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this PoliciesHttpTransformationRule.

        The HTTP transformation rule.   # noqa: E501

        :param rule: The rule of this PoliciesHttpTransformationRule.  # noqa: E501
        :type: str
        """

        self._rule = rule

    @property
    def attributes(self):
        """Gets the attributes of this PoliciesHttpTransformationRule.  # noqa: E501

        The credential attributes which will be included in the XML input document, used when evaluating the HTTP transformation rule.  The attributes will be stored in the  HTTPResponse/credential/attributes/attribute path of the  XML document.   # noqa: E501

        :return: The attributes of this PoliciesHttpTransformationRule.  # noqa: E501
        :rtype: list[str]
        """
        return self._attributes

    @attributes.setter
    def attributes(self, attributes):
        """Sets the attributes of this PoliciesHttpTransformationRule.

        The credential attributes which will be included in the XML input document, used when evaluating the HTTP transformation rule.  The attributes will be stored in the  HTTPResponse/credential/attributes/attribute path of the  XML document.   # noqa: E501

        :param attributes: The attributes of this PoliciesHttpTransformationRule.  # noqa: E501
        :type: list[str]
        """

        self._attributes = attributes

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
        if not isinstance(other, PoliciesHttpTransformationRule):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesHttpTransformationRule):
            return True

        return self.to_dict() != other.to_dict()
