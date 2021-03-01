# ResourceServerServers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The name or IP address of the server.  | [optional] 
**port** | **float** | The port on which the server is listening.  | [optional] [default to 443]
**virtual\_host** | **str** | If the resource server resides on a virtual host, this parameter can be used to specify the hostname which the reverse proxy should present in the host header for requests to this resource server. If this resource server definition is for a virtual host, this will be inherited from the resource server definition and should not be specified.  | [optional] 
**ssl** | [**ResourceServerSsl**](ResourceServerSsl.md) |  | [optional] 
**url\_style** | [**ResourceServerUrlStyle**](ResourceServerUrlStyle.md) |  | [optional] 

[[Back to README]](../README.md)



