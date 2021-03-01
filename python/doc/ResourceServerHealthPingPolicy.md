# ResourceServerHealthPingPolicy

## Description

The policy associated with the ping requests.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **float** | The frequency (in seconds) which ping requests will be sent. If set to 0 the ping will be disabled.  | [optional] [default to 300]
**threshold** | **float** | Specifies how many consecutive times the ping must fail before the resource server is considered  unhealthy.  | [optional] [default to 1]
**timeout** | **float** | Specifies how long the reverse proxy should wait for responses to ping requests. A value of 0 will result in an indefinite wait. If not specified the timeout will default to the http or https timeout.  | [optional] 
**recovery** | [**ResourceServerHealthPingPolicyRecovery**](ResourceServerHealthPingPolicyRecovery.md) |  | [optional] 
**rule** | **list[str]** | Specifies how to interpret responses to ping requests. This entry is an ordered list of rules based on the response status codes. Status codes prefixed with a &#39;+&#39; are considered healthy, and codes prefixed with &#39;-&#39; unhealthy. The wildcard characters &#39;*&#39; and &#39;?&#39; can be used.  | [optional] 

[[Back to README]](../README.md)



