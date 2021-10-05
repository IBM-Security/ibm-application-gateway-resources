# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerHealthPingPolicyRecovery(object):
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
        'threshold': 'float'
    }

    attribute_map = {
        'frequency': 'frequency',
        'threshold': 'threshold'
    }

    def __init__(self, frequency=None, threshold=1):  # noqa: E501
        """ResourceServerHealthPingPolicyRecovery - a model defined in OpenAPI"""  # noqa: E501

        self._frequency = None
        self._threshold = None
        self.discriminator = None

        if frequency is not None:
            self.frequency = frequency
        if threshold is not None:
            self.threshold = threshold

    @property
    def frequency(self):
        """Gets the frequency of this ResourceServerHealthPingPolicyRecovery.  # noqa: E501

        The frequency (in seconds) which ping requests will be sent. If this value is not set it will default to the value of the ping frequency.   # noqa: E501

        :return: The frequency of this ResourceServerHealthPingPolicyRecovery.  # noqa: E501
        :rtype: float
        """
        return self._frequency

    @frequency.setter
    def frequency(self, frequency):
        """Sets the frequency of this ResourceServerHealthPingPolicyRecovery.

        The frequency (in seconds) which ping requests will be sent. If this value is not set it will default to the value of the ping frequency.   # noqa: E501

        :param frequency: The frequency of this ResourceServerHealthPingPolicyRecovery.  # noqa: E501
        :type: float
        """
        if (frequency is not None and frequency < 1):  # noqa: E501
            raise ValueError("Invalid value for `frequency`, must be a value greater than or equal to `1`")  # noqa: E501

        self._frequency = frequency

    @property
    def threshold(self):
        """Gets the threshold of this ResourceServerHealthPingPolicyRecovery.  # noqa: E501

        Specifies how many consecutive times the ping must fail before the resource server is considered unhealthy.   # noqa: E501

        :return: The threshold of this ResourceServerHealthPingPolicyRecovery.  # noqa: E501
        :rtype: float
        """
        return self._threshold

    @threshold.setter
    def threshold(self, threshold):
        """Sets the threshold of this ResourceServerHealthPingPolicyRecovery.

        Specifies how many consecutive times the ping must fail before the resource server is considered unhealthy.   # noqa: E501

        :param threshold: The threshold of this ResourceServerHealthPingPolicyRecovery.  # noqa: E501
        :type: float
        """
        if (threshold is not None and threshold < 1):  # noqa: E501
            raise ValueError("Invalid value for `threshold`, must be a value greater than or equal to `1`")  # noqa: E501

        self._threshold = threshold

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
        if not isinstance(other, ResourceServerHealthPingPolicyRecovery):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerHealthPingPolicyRecovery):
            return True

        return self.to_dict() != other.to_dict()
