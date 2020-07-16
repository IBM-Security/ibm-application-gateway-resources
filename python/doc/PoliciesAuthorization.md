# PoliciesAuthorization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name for this policy, which is used to refer to this policy in audit events.  | [optional] 
**host** | **str** | The host (obtained from the host header in the request) for which this policy will be applied. If no host header is specified all hosts will be matched.  | [optional] 
**paths** | **list[str]** | The paths which this policy will be applied. Each path may contain the &#39;*?&#39; pattern matching characters. This entry  is an array and can be used to specify multiple paths.  | [optional] 
**methods** | **list[str]** | The method(s) which this policy applies to. If this is not defined, the policy will apply to all methods.  | [optional] 
**rule** | **str** | If a rule string is not defined here, the gateway will look for a named rule (with the same name as this policy) in the authorization section of the configuration YAML. Refer to the authorization section of this template for an explanation of rule syntax. The predefined rules anyuser or anyauth can also be referenced here.  | [optional] 
**action** | **str** | Defines the action to perform if the rule matches. If the action is obligate, the obligation property must also be set for this authorization rule.  | [optional] 
**obligation** | [**PoliciesObligation**](PoliciesObligation.md) |  | [optional] 

[[Back to README]](../README.md)



