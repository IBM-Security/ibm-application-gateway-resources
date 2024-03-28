# PoliciesCorsPolicy

## Description

The definition of the CORS policy.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_origins** | **list[str]** | A list of origins which are permitted to make cross-origin requests. To allow cross-origin requests from any origin, add a single entry &#x60;*&#x60;.  | [optional] 
**handle_pre_flight** | **bool** | The reverse proxy can respond to pre-flight requests using the information from this policy. If set to false, pre-flight requests will be forwarded to the protected application.  | [optional] [default to False]
**allow_headers** | **list[str]** | Headers that are indicated as allowed in responses to pre-flight requests. Specifying no allow_header entries will indicate to clients that all headers are permitted. Not case-sensitive. Only valid if handle_pre_flight is set to true.  | [optional] 
**max_age** | **float** | Maximum time (in seconds) a client should cache the results of a pre-flight request. A value of -1 indicates to clients that they should not cache, 0 indicates that clients may cache at their own discretion. Only valid if handle_pre_flight is set to true.  | [optional] [default to -1]
**allow_methods** | **list[str]** | Methods that are indicated as allowed in responses to pre-flight requests. Specifying no allow_method entries will indicate to clients that all methods are permitted. Case-sensitive. Only valid if handle_pre_flight is set to true.  | [optional] 
**allow_credentials** | **bool** | Indicates to clients that authentication is required when accessing this resource.  | [optional] [default to False]
**expose_headers** | **list[str]** | Indicates to clients which headers they expose from the response.  | [optional] 

[[Back to README]](../README.md)



