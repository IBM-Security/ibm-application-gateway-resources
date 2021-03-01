# Oidc

## Description

The configuration entries in this section allow the reverse proxy to
act as an OIDC relying party. IBM Security Verify, IBM Security Verify Access
and IBM Security Access Manager 9.0.7.0+ are supported as OIDC identity providers.

## Response Type Values
Name | Description
---- | -----------
code | The authorization code flow will be used to retrieve both an access token and identity token.
id_token | The implicit flow will be used to retrieve the identity token.
id_token token | The implicit flow will be used to retrieve both an access token and identity token.

## Bearer Token Attrs Format
A JSON data element from the bearer token response which should be
included or excluded in the credential as an extended attribute. The format
of the configuration entry is:

       [+|-]<json-data>

where:

Element | Description
------- | -----------
+ | Indicates that this JSON data should be added to the credential.
- | Indicates that this JSON data should not be added to the credential.
\<json-data\> | The corresponding JSON data name, which can also contain pattern matching characters (i.e. * ?).

For example the value "-access\_token" indicates that the access_token should not be added to the credential.

When a bearer token is received each JSON data element will be
evaluated against each rule in sequence until a match is found.
The corresponding code (+|-) will then be used to determine whether
the JSON data will be added to the credential or not. If the JSON
data name does not match a configured rule it will by default be
added to the credential.

## ID Token Attrs Format
A claim from the ID token response which should be included or excluded in the
credential as an extended attribute. The format of the configuration entry is:

       [+|-]<claim>

where:

Element | Description
------- | -----------
+ | Indicates that this claim should be added to the credential.
- | Indicates that this claim should not be added to the credential.
\<claim\> | The corresponding claim name, which can also contain pattern matching characters (i.e. * ?).

For example the value "-email" indicates that the email claim should not be added to the credential.

When an ID token is received each claim will be evaluated against
each rule in sequence until a match is found. The corresponding
code (+|-) will then be used to determine whether the claim will
be added to the credential or not. If the claim name does not
match a configured rule it will by default be added to the
credential.



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery\_endpoint** | **str** | The fully qualified discovery endpoint for the OIDC OP.&lt;br/&gt; For IBM Security Verify, this URL is usually in the format:&lt;br/&gt; https://&lt;verify-hostname&gt;/oidc/endpoint/default/.well-known/openid-configuration &lt;br/&gt; For IBM Security Verify Access, this URL is usually in the format:&lt;br/&gt; https://&lt;verify-access-hostname&gt;/&lt;junction&gt;/sps/oauth/oauth20/metadata/&lt;definition\_name&gt;  | [optional] 
**client\_id** | **str** | The client identity registered with the identity provider.  | [optional] 
**client\_secret** | **str** | The client secret registered with the identity provider.  | [optional] 
**ssl** | [**OidcSsl**](OidcSsl.md) |  | [optional] 
**mapped\_identity** | **str** | A formatted string which is used to construct the credential principal name from elements of the ID token. Claims can be added to the identity string, surrounded by &#39;{}&#39;, for example:   {iss}/{sub} - would construct a principal name like the following:   https://server.example.com/248289761001  | [optional] [default to '{sub}']
**redirect\_uri\_host** | **str** | This is the host which is used in the redirect URI registered with the OIDC OP. If no redirect URI host is configured the host header from the request will be used. The format of the redirect URI will be: http[s]://&lt;host&gt;/pkmsoidc.  | [optional] 
**response\_type** | **str** | The required response type for authentication responses. See the Response Type Values table for a description of the available values.  | [optional] [default to 'code']
**response\_mode** | **str** | The required response mode for authentication responses. If no response mode is configured the response mode parameter will not be included in the authentication request.  | [optional] 
**proxy** | **str** | Specifies the proxy, if any, which is used to reach the identity  provider. The proxy configuration entry should be in URL format. Eg: http[s]://&lt;address&gt;:&lt;port&gt;  | [optional] 
**scopes** | **list[str]** | Any scopes to be sent in the authentication request in addition to the &#39;openid&#39; scope.  | [optional] 
**allowed\_query\_args** | **list[str]** | Additional query string arguments can be provided to the authentication kick-off URL which will in turn be appended to the corresponding authentication request. This entry is used to define a list of allowed query string arguments. Any other arguments passed to the kick-off URL will be ignored.  | [optional] 
**bearer\_token\_attrs** | **list[str]** | A list of JSON data elements from the bearer token response which  should be included or excluded in the credential as an extended  attribute. See the Bearer Token Attrs Format table for a description  of the expected format.  | [optional] 
**id\_token\_attrs** | **list[str]** | A list of claims from the ID token response which should be included  or excluded in the credential as an extended attribute. See the ID  Token Attrs Format table for a description of the expected format.  | [optional] 

[[Back to README]](../README.md)



