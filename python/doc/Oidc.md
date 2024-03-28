# Oidc

## Description

The configuration entries in this section allow the reverse proxy to act as an OIDC relying party.
IBM Security Verify, IBM Security Verify Access and IBM Security Access Manager 9.0.7.0+ are supported as OIDC identity providers.

### Response Type Values
Name | Description
---- | -----------
code | The authorization code flow will be used to retrieve both an access token and identity token.
id_token | The implicit flow will be used to retrieve the identity token.
id_token token | The implicit flow will be used to retrieve both an access token and identity token.

### Bearer Token Attrs Format
A JSON data element from the bearer token response which should be included or excluded in the credential as an extended attribute.
The format of the configuration entry is:

`[+|-]<json-data>`

where:

Element | Description
------- | -----------
+ | Indicates that this JSON data should be added to the credential.
- | Indicates that this JSON data should not be added to the credential.
&lt;json-data&gt; | The corresponding JSON data name, which can also contain pattern matching characters (i.e. * ?).

For example the value "-access_token" indicates that the access_token should not be added to the credential.

When a bearer token is received each JSON data element will be evaluated against each rule in sequence until a match is found.
The corresponding code (+|-) will then be used to determine whether the JSON data will be added to the credential or not.
If the JSON data name does not match a configured rule it will by default be added to the credential.

### ID Token Attrs Format
A claim from the ID token response which should be included or excluded in the credential as an extended attribute.
The format of the configuration entry is:

`[+|-]<claim>`

where:

Element | Description
------- | -----------
+ | Indicates that this claim should be added to the credential.
- | Indicates that this claim should not be added to the credential.
&lt;claim&gt; | The corresponding claim name, which can also contain pattern matching characters (i.e. * ?).

For example the value "-email" indicates that the email claim should not be added to the credential.

When an ID token is received each claim will be evaluated against each rule in sequence until a match is found.
The corresponding code (+|-) will then be used to determine whether the claim will be added to the credential or not.
If the claim name does not match a configured rule it will by default be added to the credential.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of this provider. This field is optional and if not supplied the name \&quot;default\&quot; will be used. The name field is used to determine the kick-off URL for this OIDC provider. The format of the kick-off URL is &#x60;/pkmsoidc?iss&#x3D;&lt;name&gt;&#x60;. Note that each OIDC provider must have a unique name.  | [optional] [default to 'default']
**discovery_endpoint** | **str** | The fully qualified discovery endpoint for the OIDC OP. For IBM Security Verify, this URL is usually in the format: &#x60;https://&lt;verify-hostname&gt;/oidc/endpoint/default/.well-known/openid-configuration&#x60; For IBM Security Verify Access, this URL is usually in the format: &#x60;https://&lt;verify-access-hostname&gt;/&lt;junction&gt;/sps/oauth/oauth20/metadata/&lt;definition_name&gt;&#x60;  | [optional] 
**client_id** | **str** | The client identity registered with the identity provider.  | [optional] 
**client_secret** | **str** | The client secret registered with the identity provider.  | [optional] 
**pkce** | **bool** | Enables Proof Key for Code Exchange (RFC 7636). Enable this option if the OIDC provider requires PKCE.  | [optional] 
**ssl** | [**OidcSsl**](OidcSsl.md) |  | [optional] 
**mapped_identity** | **str** | A formatted string which is used to construct the credential principal name from elements of the ID token. Claims can be added to the identity string, surrounded by &#x60;{}&#x60;, for example:   {iss}/{sub} - would construct a principal name like the following:   https://server.example.com/248289761001  | [optional] [default to '{sub}']
**redirect_uri_host** | **str** | This is the host which is used in the redirect URI registered with the OIDC OP. If no redirect URI host is configured the host header from the request will be used. The format of the redirect URI will be: &#x60;http[s]://&lt;host&gt;/pkmsoidc&#x60;.  | [optional] 
**response_type** | **str** | The required response type for authentication responses. See the [Response Type Values](#response-type-values) table for a description  of the available values.  | [optional] [default to 'code']
**response_mode** | **str** | The required response mode for authentication responses. If no response mode is configured the response mode parameter will not be included in the authentication request.  | [optional] 
**proxy** | **str** | Specifies the proxy, if any, which is used to reach the identity provider. The proxy configuration entry should be in URL format. Eg: &#x60;http[s]://&lt;address&gt;:&lt;port&gt;&#x60;  | [optional] 
**scopes** | **list[str]** | Any scopes to be sent in the authentication request in addition to the &#x60;openid&#x60; scope.  | [optional] 
**allowed_query_args** | **list[str]** | Additional query string arguments can be provided to the authentication kick-off URL which will in turn be appended to the corresponding authentication request. This entry is used to define a list of allowed query string arguments. Any other arguments passed to the kick-off URL will be ignored.  | [optional] 
**bearer_token_attrs** | **list[str]** | A list of JSON data elements from the bearer token response which should be included or excluded in the credential as an extended attribute. See the  [Bearer Token Attrs Format](#bearer-token-attrs-format) table for a  description of the expected format.  | [optional] 
**id_token_attrs** | **list[str]** | A list of claims from the ID token response which should be included or excluded in the credential as an extended attribute. See the  [ID Token Attrs Format](#id-token-attrs-format) table for a description  of the expected format.  | [optional] 

[[Back to README]](../README.md)



