# Identity

## Description

This node defines how users will authenticate to the reverse proxy. Only one identity method can be used at a time and this parameter should contain only a single child.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ci\_oidc** | [**CiOidc**](CiOidc.md) |  | [optional] 
**oidc** | [**Oidc**](Oidc.md) |  | [optional] 
**oauth** | [**list[Oauth]**](Oauth.md) | This node is used to specify OAuth introspection endpoints which can be used by the reverse proxy to authenticate OAuth bearer tokens. | [optional] 

[[Back to README]](../README.md)



