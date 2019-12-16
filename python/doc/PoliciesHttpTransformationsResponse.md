# PoliciesHttpTransformationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name which is associated with this transformation.  | [optional] 
**host** | **str** | The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.  | [optional] 
**paths** | **list[str]** | The paths for which this transformation will take place. If the wildcard \"*\" is specified all paths will be matched.  This entry is an array and can  be used to specify multiple paths.  | [optional] 
**method** | **str** | The HTTP method for which this transformation will take place. If the wildcard \"*\" is specified all methods will be matched.  | [optional] 
**rule** | **str** | The HTTP transformation rule.  | [optional] 

[[Back to README]](../README.md)



