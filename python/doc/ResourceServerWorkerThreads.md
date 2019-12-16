# ResourceServerWorkerThreads

## Description

Specifies the limits that can be set on the percentage of worker threads that may be consumed by this resource server. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**soft\_limit** | **str** | Specifies the soft limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed.  | [optional] 
**hard\_limit** | **str** | Specifies the hard limit (as a percentage) of worker threads that the resource server can use. Warning messages will be displayed when the resource server uses more worker threads than allowed and clients are returned the 503 Service Unavailable message.  | [optional] 

[[Back to README]](../README.md)



