# ServerResponseHeaders

## Description

Each entry corresponds to a single HTTP header. 


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | The name of the HTTP header to be included in the response.  | [optional] 
**macro** | **str** | The name of the macro which the value will be taken from. Valid macro values are:    - &#x60;TAM\_OP&#x60;   - &#x60;ERROR\_CODE&#x60;   - &#x60;ERROR\_TEXT&#x60;   - &#x60;ERROR\_URL&#x60;   - &#x60;USERNAME&#x60;  | [optional] 
**attribute** | **str** | The name of a credential attribute which the value will be taken from.  | [optional] 
**text** | **str** | String content which will be inserted into the header verbatim.  | [optional] 

[[Back to README]](../README.md)



