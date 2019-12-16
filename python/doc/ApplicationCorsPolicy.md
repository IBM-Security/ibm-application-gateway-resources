# ApplicationCorsPolicy

## Description

The CORs policy.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_origins** | **list[str]** | A list of origins which are permitted to make cross-origin  requests. To allow cross-origin requests from any origin,  add a single entry &#39;*&#39;.  | [optional] 
**handle_pre_flight** | **bool** | The reverse proxy can respond to pre-flight requests using  the information from this policy. If set to false,  pre-flight requests will be forwarded to the protected  application.  | [optional] 
**allow_headers** | **list[str]** | Headers that are indicated as allowed in responses to  pre-flight requests.  Access-Control-Allow-Headers &#x3D;  &lt;headers&gt;. Specifying no allow_header entries will  indicate to clients that all headers are permitted.   Not case-sensitive.  | [optional] 
**max_age** | **float** | Maximum time (in seconds) a client should cache the  results of a pre-flight request.   Access-Control-Max-Age: &lt;seconds&gt;  -1 indicates to clients that they should not cache,  0 indicates that clients may cache at their own discretion.  | [optional] 
**allow_methods** | **list[str]** | Methods that are indicated as allowed in responses to  pre-flight requests.   Access-Control-Allow-Methods &#x3D; &lt;methods&gt;  Specifying no allow_method entries will indicate to  clients that all methods are permitted.   Case-sensitive.  | [optional] 
**allow_credentials** | **bool** | Indicates to clients that is authentication required when  accessing this resource.   Access-Control-Allow-Credentials &#x3D; true  Only added when allow_credentials is true.  | [optional] 
**expose_headers** | **list[str]** | Indicates to clients which headers they expose from the  response.   Access-Control-Expose-Headers &#x3D; &lt;headers&gt;  | [optional] 

[[Back to README]](../README.md)



