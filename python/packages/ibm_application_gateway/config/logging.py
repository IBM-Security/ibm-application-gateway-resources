# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 23.04
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class Logging(object):
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
        'json_logging': 'bool',
        'components': 'list[str]',
        'request_log': 'LoggingRequestLog',
        'tracing': 'list[LoggingTracing]',
        'transaction': 'LoggingTransaction',
        'statistics': 'LoggingStatistics'
    }

    attribute_map = {
        'json_logging': 'json_logging',
        'components': 'components',
        'request_log': 'request_log',
        'tracing': 'tracing',
        'transaction': 'transaction',
        'statistics': 'statistics'
    }

    def __init__(self, json_logging=False, components=None, request_log=None, tracing=None, transaction=None, statistics=None):  # noqa: E501
        """Logging - a model defined in OpenAPI"""  # noqa: E501

        self._json_logging = None
        self._components = None
        self._request_log = None
        self._tracing = None
        self._transaction = None
        self._statistics = None
        self.discriminator = None

        if json_logging is not None:
            self.json_logging = json_logging
        if components is not None:
            self.components = components
        if request_log is not None:
            self.request_log = request_log
        if tracing is not None:
            self.tracing = tracing
        if transaction is not None:
            self.transaction = transaction
        if statistics is not None:
            self.statistics = statistics

    @property
    def json_logging(self):
        """Gets the json_logging of this Logging.  # noqa: E501

        A boolean which indicates whether the logging will be in JSON format or not. If not specified logging will not be in JSON format.  Example: logging:   json_logging: true   # noqa: E501

        :return: The json_logging of this Logging.  # noqa: E501
        :rtype: bool
        """
        return self._json_logging

    @json_logging.setter
    def json_logging(self, json_logging):
        """Sets the json_logging of this Logging.

        A boolean which indicates whether the logging will be in JSON format or not. If not specified logging will not be in JSON format.  Example: logging:   json_logging: true   # noqa: E501

        :param json_logging: The json_logging of this Logging.  # noqa: E501
        :type: bool
        """

        self._json_logging = json_logging

    @property
    def components(self):
        """Gets the components of this Logging.  # noqa: E501

        Specifies an array of auditing components to be enabled.  Example: logging:   components:     - audit.authn     - audit.azn   # noqa: E501

        :return: The components of this Logging.  # noqa: E501
        :rtype: list[str]
        """
        return self._components

    @components.setter
    def components(self, components):
        """Sets the components of this Logging.

        Specifies an array of auditing components to be enabled.  Example: logging:   components:     - audit.authn     - audit.azn   # noqa: E501

        :param components: The components of this Logging.  # noqa: E501
        :type: list[str]
        """
        allowed_values = ["audit.authn", "audit.azn"]  # noqa: E501
        if (not set(components).issubset(set(allowed_values))):  # noqa: E501
            raise ValueError(
                "Invalid values for `components` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(components) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._components = components

    @property
    def request_log(self):
        """Gets the request_log of this Logging.  # noqa: E501


        :return: The request_log of this Logging.  # noqa: E501
        :rtype: LoggingRequestLog
        """
        return self._request_log

    @request_log.setter
    def request_log(self, request_log):
        """Sets the request_log of this Logging.


        :param request_log: The request_log of this Logging.  # noqa: E501
        :type: LoggingRequestLog
        """

        self._request_log = request_log

    @property
    def tracing(self):
        """Gets the tracing of this Logging.  # noqa: E501

        Specifies an array of trace components to be enabled. Tracing can be used to assist with problem determination in the environment.  Example: logging:   tracing:     - file_name: http_trans.log       component: pdweb.http.transformation       level: 9     - file_name: http.log       component: pdweb.http       level: 5       max_file_size: 12       max_rollover_files: 10       compress: true   # noqa: E501

        :return: The tracing of this Logging.  # noqa: E501
        :rtype: list[LoggingTracing]
        """
        return self._tracing

    @tracing.setter
    def tracing(self, tracing):
        """Sets the tracing of this Logging.

        Specifies an array of trace components to be enabled. Tracing can be used to assist with problem determination in the environment.  Example: logging:   tracing:     - file_name: http_trans.log       component: pdweb.http.transformation       level: 9     - file_name: http.log       component: pdweb.http       level: 5       max_file_size: 12       max_rollover_files: 10       compress: true   # noqa: E501

        :param tracing: The tracing of this Logging.  # noqa: E501
        :type: list[LoggingTracing]
        """

        self._tracing = tracing

    @property
    def transaction(self):
        """Gets the transaction of this Logging.  # noqa: E501


        :return: The transaction of this Logging.  # noqa: E501
        :rtype: LoggingTransaction
        """
        return self._transaction

    @transaction.setter
    def transaction(self, transaction):
        """Sets the transaction of this Logging.


        :param transaction: The transaction of this Logging.  # noqa: E501
        :type: LoggingTransaction
        """

        self._transaction = transaction

    @property
    def statistics(self):
        """Gets the statistics of this Logging.  # noqa: E501


        :return: The statistics of this Logging.  # noqa: E501
        :rtype: LoggingStatistics
        """
        return self._statistics

    @statistics.setter
    def statistics(self, statistics):
        """Sets the statistics of this Logging.


        :param statistics: The statistics of this Logging.  # noqa: E501
        :type: LoggingStatistics
        """

        self._statistics = statistics

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
        if not isinstance(other, Logging):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Logging):
            return True

        return self.to_dict() != other.to_dict()
