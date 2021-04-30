# Oauth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name which is used to identify and describe this endpoint.  | [optional] 
**restricted** | **bool** | A boolean flag which indicates whether this endpoint is restricted to certain resource servers or not.  If the endpoint is restricted only those resource servers which specifically mention this endpoint, using the identity/oauth element within the resource server definition, will be allowed to use this endpoint.  | [optional] [default to False]
**introspection\_endpoint** | **str** | The fully qualified introspection endpoint for the OAuth provider.  For IBM Security Verify, this URL is usually in the format:&lt;br/&gt; &#x60;https://&lt;verify-hostname&gt;/v1.0/endpoint/default/introspect&#x60;  For IBM Security Verify Access, this URL is usually in the format:&lt;br/&gt; &#x60;https://&lt;verify-access-hostname&gt;/&lt;junction&gt;/sps/oauth/oauth20/introspect&#x60;  | [optional] 
**client\_id** | **str** | The client identity which is used to authenticate to the introspection endpoint.  | [optional] 
**client\_secret** | **str** | The client secret which is used to authenticate to the introspection endpoint.  If a client\_id field is not configured the secret will be treated as a bearer token, otherwise it will be used in a basic authentication header.  | [optional] 
**client\_id\_hdr** | **str** | The name of the HTTP header which contains the client identifier which is used to authenticate to the introspection endpoint.  This configuration entry is mutually exclusive with the client\_id configuration entry.  If the client\_id configuration entry is provided this configuration entry will be ignored.  | [optional] 
**auth\_method** | **str** | Introspection can be authenticated with BA or Forms. Specify the value &#x60;client\_secret\_post&#x60; to post the client credentials or &#x60;client\_secret\_basic&#x60; to provide the credentials via the Authorization header. If not provided will default to &#x60;client\_secret\_post&#x60;  | [optional] [default to 'client_secret_post']
**token\_type\_hint** | **str** | A hint about the type of the token submitted for introspection.  | [optional] [default to 'access_token']
**ssl** | [**OauthSsl**](OauthSsl.md) |  | [optional] 
**mapped\_identity** | **str** | A formatted string which is used to construct the credential principal name from elements of the introspection response token. Claims can be added to the identity string, surrounded by &#x60;{}&#x60;, for example:   {iss}/{sub} - would construct a principal name like the following:   https://server.example.com/248289761001  | [optional] [default to '{sub}']
**proxy** | **str** | Specifies the proxy, if any, which is used to reach the OAuth provider. The proxy configuration entry should be in URL format. Eg: &#x60;http[s]://&lt;address&gt;:&lt;port&gt;&#x60;  | [optional] 
**attributes** | **list[str]** | A list of JSON data elements from the introspection response token which should be included in or excluded from the credential as an extended attribute. See the [Attributes Format](#attributes-format) table for a description of the expected format.  | [optional] 
**multi\_valued\_scope** | **bool** | By default the OAuth scope attribute is provided as a single space separated string.  By enabling this configuration option the scope attribute will instead be converted to a multi-value attribute.  | [optional] [default to True]
**headers** | [**list[OauthHeaders]**](OauthHeaders.md) | Additional HTTP headers which can be included in the introspection  request.  | [optional] 

[[Back to README]](../README.md)



