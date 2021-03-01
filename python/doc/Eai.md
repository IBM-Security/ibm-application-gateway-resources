# Eai

## Description

External Authentication Interface, which allows an application to assert client identity information to the IBM Application Gateway container.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggers** | **list[str]** | The list of URLs for which the response could potentially contain authentication information. Please note that an access policy which allows unauthenticated access to this resource must be created. The URL string patterns are case-sensitive and may contain wild card patterns. The format for a regular path-based application is: trigger:   - &lt;URL pattern&gt; The format for a Virtual Host application is: trigger:   - http[s]://virtual-host-name[:port]/&lt;URL pattern&gt; For Virtual Host applications to match a trigger they must also have the same protocol (http[s] &#x3D; TCP/SSL) and have the same virtual-host-name and port as the trigger.    | [optional] 

[[Back to README]](../README.md)



