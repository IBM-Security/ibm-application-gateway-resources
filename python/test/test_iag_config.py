#!/usr/local/bin/python3

"""
Copyright contributors to the Application Gateway project
"""

import logging as sys_logging
import sys
import os
import traceback
import yaml

from ibm_application_gateway.config import *
from ibm_application_gateway.system import *

#############################################################################
# Main line.

# Check the command line options.
if len(sys.argv) != 2 and len(sys.argv) != 3:
    print("Usage: {0} [out-file] {{pem-file}}".format(__file__))
    sys.exit(1)

outFile = sys.argv[1]
pemFile = sys.argv[2] if len(sys.argv) == 3 else None

logger = sys_logging.getLogger(__file__)

try:

    #
    # Load some of our files.
    #

    snippet_file    = ConfiguratorFile(name = "snippet.html")
    http_xform_file = ConfiguratorFile(name = "httptrans_req.xsl")
    rate_limit_file = ConfiguratorFile(name = "ratelimit.yaml")

    error_pages_zip = ConfiguratorFile(name = "error_pages.zip")
    management_pages_zip = ConfiguratorFile(name = "management_pages.zip")
    local_pages_zip = ConfiguratorFile(name = "local_pages.zip")

    #
    # Set up the logging configuration.
    #

    logging = Logging(
                    components  =  [ "audit.azn", "audit.authn" ],
                    request_log = LoggingRequestLog(
                                    format    = "%h %l %u %t \"%r\" %s %b",
                                    file      = LoggingRequestLogFile (
                                        file_name = "/var/tmp/request.log")
                                    ),
                    statistics =  LoggingStatistics(
                                    server     = "127.0.0.1",
                                    port       = 8125,
                                    frequency  = 20,
                                    components = [ "iag.authn" ]),
                    tracing    =  [ LoggingTracing(
                                    component = "pdweb.snoop",
                                    file_name = "/var/tmp/tracing.log",
                                    level     = 9) ],
                    transaction = LoggingTransaction(
                                    file_name = "/var/tmp/transaction.log",
                                    compress      = False,
                                    max_file_size = 1024000,
                                    max_files     = 1),
                    json_logging = False
                )

    #
    # Set up the OIDC-CI identity section.
    #

    # identity = Identity(ci_oidc = CiOidc(
    #                     hostname           = "my-tenant.ice.ibmcloud.com",
    #                     client_id          = "dummy_client_id",
    #                     client_secret      = "dummy_client_secret",
    #                     mapped_identity    = "identity",
    #                     redirect_uri_host  = "a.ibm.com",
    #                     response_type      = "id_token token",
    #                     response_mode      = "form_post",
    #                     proxy              = "https://proxy:3128",
    #                     scopes             = [ "profile", "email" ],
    #                     allowed_query_args = [ "arg1", "arg2" ],
    #                     bearer_token_attrs = [ "-attr_1", "+*" ],
    #                     id_token_attrs     = [ "-id_attr_1", "+*" ]
    #                 ))

    identity = Identity(oidc = Oidc(
                        discovery_endpoint = "https://www.test.com/mga/sps/oauth/oauth20/metadata/oidc_def",
                        client_id          = "dummy_client_id",
                        client_secret      = "dummy_client_secret",
                        ssl                = OidcSsl(
                                                certificate=[
                                                    "PEMFormatCertificateString1",
                                                    "PEMFormatCertificateString2"
                                                ]
                        ),
                        mapped_identity    = "identity",
                        redirect_uri_host  = "a.ibm.com",
                        response_type      = "id_token token",
                        response_mode      = "form_post",
                        proxy              = "https://proxy:3128",
                        scopes             = [ "profile", "email" ],
                        allowed_query_args = [ "arg1", "arg2" ],
                        bearer_token_attrs = [ "-attr_1", "+*" ],
                        id_token_attrs     = [ "-id_attr_1", "+*" ]),
                    oauth = [ Oauth(
                        name               = "Verify",
                        restricted         = False,
                        introspection_endpoint = "https://www.test.com/mga/sps/oauth/oauth20/metadata/oidc_def",
                        client_id          = "dummy_client_id",
                        client_secret      = "dummy_client_secret",
                        client_id_hdr      = "dummy_client_id_header",
                        auth_method        = "client_secret_basic",
                        token_type_hint    = "access_token",
                        ssl                = OauthSsl(
                                                certificate=[
                                                    "PEMFormatCertificateString1",
                                                    "PEMFormatCertificateString2"
                                                ]
                        ),
                        mapped_identity    = "identity",
                        proxy              = "https://proxy:3128",
                        attributes         = [ "-attr_1", "+*" ],
                        multi_valued_scope = True
                    )],
                    eai = Eai(triggers = [
                        "/foo/bar",
                        "/foo/baz"
                    ]),
                    auth_challenge_redirect = IdentityAuthChallengeRedirect(
                        url="/foo/login",
                        parameters=[
                            IdentityAuthChallengeRedirectParameters(
                                source="macro",
                                value="METHOD",
                                name="methodName"
                            ),
                            IdentityAuthChallengeRedirectParameters(
                                source="header",
                                value="X-IBM-Proxy",
                                name="proxyName"
                            ),
                            IdentityAuthChallengeRedirectParameters(
                                source="credential",
                                value="AZN_CRED_NETWORK_ADDRESS_STR",
                                name="sourceIp"
                            ),
                        ]
                    )
    )

    #
    # Set up the list of authorization rules.
    #

    authorization = Authorization(rules=[
        AuthorizationRules(
            name = "administrators",
            rule = "(any groupIds = \"administrator\")"
        ),
        AuthorizationRules(
            name = "users",
            rule = "(all authenticationLevels > \"0\")"
        )
    ])

    #
    # Advanced configuration.
    #

    advanced = Advanced(configuration = [
                    AdvancedConfiguration(
                            stanza    = "test_stanza",
                            entry     = "test_entry",
                            operation = "set",
                            value     = [ "value_1", "value_2" ]),
                     AdvancedConfiguration(
                            stanza    = "test_delete_stanza",
                            entry     = "test_delete_entry",
                            operation = "delete"
                    )
            ])

    #
    # Server configuration.
    #

    web_socket = ServerWebsocket(
        worker_threads=ServerWebsocketWorkerThreads(
            max=300,
            idle=150
        ),
        timeouts=ServerWebsocketTimeouts(
            front_end=ServerWebsocketTimeoutsFrontEnd(
                read=10,
                write=10
            ),
            applications=ServerWebsocketTimeoutsApplications(
                read=10,
                write=10
            )
        )
    )

    redis = ServerSessionRedis(
                    enabled                    = True,
                    client_list_cache_lifetime = 20,
                    concurrent_sessions = ServerSessionRedisConcurrentSessions(
                        enabled                      = True,
                        prompt_for_displacement      = True,
                        max_user_sessions            = 10,
                        user_identity_attribute_name = "user-id"
                    )
                )

    session    = ServerSession(
        permit_user_switching = True,
        redis                 = redis,
    )
    ssl        = ServerSsl(
        front_end = ServerSslFrontEnd(
            certificate = [
                "certificate",
                "key"
            ],
            sni         = [ ServerSslFrontEndSni(
                                certificate = [
                                    "certificate",
                                    "key"
                                ],
                                hostname    = "testhost.ibm.com")
                            ]
        ),
        applications = ServerSslApplications()
    )

    apps       = ServerLocalApplications(
                       cred_viewer=ServerLocalApplicationsCredViewer(
                                                path_segment="cred-viewer-app",
                                                attributes= [ "-a1", "-a2"]),
                       azn_decision=ServerLocalApplicationsAznDecision(
                                                path_segment="azn-decision-app",
                                                max_cache_lifetime=300,
                                                max_cache_size=3600
                       ),
                       jwks=ServerLocalApplicationsJwks(
                                                path_segment="jwks")
    )

    localPages = ServerLocalPages(
                    content = local_pages_zip.content(),
                    type    = "zip"
                    )


    mgmtPages = ServerManagementPages(
                    content = management_pages_zip.content(),
                    type    = "zip"
                )

    errorPages = ServerErrorPages(
                    content = error_pages_zip.content(),
                    type    = "zip"
                )

    rateLimiting = ServerRateLimiting(
        cache_size=1337,
        redis=ServerRateLimitingRedis(
            collection_name="test-collection-2",
            sync_window=137
        )
    )

    server = Server(
                        ssl                = ssl,
                        failover           = ServerFailover(key = "simple key"),
                        session            = session,
                        worker_threads     = 200,
                        http2              = False,
                        websocket          = web_socket,
                        local_pages        = localPages,
                        management_pages   = [ mgmtPages ],
                        error_pages        = [ errorPages ],
                        local_applications = apps,
                        rate_limiting      = rateLimiting
                    )

    #
    # Resource Servers configuration.
    #

    resource_servers = [
        ResourceServer(
            path                 = "/static",
            connection_type      = "tcp",
            transparent_path     = False,
            stateful             = True,
            http2                = None,
            identity_headers     = ResourceServerIdentityHeaders(
                encoding             = "utf8_bin",
                basic_auth           = "supply",
                ip_address           = True,
                session_cookie       = True,
                attributes           = [
                  ResourceServerIdentityHeadersAttributes(
                        attribute = "attribute_name",
                        header    = "header_name"
                  ),
                  ResourceServerIdentityHeadersAttributes(
                        attribute = "attribute_name_2"
                  )
                ],
                jwt               = ResourceServerIdentityHeadersJwt(
                    certificate = [
                        "certificate",
                        "key"
                    ],
                    hdr_name    = "jwt",
                    claims      = [
                        ResourceServerIdentityHeadersJwtClaims(
                            name = "iss",
                            text = "www.ibm.com"
                        ),
                        ResourceServerIdentityHeadersJwtClaims(
                            name = "sub",
                            attr = "AZN_CRED_PRINCIPAL_NAME"
                        ),
                        ResourceServerIdentityHeadersJwtClaims(
                            attr = "AZN_*"
                        )
                    ]
                ),
                ltpa                 = ResourceServerIdentityHeadersLtpa (
                    key          = "key",
                    key_password = "passw0rd",
                    version      = 2
                )
            ),
            cookies              = ResourceServerCookies(
                #junction_cookies    = ResourceServerCookiesJunctionCookie(
                #    position            = "inhead",
                #    version             = "xhtml10",
                #    ensure_unique       = True,
                #    preserve_name       = True
                #),
            ),
            mutual_auth          = ResourceServerMutualAuth(
                basic_auth           = ResourceServerMutualAuthBasicAuth(
                    username             = "test",
                    password             = "passsword"
                ),
                certificate_auth=[
                    "certificate",
                    "key"
                ]
            ),
            servers                = [
                ResourceServerServers(
                    host             = "10.10.10.200",
                    port             = 1337,
                    ssl              = ResourceServerSsl(
                                         server_dn = "cn=ibm,dc=com",
                                         certificate=[
                                            "certificate",
                                            "key"
                                         ]
                    ),
                    url_style        = ResourceServerUrlStyle(
                                         case_insensitive = False,
                                         windows          = False
                    ),
                    virtual_host     = "test.ibm.com:9443"
                ),
            ],
            health               = None,
            worker_threads       = None,
            identity             = ResourceServerIdentity(
                oauth = "Verify"
            )
        ),
        ResourceServer(
            virtual_host           = "iag-test:443",
            connection_type        = "tcp",
            transparent_path       = False,
            stateful               = True,
            http2                  = None,
            identity_headers     = ResourceServerIdentityHeaders(
                ip_address           = True,
                encoding             = "utf8_bin",
                basic_auth           = "supply",
                session_cookie       = True
            ),
            cookies              = ResourceServerCookies(
                #junction_cookies    = ResourceServerCookiesJunctionCookie(
                #    position            = "inhead",
                #    version             = "xhtml10",
                #    ensure_unique       = True,
                #    preserve_name       = True
                #),
            ),
            mutual_auth          = ResourceServerMutualAuth(
                basic_auth           = ResourceServerMutualAuthBasicAuth(
                    username             = "test",
                    password             = "passsword"
                )
            ),
            servers                = [
                ResourceServerServers(
                    host             = "10.10.10.200",
                    port             = 1337,
                    ssl              = ResourceServerSsl(
                                         server_dn = "cn=ibm,dc=com",
                    ),
                    url_style        = ResourceServerUrlStyle(
                                         case_insensitive = False,
                                         windows          = False
                    )
                )
            ],
            sni="test.ibm.com",
            health               = None,
            worker_threads       = None
        )
    ]

    #
    # Policies configuration.
    #

    policies = Policies(
            http_transformations = PoliciesHttpTransformations(
                request              = [
                    PoliciesHttpTransformationRule(
                        name             = "RequestHeaderInjector1",
                        method           = "*",
                        paths            = ["*"],
                        attributes       = ["AZN_CRED_PRINCIPAL_NAME"],
                        rule             = http_xform_file.content()
                    )
                ]
            ),
            cors                 = [PoliciesCors(
                name                 = "apiPolicy",
                method               = "*",
                paths                = ["*"],
                host                 = "ibm_app_gw.ibm.com",
                policy               = PoliciesCorsPolicy(
                    allow_origins        = ["*"],
                    handle_pre_flight    = True,
                    allow_headers        = ["X-IBM"],
                    max_age              = 3600,
                    allow_methods        = ["IBMGET"],
                    allow_credentials    = True,
                    expose_headers       = ["IBMHDR"]
                )
            )],
            rate_limiting        = [
                PoliciesRateLimiting(
                    name             = "rl1",
                    methods          = ["*"],
                    paths            = ["rl1"],
                    rule             = rate_limit_file.content()
                ),
                PoliciesRateLimiting(
                    name             = "rl2",
                    methods          = ["*"],
                    paths            = ["rl2"],
                    rule             = rate_limit_file.content()
                )
            ],
            content_injection    = [
                PoliciesContentInjection(
                    name             = "test",
                    paths            = ["/inject"],
                    location         = "<h3>*",
                    content          = snippet_file.content()
                )
            ],
            authorization        = [
                PoliciesAuthorization(
                    name             = "test",
                    host             = "test.ibm.com",
                    paths            = ["*"],
                    methods          = ["GET","PUT"],
                    rule             = "(any groupIds = \"application owners\")",
                    action           = "deny"
                ),
                PoliciesAuthorization(
                    name             = "administrators",
                    paths            = ["*"],
                    methods          = ["GET", "PUT"],
                    action           = "permit"
                ),
                PoliciesAuthorization(
                    name="policy1",
                    rule="acr = \"urn:ibm:security:policy:id:1\"",
                    paths=["/policy1"],
                    action="permit"
                ),
                PoliciesAuthorization(
                    name="policy1_obligate",
                    rule="acr != \"urn:ibm:security:policy:id:1\"",
                    paths=["/policy1"],
                    action="obligate",
                    obligation=PoliciesObligation(
                        oidc=PoliciesObligationOidc(
                            acr_values="urn:ibm:security:policy:id:1 urn:ibm:security:policy:id:2",
                            prompt="login"
                        )
                    )
                )
            ]
        )

    secrets = Secrets(
        obf_key="myObfuscationKey",
        enc_key="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"
    )

    services = Services(
        redis=ServicesRedis(
            key_prefix="key-",
            default_collection="test_collection",
            collections = [
                ServicesRedisCollections(
                    name="test-collection",
                    matching_host="www.webseal.ibm.com",
                    max_pooled_connections=20,
                    idle_timeout=10,
                    health_check_interval=20,
                    cross_domain_support=ServicesRedisCrossDomainSupport(
                        master_authn_server_url="https://mas.ibm.com",
                        master_session_code_lifetime=15
                    ),
                    servers=[
                        ServicesRedisServers(
                            name="redis-a",
                            host="redis-a.ibm.com",
                            port=6380,
                            username="testuser",
                            password="passw0rd",
                            ssl=ServicesRedisSsl(
                                trust_certificates=[
                                    "@redis-ca.crt"
                                ],
                                client_certificate=[
                                    "@cert.crt", "@cert.key"
                                ],
                                sni="redis-a.ibm.com"
                            )
                        )
                    ]
                ),
                ServicesRedisCollections(
                    name                   = "test-collection-2",
                    matching_host          = "www.webseal.ibm.com",
                    max_pooled_connections = 20,
                    idle_timeout           = 10,
                    health_check_interval  = 20,
                    cross_domain_support   = ServicesRedisCrossDomainSupport(
                        master_authn_server_url = "https://mas.ibm.com",
                        master_session_code_lifetime = 15
                    ),
                    servers                = [
                        ServicesRedisServers(
                            name     = "redis-a",
                            host     = "redis-a.ibm.com",
                            port     = 6380,
                            username = "testuser",
                            password = "passw0rd",
                            ssl      = ServicesRedisSsl(
                                trust_certificates = [
                                    "@redis-ca.crt"
                                ],
                                client_certificate = [
                                    "@cert.crt", "@cert.key"
                                ],
                                sni = "redis-a.ibm.com"
                            )
                        )
                    ]
                )
            ]
        )
    )

    #
    # Write the configuration file.
    #

    if os.path.isfile(outFile):
        os.remove(outFile)

    config = Configurator(
                    version          = "21.12",
                    logging          = logging,
                    identity         = identity,
                    advanced         = advanced,
                    server           = server,
                    authorization    = authorization,
                    resource_servers = resource_servers,
                    policies         = policies,
                    secrets          = secrets,
                    services         = services)

    config.write(outFile)

except Exception as exc:
    logger.critical(traceback.format_exc())
    sys.exit(1)


