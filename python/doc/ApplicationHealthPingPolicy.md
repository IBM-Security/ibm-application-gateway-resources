# ApplicationHealthPingPolicy

## Description

The policy associated with the ping requests.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **float** | The frequency (in seconds) which ping requests will be sent.  | [optional] 
**threshold** | **float** | Specifies how many consecutive times the ping must  fail before the application server is considered  unhealthy.  | [optional] 
**recovery** | [**ApplicationHealthPingPolicyRecovery**](ApplicationHealthPingPolicyRecovery.md) |  | [optional] 
**timeout** | **float** | Specifies how long the reverse proxy should wait for  responses to ping requests.  | [optional] 
**rule** | **list[str]** | Specifies how to interpret responses to ping  requests. This entry is an ordered list of rules  based on the response status codes. Status codes  prefixed with a &#39;+&#39; are considered healthy, and  codes prefixed with &#39;-&#39; unhealthy. The wildcard  characters &#39;*&#39; and &#39;?&#39; can be used.  | [optional] 

[[Back to README]](../README.md)



