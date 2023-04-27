# ServerRateLimiting

## Description

Specifies the global configuration related to rate limiting. Rate limiting policies are defined using the policies/rate_limiting[] entry.

Additional rate limiting headers can also be enabled. The rate limiting response headers include:

header | value 
-------|-------
X-Rate-Limit-Policy    | The name of the rate limiting policy which is closest to being hit.
X-Rate-Limit-Remaining | The number of requests left for the rate limiting policy in the current rate limit window.
X-Rate-Limit-Reset     | The time (UTC Epoch time) at which the rate limiting policy resets.


Example:

server:
  rate_limiting:
    cache_size: 16384
    response_headers: false
    redis:
      collection_name: test-collection
      sync_window: 10


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache\_size** | **float** | The number of unique records to cache locally for the rate limiting capability. When this cache is exhausted, the oldest  cached records are ejected. This effectively resets the rate limiting counters for this client(s). This number needs to be  higher than the number of requests being rate limited across a  refresh interval.  | [optional] [default to 16384]
**redis** | [**ServerRateLimitingRedis**](ServerRateLimitingRedis.md) |  | [optional] 
**response\_headers** | **bool** | Specifies whether or not the gateway will insert the rate limiting headers into responses. By default, the rate limiting response headers are disabled.  | [optional] [default to False]

[[Back to README]](../README.md)



