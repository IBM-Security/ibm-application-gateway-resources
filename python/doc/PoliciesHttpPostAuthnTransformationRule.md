# PoliciesHttpPostAuthnTransformationRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name which is associated with this transformation.  | [optional] 
**host** | **str** | The host (obtained from the host header in the request) for which this transformation will take place. If no host header is specified all hosts will be matched.  | [optional] 
**authentication_mechanisms** | **list[str]** | The authentication mechanisms for which this transformation should be  triggered. The name of the authentication mechanism is located within the AZN_CRED_AUTH_METHOD attribute of an authenticated credential.  | [optional] 
**rule** | **str** | The HTTP transformation rule.  | [optional] 

[[Back to README]](../README.md)



