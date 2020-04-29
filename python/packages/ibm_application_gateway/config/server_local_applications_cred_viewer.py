# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.04
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServerLocalApplicationsCredViewer(object):
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
        'path_segment': 'str',
        'enable_html': 'bool'
    }

    attribute_map = {
        'path_segment': 'path_segment',
        'enable_html': 'enable_html'
    }

    def __init__(self, path_segment=None, enable_html=True):  # noqa: E501
        """ServerLocalApplicationsCredViewer - a model defined in OpenAPI"""  # noqa: E501

        self._path_segment = None
        self._enable_html = None
        self.discriminator = None

        if path_segment is not None:
            self.path_segment = path_segment
        if enable_html is not None:
            self.enable_html = enable_html

    @property
    def path_segment(self):
        """Gets the path_segment of this ServerLocalApplicationsCredViewer.  # noqa: E501

        The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a '/' character).   # noqa: E501

        :return: The path_segment of this ServerLocalApplicationsCredViewer.  # noqa: E501
        :rtype: str
        """
        return self._path_segment

    @path_segment.setter
    def path_segment(self, path_segment):
        """Sets the path_segment of this ServerLocalApplicationsCredViewer.

        The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a '/' character).   # noqa: E501

        :param path_segment: The path_segment of this ServerLocalApplicationsCredViewer.  # noqa: E501
        :type: str
        """

        self._path_segment = path_segment

    @property
    def enable_html(self):
        """Gets the enable_html of this ServerLocalApplicationsCredViewer.  # noqa: E501

        A boolean flag indicating whether or not the embedded HTML page which can render the JSON data is enabled.   # noqa: E501

        :return: The enable_html of this ServerLocalApplicationsCredViewer.  # noqa: E501
        :rtype: bool
        """
        return self._enable_html

    @enable_html.setter
    def enable_html(self, enable_html):
        """Sets the enable_html of this ServerLocalApplicationsCredViewer.

        A boolean flag indicating whether or not the embedded HTML page which can render the JSON data is enabled.   # noqa: E501

        :param enable_html: The enable_html of this ServerLocalApplicationsCredViewer.  # noqa: E501
        :type: bool
        """

        self._enable_html = enable_html

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
        if not isinstance(other, ServerLocalApplicationsCredViewer):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerLocalApplicationsCredViewer):
            return True

        return self.to_dict() != other.to_dict()
