# ApplicationHealthPingPolicyRecovery

## Description

When the application server is unhealthy, these  entries specify how often they should be pinged and  how many consecutive successful pings should be  observed before the application server is considered  healthy again.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **float** | The frequency (in seconds) which ping requests  will be sent.  | [optional] 
**threshold** | **float** | Specifies how many consecutive times the ping  must fail before the application server is  considered unhealthy.  | [optional] 

[[Back to README]](../README.md)



