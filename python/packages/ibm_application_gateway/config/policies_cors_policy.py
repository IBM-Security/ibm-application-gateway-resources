# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.07
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class PoliciesCorsPolicy(object):
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
        'allow_origins': 'list[str]',
        'handle_pre_flight': 'bool',
        'allow_headers': 'list[str]',
        'max_age': 'float',
        'allow_methods': 'list[str]',
        'allow_credentials': 'bool',
        'expose_headers': 'list[str]'
    }

    attribute_map = {
        'allow_origins': 'allow_origins',
        'handle_pre_flight': 'handle_pre_flight',
        'allow_headers': 'allow_headers',
        'max_age': 'max_age',
        'allow_methods': 'allow_methods',
        'allow_credentials': 'allow_credentials',
        'expose_headers': 'expose_headers'
    }

    def __init__(self, allow_origins=None, handle_pre_flight=None, allow_headers=None, max_age=None, allow_methods=None, allow_credentials=None, expose_headers=None):  # noqa: E501
        """PoliciesCorsPolicy - a model defined in OpenAPI"""  # noqa: E501

        self._allow_origins = None
        self._handle_pre_flight = None
        self._allow_headers = None
        self._max_age = None
        self._allow_methods = None
        self._allow_credentials = None
        self._expose_headers = None
        self.discriminator = None

        if allow_origins is not None:
            self.allow_origins = allow_origins
        if handle_pre_flight is not None:
            self.handle_pre_flight = handle_pre_flight
        if allow_headers is not None:
            self.allow_headers = allow_headers
        if max_age is not None:
            self.max_age = max_age
        if allow_methods is not None:
            self.allow_methods = allow_methods
        if allow_credentials is not None:
            self.allow_credentials = allow_credentials
        if expose_headers is not None:
            self.expose_headers = expose_headers

    @property
    def allow_origins(self):
        """Gets the allow_origins of this PoliciesCorsPolicy.  # noqa: E501

        A list of origins which are permitted to make cross-origin requests. To allow cross-origin requests from any origin, add a single entry '*'.   # noqa: E501

        :return: The allow_origins of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: list[str]
        """
        return self._allow_origins

    @allow_origins.setter
    def allow_origins(self, allow_origins):
        """Sets the allow_origins of this PoliciesCorsPolicy.

        A list of origins which are permitted to make cross-origin requests. To allow cross-origin requests from any origin, add a single entry '*'.   # noqa: E501

        :param allow_origins: The allow_origins of this PoliciesCorsPolicy.  # noqa: E501
        :type: list[str]
        """

        self._allow_origins = allow_origins

    @property
    def handle_pre_flight(self):
        """Gets the handle_pre_flight of this PoliciesCorsPolicy.  # noqa: E501

        The reverse proxy can respond to pre-flight requests using the information from this policy. If set to false, pre-flight requests will be forwarded to the protected application.   # noqa: E501

        :return: The handle_pre_flight of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: bool
        """
        return self._handle_pre_flight

    @handle_pre_flight.setter
    def handle_pre_flight(self, handle_pre_flight):
        """Sets the handle_pre_flight of this PoliciesCorsPolicy.

        The reverse proxy can respond to pre-flight requests using the information from this policy. If set to false, pre-flight requests will be forwarded to the protected application.   # noqa: E501

        :param handle_pre_flight: The handle_pre_flight of this PoliciesCorsPolicy.  # noqa: E501
        :type: bool
        """

        self._handle_pre_flight = handle_pre_flight

    @property
    def allow_headers(self):
        """Gets the allow_headers of this PoliciesCorsPolicy.  # noqa: E501

        Headers that are indicated as allowed in responses to pre-flight requests. Specifying no allow_header entries will indicate to clients that all headers are permitted. Not case-sensitive. Only valid if handle_pre_flight is set to true.   # noqa: E501

        :return: The allow_headers of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: list[str]
        """
        return self._allow_headers

    @allow_headers.setter
    def allow_headers(self, allow_headers):
        """Sets the allow_headers of this PoliciesCorsPolicy.

        Headers that are indicated as allowed in responses to pre-flight requests. Specifying no allow_header entries will indicate to clients that all headers are permitted. Not case-sensitive. Only valid if handle_pre_flight is set to true.   # noqa: E501

        :param allow_headers: The allow_headers of this PoliciesCorsPolicy.  # noqa: E501
        :type: list[str]
        """

        self._allow_headers = allow_headers

    @property
    def max_age(self):
        """Gets the max_age of this PoliciesCorsPolicy.  # noqa: E501

        Maximum time (in seconds) a client should cache the results of a pre-flight request. A value of -1 indicates to clients that they should not cache, 0 indicates that clients may cache at their own discretion. Only valid if handle_pre_flight is set to true.   # noqa: E501

        :return: The max_age of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: float
        """
        return self._max_age

    @max_age.setter
    def max_age(self, max_age):
        """Sets the max_age of this PoliciesCorsPolicy.

        Maximum time (in seconds) a client should cache the results of a pre-flight request. A value of -1 indicates to clients that they should not cache, 0 indicates that clients may cache at their own discretion. Only valid if handle_pre_flight is set to true.   # noqa: E501

        :param max_age: The max_age of this PoliciesCorsPolicy.  # noqa: E501
        :type: float
        """
        if (max_age is not None and max_age < -1):  # noqa: E501
            raise ValueError("Invalid value for `max_age`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._max_age = max_age

    @property
    def allow_methods(self):
        """Gets the allow_methods of this PoliciesCorsPolicy.  # noqa: E501

        Methods that are indicated as allowed in responses to pre-flight requests. Specifying no allow_method entries will indicate to clients that all methods are permitted. Case-sensitive. Only valid if handle_pre_flight is set to true.   # noqa: E501

        :return: The allow_methods of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: list[str]
        """
        return self._allow_methods

    @allow_methods.setter
    def allow_methods(self, allow_methods):
        """Sets the allow_methods of this PoliciesCorsPolicy.

        Methods that are indicated as allowed in responses to pre-flight requests. Specifying no allow_method entries will indicate to clients that all methods are permitted. Case-sensitive. Only valid if handle_pre_flight is set to true.   # noqa: E501

        :param allow_methods: The allow_methods of this PoliciesCorsPolicy.  # noqa: E501
        :type: list[str]
        """

        self._allow_methods = allow_methods

    @property
    def allow_credentials(self):
        """Gets the allow_credentials of this PoliciesCorsPolicy.  # noqa: E501

        Indicates to clients that authentication is required when accessing this resource.   # noqa: E501

        :return: The allow_credentials of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: bool
        """
        return self._allow_credentials

    @allow_credentials.setter
    def allow_credentials(self, allow_credentials):
        """Sets the allow_credentials of this PoliciesCorsPolicy.

        Indicates to clients that authentication is required when accessing this resource.   # noqa: E501

        :param allow_credentials: The allow_credentials of this PoliciesCorsPolicy.  # noqa: E501
        :type: bool
        """

        self._allow_credentials = allow_credentials

    @property
    def expose_headers(self):
        """Gets the expose_headers of this PoliciesCorsPolicy.  # noqa: E501

        Indicates to clients which headers they expose from the response.   # noqa: E501

        :return: The expose_headers of this PoliciesCorsPolicy.  # noqa: E501
        :rtype: list[str]
        """
        return self._expose_headers

    @expose_headers.setter
    def expose_headers(self, expose_headers):
        """Sets the expose_headers of this PoliciesCorsPolicy.

        Indicates to clients which headers they expose from the response.   # noqa: E501

        :param expose_headers: The expose_headers of this PoliciesCorsPolicy.  # noqa: E501
        :type: list[str]
        """

        self._expose_headers = expose_headers

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
        if not isinstance(other, PoliciesCorsPolicy):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesCorsPolicy):
            return True

        return self.to_dict() != other.to_dict()
