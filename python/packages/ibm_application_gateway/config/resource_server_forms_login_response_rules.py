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

class ResourceServerFormsLoginResponseRules(object):
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
        'success': 'bool',
        'response_code': 'str',
        'headers': 'list[ResourceServerFormsLoginHeaders]'
    }

    attribute_map = {
        'success': 'success',
        'response_code': 'response_code',
        'headers': 'headers'
    }

    def __init__(self, success=None, response_code=None, headers=None):  # noqa: E501
        """ResourceServerFormsLoginResponseRules - a model defined in OpenAPI"""  # noqa: E501

        self._success = None
        self._response_code = None
        self._headers = None
        self.discriminator = None

        if success is not None:
            self.success = success
        if response_code is not None:
            self.response_code = response_code
        if headers is not None:
            self.headers = headers

    @property
    def success(self):
        """Gets the success of this ResourceServerFormsLoginResponseRules.  # noqa: E501

        A boolean to indicate whether this rule is used to detect a successful login or not. `true` indicates a successful login, `false` indicates a failed login attempt.   # noqa: E501

        :return: The success of this ResourceServerFormsLoginResponseRules.  # noqa: E501
        :rtype: bool
        """
        return self._success

    @success.setter
    def success(self, success):
        """Sets the success of this ResourceServerFormsLoginResponseRules.

        A boolean to indicate whether this rule is used to detect a successful login or not. `true` indicates a successful login, `false` indicates a failed login attempt.   # noqa: E501

        :param success: The success of this ResourceServerFormsLoginResponseRules.  # noqa: E501
        :type: bool
        """

        self._success = success

    @property
    def response_code(self):
        """Gets the response_code of this ResourceServerFormsLoginResponseRules.  # noqa: E501

        The HTTP status code expected in the response for this rule.   # noqa: E501

        :return: The response_code of this ResourceServerFormsLoginResponseRules.  # noqa: E501
        :rtype: str
        """
        return self._response_code

    @response_code.setter
    def response_code(self, response_code):
        """Sets the response_code of this ResourceServerFormsLoginResponseRules.

        The HTTP status code expected in the response for this rule.   # noqa: E501

        :param response_code: The response_code of this ResourceServerFormsLoginResponseRules.  # noqa: E501
        :type: str
        """

        self._response_code = response_code

    @property
    def headers(self):
        """Gets the headers of this ResourceServerFormsLoginResponseRules.  # noqa: E501

        The HTTP headers expected in the response.   # noqa: E501

        :return: The headers of this ResourceServerFormsLoginResponseRules.  # noqa: E501
        :rtype: list[ResourceServerFormsLoginHeaders]
        """
        return self._headers

    @headers.setter
    def headers(self, headers):
        """Sets the headers of this ResourceServerFormsLoginResponseRules.

        The HTTP headers expected in the response.   # noqa: E501

        :param headers: The headers of this ResourceServerFormsLoginResponseRules.  # noqa: E501
        :type: list[ResourceServerFormsLoginHeaders]
        """

        self._headers = headers

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
        if not isinstance(other, ResourceServerFormsLoginResponseRules):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServerFormsLoginResponseRules):
            return True

        return self.to_dict() != other.to_dict()
