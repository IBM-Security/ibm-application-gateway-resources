# CiOidc

## Description

The configuration entries in this section allow the reverse proxy to act as an OIDC relying party to IBM Security Verify.

### Notice of Deprecation

This identity module is no longer preferred and will be removed in a future version. Use the [OIDC](../../yaml-identity/oidc) identity module.

When using the OIDC identity module, `discovery_endpoint` is given rather than `hostname`.


The format for an IBM Security Verify `discovery_endpoint` is:

`https://<hostname>/oidc/endpoint/default/.well-known/openid-configuration`

For example, refer to the IBM Security Verify OIDC configuration below:

```yaml
  identity:
    ci_oidc:
      hostname: www.test.com
      client_id: 11111111-2222-3333-4444-5a5a5a5a5a5a5a
      # ...
```

The equivalent OIDC configuration is:

```yaml
  identity:
    oidc:
      discovery_endpoint: https://www.test.com/oidc/endpoint/default/.well-known/openid-configuration
      client_id: 11111111-2222-3333-4444-5a5a5a5a5a5a5a
      # ...
```

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
**hostname** | **str** | The fully qualified host name of the IBM Security Verify tenant.  | [optional] 
**client_id** | **str** | The client identity registered with IBM Security Verify.  | [optional] 
**client_secret** | **str** | The client secret registered with IBM Security Verify.  | [optional] 
**mapped_identity** | **str** | A formatted string which is used to construct the credential principal name from elements of the ID token. Claims can be added to the identity string, surrounded by &#x60;{}&#x60;, for example:   {iss}/{sub} - would construct a principal name like the following:   https://server.example.com/248289761001  | [optional] [default to '{sub}']
**redirect_uri_host** | **str** | This is the host which is used in the redirect URI registered with the OIDC OP. If no redirect URI host is configured the host header from the request will be used. The format of the redirect URI will be: &#x60;http[s]://&lt;host&gt;/pkmsoidc&#x60;.  | [optional] 
**response_type** | **str** | The required response type for authentication responses. See the [Response Type Values](#response-type-values) table for a description  of the available values.  | [optional] [default to 'code']
**response_mode** | **str** | The required response mode for authentication responses. If no response mode is configured the response mode parameter will not be included in the authentication request.  | [optional] 
**proxy** | **str** | Specifies the proxy, if any, which is used to reach IBM Security Verify. The proxy configuration entry should be in URL format. Eg: &#x60;http[s]://&lt;address&gt;:&lt;port&gt;&#x60;  | [optional] 
**scopes** | **list[str]** | Any scopes to be sent in the authentication request in addition to the &#x60;openid&#x60; scope.  | [optional] 
**allowed_query_args** | **list[str]** | Additional query string arguments can be provided to the authentication kick-off URL which will in turn be appended to the corresponding authentication request. This entry is used to define a list of allowed query string arguments. Any other arguments passed to the kick-off URL will be ignored.  | [optional] 
**bearer_token_attrs** | **list[str]** | A list of JSON data elements from the bearer token response which should be included or excluded in the credential as an extended attribute. See the [Bearer Token Attrs Format](#bearer-token-attrs-format) table for a  description of the expected format.  | [optional] 
**id_token_attrs** | **list[str]** | A list of claims from the ID token response which should be included or excluded in the credential as an extended attribute. See the  [ID Token Attrs Format](#id-token-attrs-format) table for a description  of the expected format.  | [optional] 

[[Back to README]](../README.md)



