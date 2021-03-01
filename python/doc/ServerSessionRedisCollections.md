# ServerSessionRedisCollections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the redis collection.  | [optional] 
**matching\_host** | **str** | Any specific hosts (obtained from the Host header of the  HTTP request) for which this collection should be used.    | [optional] 
**max\_pooled\_connections** | **float** | The maximum number of pooled connections to a Redis  server.    | [optional] [default to 50]
**idle\_timeout** | **float** | The maximum number of seconds a pooled connection can  remain idle before the connection is closed.  | [optional] [default to 10]
**connect\_timeout** | **float** | The maximum number of seconds to wait for a connection  to be established with a Redis server.   | [optional] [default to 2]
**io\_timeout** | **float** | The maximum number of seconds to wait for a valid  response from a Redis server.   | [optional] [default to 30]
**health\_check\_interval** | **float** | The interval (in seconds) between health check requests  sent to the Redis server.    | [optional] [default to 10]
**cross\_domain\_support** | [**ServerSessionRedisCrossDomainSupport**](ServerSessionRedisCrossDomainSupport.md) |  | [optional] 
**servers** | [**list[ServerSessionRedisServers]**](ServerSessionRedisServers.md) | Used to define the configuration for the individual Redis servers within the collection.  | [optional] 

[[Back to README]](../README.md)



