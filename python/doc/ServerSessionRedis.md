# ServerSessionRedis

## Description

Specifies the configuration for distributed sessions using a Redis environment.
Redis collections are defined using the services/redis[] entry.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables the Redis session cache.  | [optional] 
**client_list_cache_lifetime** | **float** | The server needs to manually delete stale entries from the Redis cache during session creation and idle timeout events.  In order to be able to delete the stale entries it needs an up-to-date list of active clients of the Redis server (using the &#x60;CLIENT LIST&#x60; Redis command).  This command, depending on the number of clients which are registered with the Redis server, can be expensive and so IAG will cache and reuse the returned list of clients for a small period of time.  This configuration entry controls the length of time, in seconds, that a client list will be cached.  | [optional] [default to 10]
**concurrent_sessions** | [**ServerSessionRedisConcurrentSessions**](ServerSessionRedisConcurrentSessions.md) |  | [optional] 

[[Back to README]](../README.md)



