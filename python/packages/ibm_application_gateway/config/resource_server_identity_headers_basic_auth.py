# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.03
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerIdentityHeadersBasicAuth(object):
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
        'mode': 'str',
        'password': 'str',
        'service': 'str',
        'resource_name': 'str'
    }

    attribute_map = {
        'mode': 'mode',
        'password': 'password',
        'service': 'service',
        'resource_name': 'resource_name'
    }

    def __init__(self, mode='filter', password=None, service=None, resource_name=None):  # noqa: E501
        """ResourceServerIdentityHeadersBasicAuth - a model defined in OpenAPI"""  # noqa: E501

        self._mode = None
        self._password = None
        self._service = None
        self._resource_name = None
        self.discriminator = None

        if mode is not None:
            self.mode = mode
        if password is not None:
            self.password = password
        if service is not None:
            self.service = service
        if resource_name is not None:
            self.resource_name = resource_name

    @property
    def mode(self):
        """Gets the mode of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501

        The mode of handling the basic authentication headers.   # noqa: E501

        :return: The mode of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :rtype: str
        """
        return self._mode

    @mode.setter
    def mode(self, mode):
        """Sets the mode of this ResourceServerIdentityHeadersBasicAuth.

        The mode of handling the basic authentication headers.   # noqa: E501

        :param mode: The mode of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :type: str
        """
        allowed_values = ["filter", "ignore", "supply", "service"]  # noqa: E501
        if mode not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `mode` ({0}), must be one of {1}"  # noqa: E501
                .format(mode, allowed_values)
            )

        self._mode = mode

    @property
    def password(self):
        """Gets the password of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501

        If the mode entry is set to `supply` then the password must be provided here.   # noqa: E501

        :return: The password of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :rtype: str
        """
        return self._password

    @password.setter
    def password(self, password):
        """Sets the password of this ResourceServerIdentityHeadersBasicAuth.

        If the mode entry is set to `supply` then the password must be provided here.   # noqa: E501

        :param password: The password of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :type: str
        """

        self._password = password

    @property
    def service(self):
        """Gets the service of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501

        If the mode entry is set to `service` then the credential service name must be provided here.   # noqa: E501

        :return: The service of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :rtype: str
        """
        return self._service

    @service.setter
    def service(self, service):
        """Sets the service of this ResourceServerIdentityHeadersBasicAuth.

        If the mode entry is set to `service` then the credential service name must be provided here.   # noqa: E501

        :param service: The service of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :type: str
        """

        self._service = service

    @property
    def resource_name(self):
        """Gets the resource_name of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501

        Used only when `mode` is `service`. The name of the resource which will be passed to the credential service when retrieving the username/password.   # noqa: E501

        :return: The resource_name of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :rtype: str
        """
        return self._resource_name

    @resource_name.setter
    def resource_name(self, resource_name):
        """Sets the resource_name of this ResourceServerIdentityHeadersBasicAuth.

        Used only when `mode` is `service`. The name of the resource which will be passed to the credential service when retrieving the username/password.   # noqa: E501

        :param resource_name: The resource_name of this ResourceServerIdentityHeadersBasicAuth.  # noqa: E501
        :type: str
        """

        self._resource_name = resource_name

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
        if not isinstance(other, ResourceServerIdentityHeadersBasicAuth):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerIdentityHeadersBasicAuth):
            return True

        return self.to_dict() != other.to_dict()
