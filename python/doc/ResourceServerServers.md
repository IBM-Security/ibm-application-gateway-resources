# ResourceServerServers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The name or IP address of the server.  | [optional] 
**port** | **float** | The port on which the server is listening.  | [optional] [default to 443]
**virtual\_host** | **str** | If the resource server resides on a virtual host, this parameter can be used to specify the hostname which the reverse proxy should present in the host header for requests to this resource server. If this resource server definition is for a virtual host, this will be inherited from the resource server definition and should not be specified.  | [optional] 
**ssl** | [**ResourceServerSsl**](ResourceServerSsl.md) |  | [optional] 
**url\_style** | [**ResourceServerUrlStyle**](ResourceServerUrlStyle.md) |  | [optional] 
**priority** | **float** | The priority group for this server. The load balancing algorithm in IAG will forward client requests to any currently available  server with the highest priority.  | [optional] [default to 9]
**uuid** | **str** | The UUID for this server. The UUID of the server is used if this  is a stateful resource server to ensure that client requests are always handled by the same server. This field is optional and will be automatically generated if not provided. The UUID only needs to be manually set when multiple instances  of IAG are handling the same stateful traffic. That is, so that  each IAG instance is using the same UUIDs for the same servers.  | [optional] 

[[Back to README]](../README.md)



