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

class Advanced(object):
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
        'configuration': 'list[AdvancedConfiguration]'
    }

    attribute_map = {
        'configuration': 'configuration'
    }

    def __init__(self, configuration=None):  # noqa: E501
        """Advanced - a model defined in OpenAPI"""  # noqa: E501

        self._configuration = None
        self.discriminator = None

        if configuration is not None:
            self.configuration = configuration

    @property
    def configuration(self):
        """Gets the configuration of this Advanced.  # noqa: E501

        This entry defines customize legacy reverse proxy daemon configuration entries. This configuration is applied last and can be used to overload parameters specified in other sections of the configuration YAML. This entry is an array and can be used to specify multiple tuning parameters.   # noqa: E501

        :return: The configuration of this Advanced.  # noqa: E501
        :rtype: list[AdvancedConfiguration]
        """
        return self._configuration

    @configuration.setter
    def configuration(self, configuration):
        """Sets the configuration of this Advanced.

        This entry defines customize legacy reverse proxy daemon configuration entries. This configuration is applied last and can be used to overload parameters specified in other sections of the configuration YAML. This entry is an array and can be used to specify multiple tuning parameters.   # noqa: E501

        :param configuration: The configuration of this Advanced.  # noqa: E501
        :type: list[AdvancedConfiguration]
        """

        self._configuration = configuration

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
        if not isinstance(other, Advanced):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Advanced):
            return True

        return self.to_dict() != other.to_dict()
