# ServerRateLimitingRedis

## Description

These entries control whether or not rate limiting data will be  stored in a Redis database. When stored in a Redis database,  rate limiting data can be shared across multiple gateway instances.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_name** | **str** | Specify the name of a Redis collection which will be used for  maintaining rate limiting data. Redis collections are defined using the services/redis[] entry.  | [optional] 
**sync_window** | **float** | The length of time (in seconds) a record from Redis will be  cached locally by this instance. Records will only be  synchronized with Redis after this window has elapsed.  | [optional] [default to 5]

[[Back to README]](../README.md)



