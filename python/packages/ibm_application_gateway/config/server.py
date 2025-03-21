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

class Server(object):
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
        'protocols': 'list[str]',
        'client_ip_rules': 'list[str]',
        'ssl': 'ServerSsl',
        'failover': 'ServerFailover',
        'session': 'ServerSession',
        'worker_threads': 'float',
        'http2': 'bool',
        'websocket': 'ServerWebsocket',
        'local_pages': 'ServerLocalPages',
        'management_pages': 'ServerManagementPages',
        'error_pages': 'ServerErrorPages',
        'public_assets': 'ServerPublicAssets',
        'enabled_languages': 'list[str]',
        'credential_service_cache': 'ServerCredentialServiceCache',
        'local_applications': 'ServerLocalApplications',
        'rate_limiting': 'ServerRateLimiting',
        'content_security_policy': 'str',
        'response_headers': 'list[ServerResponseHeaders]'
    }

    attribute_map = {
        'protocols': 'protocols',
        'client_ip_rules': 'client_ip_rules',
        'ssl': 'ssl',
        'failover': 'failover',
        'session': 'session',
        'worker_threads': 'worker_threads',
        'http2': 'http2',
        'websocket': 'websocket',
        'local_pages': 'local_pages',
        'management_pages': 'management_pages',
        'error_pages': 'error_pages',
        'public_assets': 'public_assets',
        'enabled_languages': 'enabled_languages',
        'credential_service_cache': 'credential_service_cache',
        'local_applications': 'local_applications',
        'rate_limiting': 'rate_limiting',
        'content_security_policy': 'content_security_policy',
        'response_headers': 'response_headers'
    }

    def __init__(self, protocols=None, client_ip_rules=None, ssl=None, failover=None, session=None, worker_threads=100, http2=True, websocket=None, local_pages=None, management_pages=None, error_pages=None, public_assets=None, enabled_languages=None, credential_service_cache=None, local_applications=None, rate_limiting=None, content_security_policy='default', response_headers=None):  # noqa: E501
        """Server - a model defined in OpenAPI"""  # noqa: E501

        self._protocols = None
        self._client_ip_rules = None
        self._ssl = None
        self._failover = None
        self._session = None
        self._worker_threads = None
        self._http2 = None
        self._websocket = None
        self._local_pages = None
        self._management_pages = None
        self._error_pages = None
        self._public_assets = None
        self._enabled_languages = None
        self._credential_service_cache = None
        self._local_applications = None
        self._rate_limiting = None
        self._content_security_policy = None
        self._response_headers = None
        self.discriminator = None

        if protocols is not None:
            self.protocols = protocols
        if client_ip_rules is not None:
            self.client_ip_rules = client_ip_rules
        if ssl is not None:
            self.ssl = ssl
        if failover is not None:
            self.failover = failover
        if session is not None:
            self.session = session
        if worker_threads is not None:
            self.worker_threads = worker_threads
        if http2 is not None:
            self.http2 = http2
        if websocket is not None:
            self.websocket = websocket
        if local_pages is not None:
            self.local_pages = local_pages
        if management_pages is not None:
            self.management_pages = management_pages
        if error_pages is not None:
            self.error_pages = error_pages
        if public_assets is not None:
            self.public_assets = public_assets
        if enabled_languages is not None:
            self.enabled_languages = enabled_languages
        if credential_service_cache is not None:
            self.credential_service_cache = credential_service_cache
        if local_applications is not None:
            self.local_applications = local_applications
        if rate_limiting is not None:
            self.rate_limiting = rate_limiting
        if content_security_policy is not None:
            self.content_security_policy = content_security_policy
        if response_headers is not None:
            self.response_headers = response_headers

    @property
    def protocols(self):
        """Gets the protocols of this Server.  # noqa: E501

        Specifies the protocols which will be supported by the server. The server will listen on a different port for each protocol: `http/8080` and `https/8443`. If no protocols are specified, the server will listen for https requests only.  Additionally, the server can be configured to expect the [PROXY Protocol](https://www.haproxy.com/blog/haproxy/proxy-protocol/) header by using the `*_proxy` values.  Note that if the proxy protocol is enabled for a given protocol, all traffic for that protocol will be expected to contain the PROXY protocol headers. That is, the following entries are exclusive:  - `http` and `http_proxy`  - `https` and `https_proxy`  protocol    | Port | Description ------------|------|------------- http        | 8080 | HTTP https       | 8443 | HTTPS http_proxy  | 8080 | HTTP with Proxy Protocol https_proxy | 8443 | HTTPS with Proxy Protocol   # noqa: E501

        :return: The protocols of this Server.  # noqa: E501
        :rtype: list[str]
        """
        return self._protocols

    @protocols.setter
    def protocols(self, protocols):
        """Sets the protocols of this Server.

        Specifies the protocols which will be supported by the server. The server will listen on a different port for each protocol: `http/8080` and `https/8443`. If no protocols are specified, the server will listen for https requests only.  Additionally, the server can be configured to expect the [PROXY Protocol](https://www.haproxy.com/blog/haproxy/proxy-protocol/) header by using the `*_proxy` values.  Note that if the proxy protocol is enabled for a given protocol, all traffic for that protocol will be expected to contain the PROXY protocol headers. That is, the following entries are exclusive:  - `http` and `http_proxy`  - `https` and `https_proxy`  protocol    | Port | Description ------------|------|------------- http        | 8080 | HTTP https       | 8443 | HTTPS http_proxy  | 8080 | HTTP with Proxy Protocol https_proxy | 8443 | HTTPS with Proxy Protocol   # noqa: E501

        :param protocols: The protocols of this Server.  # noqa: E501
        :type: list[str]
        """
        allowed_values = ["http", "https", "http_proxy", "https_proxy"]  # noqa: E501
        if (not set(protocols).issubset(set(allowed_values))):  # noqa: E501
            raise ValueError(
                "Invalid values for `protocols` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(protocols) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._protocols = protocols

    @property
    def client_ip_rules(self):
        """Gets the client_ip_rules of this Server.  # noqa: E501

        The rules which define whether a client is allowed to connect to this server. The rule is of the format:  `[+|-]<client-ip>`  where:  Element           | Description ------------------|------------- +                 | Indicates that the client is permitted access. -                 | Indicates that the client is not permitted access. &lt;client-ip&gt; | The IP address of the client, which can also contain the pattern matching characters `*` and `?`.  The client IP address of a request will be evaluated against each rule in sequence until a match is found.  The corresponding code (+|-) will then be used to determine whether the client connection is accepted.  If the client IP matches no configured rules the client connection will be accepted.   # noqa: E501

        :return: The client_ip_rules of this Server.  # noqa: E501
        :rtype: list[str]
        """
        return self._client_ip_rules

    @client_ip_rules.setter
    def client_ip_rules(self, client_ip_rules):
        """Sets the client_ip_rules of this Server.

        The rules which define whether a client is allowed to connect to this server. The rule is of the format:  `[+|-]<client-ip>`  where:  Element           | Description ------------------|------------- +                 | Indicates that the client is permitted access. -                 | Indicates that the client is not permitted access. &lt;client-ip&gt; | The IP address of the client, which can also contain the pattern matching characters `*` and `?`.  The client IP address of a request will be evaluated against each rule in sequence until a match is found.  The corresponding code (+|-) will then be used to determine whether the client connection is accepted.  If the client IP matches no configured rules the client connection will be accepted.   # noqa: E501

        :param client_ip_rules: The client_ip_rules of this Server.  # noqa: E501
        :type: list[str]
        """

        self._client_ip_rules = client_ip_rules

    @property
    def ssl(self):
        """Gets the ssl of this Server.  # noqa: E501


        :return: The ssl of this Server.  # noqa: E501
        :rtype: ServerSsl
        """
        return self._ssl

    @ssl.setter
    def ssl(self, ssl):
        """Sets the ssl of this Server.


        :param ssl: The ssl of this Server.  # noqa: E501
        :type: ServerSsl
        """

        self._ssl = ssl

    @property
    def failover(self):
        """Gets the failover of this Server.  # noqa: E501


        :return: The failover of this Server.  # noqa: E501
        :rtype: ServerFailover
        """
        return self._failover

    @failover.setter
    def failover(self, failover):
        """Sets the failover of this Server.


        :param failover: The failover of this Server.  # noqa: E501
        :type: ServerFailover
        """

        self._failover = failover

    @property
    def session(self):
        """Gets the session of this Server.  # noqa: E501


        :return: The session of this Server.  # noqa: E501
        :rtype: ServerSession
        """
        return self._session

    @session.setter
    def session(self, session):
        """Sets the session of this Server.


        :param session: The session of this Server.  # noqa: E501
        :type: ServerSession
        """

        self._session = session

    @property
    def worker_threads(self):
        """Gets the worker_threads of this Server.  # noqa: E501

        The number of configured worker threads specifies the number of concurrent incoming requests that can be serviced by this gateway instance. Choosing the optimal number depends on the quantity and type of traffic on your network. Modifying this value should be done carefully to ensure optimal performance.   # noqa: E501

        :return: The worker_threads of this Server.  # noqa: E501
        :rtype: float
        """
        return self._worker_threads

    @worker_threads.setter
    def worker_threads(self, worker_threads):
        """Sets the worker_threads of this Server.

        The number of configured worker threads specifies the number of concurrent incoming requests that can be serviced by this gateway instance. Choosing the optimal number depends on the quantity and type of traffic on your network. Modifying this value should be done carefully to ensure optimal performance.   # noqa: E501

        :param worker_threads: The worker_threads of this Server.  # noqa: E501
        :type: float
        """
        if (worker_threads is not None and worker_threads < 1):  # noqa: E501
            raise ValueError("Invalid value for `worker_threads`, must be a value greater than or equal to `1`")  # noqa: E501

        self._worker_threads = worker_threads

    @property
    def http2(self):
        """Gets the http2 of this Server.  # noqa: E501

        A boolean which indicates whether or not to enable support for HTTP/2 clients. HTTP/2 supports a reduced set of cipher suites. The minimum cipher is `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` which should be added to the `server/ssl/ciphers[]` entry.   # noqa: E501

        :return: The http2 of this Server.  # noqa: E501
        :rtype: bool
        """
        return self._http2

    @http2.setter
    def http2(self, http2):
        """Sets the http2 of this Server.

        A boolean which indicates whether or not to enable support for HTTP/2 clients. HTTP/2 supports a reduced set of cipher suites. The minimum cipher is `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` which should be added to the `server/ssl/ciphers[]` entry.   # noqa: E501

        :param http2: The http2 of this Server.  # noqa: E501
        :type: bool
        """

        self._http2 = http2

    @property
    def websocket(self):
        """Gets the websocket of this Server.  # noqa: E501


        :return: The websocket of this Server.  # noqa: E501
        :rtype: ServerWebsocket
        """
        return self._websocket

    @websocket.setter
    def websocket(self, websocket):
        """Sets the websocket of this Server.


        :param websocket: The websocket of this Server.  # noqa: E501
        :type: ServerWebsocket
        """

        self._websocket = websocket

    @property
    def local_pages(self):
        """Gets the local_pages of this Server.  # noqa: E501


        :return: The local_pages of this Server.  # noqa: E501
        :rtype: ServerLocalPages
        """
        return self._local_pages

    @local_pages.setter
    def local_pages(self, local_pages):
        """Sets the local_pages of this Server.


        :param local_pages: The local_pages of this Server.  # noqa: E501
        :type: ServerLocalPages
        """

        self._local_pages = local_pages

    @property
    def management_pages(self):
        """Gets the management_pages of this Server.  # noqa: E501


        :return: The management_pages of this Server.  # noqa: E501
        :rtype: ServerManagementPages
        """
        return self._management_pages

    @management_pages.setter
    def management_pages(self, management_pages):
        """Sets the management_pages of this Server.


        :param management_pages: The management_pages of this Server.  # noqa: E501
        :type: ServerManagementPages
        """

        self._management_pages = management_pages

    @property
    def error_pages(self):
        """Gets the error_pages of this Server.  # noqa: E501


        :return: The error_pages of this Server.  # noqa: E501
        :rtype: ServerErrorPages
        """
        return self._error_pages

    @error_pages.setter
    def error_pages(self, error_pages):
        """Sets the error_pages of this Server.


        :param error_pages: The error_pages of this Server.  # noqa: E501
        :type: ServerErrorPages
        """

        self._error_pages = error_pages

    @property
    def public_assets(self):
        """Gets the public_assets of this Server.  # noqa: E501


        :return: The public_assets of this Server.  # noqa: E501
        :rtype: ServerPublicAssets
        """
        return self._public_assets

    @public_assets.setter
    def public_assets(self, public_assets):
        """Sets the public_assets of this Server.


        :param public_assets: The public_assets of this Server.  # noqa: E501
        :type: ServerPublicAssets
        """

        self._public_assets = public_assets

    @property
    def enabled_languages(self):
        """Gets the enabled_languages of this Server.  # noqa: E501

        The language(s) which will be permitted when the application gateway generates error and management response pages. The accept-language HTTP header from the request is used to determine the language used when generating responses.  The first language in the list will be treated as the default language. The default language will be used if none of the languages contained in the accept-language HTTP header have been enabled.  If this entry is not defined, all languages will be enabled with English (C) set as the default.  #### language codes  | `language code` | Language              | |-----------------|-----------------------| | pt              | Brazilian Portuguese  | | cs              | Czech                 | | zh_CN           | Chinese (Simplified)  | | zh_TW           | Chinese (Traditional) | | C               | English               | | fr              | French                | | de              | German                | | hu              | Hungarian             | | it              | Italian               | | ja              | Japanese              | | ko              | Korean                | | pl              | Polish                | | es              | Spanish               | | ru              | Russian               |   # noqa: E501

        :return: The enabled_languages of this Server.  # noqa: E501
        :rtype: list[str]
        """
        return self._enabled_languages

    @enabled_languages.setter
    def enabled_languages(self, enabled_languages):
        """Sets the enabled_languages of this Server.

        The language(s) which will be permitted when the application gateway generates error and management response pages. The accept-language HTTP header from the request is used to determine the language used when generating responses.  The first language in the list will be treated as the default language. The default language will be used if none of the languages contained in the accept-language HTTP header have been enabled.  If this entry is not defined, all languages will be enabled with English (C) set as the default.  #### language codes  | `language code` | Language              | |-----------------|-----------------------| | pt              | Brazilian Portuguese  | | cs              | Czech                 | | zh_CN           | Chinese (Simplified)  | | zh_TW           | Chinese (Traditional) | | C               | English               | | fr              | French                | | de              | German                | | hu              | Hungarian             | | it              | Italian               | | ja              | Japanese              | | ko              | Korean                | | pl              | Polish                | | es              | Spanish               | | ru              | Russian               |   # noqa: E501

        :param enabled_languages: The enabled_languages of this Server.  # noqa: E501
        :type: list[str]
        """
        allowed_values = ["C", "cs", "de", "es", "fr", "hu", "it", "ja", "ko", "pl", "pt_BR", "ru", "zh_CN", "zh_TW"]  # noqa: E501
        if (not set(enabled_languages).issubset(set(allowed_values))):  # noqa: E501
            raise ValueError(
                "Invalid values for `enabled_languages` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(enabled_languages) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._enabled_languages = enabled_languages

    @property
    def credential_service_cache(self):
        """Gets the credential_service_cache of this Server.  # noqa: E501


        :return: The credential_service_cache of this Server.  # noqa: E501
        :rtype: ServerCredentialServiceCache
        """
        return self._credential_service_cache

    @credential_service_cache.setter
    def credential_service_cache(self, credential_service_cache):
        """Sets the credential_service_cache of this Server.


        :param credential_service_cache: The credential_service_cache of this Server.  # noqa: E501
        :type: ServerCredentialServiceCache
        """

        self._credential_service_cache = credential_service_cache

    @property
    def local_applications(self):
        """Gets the local_applications of this Server.  # noqa: E501


        :return: The local_applications of this Server.  # noqa: E501
        :rtype: ServerLocalApplications
        """
        return self._local_applications

    @local_applications.setter
    def local_applications(self, local_applications):
        """Sets the local_applications of this Server.


        :param local_applications: The local_applications of this Server.  # noqa: E501
        :type: ServerLocalApplications
        """

        self._local_applications = local_applications

    @property
    def rate_limiting(self):
        """Gets the rate_limiting of this Server.  # noqa: E501


        :return: The rate_limiting of this Server.  # noqa: E501
        :rtype: ServerRateLimiting
        """
        return self._rate_limiting

    @rate_limiting.setter
    def rate_limiting(self, rate_limiting):
        """Sets the rate_limiting of this Server.


        :param rate_limiting: The rate_limiting of this Server.  # noqa: E501
        :type: ServerRateLimiting
        """

        self._rate_limiting = rate_limiting

    @property
    def content_security_policy(self):
        """Gets the content_security_policy of this Server.  # noqa: E501

        Specifies whether or not the gateway will use the default content security policy.  The default policy inserts the following HTTP headers into all responses:  header | value -------|------- x-frame-options | DENY x-xss-protection | 1 content-security-policy | default-src 'self'; frame-ancestors 'self'; form-action 'self'; x-content-type-options | nosniff   # noqa: E501

        :return: The content_security_policy of this Server.  # noqa: E501
        :rtype: str
        """
        return self._content_security_policy

    @content_security_policy.setter
    def content_security_policy(self, content_security_policy):
        """Sets the content_security_policy of this Server.

        Specifies whether or not the gateway will use the default content security policy.  The default policy inserts the following HTTP headers into all responses:  header | value -------|------- x-frame-options | DENY x-xss-protection | 1 content-security-policy | default-src 'self'; frame-ancestors 'self'; form-action 'self'; x-content-type-options | nosniff   # noqa: E501

        :param content_security_policy: The content_security_policy of this Server.  # noqa: E501
        :type: str
        """
        allowed_values = ["default", "disabled"]  # noqa: E501
        if content_security_policy not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `content_security_policy` ({0}), must be one of {1}"  # noqa: E501
                .format(content_security_policy, allowed_values)
            )

        self._content_security_policy = content_security_policy

    @property
    def response_headers(self):
        """Gets the response_headers of this Server.  # noqa: E501

        This entry can be used to set HTTP headers which are always present in all responses which are returned to clients. For each entry, only one of `macro`, `attribute` or `text` can be specified.   # noqa: E501

        :return: The response_headers of this Server.  # noqa: E501
        :rtype: list[ServerResponseHeaders]
        """
        return self._response_headers

    @response_headers.setter
    def response_headers(self, response_headers):
        """Sets the response_headers of this Server.

        This entry can be used to set HTTP headers which are always present in all responses which are returned to clients. For each entry, only one of `macro`, `attribute` or `text` can be specified.   # noqa: E501

        :param response_headers: The response_headers of this Server.  # noqa: E501
        :type: list[ServerResponseHeaders]
        """

        self._response_headers = response_headers

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
        if not isinstance(other, Server):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Server):
            return True

        return self.to_dict() != other.to_dict()
