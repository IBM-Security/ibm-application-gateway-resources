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

class ServicesKerberos(object):
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
        'keytab': 'str',
        'keytab_spn': 'str',
        'realms': 'list[ServicesKerberosRealms]',
        'libdefaults': 'ServicesKerberosLibdefaults',
        'capaths': 'list[ServicesKerberosCapaths]'
    }

    attribute_map = {
        'keytab': 'keytab',
        'keytab_spn': 'keytab_spn',
        'realms': 'realms',
        'libdefaults': 'libdefaults',
        'capaths': 'capaths'
    }

    def __init__(self, keytab=None, keytab_spn=None, realms=None, libdefaults=None, capaths=None):  # noqa: E501
        """ServicesKerberos - a model defined in OpenAPI"""  # noqa: E501

        self._keytab = None
        self._keytab_spn = None
        self._realms = None
        self._libdefaults = None
        self._capaths = None
        self.discriminator = None

        if keytab is not None:
            self.keytab = keytab
        if keytab_spn is not None:
            self.keytab_spn = keytab_spn
        if realms is not None:
            self.realms = realms
        if libdefaults is not None:
            self.libdefaults = libdefaults
        if capaths is not None:
            self.capaths = capaths

    @property
    def keytab(self):
        """Gets the keytab of this ServicesKerberos.  # noqa: E501

        The Kerberos key table file which IAG will use to authenticate with the server.   # noqa: E501

        :return: The keytab of this ServicesKerberos.  # noqa: E501
        :rtype: str
        """
        return self._keytab

    @keytab.setter
    def keytab(self, keytab):
        """Sets the keytab of this ServicesKerberos.

        The Kerberos key table file which IAG will use to authenticate with the server.   # noqa: E501

        :param keytab: The keytab of this ServicesKerberos.  # noqa: E501
        :type: str
        """

        self._keytab = keytab

    @property
    def keytab_spn(self):
        """Gets the keytab_spn of this ServicesKerberos.  # noqa: E501

        The service principal name of the impersonating user when creating a Kerberos token. The service principal name can be determined by executing the Microsoft utility `setspn` (that is, setspn -L user, where user is the identity of the IAG account).   # noqa: E501

        :return: The keytab_spn of this ServicesKerberos.  # noqa: E501
        :rtype: str
        """
        return self._keytab_spn

    @keytab_spn.setter
    def keytab_spn(self, keytab_spn):
        """Sets the keytab_spn of this ServicesKerberos.

        The service principal name of the impersonating user when creating a Kerberos token. The service principal name can be determined by executing the Microsoft utility `setspn` (that is, setspn -L user, where user is the identity of the IAG account).   # noqa: E501

        :param keytab_spn: The keytab_spn of this ServicesKerberos.  # noqa: E501
        :type: str
        """

        self._keytab_spn = keytab_spn

    @property
    def realms(self):
        """Gets the realms of this ServicesKerberos.  # noqa: E501

        Realm-specific contact information and settings associated with the Microsoft Windows Server to use for performing Kerberos impersonation.   # noqa: E501

        :return: The realms of this ServicesKerberos.  # noqa: E501
        :rtype: list[ServicesKerberosRealms]
        """
        return self._realms

    @realms.setter
    def realms(self, realms):
        """Sets the realms of this ServicesKerberos.

        Realm-specific contact information and settings associated with the Microsoft Windows Server to use for performing Kerberos impersonation.   # noqa: E501

        :param realms: The realms of this ServicesKerberos.  # noqa: E501
        :type: list[ServicesKerberosRealms]
        """

        self._realms = realms

    @property
    def libdefaults(self):
        """Gets the libdefaults of this ServicesKerberos.  # noqa: E501


        :return: The libdefaults of this ServicesKerberos.  # noqa: E501
        :rtype: ServicesKerberosLibdefaults
        """
        return self._libdefaults

    @libdefaults.setter
    def libdefaults(self, libdefaults):
        """Sets the libdefaults of this ServicesKerberos.


        :param libdefaults: The libdefaults of this ServicesKerberos.  # noqa: E501
        :type: ServicesKerberosLibdefaults
        """

        self._libdefaults = libdefaults

    @property
    def capaths(self):
        """Gets the capaths of this ServicesKerberos.  # noqa: E501

        Authentication paths for non-hierarchical cross-realm.   # noqa: E501

        :return: The capaths of this ServicesKerberos.  # noqa: E501
        :rtype: list[ServicesKerberosCapaths]
        """
        return self._capaths

    @capaths.setter
    def capaths(self, capaths):
        """Sets the capaths of this ServicesKerberos.

        Authentication paths for non-hierarchical cross-realm.   # noqa: E501

        :param capaths: The capaths of this ServicesKerberos.  # noqa: E501
        :type: list[ServicesKerberosCapaths]
        """

        self._capaths = capaths

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
        if not isinstance(other, ServicesKerberos):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServicesKerberos):
            return True

        return self.to_dict() != other.to_dict()
