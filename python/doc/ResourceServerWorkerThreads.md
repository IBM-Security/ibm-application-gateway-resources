# ResourceServerWorkerThreads

## Description

Specifies the limits that can be set on the percentage of worker threads that may be consumed by this resource server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**soft_limit** | **float** | Specifies the soft limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed.  | [optional] [default to 0]
**hard_limit** | **float** | Specifies the hard limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed and clients are returned the 503 Service Unavailable message.  | [optional] [default to 0]

[[Back to README]](../README.md)



