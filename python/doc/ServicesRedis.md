# ServicesRedis

## Description

Used to define the global configuration and server collections for  Redis.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_prefix** | **str** | The key prefix for all data which is stored on the Redis server.  | [optional] 
**default_collection** | **str** | The name of the default collection of Redis servers to be used.  | [optional] 
**collections** | [**list[ServicesRedisCollections]**](ServicesRedisCollections.md) | Used to define the configuration for a collection of replicated Redis servers.  | [optional] 

[[Back to README]](../README.md)



