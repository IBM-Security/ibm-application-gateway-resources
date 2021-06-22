# Identity

## Description

This node defines how users will authenticate to the reverse proxy.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth\_challenge\_redirect** | [**IdentityAuthChallengeRedirect**](IdentityAuthChallengeRedirect.md) |  | [optional] 
**auth\_complete\_redirect** | [**IdentityAuthCompleteRedirect**](IdentityAuthCompleteRedirect.md) |  | [optional] 
**oidc** | [**Oidc**](Oidc.md) |  | [optional] 
**oauth** | [**list[Oauth]**](Oauth.md) | The configuration entries in this section allow the reverse proxy to accept an OAuth bearer token and use the configured OAuth introspection endpoints to validate the token and create an authenticated session.| [optional] 
**eai** | [**Eai**](Eai.md) |  | [optional] 
**ci\_oidc** | [**CiOidc**](CiOidc.md) |  | [optional] 

[[Back to README]](../README.md)



