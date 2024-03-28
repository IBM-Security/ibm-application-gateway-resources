# IdentityAuthChallengeRedirect

## Description

These entries can be used to override the default authentication challenge which unauthenticated clients will be redirected to when first accessing the reverse proxy.
If an OIDC identity source is configured, this entry will default to the OIDC authentication URI "/pkmsoidc?iss=default".


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URI which a client will be redirected to in order to start the authentication process. This URI can be absolute or server relative.  | [optional] 
**parameters** | [**list[IdentityAuthChallengeRedirectParameters]**](IdentityAuthChallengeRedirectParameters.md) | Additional parameters which can be included in the redirect URI as query string arguments.  | [optional] 

[[Back to README]](../README.md)



