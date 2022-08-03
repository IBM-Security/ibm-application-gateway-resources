# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 22.07
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ServicesKerberosRealms(object):
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
        'name': 'str',
        'kdc': 'str',
        'properties': 'list[ServicesKerberosProperties]',
        'hostname': 'str'
    }

    attribute_map = {
        'name': 'name',
        'kdc': 'kdc',
        'properties': 'properties',
        'hostname': 'hostname'
    }

    def __init__(self, name=None, kdc=None, properties=None, hostname=None):  # noqa: E501
        """ServicesKerberosRealms - a model defined in OpenAPI"""  # noqa: E501

        self._name = None
        self._kdc = None
        self._properties = None
        self._hostname = None
        self.discriminator = None

        if name is not None:
            self.name = name
        if kdc is not None:
            self.kdc = kdc
        if properties is not None:
            self.properties = properties
        if hostname is not None:
            self.hostname = hostname

    @property
    def name(self):
        """Gets the name of this ServicesKerberosRealms.  # noqa: E501

        The name of the Kerberos Realm being configured.   # noqa: E501

        :return: The name of this ServicesKerberosRealms.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this ServicesKerberosRealms.

        The name of the Kerberos Realm being configured.   # noqa: E501

        :param name: The name of this ServicesKerberosRealms.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def kdc(self):
        """Gets the kdc of this ServicesKerberosRealms.  # noqa: E501

        The name or address of a host running a KDC for that realm. An optional port number, separated from the hostname by a colon, may be included.   # noqa: E501

        :return: The kdc of this ServicesKerberosRealms.  # noqa: E501
        :rtype: str
        """
        return self._kdc

    @kdc.setter
    def kdc(self, kdc):
        """Sets the kdc of this ServicesKerberosRealms.

        The name or address of a host running a KDC for that realm. An optional port number, separated from the hostname by a colon, may be included.   # noqa: E501

        :param kdc: The kdc of this ServicesKerberosRealms.  # noqa: E501
        :type: str
        """

        self._kdc = kdc

    @property
    def properties(self):
        """Gets the properties of this ServicesKerberosRealms.  # noqa: E501

        Advanced additional properties to be added to the Realm configuration. These properties correspond to the properties in the [realms] &lt;realm name&gt; section of krb5.conf.   # noqa: E501

        :return: The properties of this ServicesKerberosRealms.  # noqa: E501
        :rtype: list[ServicesKerberosProperties]
        """
        return self._properties

    @properties.setter
    def properties(self, properties):
        """Sets the properties of this ServicesKerberosRealms.

        Advanced additional properties to be added to the Realm configuration. These properties correspond to the properties in the [realms] &lt;realm name&gt; section of krb5.conf.   # noqa: E501

        :param properties: The properties of this ServicesKerberosRealms.  # noqa: E501
        :type: list[ServicesKerberosProperties]
        """

        self._properties = properties

    @property
    def hostname(self):
        """Gets the hostname of this ServicesKerberosRealms.  # noqa: E501

        The hostname for this realm.   # noqa: E501

        :return: The hostname of this ServicesKerberosRealms.  # noqa: E501
        :rtype: str
        """
        return self._hostname

    @hostname.setter
    def hostname(self, hostname):
        """Sets the hostname of this ServicesKerberosRealms.

        The hostname for this realm.   # noqa: E501

        :param hostname: The hostname of this ServicesKerberosRealms.  # noqa: E501
        :type: str
        """

        self._hostname = hostname

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
        if not isinstance(other, ServicesKerberosRealms):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServicesKerberosRealms):
            return True

        return self.to_dict() != other.to_dict()
