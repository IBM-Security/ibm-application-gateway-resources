# Server

## Description

The `server` node defines configuration for the gateway daemon front-end.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocols** | **list[str]** | Specifies the protocols which will be supported by the server. The server will listen on a different port for each protocol: &#x60;http/8080&#x60; and &#x60;https/8443&#x60;. If no protocols are specified, the server will listen for https requests only.  Additionally, the server can be configured to expect the [PROXY Protocol](https://www.haproxy.com/blog/haproxy/proxy-protocol/) header by using the &#x60;*_proxy&#x60; values.  Note that if the proxy protocol is enabled for a given protocol, all traffic for that protocol will be expected to contain the PROXY protocol headers. That is, the following entries are exclusive:  - &#x60;http&#x60; and &#x60;http_proxy&#x60;  - &#x60;https&#x60; and &#x60;https_proxy&#x60;  protocol    | Port | Description ------------|------|------------- http        | 8080 | HTTP https       | 8443 | HTTPS http_proxy  | 8080 | HTTP with Proxy Protocol https_proxy | 8443 | HTTPS with Proxy Protocol  | [optional] 
**client_ip_rules** | **list[str]** | The rules which define whether a client is allowed to connect to this server. The rule is of the format:  &#x60;[+|-]&lt;client-ip&gt;&#x60;  where:  Element           | Description ------------------|------------- +                 | Indicates that the client is permitted access. -                 | Indicates that the client is not permitted access. &amp;lt;client-ip&amp;gt; | The IP address of the client, which can also contain the pattern matching characters &#x60;*&#x60; and &#x60;?&#x60;.  The client IP address of a request will be evaluated against each rule in sequence until a match is found.  The corresponding code (+|-) will then be used to determine whether the client connection is accepted.  If the client IP matches no configured rules the client connection will be accepted.  | [optional] 
**ssl** | [**ServerSsl**](ServerSsl.md) |  | [optional] 
**failover** | [**ServerFailover**](ServerFailover.md) |  | [optional] 
**session** | [**ServerSession**](ServerSession.md) |  | [optional] 
**worker_threads** | **float** | The number of configured worker threads specifies the number of concurrent incoming requests that can be serviced by this gateway instance. Choosing the optimal number depends on the quantity and type of traffic on your network. Modifying this value should be done carefully to ensure optimal performance.  | [optional] [default to 100]
**http2** | **bool** | A boolean which indicates whether or not to enable support for HTTP/2 clients. HTTP/2 supports a reduced set of cipher suites. The minimum cipher is &#x60;TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256&#x60; which should be added to the &#x60;server/ssl/ciphers[]&#x60; entry.  | [optional] [default to True]
**websocket** | [**ServerWebsocket**](ServerWebsocket.md) |  | [optional] 
**local_pages** | [**ServerLocalPages**](ServerLocalPages.md) |  | [optional] 
**management_pages** | [**ServerManagementPages**](ServerManagementPages.md) |  | [optional] 
**error_pages** | [**ServerErrorPages**](ServerErrorPages.md) |  | [optional] 
**public_assets** | [**ServerPublicAssets**](ServerPublicAssets.md) |  | [optional] 
**enabled_languages** | **list[str]** | The language(s) which will be permitted when the application gateway generates error and management response pages. The accept-language HTTP header from the request is used to determine the language used when generating responses.  The first language in the list will be treated as the default language. The default language will be used if none of the languages contained in the accept-language HTTP header have been enabled.  If this entry is not defined, all languages will be enabled with English (C) set as the default.  #### language codes  | &#x60;language code&#x60; | Language              | |-----------------|-----------------------| | pt              | Brazilian Portuguese  | | cs              | Czech                 | | zh_CN           | Chinese (Simplified)  | | zh_TW           | Chinese (Traditional) | | C               | English               | | fr              | French                | | de              | German                | | hu              | Hungarian             | | it              | Italian               | | ja              | Japanese              | | ko              | Korean                | | pl              | Polish                | | es              | Spanish               | | ru              | Russian               |  | [optional] 
**credential_service_cache** | [**ServerCredentialServiceCache**](ServerCredentialServiceCache.md) |  | [optional] 
**local_applications** | [**ServerLocalApplications**](ServerLocalApplications.md) |  | [optional] 
**rate_limiting** | [**ServerRateLimiting**](ServerRateLimiting.md) |  | [optional] 
**content_security_policy** | **str** | Specifies whether or not the gateway will use the default content security policy.  The default policy inserts the following HTTP headers into all responses:  header | value -------|------- x-frame-options | DENY x-xss-protection | 1 content-security-policy | default-src &#39;self&#39;; frame-ancestors &#39;self&#39;; form-action &#39;self&#39;; x-content-type-options | nosniff  | [optional] [default to 'default']
**response_headers** | [**list[ServerResponseHeaders]**](ServerResponseHeaders.md) | This entry can be used to set HTTP headers which are always present in all responses which are returned to clients. For each entry, only one of &#x60;macro&#x60;, &#x60;attribute&#x60; or &#x60;text&#x60; can be specified.  | [optional] 

[[Back to README]](../README.md)



