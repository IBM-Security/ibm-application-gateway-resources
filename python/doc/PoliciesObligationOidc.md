# PoliciesObligationOidc

## Description

Authentication parameters which can be used when using an OIDC identity scenario. These parameters are passed as query string parameters when the authorization endpoint is requested.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acr_values** | **str** | A string of ACR (Authentication Context Class References) to pass to the identity provider. Refer to \&quot;acr_values\&quot; in section 3.1.2 of the OpenID Connect Core specification for further information. Valid ACRs are defined by the identity provider. Refer to your identity provider for further information about the ACRs which it supports.  | [optional] 
**prompt** | **str** | A string of prompt options to pass to the identity provider. Refer to \&quot;prompt\&quot; in section 3.1.2 of the OpenID Connect Core specification for further information. Prompt options are optional and may not be supported by all identity providers. Refer to your identity provider for further information about support prompt values.  | [optional] 
**max_age** | **float** | The maximum age of the authentication. Refer to  \&quot;max_age\&quot; in section 3.1.2 of the OpenID Connect Core  specification for further information. Setting this to &#39;0&#39; indicates to the provider that the user should re-authenticate immediately. This  parameter also forces the provider to include the auth_time parameter in the returned id token, which is used by IAG to determine when the user last performed a re-authentication.  | [optional] 

[[Back to README]](../README.md)



