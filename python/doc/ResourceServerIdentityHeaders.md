# ResourceServerIdentityHeaders

## Description

Specifies the configuration information associated with the provision of identity
information to the resource server.

## Encoding
Type | Description
---- | -----------
utf8_bin | Unencoded UTF-8 data. This setting allows data to be transmitted without data loss, and the user does not need to URI-decode the data.
utf8_uri | URI encoded UTF-8 data. All white space and non\-ASCII bytes are encoded %XY, where X and Y are hex values (0 - F).
lcp_bin | Unencoded local code page data. Data loss can potentially occur with this mode. Use with caution.
lcp_uri | URI encoded local code page data. Any UTF-8 characters that cannot be converted to a local code page are converted to question marks (?).

## Basic Auth
Type | Description
---- | -----------
filter | The Authorization header, if provided by the client, will be removed before the resource request is forwarded to the resource server.  This is the default option if no option is specified.
supply | A new Authorization header will be created by the gateway and forwarded to the resource server.  The Basic Authentication information contained in the header will consist of the name of the authenticated user, along with a static password.  Use the 'advanced' YAML configuration entry, 'basicauth-dummy-passwd', in the 'junction' stanza, to set the static password.
ignore | The Authorization header, if provided by the client, will be forwarded to the resource server unchanged.



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | The encoding type to use for any identity headers passed to the resource server. See the Encoding table for a description of the available options.  | [optional] [default to 'utf8_uri']
**basic\_auth** | **str** | Controls the basic authentication information, contained within the Authorization header, that is passed to the resource server. See the Basic Auth table for a description of the available  options.  | [optional] [default to 'filter']
**ip\_address** | **bool** | A boolean flag indicating whether or not to provide the client IP  address as a HTTP header in requests forwarded to the resource  server.  The IP address will be added in the &#39;iv-remote-address&#39; HTTP header.  | [optional] [default to False]
**attributes** | [**list[ResourceServerIdentityHeadersAttributes]**](ResourceServerIdentityHeadersAttributes.md) | Specifies a list of attributes from the authenticated credential which will be inserted into the HTTP requests sent to the resource server.  | [optional] 
**session\_cookie** | **bool** | A boolean flag indicating whether or not to forward the reverse proxy cookie to the resource server. The name of this cookie is configured in the server:session:cookie\_name entry.  | [optional] [default to False]
**jwt** | [**ResourceServerIdentityHeadersJwt**](ResourceServerIdentityHeadersJwt.md) |  | [optional] 

[[Back to README]](../README.md)



