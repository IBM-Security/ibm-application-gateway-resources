# ApplicationWorkerThreads

## Description

Limits can be set on the percentage of worker threads that may  be consumed by this application.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**soft_limit** | **str** | This option causes warning messages to be displayed when the  application uses more worker threads than allowed.  | [optional] 
**hard_limit** | **str** | This option causes warning messages to be displayed when the  application uses more worker threads than allowed and  clients are returned the 503 Service Unavailable message.  | [optional] 

[[Back to README]](../README.md)



