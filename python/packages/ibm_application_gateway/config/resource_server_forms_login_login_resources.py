# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServerFormsLoginLoginResources(object):
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
        'resource': 'str',
        'form_action': 'str',
        'service': 'str',
        'resource_name': 'str',
        'fields': 'list[ResourceServerFormsLoginFields]',
        'response_rules': 'list[ResourceServerFormsLoginResponseRules]'
    }

    attribute_map = {
        'resource': 'resource',
        'form_action': 'form_action',
        'service': 'service',
        'resource_name': 'resource_name',
        'fields': 'fields',
        'response_rules': 'response_rules'
    }

    def __init__(self, resource=None, form_action=None, service=None, resource_name=None, fields=None, response_rules=None):  # noqa: E501
        """ResourceServerFormsLoginLoginResources - a model defined in OpenAPI"""  # noqa: E501

        self._resource = None
        self._form_action = None
        self._service = None
        self._resource_name = None
        self._fields = None
        self._response_rules = None
        self.discriminator = None

        if resource is not None:
            self.resource = resource
        if form_action is not None:
            self.form_action = form_action
        if service is not None:
            self.service = service
        if resource_name is not None:
            self.resource_name = resource_name
        if fields is not None:
            self.fields = fields
        if response_rules is not None:
            self.response_rules = response_rules

    @property
    def resource(self):
        """Gets the resource of this ResourceServerFormsLoginLoginResources.  # noqa: E501

        This entry specifies a pattern that uniquely identifies requests for an application's login page. The page will then be intercepted to begin the forms-login sign-on process. The pattern provided is compared to the request URI.   # noqa: E501

        :return: The resource of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :rtype: str
        """
        return self._resource

    @resource.setter
    def resource(self, resource):
        """Sets the resource of this ResourceServerFormsLoginLoginResources.

        This entry specifies a pattern that uniquely identifies requests for an application's login page. The page will then be intercepted to begin the forms-login sign-on process. The pattern provided is compared to the request URI.   # noqa: E501

        :param resource: The resource of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :type: str
        """

        self._resource = resource

    @property
    def form_action(self):
        """Gets the form_action of this ResourceServerFormsLoginLoginResources.  # noqa: E501

        This entry specifies a pattern that identifies which form contained in the intercepted page is the login form. The matching is performed based on the `action` attribute of the HTML `<form>` node.   # noqa: E501

        :return: The form_action of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :rtype: str
        """
        return self._form_action

    @form_action.setter
    def form_action(self, form_action):
        """Sets the form_action of this ResourceServerFormsLoginLoginResources.

        This entry specifies a pattern that identifies which form contained in the intercepted page is the login form. The matching is performed based on the `action` attribute of the HTML `<form>` node.   # noqa: E501

        :param form_action: The form_action of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :type: str
        """

        self._form_action = form_action

    @property
    def service(self):
        """Gets the service of this ResourceServerFormsLoginLoginResources.  # noqa: E501

        The name of the credential service which is used to store and retrieve credentials for this resource.   # noqa: E501

        :return: The service of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :rtype: str
        """
        return self._service

    @service.setter
    def service(self, service):
        """Sets the service of this ResourceServerFormsLoginLoginResources.

        The name of the credential service which is used to store and retrieve credentials for this resource.   # noqa: E501

        :param service: The service of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :type: str
        """

        self._service = service

    @property
    def resource_name(self):
        """Gets the resource_name of this ResourceServerFormsLoginLoginResources.  # noqa: E501

        The resource name which will be used when making requests to the configured credential service.   # noqa: E501

        :return: The resource_name of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :rtype: str
        """
        return self._resource_name

    @resource_name.setter
    def resource_name(self, resource_name):
        """Sets the resource_name of this ResourceServerFormsLoginLoginResources.

        The resource name which will be used when making requests to the configured credential service.   # noqa: E501

        :param resource_name: The resource_name of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :type: str
        """

        self._resource_name = resource_name

    @property
    def fields(self):
        """Gets the fields of this ResourceServerFormsLoginLoginResources.  # noqa: E501

        This entry is a list of the form fields which are need to complete the form-based login.   # noqa: E501

        :return: The fields of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :rtype: list[ResourceServerFormsLoginFields]
        """
        return self._fields

    @fields.setter
    def fields(self, fields):
        """Sets the fields of this ResourceServerFormsLoginLoginResources.

        This entry is a list of the form fields which are need to complete the form-based login.   # noqa: E501

        :param fields: The fields of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :type: list[ResourceServerFormsLoginFields]
        """

        self._fields = fields

    @property
    def response_rules(self):
        """Gets the response_rules of this ResourceServerFormsLoginLoginResources.  # noqa: E501

        A list of rules which are used to determine if the forms-based was successful or not. These rules are evaluated in the order they are provided here.   # noqa: E501

        :return: The response_rules of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :rtype: list[ResourceServerFormsLoginResponseRules]
        """
        return self._response_rules

    @response_rules.setter
    def response_rules(self, response_rules):
        """Sets the response_rules of this ResourceServerFormsLoginLoginResources.

        A list of rules which are used to determine if the forms-based was successful or not. These rules are evaluated in the order they are provided here.   # noqa: E501

        :param response_rules: The response_rules of this ResourceServerFormsLoginLoginResources.  # noqa: E501
        :type: list[ResourceServerFormsLoginResponseRules]
        """

        self._response_rules = response_rules

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
        if not isinstance(other, ResourceServerFormsLoginLoginResources):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerFormsLoginLoginResources):
            return True

        return self.to_dict() != other.to_dict()
