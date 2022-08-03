# Server

## Description

The `server` node defines configuration for the gateway daemon front-end.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocols** | **list[str]** | Specifies the protocols which will be supported by the server.| [optional] 
**client\_ip\_rules** | **list[str]** | The rules which define whether a client is allowed to connect to this server.| [optional] 
**ssl** | [**ServerSsl**](ServerSsl.md) |  | [optional] 
**failover** | [**ServerFailover**](ServerFailover.md) |  | [optional] 
**session** | [**ServerSession**](ServerSession.md) |  | [optional] 
**worker\_threads** | **float** | The number of configured worker threads specifies the number of concurrent incoming requests that can be serviced by this gateway instance. Choosing the optimal number depends on the quantity and type of traffic on your network. Modifying this value should be done carefully to ensure optimal performance.  | [optional] [default to 100]
**http2** | **bool** | A boolean which indicates whether or not to enable support for HTTP/2 clients. HTTP/2 supports a reduced set of cipher suites. The minimum cipher is &#x60;TLS\_ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256&#x60; which should be added to the &#x60;server/ssl/ciphers[]&#x60; entry.  | [optional] [default to True]
**websocket** | [**ServerWebsocket**](ServerWebsocket.md) |  | [optional] 
**local\_pages** | [**ServerLocalPages**](ServerLocalPages.md) |  | [optional] 
**management\_pages** | [**ServerManagementPages**](ServerManagementPages.md) |  | [optional] 
**error\_pages** | [**ServerErrorPages**](ServerErrorPages.md) |  | [optional] 
**public\_assets** | [**ServerPublicAssets**](ServerPublicAssets.md) |  | [optional] 
**enabled\_languages** | **list[str]** | The language(s) which will be permitted when the application gateway generates error and management response pages.| [optional] 
**credential\_service\_cache** | [**ServerCredentialServiceCache**](ServerCredentialServiceCache.md) |  | [optional] 
**local\_applications** | [**ServerLocalApplications**](ServerLocalApplications.md) |  | [optional] 
**rate\_limiting** | [**ServerRateLimiting**](ServerRateLimiting.md) |  | [optional] 
**content\_security\_policy** | **str** | Specifies whether or not the gateway will use the default content security policy.  The default policy inserts the following HTTP headers into all responses:  header | value -------|------- x-frame-options | DENY x-xss-protection | 1 content-security-policy | default-src &#39;self&#39;; frame-ancestors &#39;self&#39;; form-action &#39;self&#39;; x-content-type-options | nosniff   | [optional] [default to 'default']
**response\_headers** | [**list[ServerResponseHeaders]**](ServerResponseHeaders.md) | This entry can be used to set HTTP headers which are always present in all responses which are returned to clients.| [optional] 

[[Back to README]](../README.md)



