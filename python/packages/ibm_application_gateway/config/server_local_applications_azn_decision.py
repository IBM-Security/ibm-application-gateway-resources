# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 23.04
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerLocalApplicationsAznDecision(object):
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
        'path_segment': 'str',
        'max_cache_size': 'float',
        'max_cache_lifetime': 'float'
    }

    attribute_map = {
        'path_segment': 'path_segment',
        'max_cache_size': 'max_cache_size',
        'max_cache_lifetime': 'max_cache_lifetime'
    }

    def __init__(self, path_segment=None, max_cache_size=8192, max_cache_lifetime=300):  # noqa: E501
        """ServerLocalApplicationsAznDecision - a model defined in OpenAPI"""  # noqa: E501

        self._path_segment = None
        self._max_cache_size = None
        self._max_cache_lifetime = None
        self.discriminator = None

        if path_segment is not None:
            self.path_segment = path_segment
        if max_cache_size is not None:
            self.max_cache_size = max_cache_size
        if max_cache_lifetime is not None:
            self.max_cache_lifetime = max_cache_lifetime

    @property
    def path_segment(self):
        """Gets the path_segment of this ServerLocalApplicationsAznDecision.  # noqa: E501

        The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a `/` character).   # noqa: E501

        :return: The path_segment of this ServerLocalApplicationsAznDecision.  # noqa: E501
        :rtype: str
        """
        return self._path_segment

    @path_segment.setter
    def path_segment(self, path_segment):
        """Sets the path_segment of this ServerLocalApplicationsAznDecision.

        The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a `/` character).   # noqa: E501

        :param path_segment: The path_segment of this ServerLocalApplicationsAznDecision.  # noqa: E501
        :type: str
        """

        self._path_segment = path_segment

    @property
    def max_cache_size(self):
        """Gets the max_cache_size of this ServerLocalApplicationsAznDecision.  # noqa: E501

        The maximum number of credentials which can be cached. If the addition of a new credential will exceed this maximum cache size a least-recently-used algorithm will be used to remove an older entry, making room for the new credential.   # noqa: E501

        :return: The max_cache_size of this ServerLocalApplicationsAznDecision.  # noqa: E501
        :rtype: float
        """
        return self._max_cache_size

    @max_cache_size.setter
    def max_cache_size(self, max_cache_size):
        """Sets the max_cache_size of this ServerLocalApplicationsAznDecision.

        The maximum number of credentials which can be cached. If the addition of a new credential will exceed this maximum cache size a least-recently-used algorithm will be used to remove an older entry, making room for the new credential.   # noqa: E501

        :param max_cache_size: The max_cache_size of this ServerLocalApplicationsAznDecision.  # noqa: E501
        :type: float
        """
        if (max_cache_size is not None and max_cache_size < 1):  # noqa: E501
            raise ValueError("Invalid value for `max_cache_size`, must be a value greater than or equal to `1`")  # noqa: E501

        self._max_cache_size = max_cache_size

    @property
    def max_cache_lifetime(self):
        """Gets the max_cache_lifetime of this ServerLocalApplicationsAznDecision.  # noqa: E501

        The maximum lifetime, in seconds, of an entry in the cache.   # noqa: E501

        :return: The max_cache_lifetime of this ServerLocalApplicationsAznDecision.  # noqa: E501
        :rtype: float
        """
        return self._max_cache_lifetime

    @max_cache_lifetime.setter
    def max_cache_lifetime(self, max_cache_lifetime):
        """Sets the max_cache_lifetime of this ServerLocalApplicationsAznDecision.

        The maximum lifetime, in seconds, of an entry in the cache.   # noqa: E501

        :param max_cache_lifetime: The max_cache_lifetime of this ServerLocalApplicationsAznDecision.  # noqa: E501
        :type: float
        """
        if (max_cache_lifetime is not None and max_cache_lifetime < 1):  # noqa: E501
            raise ValueError("Invalid value for `max_cache_lifetime`, must be a value greater than or equal to `1`")  # noqa: E501

        self._max_cache_lifetime = max_cache_lifetime

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
        if not isinstance(other, ServerLocalApplicationsAznDecision):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerLocalApplicationsAznDecision):
            return True

        return self.to_dict() != other.to_dict()
