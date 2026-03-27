# ResourceServerRequestHeader

## Description

Each entry corresponds to a single HTTP header. 


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | The name of the HTTP header to set in the request.  | [optional] 
**append** | **bool** | Specifies whether the value will be appended to any existing  value, or will overwrite any existing value for the specified  header. The default is to overwrite any existing value.  | [optional] [default to False]
**request_property** | **str** | The name of the request attribute which the value will be taken from.  | [optional] 
**credential_attribute** | **str** | The name of a credential attribute which the value will be taken from.  | [optional] 
**http_header** | **str** | The name of an HTTP header which the value will be taken from.  | [optional] 
**text** | **str** | String content which will be inserted into the header verbatim.  | [optional] 

[[Back to README]](../README.md)



