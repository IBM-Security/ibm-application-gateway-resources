# ServerRateLimiting

## Description

Specifies the global configuration related to rate limiting. Rate  limiting policies are defined using the policies/rate_limiting[] entry.

Example:
server:
  rate_limiting:
    cache_size: 16384
    redis:
      collection_name: test-collection
      sync_window: 10


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache\_size** | **float** | The number of unique records to cache locally for the rate limiting capability. When this cache is exhausted, the oldest  cached records are ejected. This effectively resets the rate limiting counters for this client(s). This number needs to be  higher than the number of requests being rate limited across a  refresh interval.  | [optional] [default to 16384]
**redis** | [**ServerRateLimitingRedis**](ServerRateLimitingRedis.md) |  | [optional] 

[[Back to README]](../README.md)



