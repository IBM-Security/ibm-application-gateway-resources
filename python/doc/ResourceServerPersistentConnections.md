# ResourceServerPersistentConnections

## Description

Configures the pool of persistent connections which is maintained for the resource server.  A persistent connection will allow an established connection to the resource server to be used for multiple requests.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_cache_size** | **float** | The maximum number of persistent connections which will be stored in the cache for future use.  Connections with resource servers will be cached for future use unless the configured limit is reached, or the &#x60;connection: close&#x60; header is received in the HTTP response.  Please note that if enabled there is the potential for different user sessions to use the same connection when processing requests.  To disable the persistent connection functionality simply specify a value of 0.  | [optional] [default to 0]
**connection_timeout** | **float** | The maximum number of seconds a persistent connection can remain idle in the cache before the connection is cleaned up and closed by the IAG.  This value should be lower than the configured maximum connection lifetime for the resource server. This behaviour is controlled for the Apache Web server, as an example only, by the KeepAliveTimeout configuration entry.  | [optional] [default to 5]

[[Back to README]](../README.md)



