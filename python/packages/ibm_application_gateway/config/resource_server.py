# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.02
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class ResourceServer(object):
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
        'path': 'str',
        'virtual_host': 'str',
        'connection_type': 'str',
        'transparent_path': 'bool',
        'stateful': 'bool',
        'http2': 'ResourceServerHttp2',
        'identity_headers': 'ResourceServerIdentityHeaders',
        'cookies': 'ResourceServerCookies',
        'mutual_auth': 'ResourceServerMutualAuth',
        'servers': 'list[ResourceServerServers]',
        'forms_login': 'ResourceServerFormsLogin',
        'health': 'ResourceServerHealth',
        'worker_threads': 'ResourceServerWorkerThreads',
        'persistent_connections': 'ResourceServerPersistentConnections',
        'identity': 'ResourceServerIdentity'
    }

    attribute_map = {
        'path': 'path',
        'virtual_host': 'virtual_host',
        'connection_type': 'connection_type',
        'transparent_path': 'transparent_path',
        'stateful': 'stateful',
        'http2': 'http2',
        'identity_headers': 'identity_headers',
        'cookies': 'cookies',
        'mutual_auth': 'mutual_auth',
        'servers': 'servers',
        'forms_login': 'forms_login',
        'health': 'health',
        'worker_threads': 'worker_threads',
        'persistent_connections': 'persistent_connections',
        'identity': 'identity'
    }

    def __init__(self, path=None, virtual_host=None, connection_type='tcp', transparent_path=False, stateful=False, http2=None, identity_headers=None, cookies=None, mutual_auth=None, servers=None, forms_login=None, health=None, worker_threads=None, persistent_connections=None, identity=None):  # noqa: E501
        """ResourceServer - a model defined in OpenAPI"""  # noqa: E501

        self._path = None
        self._virtual_host = None
        self._connection_type = None
        self._transparent_path = None
        self._stateful = None
        self._http2 = None
        self._identity_headers = None
        self._cookies = None
        self._mutual_auth = None
        self._servers = None
        self._forms_login = None
        self._health = None
        self._worker_threads = None
        self._persistent_connections = None
        self._identity = None
        self.discriminator = None

        if path is not None:
            self.path = path
        if virtual_host is not None:
            self.virtual_host = virtual_host
        if connection_type is not None:
            self.connection_type = connection_type
        if transparent_path is not None:
            self.transparent_path = transparent_path
        if stateful is not None:
            self.stateful = stateful
        if http2 is not None:
            self.http2 = http2
        if identity_headers is not None:
            self.identity_headers = identity_headers
        if cookies is not None:
            self.cookies = cookies
        if mutual_auth is not None:
            self.mutual_auth = mutual_auth
        if servers is not None:
            self.servers = servers
        if forms_login is not None:
            self.forms_login = forms_login
        if health is not None:
            self.health = health
        if worker_threads is not None:
            self.worker_threads = worker_threads
        if persistent_connections is not None:
            self.persistent_connections = persistent_connections
        if identity is not None:
            self.identity = identity

    @property
    def path(self):
        """Gets the path of this ResourceServer.  # noqa: E501

        The path at which the resource server will be made available. This entry is required if the virtual\\_host entry has not been specified. It is not valid to have both path and virtual\\_host entries specified. Example: resource_servers:              - path: /static                ...   # noqa: E501

        :return: The path of this ResourceServer.  # noqa: E501
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this ResourceServer.

        The path at which the resource server will be made available. This entry is required if the virtual\\_host entry has not been specified. It is not valid to have both path and virtual\\_host entries specified. Example: resource_servers:              - path: /static                ...   # noqa: E501

        :param path: The path of this ResourceServer.  # noqa: E501
        :type: str
        """

        self._path = path

    @property
    def virtual_host(self):
        """Gets the virtual_host of this ResourceServer.  # noqa: E501

        The virtual host, as defined by the host header in the request, at which the resource server will be made available. Port information may also be specified if the virtual host is on a non-default port for the intended protocol. This entry is required if the path entry has not been specified. It is not valid to have both path and virtual\\_host entries specified. Example: resource_servers:              - virtual_host: \"application.ibm.com:9443\"                 ...   # noqa: E501

        :return: The virtual_host of this ResourceServer.  # noqa: E501
        :rtype: str
        """
        return self._virtual_host

    @virtual_host.setter
    def virtual_host(self, virtual_host):
        """Sets the virtual_host of this ResourceServer.

        The virtual host, as defined by the host header in the request, at which the resource server will be made available. Port information may also be specified if the virtual host is on a non-default port for the intended protocol. This entry is required if the path entry has not been specified. It is not valid to have both path and virtual\\_host entries specified. Example: resource_servers:              - virtual_host: \"application.ibm.com:9443\"                 ...   # noqa: E501

        :param virtual_host: The virtual_host of this ResourceServer.  # noqa: E501
        :type: str
        """

        self._virtual_host = virtual_host

    @property
    def connection_type(self):
        """Gets the connection_type of this ResourceServer.  # noqa: E501

        The connection type the reverse proxy will make for this resource server. Example: resource_servers:              - path: \"/example\"                 ...                connection_type: ssl   # noqa: E501

        :return: The connection_type of this ResourceServer.  # noqa: E501
        :rtype: str
        """
        return self._connection_type

    @connection_type.setter
    def connection_type(self, connection_type):
        """Sets the connection_type of this ResourceServer.

        The connection type the reverse proxy will make for this resource server. Example: resource_servers:              - path: \"/example\"                 ...                connection_type: ssl   # noqa: E501

        :param connection_type: The connection_type of this ResourceServer.  # noqa: E501
        :type: str
        """
        allowed_values = ["tcp", "ssl", "tcp_proxy", "ssl_proxy"]  # noqa: E501
        if connection_type not in allowed_values:  # noqa: E501
            raise ValueError(
                "Invalid value for `connection_type` ({0}), must be one of {1}"  # noqa: E501
                .format(connection_type, allowed_values)
            )

        self._connection_type = connection_type

    @property
    def transparent_path(self):
        """Gets the transparent_path of this ResourceServer.  # noqa: E501

        A boolean flag indicating whether or not this resource server uses a transparent path. For path type resource servers, setting this entry to true will result in the passing of the entire URL as observed by the reverse proxy to the resource server, including the value given in \"path\". If set to false the reverse proxy will filter the path from the URL and pass only the remainder of the URL to the resource server. Example: resource_servers:              - path: \"/example\"                 ...                transparent_path: true   # noqa: E501

        :return: The transparent_path of this ResourceServer.  # noqa: E501
        :rtype: bool
        """
        return self._transparent_path

    @transparent_path.setter
    def transparent_path(self, transparent_path):
        """Sets the transparent_path of this ResourceServer.

        A boolean flag indicating whether or not this resource server uses a transparent path. For path type resource servers, setting this entry to true will result in the passing of the entire URL as observed by the reverse proxy to the resource server, including the value given in \"path\". If set to false the reverse proxy will filter the path from the URL and pass only the remainder of the URL to the resource server. Example: resource_servers:              - path: \"/example\"                 ...                transparent_path: true   # noqa: E501

        :param transparent_path: The transparent_path of this ResourceServer.  # noqa: E501
        :type: bool
        """

        self._transparent_path = transparent_path

    @property
    def stateful(self):
        """Gets the stateful of this ResourceServer.  # noqa: E501

        A boolean flag indicating whether or not user requests, for the lifetime of a session, are always processed by the same resource server.  Example: resource_servers:              - path: \"/example\"                 ...                stateful: true   # noqa: E501

        :return: The stateful of this ResourceServer.  # noqa: E501
        :rtype: bool
        """
        return self._stateful

    @stateful.setter
    def stateful(self, stateful):
        """Sets the stateful of this ResourceServer.

        A boolean flag indicating whether or not user requests, for the lifetime of a session, are always processed by the same resource server.  Example: resource_servers:              - path: \"/example\"                 ...                stateful: true   # noqa: E501

        :param stateful: The stateful of this ResourceServer.  # noqa: E501
        :type: bool
        """

        self._stateful = stateful

    @property
    def http2(self):
        """Gets the http2 of this ResourceServer.  # noqa: E501


        :return: The http2 of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerHttp2
        """
        return self._http2

    @http2.setter
    def http2(self, http2):
        """Sets the http2 of this ResourceServer.


        :param http2: The http2 of this ResourceServer.  # noqa: E501
        :type: ResourceServerHttp2
        """

        self._http2 = http2

    @property
    def identity_headers(self):
        """Gets the identity_headers of this ResourceServer.  # noqa: E501


        :return: The identity_headers of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerIdentityHeaders
        """
        return self._identity_headers

    @identity_headers.setter
    def identity_headers(self, identity_headers):
        """Sets the identity_headers of this ResourceServer.


        :param identity_headers: The identity_headers of this ResourceServer.  # noqa: E501
        :type: ResourceServerIdentityHeaders
        """

        self._identity_headers = identity_headers

    @property
    def cookies(self):
        """Gets the cookies of this ResourceServer.  # noqa: E501


        :return: The cookies of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerCookies
        """
        return self._cookies

    @cookies.setter
    def cookies(self, cookies):
        """Sets the cookies of this ResourceServer.


        :param cookies: The cookies of this ResourceServer.  # noqa: E501
        :type: ResourceServerCookies
        """

        self._cookies = cookies

    @property
    def mutual_auth(self):
        """Gets the mutual_auth of this ResourceServer.  # noqa: E501


        :return: The mutual_auth of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerMutualAuth
        """
        return self._mutual_auth

    @mutual_auth.setter
    def mutual_auth(self, mutual_auth):
        """Sets the mutual_auth of this ResourceServer.


        :param mutual_auth: The mutual_auth of this ResourceServer.  # noqa: E501
        :type: ResourceServerMutualAuth
        """

        self._mutual_auth = mutual_auth

    @property
    def servers(self):
        """Gets the servers of this ResourceServer.  # noqa: E501

        Specifies the location of the resource server that is being protected. This is an array type and multiple resource servers can be specified. Example: resource_servers:              - path: \"/example\"                ...                servers:                    - host: www.test.com                      port: 443                      virtual_host: testportal.test.com                      ssl:                          certificate:                               - \"@www-test-com.crt\"                          server_dn: cn=test                          sni: www.test.com                      url_style:                          case_insensitive: true                          windows: false   # noqa: E501

        :return: The servers of this ResourceServer.  # noqa: E501
        :rtype: list[ResourceServerServers]
        """
        return self._servers

    @servers.setter
    def servers(self, servers):
        """Sets the servers of this ResourceServer.

        Specifies the location of the resource server that is being protected. This is an array type and multiple resource servers can be specified. Example: resource_servers:              - path: \"/example\"                ...                servers:                    - host: www.test.com                      port: 443                      virtual_host: testportal.test.com                      ssl:                          certificate:                               - \"@www-test-com.crt\"                          server_dn: cn=test                          sni: www.test.com                      url_style:                          case_insensitive: true                          windows: false   # noqa: E501

        :param servers: The servers of this ResourceServer.  # noqa: E501
        :type: list[ResourceServerServers]
        """

        self._servers = servers

    @property
    def forms_login(self):
        """Gets the forms_login of this ResourceServer.  # noqa: E501


        :return: The forms_login of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerFormsLogin
        """
        return self._forms_login

    @forms_login.setter
    def forms_login(self, forms_login):
        """Sets the forms_login of this ResourceServer.


        :param forms_login: The forms_login of this ResourceServer.  # noqa: E501
        :type: ResourceServerFormsLogin
        """

        self._forms_login = forms_login

    @property
    def health(self):
        """Gets the health of this ResourceServer.  # noqa: E501


        :return: The health of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerHealth
        """
        return self._health

    @health.setter
    def health(self, health):
        """Sets the health of this ResourceServer.


        :param health: The health of this ResourceServer.  # noqa: E501
        :type: ResourceServerHealth
        """

        self._health = health

    @property
    def worker_threads(self):
        """Gets the worker_threads of this ResourceServer.  # noqa: E501


        :return: The worker_threads of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerWorkerThreads
        """
        return self._worker_threads

    @worker_threads.setter
    def worker_threads(self, worker_threads):
        """Sets the worker_threads of this ResourceServer.


        :param worker_threads: The worker_threads of this ResourceServer.  # noqa: E501
        :type: ResourceServerWorkerThreads
        """

        self._worker_threads = worker_threads

    @property
    def persistent_connections(self):
        """Gets the persistent_connections of this ResourceServer.  # noqa: E501


        :return: The persistent_connections of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerPersistentConnections
        """
        return self._persistent_connections

    @persistent_connections.setter
    def persistent_connections(self, persistent_connections):
        """Sets the persistent_connections of this ResourceServer.


        :param persistent_connections: The persistent_connections of this ResourceServer.  # noqa: E501
        :type: ResourceServerPersistentConnections
        """

        self._persistent_connections = persistent_connections

    @property
    def identity(self):
        """Gets the identity of this ResourceServer.  # noqa: E501


        :return: The identity of this ResourceServer.  # noqa: E501
        :rtype: ResourceServerIdentity
        """
        return self._identity

    @identity.setter
    def identity(self, identity):
        """Sets the identity of this ResourceServer.


        :param identity: The identity of this ResourceServer.  # noqa: E501
        :type: ResourceServerIdentity
        """

        self._identity = identity

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
        if not isinstance(other, ResourceServer):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ResourceServer):
            return True

        return self.to_dict() != other.to_dict()