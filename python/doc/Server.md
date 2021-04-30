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
**max\_ratelimiting\_buckets** | **float** | The number of unique request buckets to hold on to for the rate limiting capability. When a request is tokenized, it gets a bucket assigned. If this limit is reached, rate limiting information about the oldest requests will be ejected. This effectively resets the rate limiting counters for this client(s). This number needs to be higher than the number of requests being rate limited across a refresh interval.  | [optional] [default to 16384]
**http2** | **bool** | A boolean which indicates whether or not to enable support for HTTP/2 clients. HTTP/2 supports a reduced set of cipher suites. The minimum cipher is &#x60;TLS\_ECDHE\_RSA\_WITH\_AES\_128\_GCM\_SHA256&#x60; which should be added to the &#x60;server/ssl/ciphers[]&#x60; entry.  | [optional] [default to False]
**websocket** | [**ServerWebsocket**](ServerWebsocket.md) |  | [optional] 
**local\_pages** | [**ServerLocalPages**](ServerLocalPages.md) |  | [optional] 
**management\_pages** | [**ServerManagementPages**](ServerManagementPages.md) |  | [optional] 
**error\_pages** | [**ServerErrorPages**](ServerErrorPages.md) |  | [optional] 
**credential\_service\_cache** | [**ServerCredentialServiceCache**](ServerCredentialServiceCache.md) |  | [optional] 
**local\_applications** | [**ServerLocalApplications**](ServerLocalApplications.md) |  | [optional] 

[[Back to README]](../README.md)



