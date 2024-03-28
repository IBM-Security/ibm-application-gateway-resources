# ServicesRedisCollections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the redis collection.  | [optional] 
**matching_host** | **str** | Any specific hosts (obtained from the Host header of the HTTP request) for which this collection should be used. This entry is only applicable to Redis collections being used  for storing session data.  | [optional] 
**max_pooled_connections** | **float** | The maximum number of pooled connections to a Redis server.  | [optional] [default to 50]
**idle_timeout** | **float** | The maximum number of seconds a pooled connection can remain idle before the connection is closed.  | [optional] [default to 10]
**connect_timeout** | **float** | The maximum number of seconds to wait for a connection to be established with a Redis server.  | [optional] [default to 2]
**io_timeout** | **float** | The maximum number of seconds to wait for a valid response from a Redis server.  | [optional] [default to 30]
**health_check_interval** | **float** | The interval (in seconds) between health check requests sent to the Redis server.  | [optional] [default to 10]
**cross_domain_support** | [**ServicesRedisCrossDomainSupport**](ServicesRedisCrossDomainSupport.md) |  | [optional] 
**servers** | [**list[ServicesRedisServers]**](ServicesRedisServers.md) | Used to define the configuration for the individual Redis servers within the collection.  | [optional] 

[[Back to README]](../README.md)



