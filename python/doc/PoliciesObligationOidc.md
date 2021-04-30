# PoliciesObligationOidc

## Description

Authentication parameters which can be used when using an OIDC identity scenario. These parameters are passed as query string parameters when the authorization endpoint is requested.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acr\_values** | **str** | A string of ACR (Authentication Context Class References) to pass to the identity provider. Refer to \"acr\_values\" in section 3.1.2 of the OpenID Connect Core specification for further information. Valid ACRs are defined by the identity provider. Refer to your identity provider for further information about the ACRs which it supports.  | [optional] 
**prompt** | **str** | A string of prompt options to pass to the identity provider. Refer to \"prompt\" in section 3.1.2 of the OpenID Connect Core specification for further information. Prompt options are optional and may not be supported by all identity providers. Refer to your identity provider for further information about support prompt values.  | [optional] 

[[Back to README]](../README.md)



