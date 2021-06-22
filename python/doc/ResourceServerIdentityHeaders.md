# ResourceServerIdentityHeaders

## Description

Specifies the configuration information associated with the provision of identity information to the resource server.

### Encoding
Type | Description
---- | -----------
utf8_bin | Unencoded UTF-8 data. This setting allows data to be transmitted without data loss, and the user does not need to URI-decode the data.
utf8_uri | URI encoded UTF-8 data. All white space and non-ASCII bytes are encoded %XY, where X and Y are hex values (0-F).
lcp_bin | Unencoded local code page data. Data loss can potentially occur with this mode. Use with caution.
lcp_uri | URI encoded local code page data. Any UTF-8 characters that cannot be converted to a local code page are converted to question marks (?).

### Basic Authentication Modes
Mode    | Description
---- ---| -----------
filter  | The Authorization header, if provided by the client, will be removed before the resource request is forwarded to the resource server.  This is the default option if no option is specified.
supply  | A new Authorization header will be created by the gateway and forwarded to the resource server.  The Basic Authentication information contained in the header will consist of the name of the authenticated user, along with a static password.  Use the `password` YAML configuration entry to set the static password.
ignore  | The Authorization header, if provided by the client, will be forwarded to the resource server unchanged.
service | A new Authorization header will be constructed using a username and password retrieved from a configured credential service. See "services/credential" for more information about configuring a credential service. The YAML entries "service" and "resource_name" must be specified when using this mode.


Example:

resource_servers:
  - path: "/example"
    # ...
    identity_headers:
      encoding: utf8_uri
      basic_auth:
        mode: filter
      ip_address: true
      attributes:
        - attribute: emailAddress
          header: email_header
        - attribute: AUTHENTICATION_LEVEL
          header: auth_level
      ltpa:
        key: "@ltpa_keyfile"
        key_password: passw0rd
        version: 2
      session_cookie: true
      jwt:
        certificate:
          - "@jwt.crt"
          - "@jwt.key"
        hdr_name: jwt
        claims:
          - text: www.ibm.com
            name: iss
          - attr: AZN_CRED_PRINCIPAL_NAME
            name: sub
          - attr: AZN_*
  - path: /ibmiis
    connection_type: "tcp"
    servers:
      - host: test.ibm.com
        port: 80
    identity_headers:
      kerberos:
        resource_spn: HTTP/web.test.ibm.com@IBM.COM
        always_send_tokens: true
        user_identity:
          username: "{preferred_username}"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kerberos** | [**ResourceServerIdentityHeadersKerberos**](ResourceServerIdentityHeadersKerberos.md) |  | [optional] 
**encoding** | **str** | The encoding type to use for any identity headers passed to the resource server. See the [Encoding](#encoding) table for a  description of the available options.  | [optional] [default to 'utf8_uri']
**basic\_auth** | [**ResourceServerIdentityHeadersBasicAuth**](ResourceServerIdentityHeadersBasicAuth.md) |  | [optional] 
**ip\_address** | **bool** | A boolean flag indicating whether or not to provide the client IP address as a HTTP header in requests forwarded to the resource server.  The IP address will be added in the &#x60;iv-remote-address&#x60; HTTP header.  | [optional] [default to False]
**iv\_creds** | **bool** | A boolean flag indicating whether or not to provide an ASN.1 encoded version of the credential as a HTTP header in requests forwarded to the resource server.  The credential will be added in the &#x60;iv-creds&#x60; HTTP header.  | [optional] [default to False]
**attributes** | [**list[ResourceServerIdentityHeadersAttributes]**](ResourceServerIdentityHeadersAttributes.md) | Specifies a list of attributes from the authenticated credential which will be inserted into the HTTP requests sent to the resource server.  | [optional] 
**session\_cookie** | **bool** | A boolean flag indicating whether or not to forward the reverse proxy cookie to the resource server. The name of this cookie is configured in the &#x60;server/session/cookie\_name&#x60; entry.  | [optional] [default to False]
**jwt** | [**ResourceServerIdentityHeadersJwt**](ResourceServerIdentityHeadersJwt.md) |  | [optional] 
**ltpa** | [**ResourceServerIdentityHeadersLtpa**](ResourceServerIdentityHeadersLtpa.md) |  | [optional] 

[[Back to README]](../README.md)



