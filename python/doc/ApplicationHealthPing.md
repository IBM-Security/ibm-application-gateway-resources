# ApplicationHealthPing

## Description

The reverse proxy can periodically ping each application  server to determine whether it is running.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The HTTP method which will be used in the ping request.  | [optional] 
**url** | **str** | The URL to which the ping request will be sent.  | [optional] 
**policy** | [**ApplicationHealthPingPolicy**](ApplicationHealthPingPolicy.md) |  | [optional] 
**rule** | **list[str]** | Regular (client initiated) requests can also be observed  to determine the application server health.  This entry  is an ordered list of rules based on the response status  codes. Status codes prefixed with a &#39;+&#39; are considered  healthy, and codes prefixed with &#39;-&#39; unhealthy. The  wildcard characters &#39;*&#39; and &#39;?&#39; can be used.  | [optional] 

[[Back to README]](../README.md)


