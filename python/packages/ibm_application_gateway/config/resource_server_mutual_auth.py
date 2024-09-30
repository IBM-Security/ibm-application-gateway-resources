# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 24.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerMutualAuth(object):
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
        'basic_auth': 'ResourceServerMutualAuthBasicAuth',
        'certificate_auth': 'ResourceServerMutualAuthCertificateAuth'
    }

    attribute_map = {
        'basic_auth': 'basic_auth',
        'certificate_auth': 'certificate_auth'
    }

    def __init__(self, basic_auth=None, certificate_auth=None):  # noqa: E501
        """ResourceServerMutualAuth - a model defined in OpenAPI"""  # noqa: E501

        self._basic_auth = None
        self._certificate_auth = None
        self.discriminator = None

        if basic_auth is not None:
            self.basic_auth = basic_auth
        if certificate_auth is not None:
            self.certificate_auth = certificate_auth

    @property
    def basic_auth(self):
        """Gets the basic_auth of this ResourceServerMutualAuth.  # noqa: E501


        :return: The basic_auth of this ResourceServerMutualAuth.  # noqa: E501
        :rtype: ResourceServerMutualAuthBasicAuth
        """
        return self._basic_auth

    @basic_auth.setter
    def basic_auth(self, basic_auth):
        """Sets the basic_auth of this ResourceServerMutualAuth.


        :param basic_auth: The basic_auth of this ResourceServerMutualAuth.  # noqa: E501
        :type: ResourceServerMutualAuthBasicAuth
        """

        self._basic_auth = basic_auth

    @property
    def certificate_auth(self):
        """Gets the certificate_auth of this ResourceServerMutualAuth.  # noqa: E501


        :return: The certificate_auth of this ResourceServerMutualAuth.  # noqa: E501
        :rtype: ResourceServerMutualAuthCertificateAuth
        """
        return self._certificate_auth

    @certificate_auth.setter
    def certificate_auth(self, certificate_auth):
        """Sets the certificate_auth of this ResourceServerMutualAuth.


        :param certificate_auth: The certificate_auth of this ResourceServerMutualAuth.  # noqa: E501
        :type: ResourceServerMutualAuthCertificateAuth
        """

        self._certificate_auth = certificate_auth

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
        if not isinstance(other, ResourceServerMutualAuth):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerMutualAuth):
            return True

        return self.to_dict() != other.to_dict()
