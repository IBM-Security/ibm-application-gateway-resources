# Application

## Description

The definition for a single application which is to be protected by the gateway.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Create this application as a path. The path which the reverse proxy  will make the application available from. For example, \&quot;/static\&quot; or  \&quot;/management\&quot;.  This parameter should be specified if the  \&quot;virtual_host\&quot; parameter is not used.  | [optional] 
**virtual_host** | **str** | Create this application as a virtual host. This property indicates  the virtual host which the reverse proxy will make this application  available from. Port information may also be specified if the  virtual host is on a non-default port for the intended protocol.   For example, \&quot;application.ibm.com:9443\&quot; \&quot;test.ibm.com\&quot;  | [optional] 
**connection_type** | **str** | The connection type to the reverse proxy will make to this  application.  Valid values are \&quot;tcp\&quot;, \&quot;ssl\&quot;, \&quot;tcp_proxy\&quot; and  \&quot;ssl_proxy\&quot;.  If this parameter is not specified, \&quot;tcp\&quot; will be used.  | [optional] 
**transparent_path** | **bool** | For path type applications, this will pass the entire URL as  observed by the reverse proxy to the application including the value  given in \&quot;path\&quot;.   | [optional] 
**stateful** | **bool** | When enabled, this will ensure that user requests during the  lifetime of a session are always processed by the same application  server.   | [optional] 
**http2** | [**ApplicationHttp2**](ApplicationHttp2.md) |  | [optional] 
**identity_headers** | [**ApplicationIdentityHeaders**](ApplicationIdentityHeaders.md) |  | [optional] 
**cookies** | [**ApplicationCookies**](ApplicationCookies.md) |  | [optional] 
**mutual_auth** | [**ApplicationMutualAuth**](ApplicationMutualAuth.md) |  | [optional] 
**servers** | [**list[ApplicationServers]**](ApplicationServers.md) | This node defines where the application being protected resides.  This is an array type and multiple servers can be specified.  | [optional] 
**health** | [**ApplicationHealth**](ApplicationHealth.md) |  | [optional] 
**worker_threads** | [**ApplicationWorkerThreads**](ApplicationWorkerThreads.md) |  | [optional] 
**policies** | [**list[ApplicationPolicies]**](ApplicationPolicies.md) | Authorization policies for this application.  | [optional] 

[[Back to README]](../README.md)



