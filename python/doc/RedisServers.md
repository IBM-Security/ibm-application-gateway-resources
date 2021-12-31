# RedisServers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A label, or name, which is used to identify this server.  | [optional] 
**host** | **str** | The server name or IP address of the Redis server.  | [optional] 
**port** | **float** | The port on which the Redis server is listening for requests.  | [optional] [default to 6379]
**username** | **str** | The name of the user which is used when authenticating to the Redis server.  | [optional] 
**password** | **str** | The password which is used to access the Redis server.  | [optional] 
**ssl** | [**RedisSsl**](RedisSsl.md) |  | [optional] 

[[Back to README]](../README.md)



