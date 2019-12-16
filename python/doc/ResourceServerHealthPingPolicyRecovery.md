# ResourceServerHealthPingPolicyRecovery

## Description

When the resource server is unhealthy, these entries specify how often they should be pinged and how many consecutive successful pings should be observed before the resource server is considered healthy again.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **float** | The frequency (in seconds) which ping requests will be sent. If this value is not set it will default to the value of the ping frequency.  | [optional] 
**threshold** | **float** | Specifies how many consecutive times the ping must fail before the resrouce server is considered unhealthy.  | [optional] [default to 1]

[[Back to README]](../README.md)



