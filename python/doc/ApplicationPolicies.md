# ApplicationPolicies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name for this policy, which is used to refer to this  policy in audit events.  | [optional] 
**methods** | **list[str]** | The method(s) which this policy applies to. If this is not  defined, the policy will apply to all methods.  | [optional] 
**url** | **str** | The URL to which this policy will be applied.  The URL may contain the &#39;*?&#39; pattern matching characters.  | [optional] 
**rule** | **str** | If a rule string is not defined here, the reverse proxy  will look for a named rule (with the same name as this  policy) in the authorization section of the configuration  YAML.  Refer to the authorization section of this template  for an explanation of rule syntax.  There are also two  pre-defined rules which can be used: \&quot;anyuser\&quot; : which allows access to any user, even if they     are not authenticated \&quot;anyauth\&quot; : which allows access to any authenticated user  | [optional] 
**action** | **str** | If the rule matches, should this request be permitted?   | [optional] 

[[Back to README]](../README.md)



