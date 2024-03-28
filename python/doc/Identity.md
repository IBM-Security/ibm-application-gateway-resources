# Identity

## Description

This node defines how users will authenticate to the reverse proxy.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_challenge_redirect** | [**IdentityAuthChallengeRedirect**](IdentityAuthChallengeRedirect.md) |  | [optional] 
**auth_complete_redirect** | [**IdentityAuthCompleteRedirect**](IdentityAuthCompleteRedirect.md) |  | [optional] 
**oidc** | [**list[Oidc]**](Oidc.md) |  | [optional] 
**oauth** | [**list[Oauth]**](Oauth.md) | The configuration entries in this section allow the reverse proxy to accept an OAuth bearer token and use the configured OAuth introspection endpoints to validate the token and create an authenticated session. IBM Security Verify, IBM Security Verify Access and IBM Security Access Manager 9.0.7.0+ provide supported OAuth introspection endpoints. Multiple introspection endpoints may be different so that different providers can be enabled for different resource servers.  ### Attributes Format A JSON data element from the introspection response token which should be included or excluded in the credential as an extended attribute. The format of the configuration entry is:  &#x60;[+|-]&lt;json-data&gt;&#x60;  where:  Element | Description ------- | ----------- + | Indicates that this JSON data should be added to the credential. - | Indicates that this JSON data should not be added to the credential. &amp;lt;json-data&amp;gt; | The corresponding JSON data name, which can also contain pattern matching characters (i.e. * ?).  For example the value \&quot;-exp\&quot; indicates that the expiry time of the token should not be added to the credential.  When an introspection response token is received each JSON data element will be evaluated against each rule in sequence until a match is found. The corresponding code (+|-) will then be used to determine whether the JSON data will be added to the credential or not. If the JSON data name does not match a configured rule it will by default be added to the credential.  | [optional] 
**eai** | [**Eai**](Eai.md) |  | [optional] 
**ci_oidc** | [**CiOidc**](CiOidc.md) |  | [optional] 

[[Back to README]](../README.md)



