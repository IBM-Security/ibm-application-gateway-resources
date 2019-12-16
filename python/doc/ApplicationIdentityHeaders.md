# ApplicationIdentityHeaders

## Description

Configuration information associated with the provision of identity information to the application.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | The encoding type to use for any identity headers passed to the  application.  Valid values are \&quot;utf8_bin\&quot;, \&quot;utf8_uri\&quot;, \&quot;lcp_bin\&quot;  or \&quot;lcp_uri\&quot;. If this parameter is not specified, \&quot;utf8_uri\&quot;  will be used.  | [optional] 
**basic_auth** | **str** | Controls whether or not basic authentication headers presented  by clients are forwarded to applications or not. Valid values are:   \&quot;filter\&quot; - The reverse proxy will removes any basic               authentication information from client requests               before sending them to the application server.   \&quot;supply\&quot; - The reverse proxy will provide the username and the               a dummy password to the application server. Use the               entry advanced/config/junction/basicauth-dummy-passwd              to set the dummy password.   \&quot;ignore\&quot; - The reverse proxy will pass any basic authentication               headers to the application.  If this parameter is not specified, \&quot;ignore\&quot; will be used.  | [optional] 
**ip_address** | **bool** | Provides the client IP address as a HTTP header in requests  forwarded to the application.  | [optional] 
**credential** | **str** | Provides credential data in HTTP headers in requests forwarded  to the application. Valid values are:   \&quot;iv_user\&quot;   - The user name of the client (login ID). Defaults       to \&quot;Unauthenticated\&quot; if client is unauthenticated (unknown).   \&quot;iv_user_l\&quot; - The distinguished name (DN) of the client.   \&quot;iv_groups\&quot; - A list of groups to which the client belongs.       Consists of comma separated quoted entries.   \&quot;iv_creds\&quot;  - Encoded opaque data structure that represents a      credential.    \&quot;all\&quot;.      - Alias for \&quot;iv-user\&quot;, \&quot;iv_groups\&quot; and \&quot;iv_creds\&quot;  | [optional] 
**session_cookie** | **bool** | This entry will forward the reverse proxy cookie (the one named  by server/session/cookie_name) to the application server.  | [optional] 

[[Back to README]](../README.md)



