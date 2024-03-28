# PoliciesHttpTransformations

## Description

The gateway can transform inbound requests from clients before forwarding them to the application or outgoing responses from the application before returning them to the client. Refer to the documentation for information about how to author HTTP transformation rules XSL documents.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**list[PoliciesHttpTransformationRule]**](PoliciesHttpTransformationRule.md) | This node defines the transformations which will take place on requests. This entry is an array and can be used to specify multiple transformations.  | [optional] 
**preazn** | [**list[PoliciesHttpTransformationRule]**](PoliciesHttpTransformationRule.md) | This node defines the transformations which will take place on requests before authorization has been completed. This entry is  an array and can be used to specify multiple transformations.  | [optional] 
**postazn** | [**list[PoliciesHttpTransformationRule]**](PoliciesHttpTransformationRule.md) | This node defines the transformations which will take place on requests after authorization has been completed. This entry is  an array and can be used to specify multiple transformations.  | [optional] 
**postauthn** | [**list[PoliciesHttpPostAuthnTransformationRule]**](PoliciesHttpPostAuthnTransformationRule.md) | This node defines the transformations which will take place on requests after authentication has been completed. This entry is  an array and can be used to specify multiple transformations.  | [optional] 
**response** | [**list[PoliciesHttpTransformationRule]**](PoliciesHttpTransformationRule.md) | This node defines the transformations which will take place on responses. This entry is an array and can be used to specify multiple transformations.  | [optional] 
**secrets** | [**list[PoliciesHttpTransformationsSecrets]**](PoliciesHttpTransformationsSecrets.md) | This node contains secrets which can be loaded in Lua HTTP  Transformation rules. The secret values can be loaded using the &#x60;Control.getConfig&#x60; method, passing a nil value for the first parameter and the secret name for the second parameter. For example, the following Lua snippet loads the value of a  secret named \&quot;serviceApiKey\&quot;: &#x60;&#x60;&#x60; value &#x3D; Control.getConfig(nil, \&quot;serviceApiKey\&quot;) &#x60;&#x60;&#x60;  | [optional] 

[[Back to README]](../README.md)



