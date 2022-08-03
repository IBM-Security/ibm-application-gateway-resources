# PoliciesHttpTransformationRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name which is associated with this transformation.  | [optional] 
**host** | **str** | The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.  | [optional] 
**paths** | **list[str]** | The paths for which this transformation will take place. If the wildcard \"*\" is specified all paths will be matched.  This entry is an array and can be used to specify multiple paths.  | [optional] 
**method** | **str** | The HTTP method for which this transformation will take place. If the wildcard \"*\" is specified all methods will be matched.  | [optional] 
**rule** | **str** | The HTTP transformation rule.  | [optional] 
**attributes** | **list[str]** | If the rule is a legacy XSLT based rule, this entry specifies the credential  attributes which will be included in the XML input document, used when  evaluating the HTTP transformation rule.  The attributes will be stored in the HTTPResponse/credential/attributes/attribute path of the XML document. This is entry is not required and has no effect when using a Lua transformation rule.  | [optional] 

[[Back to README]](../README.md)



