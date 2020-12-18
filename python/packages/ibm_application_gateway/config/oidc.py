# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 20.12
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class Oidc(object):
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
        'discovery_endpoint': 'str',
        'client_id': 'str',
        'client_secret': 'str',
        'ssl': 'OidcSsl',
        'mapped_identity': 'str',
        'redirect_uri_host': 'str',
        'response_type': 'str',
        'response_mode': 'str',
        'proxy': 'str',
        'scopes': 'list[str]',
        'allowed_query_args': 'list[str]',
        'bearer_token_attrs': 'list[str]',
        'id_token_attrs': 'list[str]'
    }

    attribute_map = {
        'discovery_endpoint': 'discovery_endpoint',
        'client_id': 'client_id',
        'client_secret': 'client_secret',
        'ssl': 'ssl',
        'mapped_identity': 'mapped_identity',
        'redirect_uri_host': 'redirect_uri_host',
        'response_type': 'response_type',
        'response_mode': 'response_mode',
        'proxy': 'proxy',
        'scopes': 'scopes',
        'allowed_query_args': 'allowed_query_args',
        'bearer_token_attrs': 'bearer_token_attrs',
        'id_token_attrs': 'id_token_attrs'
    }

    def __init__(self, discovery_endpoint=None, client_id=None, client_secret=None, ssl=None, mapped_identity='{sub}', redirect_uri_host=None, response_type=None, response_mode=None, proxy=None, scopes=None, allowed_query_args=None, bearer_token_attrs=None, id_token_attrs=None):  # noqa: E501
        """Oidc - a model defined in OpenAPI"""  # noqa: E501

        self._discovery_endpoint = None
        self._client_id = None
        self._client_secret = None
        self._ssl = None
        self._mapped_identity = None
        self._redirect_uri_host = None
        self._response_type = None
        self._response_mode = None
        self._proxy = None
        self._scopes = None
        self._allowed_query_args = None
        self._bearer_token_attrs = None
        self._id_token_attrs = None
        self.discriminator = None

        if discovery_endpoint is not None:
            self.discovery_endpoint = discovery_endpoint
        if client_id is not None:
            self.client_id = client_id
        if client_secret is not None:
            self.client_secret = client_secret
        if ssl is not None:
            self.ssl = ssl
        if mapped_identity is not None:
            self.mapped_identity = mapped_identity
        if redirect_uri_host is not None:
            self.redirect_uri_host = redirect_uri_host
        if response_type is not None:
            self.response_type = response_type
        if response_mode is not None:
            self.response_mode = response_mode
        if proxy is not None:
            self.proxy = proxy
        if scopes is not None:
            self.scopes = scopes
        if allowed_query_args is not None:
            self.allowed_query_args = allowed_query_args
        if bearer_token_attrs is not None:
            self.bearer_token_attrs = bearer_token_attrs
        if id_token_attrs is not None:
            self.id_token_attrs = id_token_attrs

    @property
    def discovery_endpoint(self):
        """Gets the discovery_endpoint of this Oidc.  # noqa: E501

        The fully qualified discovery endpoint for the OIDC OP.<br/> For IBM Security Verify, this URL is usually in the format:<br/> https://<verify-hostname\\>/oidc/endpoint/default/.well-known/openid-configuration <br/> For IBM Security Verify Access, this URL is usually in the format:<br/> https://<verify-access-hostname\\>/\\<junction\\>/sps/oauth/oauth20/metadata/\\<definition_name\\>   # noqa: E501

        :return: The discovery_endpoint of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._discovery_endpoint

    @discovery_endpoint.setter
    def discovery_endpoint(self, discovery_endpoint):
        """Sets the discovery_endpoint of this Oidc.

        The fully qualified discovery endpoint for the OIDC OP.<br/> For IBM Security Verify, this URL is usually in the format:<br/> https://<verify-hostname\\>/oidc/endpoint/default/.well-known/openid-configuration <br/> For IBM Security Verify Access, this URL is usually in the format:<br/> https://<verify-access-hostname\\>/\\<junction\\>/sps/oauth/oauth20/metadata/\\<definition_name\\>   # noqa: E501

        :param discovery_endpoint: The discovery_endpoint of this Oidc.  # noqa: E501
        :type: str
        """

        self._discovery_endpoint = discovery_endpoint

    @property
    def client_id(self):
        """Gets the client_id of this Oidc.  # noqa: E501

        The client identity registered with the identity provider.   # noqa: E501

        :return: The client_id of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Oidc.

        The client identity registered with the identity provider.   # noqa: E501

        :param client_id: The client_id of this Oidc.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def client_secret(self):
        """Gets the client_secret of this Oidc.  # noqa: E501

        The client secret registered with the identity provider.   # noqa: E501

        :return: The client_secret of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._client_secret

    @client_secret.setter
    def client_secret(self, client_secret):
        """Sets the client_secret of this Oidc.

        The client secret registered with the identity provider.   # noqa: E501

        :param client_secret: The client_secret of this Oidc.  # noqa: E501
        :type: str
        """

        self._client_secret = client_secret

    @property
    def ssl(self):
        """Gets the ssl of this Oidc.  # noqa: E501


        :return: The ssl of this Oidc.  # noqa: E501
        :rtype: OidcSsl
        """
        return self._ssl

    @ssl.setter
    def ssl(self, ssl):
        """Sets the ssl of this Oidc.


        :param ssl: The ssl of this Oidc.  # noqa: E501
        :type: OidcSsl
        """

        self._ssl = ssl

    @property
    def mapped_identity(self):
        """Gets the mapped_identity of this Oidc.  # noqa: E501

        A formatted string which is used to construct the credential principal name from elements of the ID token. Claims can be added to the identity string, surrounded by '{}', for example:   {iss}/{sub} - would construct a principal name like the following:   https://server.example.com/248289761001   # noqa: E501

        :return: The mapped_identity of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._mapped_identity

    @mapped_identity.setter
    def mapped_identity(self, mapped_identity):
        """Sets the mapped_identity of this Oidc.

        A formatted string which is used to construct the credential principal name from elements of the ID token. Claims can be added to the identity string, surrounded by '{}', for example:   {iss}/{sub} - would construct a principal name like the following:   https://server.example.com/248289761001   # noqa: E501

        :param mapped_identity: The mapped_identity of this Oidc.  # noqa: E501
        :type: str
        """

        self._mapped_identity = mapped_identity

    @property
    def redirect_uri_host(self):
        """Gets the redirect_uri_host of this Oidc.  # noqa: E501

        This is the host which is used in the redirect URI registered with the OIDC OP. If no redirect URI host is configured the host header from the request will be used. The format of the redirect URI will be: http[s]://\\<host\\>/pkmsoidc.   # noqa: E501

        :return: The redirect_uri_host of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._redirect_uri_host

    @redirect_uri_host.setter
    def redirect_uri_host(self, redirect_uri_host):
        """Sets the redirect_uri_host of this Oidc.

        This is the host which is used in the redirect URI registered with the OIDC OP. If no redirect URI host is configured the host header from the request will be used. The format of the redirect URI will be: http[s]://\\<host\\>/pkmsoidc.   # noqa: E501

        :param redirect_uri_host: The redirect_uri_host of this Oidc.  # noqa: E501
        :type: str
        """

        self._redirect_uri_host = redirect_uri_host

    @property
    def response_type(self):
        """Gets the response_type of this Oidc.  # noqa: E501

        The required response type for authentication responses. See the Response Type Values table for a description of the available values.   # noqa: E501

        :return: The response_type of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._response_type

    @response_type.setter
    def response_type(self, response_type):
        """Sets the response_type of this Oidc.

        The required response type for authentication responses. See the Response Type Values table for a description of the available values.   # noqa: E501

        :param response_type: The response_type of this Oidc.  # noqa: E501
        :type: str
        """
        allowed_values = ["code", "id_token", "id_token token"]  # noqa: E501
        if response_type not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `response_type` ({0}), must be one of {1}"  # noqa: E501
                .format(response_type, allowed_values)
            )

        self._response_type = response_type

    @property
    def response_mode(self):
        """Gets the response_mode of this Oidc.  # noqa: E501

        The required response mode for authentication responses. If no response mode is configured the response mode parameter will not be included in the authentication request.   # noqa: E501

        :return: The response_mode of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._response_mode

    @response_mode.setter
    def response_mode(self, response_mode):
        """Sets the response_mode of this Oidc.

        The required response mode for authentication responses. If no response mode is configured the response mode parameter will not be included in the authentication request.   # noqa: E501

        :param response_mode: The response_mode of this Oidc.  # noqa: E501
        :type: str
        """
        allowed_values = ["query", "fragment", "form_post"]  # noqa: E501
        if response_mode not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `response_mode` ({0}), must be one of {1}"  # noqa: E501
                .format(response_mode, allowed_values)
            )

        self._response_mode = response_mode

    @property
    def proxy(self):
        """Gets the proxy of this Oidc.  # noqa: E501

        Specifies the proxy, if any, which is used to reach the identity  provider. The proxy configuration entry should be in URL format. Eg: http[s]://\\<address\\>:\\<port\\>   # noqa: E501

        :return: The proxy of this Oidc.  # noqa: E501
        :rtype: str
        """
        return self._proxy

    @proxy.setter
    def proxy(self, proxy):
        """Sets the proxy of this Oidc.

        Specifies the proxy, if any, which is used to reach the identity  provider. The proxy configuration entry should be in URL format. Eg: http[s]://\\<address\\>:\\<port\\>   # noqa: E501

        :param proxy: The proxy of this Oidc.  # noqa: E501
        :type: str
        """

        self._proxy = proxy

    @property
    def scopes(self):
        """Gets the scopes of this Oidc.  # noqa: E501

        Any scopes to be sent in the authentication request in addition to the 'openid' scope.   # noqa: E501

        :return: The scopes of this Oidc.  # noqa: E501
        :rtype: list[str]
        """
        return self._scopes

    @scopes.setter
    def scopes(self, scopes):
        """Sets the scopes of this Oidc.

        Any scopes to be sent in the authentication request in addition to the 'openid' scope.   # noqa: E501

        :param scopes: The scopes of this Oidc.  # noqa: E501
        :type: list[str]
        """
        allowed_values = ["profile", "email", "address", "phone"]  # noqa: E501
        if (not set(scopes).issubset(set(allowed_values))):  # noqa: E501
            raise ValueError(
                "Invalid values for `scopes` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(scopes) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._scopes = scopes

    @property
    def allowed_query_args(self):
        """Gets the allowed_query_args of this Oidc.  # noqa: E501

        Additional query string arguments can be provided to the authentication kick-off URL which will in turn be appended to the corresponding authentication request. This entry is used to define a list of allowed query string arguments. Any other arguments passed to the kick-off URL will be ignored.   # noqa: E501

        :return: The allowed_query_args of this Oidc.  # noqa: E501
        :rtype: list[str]
        """
        return self._allowed_query_args

    @allowed_query_args.setter
    def allowed_query_args(self, allowed_query_args):
        """Sets the allowed_query_args of this Oidc.

        Additional query string arguments can be provided to the authentication kick-off URL which will in turn be appended to the corresponding authentication request. This entry is used to define a list of allowed query string arguments. Any other arguments passed to the kick-off URL will be ignored.   # noqa: E501

        :param allowed_query_args: The allowed_query_args of this Oidc.  # noqa: E501
        :type: list[str]
        """

        self._allowed_query_args = allowed_query_args

    @property
    def bearer_token_attrs(self):
        """Gets the bearer_token_attrs of this Oidc.  # noqa: E501

        A list of JSON data elements from the bearer token response which  should be included or excluded in the credential as an extended  attribute. See the Bearer Token Attrs Format table for a description  of the expected format.   # noqa: E501

        :return: The bearer_token_attrs of this Oidc.  # noqa: E501
        :rtype: list[str]
        """
        return self._bearer_token_attrs

    @bearer_token_attrs.setter
    def bearer_token_attrs(self, bearer_token_attrs):
        """Sets the bearer_token_attrs of this Oidc.

        A list of JSON data elements from the bearer token response which  should be included or excluded in the credential as an extended  attribute. See the Bearer Token Attrs Format table for a description  of the expected format.   # noqa: E501

        :param bearer_token_attrs: The bearer_token_attrs of this Oidc.  # noqa: E501
        :type: list[str]
        """

        self._bearer_token_attrs = bearer_token_attrs

    @property
    def id_token_attrs(self):
        """Gets the id_token_attrs of this Oidc.  # noqa: E501

        A list of claims from the ID token response which should be included  or excluded in the credential as an extended attribute. See the ID  Token Attrs Format table for a description of the expected format.   # noqa: E501

        :return: The id_token_attrs of this Oidc.  # noqa: E501
        :rtype: list[str]
        """
        return self._id_token_attrs

    @id_token_attrs.setter
    def id_token_attrs(self, id_token_attrs):
        """Sets the id_token_attrs of this Oidc.

        A list of claims from the ID token response which should be included  or excluded in the credential as an extended attribute. See the ID  Token Attrs Format table for a description of the expected format.   # noqa: E501

        :param id_token_attrs: The id_token_attrs of this Oidc.  # noqa: E501
        :type: list[str]
        """

        self._id_token_attrs = id_token_attrs

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
        if not isinstance(other, Oidc):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Oidc):
            return True

        return self.to_dict() != other.to_dict()
