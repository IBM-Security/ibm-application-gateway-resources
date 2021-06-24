# IdentityAuthChallengeRedirect

## Description

These entries can be used to override the default authentication challenge which unauthenticated clients will be redirected to when first accessing the reverse proxy.
If an OIDC identity source is configured, this entry will default to the OIDC authentication URI "/pkmsoidc?iss=default".

Example:
identity:
  auth_challenge_redirect:
    url: /eai/login_start
    parameters:
      - source: macro
        value:  HOSTNAME
        name:   host
      - source: credential
        value:  AZN_CRED_NETWORK_ADDRESS_STR
        name:   origin
      - source: header
        value:  X-IBM-Proxy
        name:   proxy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URI which a client will be redirected to in order to start the authentication process. This URI can be absolute or server relative.  | [optional] 
**parameters** | [**list[IdentityAuthChallengeRedirectParameters]**](IdentityAuthChallengeRedirectParameters.md) | Additional parameters which can be included in the redirect URI as query string arguments.  | [optional] 

[[Back to README]](../README.md)



