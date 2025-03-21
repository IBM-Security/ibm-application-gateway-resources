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

class ServerSessionReauth(object):
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
        'login_time_window': 'float'
    }

    attribute_map = {
        'login_time_window': 'login_time_window'
    }

    def __init__(self, login_time_window=0):  # noqa: E501
        """ServerSessionReauth - a model defined in OpenAPI"""  # noqa: E501

        self._login_time_window = None
        self.discriminator = None

        if login_time_window is not None:
            self.login_time_window = login_time_window

    @property
    def login_time_window(self):
        """Gets the login_time_window of this ServerSessionReauth.  # noqa: E501

        Controls the amount of time a re-authentication will be  considered valid for. This is a time (in seconds) after a re-authentication occurs during which a client will not be prompted to perform re-authentication again. By default, the login_time_window is set to zero, which means that every request to a resource protected with the reauth  policy directive will require the client to perform  re-authentication.   # noqa: E501

        :return: The login_time_window of this ServerSessionReauth.  # noqa: E501
        :rtype: float
        """
        return self._login_time_window

    @login_time_window.setter
    def login_time_window(self, login_time_window):
        """Sets the login_time_window of this ServerSessionReauth.

        Controls the amount of time a re-authentication will be  considered valid for. This is a time (in seconds) after a re-authentication occurs during which a client will not be prompted to perform re-authentication again. By default, the login_time_window is set to zero, which means that every request to a resource protected with the reauth  policy directive will require the client to perform  re-authentication.   # noqa: E501

        :param login_time_window: The login_time_window of this ServerSessionReauth.  # noqa: E501
        :type: float
        """
        if (login_time_window is not None and login_time_window < 0):  # noqa: E501
            raise ValueError("Invalid value for `login_time_window`, must be a value greater than or equal to `0`")  # noqa: E501

        self._login_time_window = login_time_window

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
        if not isinstance(other, ServerSessionReauth):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerSessionReauth):
            return True

        return self.to_dict() != other.to_dict()
