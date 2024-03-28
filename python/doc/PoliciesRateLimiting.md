# PoliciesRateLimiting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name to be associated with this rate limiting rule.  | [optional] 
**methods** | **list[str]** | The methods to which this rate limiting rule will be applied. If the wildcard \&quot;*\&quot; is specified all methods will be matched.  | [optional] 
**paths** | **list[str]** | The paths to which this rate limiting rule will be applied. The path supports wildcards. This entry is an array and can be used to specify multiple paths. Note that the policy will be duplicated and applied for each specified path, multiple paths do not share a common request bucket. To share a common request bucket for multiple paths, provide a single path pattern which matches all required paths.  | [optional] 
**rule** | **str** | The rate limiting rule.  | [optional] 

[[Back to README]](../README.md)



