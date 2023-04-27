# ResourceServer

## Description

The definition for a single resource server which provides content for the gateway.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path at which the resource server will be made available. This entry is required if the &#x60;virtual\_host&#x60; entry has not been specified. It is not valid to have both &#x60;path&#x60; and &#x60;virtual\_host&#x60; entries specified.  | [optional] 
**virtual\_host** | **str** | The virtual host, as defined by the host header in the request, at  which the resource server will be made available. This will be the  hostname and port number specified in the web browser when it makes  the request. The port number should always be specified, whether the  default port is being used (443 for SSL), or if the virtual host is  using a non-default port for the intended protocol. If your docker  or container host is mapping an incoming port number such as 443 to  some other port inside the container (i.e. 8443), then specify here  the incoming port number (i.e. 443). This entry is required if the &#x60;path&#x60; entry has not been specified.  It is not valid to have both &#x60;path&#x60; and &#x60;virtual\_host&#x60; entries  specified.  | [optional] 
**connection\_type** | **str** | The connection type the reverse proxy will make for this resource server.  | [optional] [default to 'tcp']
**transparent\_path** | **bool** | A boolean flag indicating whether or not this resource server uses a transparent path. For path type resource servers, setting this entry to true will result in the passing of the entire URL as observed by the reverse proxy to the resource server, including the value given in \"path\". If set to false the reverse proxy will filter the path from the URL and pass only the remainder of the URL to the resource server.  | [optional] [default to False]
**stateful** | **bool** | A boolean flag indicating whether or not user requests, for the lifetime of a session, are always processed by the same resource server.  | [optional] [default to False]
**http2** | [**ResourceServerHttp2**](ResourceServerHttp2.md) |  | [optional] 
**sni** | **str** | The Server Name Indicator the reverse proxy will indicate to the resource server during TLS negotiation.  | [optional] 
**identity\_headers** | [**ResourceServerIdentityHeaders**](ResourceServerIdentityHeaders.md) |  | [optional] 
**cookies** | [**ResourceServerCookies**](ResourceServerCookies.md) |  | [optional] 
**mutual\_auth** | [**ResourceServerMutualAuth**](ResourceServerMutualAuth.md) |  | [optional] 
**servers** | [**list[ResourceServerServers]**](ResourceServerServers.md) | Specifies the location of the resource server that is being protected.| [optional] 
**forms\_login** | [**ResourceServerFormsLogin**](ResourceServerFormsLogin.md) |  | [optional] 
**health** | [**ResourceServerHealth**](ResourceServerHealth.md) |  | [optional] 
**worker\_threads** | [**ResourceServerWorkerThreads**](ResourceServerWorkerThreads.md) |  | [optional] 
**persistent\_connections** | [**ResourceServerPersistentConnections**](ResourceServerPersistentConnections.md) |  | [optional] 
**identity** | [**ResourceServerIdentity**](ResourceServerIdentity.md) |  | [optional] 

[[Back to README]](../README.md)



