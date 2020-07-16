# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.07
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerHealthPingPolicy(object):
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
        'frequency': 'float',
        'threshold': 'float',
        'recovery': 'ResourceServerHealthPingPolicyRecovery',
        'timeout': 'float',
        'rule': 'list[str]'
    }

    attribute_map = {
        'frequency': 'frequency',
        'threshold': 'threshold',
        'recovery': 'recovery',
        'timeout': 'timeout',
        'rule': 'rule'
    }

    def __init__(self, frequency=300, threshold=1, recovery=None, timeout=None, rule=None):  # noqa: E501
        """ResourceServerHealthPingPolicy - a model defined in OpenAPI"""  # noqa: E501

        self._frequency = None
        self._threshold = None
        self._recovery = None
        self._timeout = None
        self._rule = None
        self.discriminator = None

        if frequency is not None:
            self.frequency = frequency
        if threshold is not None:
            self.threshold = threshold
        if recovery is not None:
            self.recovery = recovery
        if timeout is not None:
            self.timeout = timeout
        if rule is not None:
            self.rule = rule

    @property
    def frequency(self):
        """Gets the frequency of this ResourceServerHealthPingPolicy.  # noqa: E501

        The frequency (in seconds) which ping requests will be sent. If set to 0 the ping will be disabled.   # noqa: E501

        :return: The frequency of this ResourceServerHealthPingPolicy.  # noqa: E501
        :rtype: float
        """
        return self._frequency

    @frequency.setter
    def frequency(self, frequency):
        """Sets the frequency of this ResourceServerHealthPingPolicy.

        The frequency (in seconds) which ping requests will be sent. If set to 0 the ping will be disabled.   # noqa: E501

        :param frequency: The frequency of this ResourceServerHealthPingPolicy.  # noqa: E501
        :type: float
        """
        if (frequency is not None and frequency < 0):  # noqa: E501
            raise ValueError("Invalid value for `frequency`, must be a value greater than or equal to `0`")  # noqa: E501

        self._frequency = frequency

    @property
    def threshold(self):
        """Gets the threshold of this ResourceServerHealthPingPolicy.  # noqa: E501

        Specifies how many consecutive times the ping must fail before the resource server is considered  unhealthy.   # noqa: E501

        :return: The threshold of this ResourceServerHealthPingPolicy.  # noqa: E501
        :rtype: float
        """
        return self._threshold

    @threshold.setter
    def threshold(self, threshold):
        """Sets the threshold of this ResourceServerHealthPingPolicy.

        Specifies how many consecutive times the ping must fail before the resource server is considered  unhealthy.   # noqa: E501

        :param threshold: The threshold of this ResourceServerHealthPingPolicy.  # noqa: E501
        :type: float
        """
        if (threshold is not None and threshold < 1):  # noqa: E501
            raise ValueError("Invalid value for `threshold`, must be a value greater than or equal to `1`")  # noqa: E501

        self._threshold = threshold

    @property
    def recovery(self):
        """Gets the recovery of this ResourceServerHealthPingPolicy.  # noqa: E501


        :return: The recovery of this ResourceServerHealthPingPolicy.  # noqa: E501
        :rtype: ResourceServerHealthPingPolicyRecovery
        """
        return self._recovery

    @recovery.setter
    def recovery(self, recovery):
        """Sets the recovery of this ResourceServerHealthPingPolicy.


        :param recovery: The recovery of this ResourceServerHealthPingPolicy.  # noqa: E501
        :type: ResourceServerHealthPingPolicyRecovery
        """

        self._recovery = recovery

    @property
    def timeout(self):
        """Gets the timeout of this ResourceServerHealthPingPolicy.  # noqa: E501

        Specifies how long the reverse proxy should wait for responses to ping requests. A value of 0 will result in an indefinite wait. If not specified the timeout will default to the http or https timeout.   # noqa: E501

        :return: The timeout of this ResourceServerHealthPingPolicy.  # noqa: E501
        :rtype: float
        """
        return self._timeout

    @timeout.setter
    def timeout(self, timeout):
        """Sets the timeout of this ResourceServerHealthPingPolicy.

        Specifies how long the reverse proxy should wait for responses to ping requests. A value of 0 will result in an indefinite wait. If not specified the timeout will default to the http or https timeout.   # noqa: E501

        :param timeout: The timeout of this ResourceServerHealthPingPolicy.  # noqa: E501
        :type: float
        """
        if (timeout is not None and timeout < 0):  # noqa: E501
            raise ValueError("Invalid value for `timeout`, must be a value greater than or equal to `0`")  # noqa: E501

        self._timeout = timeout

    @property
    def rule(self):
        """Gets the rule of this ResourceServerHealthPingPolicy.  # noqa: E501

        Specifies how to interpret responses to ping requests. This entry is an ordered list of rules based on the response status codes. Status codes prefixed with a '+' are considered healthy, and codes prefixed with '-' unhealthy. The wildcard characters '*' and '?' can be used.   # noqa: E501

        :return: The rule of this ResourceServerHealthPingPolicy.  # noqa: E501
        :rtype: list[str]
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this ResourceServerHealthPingPolicy.

        Specifies how to interpret responses to ping requests. This entry is an ordered list of rules based on the response status codes. Status codes prefixed with a '+' are considered healthy, and codes prefixed with '-' unhealthy. The wildcard characters '*' and '?' can be used.   # noqa: E501

        :param rule: The rule of this ResourceServerHealthPingPolicy.  # noqa: E501
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
        if not isinstance(other, ResourceServerHealthPingPolicy):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerHealthPingPolicy):
            return True

        return self.to_dict() != other.to_dict()
