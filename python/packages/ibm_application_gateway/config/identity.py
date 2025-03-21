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

class Identity(object):
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
        'auth_challenge_redirect': 'IdentityAuthChallengeRedirect',
        'auth_complete_redirect': 'IdentityAuthCompleteRedirect',
        'oidc': 'list[Oidc]',
        'oauth': 'list[Oauth]',
        'eai': 'Eai',
        'ci_oidc': 'CiOidc'
    }

    attribute_map = {
        'auth_challenge_redirect': 'auth_challenge_redirect',
        'auth_complete_redirect': 'auth_complete_redirect',
        'oidc': 'oidc',
        'oauth': 'oauth',
        'eai': 'eai',
        'ci_oidc': 'ci_oidc'
    }

    def __init__(self, auth_challenge_redirect=None, auth_complete_redirect=None, oidc=None, oauth=None, eai=None, ci_oidc=None):  # noqa: E501
        """Identity - a model defined in OpenAPI"""  # noqa: E501

        self._auth_challenge_redirect = None
        self._auth_complete_redirect = None
        self._oidc = None
        self._oauth = None
        self._eai = None
        self._ci_oidc = None
        self.discriminator = None

        if auth_challenge_redirect is not None:
            self.auth_challenge_redirect = auth_challenge_redirect
        if auth_complete_redirect is not None:
            self.auth_complete_redirect = auth_complete_redirect
        if oidc is not None:
            self.oidc = oidc
        if oauth is not None:
            self.oauth = oauth
        if eai is not None:
            self.eai = eai
        if ci_oidc is not None:
            self.ci_oidc = ci_oidc

    @property
    def auth_challenge_redirect(self):
        """Gets the auth_challenge_redirect of this Identity.  # noqa: E501


        :return: The auth_challenge_redirect of this Identity.  # noqa: E501
        :rtype: IdentityAuthChallengeRedirect
        """
        return self._auth_challenge_redirect

    @auth_challenge_redirect.setter
    def auth_challenge_redirect(self, auth_challenge_redirect):
        """Sets the auth_challenge_redirect of this Identity.


        :param auth_challenge_redirect: The auth_challenge_redirect of this Identity.  # noqa: E501
        :type: IdentityAuthChallengeRedirect
        """

        self._auth_challenge_redirect = auth_challenge_redirect

    @property
    def auth_complete_redirect(self):
        """Gets the auth_complete_redirect of this Identity.  # noqa: E501


        :return: The auth_complete_redirect of this Identity.  # noqa: E501
        :rtype: IdentityAuthCompleteRedirect
        """
        return self._auth_complete_redirect

    @auth_complete_redirect.setter
    def auth_complete_redirect(self, auth_complete_redirect):
        """Sets the auth_complete_redirect of this Identity.


        :param auth_complete_redirect: The auth_complete_redirect of this Identity.  # noqa: E501
        :type: IdentityAuthCompleteRedirect
        """

        self._auth_complete_redirect = auth_complete_redirect

    @property
    def oidc(self):
        """Gets the oidc of this Identity.  # noqa: E501


        :return: The oidc of this Identity.  # noqa: E501
        :rtype: list[Oidc]
        """
        return self._oidc

    @oidc.setter
    def oidc(self, oidc):
        """Sets the oidc of this Identity.


        :param oidc: The oidc of this Identity.  # noqa: E501
        :type: list[Oidc]
        """

        self._oidc = oidc

    @property
    def oauth(self):
        """Gets the oauth of this Identity.  # noqa: E501

        The configuration entries in this section allow the reverse proxy to accept an OAuth bearer token and use the configured OAuth introspection endpoints to validate the token and create an authenticated session. IBM Security Verify, IBM Security Verify Access and IBM Security Access Manager 9.0.7.0+ provide supported OAuth introspection endpoints. Multiple introspection endpoints may be different so that different providers can be enabled for different resource servers.  ### Attributes Format A JSON data element from the introspection response token which should be included or excluded in the credential as an extended attribute. The format of the configuration entry is:  `[+|-]<json-data>`  where:  Element | Description ------- | ----------- + | Indicates that this JSON data should be added to the credential. - | Indicates that this JSON data should not be added to the credential. &lt;json-data&gt; | The corresponding JSON data name, which can also contain pattern matching characters (i.e. * ?).  For example the value \"-exp\" indicates that the expiry time of the token should not be added to the credential.  When an introspection response token is received each JSON data element will be evaluated against each rule in sequence until a match is found. The corresponding code (+|-) will then be used to determine whether the JSON data will be added to the credential or not. If the JSON data name does not match a configured rule it will by default be added to the credential.   # noqa: E501

        :return: The oauth of this Identity.  # noqa: E501
        :rtype: list[Oauth]
        """
        return self._oauth

    @oauth.setter
    def oauth(self, oauth):
        """Sets the oauth of this Identity.

        The configuration entries in this section allow the reverse proxy to accept an OAuth bearer token and use the configured OAuth introspection endpoints to validate the token and create an authenticated session. IBM Security Verify, IBM Security Verify Access and IBM Security Access Manager 9.0.7.0+ provide supported OAuth introspection endpoints. Multiple introspection endpoints may be different so that different providers can be enabled for different resource servers.  ### Attributes Format A JSON data element from the introspection response token which should be included or excluded in the credential as an extended attribute. The format of the configuration entry is:  `[+|-]<json-data>`  where:  Element | Description ------- | ----------- + | Indicates that this JSON data should be added to the credential. - | Indicates that this JSON data should not be added to the credential. &lt;json-data&gt; | The corresponding JSON data name, which can also contain pattern matching characters (i.e. * ?).  For example the value \"-exp\" indicates that the expiry time of the token should not be added to the credential.  When an introspection response token is received each JSON data element will be evaluated against each rule in sequence until a match is found. The corresponding code (+|-) will then be used to determine whether the JSON data will be added to the credential or not. If the JSON data name does not match a configured rule it will by default be added to the credential.   # noqa: E501

        :param oauth: The oauth of this Identity.  # noqa: E501
        :type: list[Oauth]
        """

        self._oauth = oauth

    @property
    def eai(self):
        """Gets the eai of this Identity.  # noqa: E501


        :return: The eai of this Identity.  # noqa: E501
        :rtype: Eai
        """
        return self._eai

    @eai.setter
    def eai(self, eai):
        """Sets the eai of this Identity.


        :param eai: The eai of this Identity.  # noqa: E501
        :type: Eai
        """

        self._eai = eai

    @property
    def ci_oidc(self):
        """Gets the ci_oidc of this Identity.  # noqa: E501


        :return: The ci_oidc of this Identity.  # noqa: E501
        :rtype: CiOidc
        """
        return self._ci_oidc

    @ci_oidc.setter
    def ci_oidc(self, ci_oidc):
        """Sets the ci_oidc of this Identity.


        :param ci_oidc: The ci_oidc of this Identity.  # noqa: E501
        :type: CiOidc
        """

        self._ci_oidc = ci_oidc

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
        if not isinstance(other, Identity):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Identity):
            return True

        return self.to_dict() != other.to_dict()
