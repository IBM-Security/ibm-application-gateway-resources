# ResourceServer

## Description

The definition for a single resource server which provides content for the gateway.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path at which the resource server will be made available. This entry is required if the &#x60;virtual_host&#x60; entry has not been specified. It is not valid to have both &#x60;path&#x60; and &#x60;virtual_host&#x60; entries specified.  | [optional] 
**virtual_host** | **str** | The virtual host, as defined by the host header in the request, at  which the resource server will be made available. This will be the  hostname and port number specified in the web browser when it makes  the request. The port number should always be specified, whether the  default port is being used (443 for SSL), or if the virtual host is  using a non-default port for the intended protocol. If your docker  or container host is mapping an incoming port number such as 443 to  some other port inside the container (i.e. 8443), then specify here  the incoming port number (i.e. 443). This entry is required if the &#x60;path&#x60; entry has not been specified.  It is not valid to have both &#x60;path&#x60; and &#x60;virtual_host&#x60; entries  specified.  | [optional] 
**connection_type** | **str** | The connection type the reverse proxy will make for this resource server.  | [optional] [default to 'tcp']
**transparent_path** | **bool** | A boolean flag indicating whether or not this resource server uses a transparent path. For path type resource servers, setting this entry to true will result in the passing of the entire URL as observed by the reverse proxy to the resource server, including the value given in \&quot;path\&quot;. If set to false the reverse proxy will filter the path from the URL and pass only the remainder of the URL to the resource server.  | [optional] [default to False]
**stateful** | **bool** | A boolean flag indicating whether or not user requests, for the lifetime of a session, are always processed by the same resource server.  | [optional] [default to False]
**http2** | [**ResourceServerHttp2**](ResourceServerHttp2.md) |  | [optional] 
**sni** | **str** | The Server Name Indicator the reverse proxy will indicate to the resource server during TLS negotiation.  | [optional] 
**identity_headers** | [**ResourceServerIdentityHeaders**](ResourceServerIdentityHeaders.md) |  | [optional] 
**cookies** | [**ResourceServerCookies**](ResourceServerCookies.md) |  | [optional] 
**mutual_auth** | [**ResourceServerMutualAuth**](ResourceServerMutualAuth.md) |  | [optional] 
**servers** | [**list[ResourceServerServers]**](ResourceServerServers.md) | Specifies the location of the resource server that is being protected. This is an array type and multiple resource servers can be specified.  | [optional] 
**aliases** | **list[str]** | For virtual_host resource servers, the gateway selects the resource server for a request based on the HTTP host header contained within the request. The &#39;aliases&#39; option can be used to specify additional aliased host headers which will be matched to this virtual host resource server. Multiple aliases can be specified for a resource server.  | [optional] 
**forms_login** | [**ResourceServerFormsLogin**](ResourceServerFormsLogin.md) |  | [optional] 
**health** | [**ResourceServerHealth**](ResourceServerHealth.md) |  | [optional] 
**worker_threads** | [**ResourceServerWorkerThreads**](ResourceServerWorkerThreads.md) |  | [optional] 
**persistent_connections** | [**ResourceServerPersistentConnections**](ResourceServerPersistentConnections.md) |  | [optional] 
**identity** | [**ResourceServerIdentity**](ResourceServerIdentity.md) |  | [optional] 

[[Back to README]](../README.md)



