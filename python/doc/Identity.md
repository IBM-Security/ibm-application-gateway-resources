# Identity

## Description

This node defines how users will authenticate to the reverse proxy.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth\_challenge\_redirect** | [**IdentityAuthChallengeRedirect**](IdentityAuthChallengeRedirect.md) |  | [optional] 
**oidc** | [**Oidc**](Oidc.md) |  | [optional] 
**oauth** | [**list[Oauth]**](Oauth.md) | This node is used to specify OAuth introspection endpoints which can be used by the reverse proxy to authenticate OAuth bearer tokens. | [optional] 
**eai** | [**Eai**](Eai.md) |  | [optional] 
**ci\_oidc** | [**CiOidc**](CiOidc.md) |  | [optional] 

[[Back to README]](../README.md)



