# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerWorkerThreads(object):
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
        'soft_limit': 'str',
        'hard_limit': 'str'
    }

    attribute_map = {
        'soft_limit': 'soft_limit',
        'hard_limit': 'hard_limit'
    }

    def __init__(self, soft_limit=None, hard_limit=None):  # noqa: E501
        """ResourceServerWorkerThreads - a model defined in OpenAPI"""  # noqa: E501

        self._soft_limit = None
        self._hard_limit = None
        self.discriminator = None

        if soft_limit is not None:
            self.soft_limit = soft_limit
        if hard_limit is not None:
            self.hard_limit = hard_limit

    @property
    def soft_limit(self):
        """Gets the soft_limit of this ResourceServerWorkerThreads.  # noqa: E501

        Specifies the soft limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed.   # noqa: E501

        :return: The soft_limit of this ResourceServerWorkerThreads.  # noqa: E501
        :rtype: str
        """
        return self._soft_limit

    @soft_limit.setter
    def soft_limit(self, soft_limit):
        """Sets the soft_limit of this ResourceServerWorkerThreads.

        Specifies the soft limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed.   # noqa: E501

        :param soft_limit: The soft_limit of this ResourceServerWorkerThreads.  # noqa: E501
        :type: str
        """

        self._soft_limit = soft_limit

    @property
    def hard_limit(self):
        """Gets the hard_limit of this ResourceServerWorkerThreads.  # noqa: E501

        Specifies the hard limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed and clients are returned the 503 Service Unavailable message.   # noqa: E501

        :return: The hard_limit of this ResourceServerWorkerThreads.  # noqa: E501
        :rtype: str
        """
        return self._hard_limit

    @hard_limit.setter
    def hard_limit(self, hard_limit):
        """Sets the hard_limit of this ResourceServerWorkerThreads.

        Specifies the hard limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed and clients are returned the 503 Service Unavailable message.   # noqa: E501

        :param hard_limit: The hard_limit of this ResourceServerWorkerThreads.  # noqa: E501
        :type: str
        """

        self._hard_limit = hard_limit

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
        if not isinstance(other, ResourceServerWorkerThreads):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerWorkerThreads):
            return True

        return self.to_dict() != other.to_dict()
