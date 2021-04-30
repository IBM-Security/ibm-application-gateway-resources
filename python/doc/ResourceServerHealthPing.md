# ResourceServerHealthPing

## Description

Specifies the configuration that allows the reverse proxy to periodically ping each resource server to determine whether it is running.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The HTTP method which will be used in the ping request.  | [optional] 
**url** | **str** | The URL to which the ping request will be sent.  | [optional] 
**policy** | [**ResourceServerHealthPingPolicy**](ResourceServerHealthPingPolicy.md) |  | [optional] 
**rule** | **list[str]** | Regular (client initiated) requests can also be observed to determine the resource server health. This entry is an ordered list of rules based on the response status codes. Status codes prefixed with a &#x60;+&#x60; are considered healthy, and codes prefixed with &#x60;-&#x60; unhealthy. The wildcard characters &#x60;*&#x60; and &#x60;?&#x60; can be used.  | [optional] 

[[Back to README]](../README.md)



