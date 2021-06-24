# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.06
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerFormsLogin(object):
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
        'credential_learning': 'bool',
        'login_resources': 'list[ResourceServerFormsLoginLoginResources]'
    }

    attribute_map = {
        'credential_learning': 'credential_learning',
        'login_resources': 'login_resources'
    }

    def __init__(self, credential_learning=False, login_resources=None):  # noqa: E501
        """ResourceServerFormsLogin - a model defined in OpenAPI"""  # noqa: E501

        self._credential_learning = None
        self._login_resources = None
        self.discriminator = None

        if credential_learning is not None:
            self.credential_learning = credential_learning
        if login_resources is not None:
            self.login_resources = login_resources

    @property
    def credential_learning(self):
        """Gets the credential_learning of this ResourceServerFormsLogin.  # noqa: E501

        A boolean flag indicating whether or not credential learning is enabled for this resource server. If credential learning is enabled, when IAG is unable to automatically complete the forms login but observes a successful manual login, the credentials used will be encrypted and stored in the credential service for future use.   # noqa: E501

        :return: The credential_learning of this ResourceServerFormsLogin.  # noqa: E501
        :rtype: bool
        """
        return self._credential_learning

    @credential_learning.setter
    def credential_learning(self, credential_learning):
        """Sets the credential_learning of this ResourceServerFormsLogin.

        A boolean flag indicating whether or not credential learning is enabled for this resource server. If credential learning is enabled, when IAG is unable to automatically complete the forms login but observes a successful manual login, the credentials used will be encrypted and stored in the credential service for future use.   # noqa: E501

        :param credential_learning: The credential_learning of this ResourceServerFormsLogin.  # noqa: E501
        :type: bool
        """

        self._credential_learning = credential_learning

    @property
    def login_resources(self):
        """Gets the login_resources of this ResourceServerFormsLogin.  # noqa: E501

        This entry is a list of login resources which each contain configuration for each forms-based login page.   # noqa: E501

        :return: The login_resources of this ResourceServerFormsLogin.  # noqa: E501
        :rtype: list[ResourceServerFormsLoginLoginResources]
        """
        return self._login_resources

    @login_resources.setter
    def login_resources(self, login_resources):
        """Sets the login_resources of this ResourceServerFormsLogin.

        This entry is a list of login resources which each contain configuration for each forms-based login page.   # noqa: E501

        :param login_resources: The login_resources of this ResourceServerFormsLogin.  # noqa: E501
        :type: list[ResourceServerFormsLoginLoginResources]
        """

        self._login_resources = login_resources

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
        if not isinstance(other, ResourceServerFormsLogin):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerFormsLogin):
            return True

        return self.to_dict() != other.to_dict()
