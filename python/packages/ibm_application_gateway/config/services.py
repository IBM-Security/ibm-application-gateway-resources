# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.09
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class Services(object):
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
        'credential': 'list[ServicesCredential]'
    }

    attribute_map = {
        'credential': 'credential'
    }

    def __init__(self, credential=None):  # noqa: E501
        """Services - a model defined in OpenAPI"""  # noqa: E501

        self._credential = None
        self.discriminator = None

        if credential is not None:
            self.credential = credential

    @property
    def credential(self):
        """Gets the credential of this Services.  # noqa: E501

        This configuration is used to describe an external credential service  which IAG can use to retrieve credentials for use in single sign-on to  protected applications.  Each credential service must contain:   * name   * enc_key   * host   * url_pattern   * user_attribute   This entry is an array and can be used to specify multiple credential  services.  Example: services:            credential:              - name: myCredService                enc_key: \"@vault-rsa.pem\"                host: ibm_app_gw.ice.ibmcloud.com                proxy: \"proxy.ibm.com:3128\"                url_pattern: \"/v1.0/pwdvault/{user}/resources/{resource}\"                ssl:                  certificate:                     - \"@vault-ibm-com.crt\"                  server_dn: cn=vault                  sni: vault.verify.ibm.com                user_attribute: \"AZN_PRINCIPAL_ID\"                user_attribute_encoding: url                authentication:                  sso:                    client_id: 36bxxxx-xxxx-xxxx-xxxx-xxxxxxxxxae5                    client_secret: ctZxxxxqQs                    endpoint: https://ibm_app_gw.ice.ibmcloud.com/v1.0/endpoint/default/token                    payload: form   # noqa: E501

        :return: The credential of this Services.  # noqa: E501
        :rtype: list[ServicesCredential]
        """
        return self._credential

    @credential.setter
    def credential(self, credential):
        """Sets the credential of this Services.

        This configuration is used to describe an external credential service  which IAG can use to retrieve credentials for use in single sign-on to  protected applications.  Each credential service must contain:   * name   * enc_key   * host   * url_pattern   * user_attribute   This entry is an array and can be used to specify multiple credential  services.  Example: services:            credential:              - name: myCredService                enc_key: \"@vault-rsa.pem\"                host: ibm_app_gw.ice.ibmcloud.com                proxy: \"proxy.ibm.com:3128\"                url_pattern: \"/v1.0/pwdvault/{user}/resources/{resource}\"                ssl:                  certificate:                     - \"@vault-ibm-com.crt\"                  server_dn: cn=vault                  sni: vault.verify.ibm.com                user_attribute: \"AZN_PRINCIPAL_ID\"                user_attribute_encoding: url                authentication:                  sso:                    client_id: 36bxxxx-xxxx-xxxx-xxxx-xxxxxxxxxae5                    client_secret: ctZxxxxqQs                    endpoint: https://ibm_app_gw.ice.ibmcloud.com/v1.0/endpoint/default/token                    payload: form   # noqa: E501

        :param credential: The credential of this Services.  # noqa: E501
        :type: list[ServicesCredential]
        """

        self._credential = credential

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
        if not isinstance(other, Services):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Services):
            return True

        return self.to_dict() != other.to_dict()
