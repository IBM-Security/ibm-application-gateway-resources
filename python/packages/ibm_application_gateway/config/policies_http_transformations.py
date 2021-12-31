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

class PoliciesHttpTransformations(object):
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
        'request': 'list[PoliciesHttpTransformationRule]',
        'response': 'list[PoliciesHttpTransformationRule]'
    }

    attribute_map = {
        'request': 'request',
        'response': 'response'
    }

    def __init__(self, request=None, response=None):  # noqa: E501
        """PoliciesHttpTransformations - a model defined in OpenAPI"""  # noqa: E501

        self._request = None
        self._response = None
        self.discriminator = None

        if request is not None:
            self.request = request
        if response is not None:
            self.response = response

    @property
    def request(self):
        """Gets the request of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on requests. This entry is an array and can be used to specify multiple transformations.  Example: policies:   http_transformations:     request:       - name: resource_1_rule         host: www.test.com         paths:           - \"*\"         method: GET         rule: \"@http_trans_rule.xsl\"   # noqa: E501

        :return: The request of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationRule]
        """
        return self._request

    @request.setter
    def request(self, request):
        """Sets the request of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on requests. This entry is an array and can be used to specify multiple transformations.  Example: policies:   http_transformations:     request:       - name: resource_1_rule         host: www.test.com         paths:           - \"*\"         method: GET         rule: \"@http_trans_rule.xsl\"   # noqa: E501

        :param request: The request of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationRule]
        """

        self._request = request

    @property
    def response(self):
        """Gets the response of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on responses. This entry is an array and can be used to specify multiple transformations.  Example: policies:   http_transformations:     response:       - name: resource_1_rule         host: www.test.com         paths:           - \"/resource_1\"           - \"/alt/resource_1\"         method: GET         rule: \"@http_trans_rule.xsl\"         attributes:           - AZN_CRED_PRINCIPAL_NAME   # noqa: E501

        :return: The response of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationRule]
        """
        return self._response

    @response.setter
    def response(self, response):
        """Sets the response of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on responses. This entry is an array and can be used to specify multiple transformations.  Example: policies:   http_transformations:     response:       - name: resource_1_rule         host: www.test.com         paths:           - \"/resource_1\"           - \"/alt/resource_1\"         method: GET         rule: \"@http_trans_rule.xsl\"         attributes:           - AZN_CRED_PRINCIPAL_NAME   # noqa: E501

        :param response: The response of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationRule]
        """

        self._response = response

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
        if not isinstance(other, PoliciesHttpTransformations):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesHttpTransformations):
            return True

        return self.to_dict() != other.to_dict()
