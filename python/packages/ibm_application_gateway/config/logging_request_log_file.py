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

class LoggingRequestLogFile(object):
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
        'file_name': 'str',
        'max_file_size': 'float',
        'max_rollover_files': 'float',
        'compress': 'bool'
    }

    attribute_map = {
        'file_name': 'file_name',
        'max_file_size': 'max_file_size',
        'max_rollover_files': 'max_rollover_files',
        'compress': 'compress'
    }

    def __init__(self, file_name=None, max_file_size=1, max_rollover_files=1, compress=True):  # noqa: E501
        """LoggingRequestLogFile - a model defined in OpenAPI"""  # noqa: E501

        self._file_name = None
        self._max_file_size = None
        self._max_rollover_files = None
        self._compress = None
        self.discriminator = None

        if file_name is not None:
            self.file_name = file_name
        if max_file_size is not None:
            self.max_file_size = max_file_size
        if max_rollover_files is not None:
            self.max_rollover_files = max_rollover_files
        if compress is not None:
            self.compress = compress

    @property
    def file_name(self):
        """Gets the file_name of this LoggingRequestLogFile.  # noqa: E501

        The name of the generated log file.  If the file name is supplied without any path information the file will be written to the `/var/iag/logs` directory.  If the file name contains path information the hosting directory must be created and available before the container is started.   # noqa: E501

        :return: The file_name of this LoggingRequestLogFile.  # noqa: E501
        :rtype: str
        """
        return self._file_name

    @file_name.setter
    def file_name(self, file_name):
        """Sets the file_name of this LoggingRequestLogFile.

        The name of the generated log file.  If the file name is supplied without any path information the file will be written to the `/var/iag/logs` directory.  If the file name contains path information the hosting directory must be created and available before the container is started.   # noqa: E501

        :param file_name: The file_name of this LoggingRequestLogFile.  # noqa: E501
        :type: str
        """

        self._file_name = file_name

    @property
    def max_file_size(self):
        """Gets the max_file_size of this LoggingRequestLogFile.  # noqa: E501

        The maximum size (in MB) that the file can reach before it is rolled over.   # noqa: E501

        :return: The max_file_size of this LoggingRequestLogFile.  # noqa: E501
        :rtype: float
        """
        return self._max_file_size

    @max_file_size.setter
    def max_file_size(self, max_file_size):
        """Sets the max_file_size of this LoggingRequestLogFile.

        The maximum size (in MB) that the file can reach before it is rolled over.   # noqa: E501

        :param max_file_size: The max_file_size of this LoggingRequestLogFile.  # noqa: E501
        :type: float
        """
        if (max_file_size is not None and max_file_size < 1):  # noqa: E501
            raise ValueError("Invalid value for `max_file_size`, must be a value greater than or equal to `1`")  # noqa: E501

        self._max_file_size = max_file_size

    @property
    def max_rollover_files(self):
        """Gets the max_rollover_files of this LoggingRequestLogFile.  # noqa: E501

        The maximum number of rollover files to be kept on disk.  When the number of rollover log files reaches the specified threshold, the oldest log file is deleted.   # noqa: E501

        :return: The max_rollover_files of this LoggingRequestLogFile.  # noqa: E501
        :rtype: float
        """
        return self._max_rollover_files

    @max_rollover_files.setter
    def max_rollover_files(self, max_rollover_files):
        """Sets the max_rollover_files of this LoggingRequestLogFile.

        The maximum number of rollover files to be kept on disk.  When the number of rollover log files reaches the specified threshold, the oldest log file is deleted.   # noqa: E501

        :param max_rollover_files: The max_rollover_files of this LoggingRequestLogFile.  # noqa: E501
        :type: float
        """
        if (max_rollover_files is not None and max_rollover_files < 1):  # noqa: E501
            raise ValueError("Invalid value for `max_rollover_files`, must be a value greater than or equal to `1`")  # noqa: E501

        self._max_rollover_files = max_rollover_files

    @property
    def compress(self):
        """Gets the compress of this LoggingRequestLogFile.  # noqa: E501

        A boolean which indicates whether rolled over log files should be automatically compressed to conserve disk space.   # noqa: E501

        :return: The compress of this LoggingRequestLogFile.  # noqa: E501
        :rtype: bool
        """
        return self._compress

    @compress.setter
    def compress(self, compress):
        """Sets the compress of this LoggingRequestLogFile.

        A boolean which indicates whether rolled over log files should be automatically compressed to conserve disk space.   # noqa: E501

        :param compress: The compress of this LoggingRequestLogFile.  # noqa: E501
        :type: bool
        """

        self._compress = compress

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
        if not isinstance(other, LoggingRequestLogFile):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, LoggingRequestLogFile):
            return True

        return self.to_dict() != other.to_dict()
