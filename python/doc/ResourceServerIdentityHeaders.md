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
filter | The reverse proxy will remove any basic authentication headers from client requests before sending them to the resource server.
supply | The reverse proxy will provide the username and a dummy password to the resource server. Use the entry advanced:configuration:junction:basicauth-dummy-passwd to set the dummy password.
ignore | The reverse proxy will pass any basic authentication headers to the resource server.



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | The encoding type to use for any identity headers passed to the resource server. See the Encoding table for a description of the available options.  | [optional] [default to 'utf8_uri']
**basic\_auth** | **str** | Controls whether or not basic authentication headers presented by clients are forwarded to the resource server. See the Basic Auth table for a description of the available options.  | [optional] [default to 'ignore']
**ip\_address** | **bool** | A boolean flag indicating whether or not to provide the client IP address as a HTTP header in requests forwarded to the resource server.  | [optional] [default to False]
**attributes** | [**list[ResourceServerIdentityHeadersAttributes]**](ResourceServerIdentityHeadersAttributes.md) | Specifies a list of attributes from the authenticated credential which will be inserted into the HTTP requests sent to the resource server.  | [optional] 
**session\_cookie** | **bool** | A boolean flag indicating whether or not to forward the reverse proxy cookie to the resource server. The name of this cookie is configured in the server:session:cookie\_name entry.  | [optional] [default to False]

[[Back to README]](../README.md)



