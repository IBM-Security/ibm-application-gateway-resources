# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.02
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServicesKerberosLibdefaults(object):
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
        'properties': 'list[ServicesKerberosLibdefaultsProperties]'
    }

    attribute_map = {
        'properties': 'properties'
    }

    def __init__(self, properties=None):  # noqa: E501
        """ServicesKerberosLibdefaults - a model defined in OpenAPI"""  # noqa: E501

        self._properties = None
        self.discriminator = None

        if properties is not None:
            self.properties = properties

    @property
    def properties(self):
        """Gets the properties of this ServicesKerberosLibdefaults.  # noqa: E501

        The properties to be added to the Kerberos libdefaults configuration. Each entry consists of a name and a value.   # noqa: E501

        :return: The properties of this ServicesKerberosLibdefaults.  # noqa: E501
        :rtype: list[ServicesKerberosLibdefaultsProperties]
        """
        return self._properties

    @properties.setter
    def properties(self, properties):
        """Sets the properties of this ServicesKerberosLibdefaults.

        The properties to be added to the Kerberos libdefaults configuration. Each entry consists of a name and a value.   # noqa: E501

        :param properties: The properties of this ServicesKerberosLibdefaults.  # noqa: E501
        :type: list[ServicesKerberosLibdefaultsProperties]
        """

        self._properties = properties

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
        if not isinstance(other, ServicesKerberosLibdefaults):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServicesKerberosLibdefaults):
            return True

        return self.to_dict() != other.to_dict()