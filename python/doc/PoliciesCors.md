# PoliciesCors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name which is associated with this CORS policy.  | [optional] 
**host** | **str** | The host (obtained from the host header in the request) for which this CORS policy will be applied. If no host header is specified all hosts will be matched.  | [optional] 
**paths** | **list[str]** | The paths for which this CORS policy will be applied. This entry  is an array and can be used to specify multiple paths.  | [optional] 
**method** | **str** | The HTTP method for which this CORS policy will be applied.  | [optional] 
**policy** | [**PoliciesCorsPolicy**](PoliciesCorsPolicy.md) |  | [optional] 

[[Back to README]](../README.md)



