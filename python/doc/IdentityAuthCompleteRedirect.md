# IdentityAuthCompleteRedirect

## Description

These entries can be used to override the default post authentication URL which clients will be redirected to once they have successfully authenticated.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URI which a client will be redirected to upon successful authentication. This URI can be absolute or server relative.  | [optional] 
**parameters** | [**list[IdentityAuthCompleteRedirectParameters]**](IdentityAuthCompleteRedirectParameters.md) | Additional parameters which can be included in the redirect URI as query string arguments.  | [optional] 

[[Back to README]](../README.md)



