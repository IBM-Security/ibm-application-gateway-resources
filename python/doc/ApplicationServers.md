# ApplicationServers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The name or IP address of the server.  | [optional] 
**port** | **float** | The port on which the server is listening.  | [optional] 
**virtual_host** | **str** | If the application resides on a virtual host, this parameter  can be used to specify the hostname which the reverse proxy  should present in the host header for requests to this  application.  If this application definition is for a virtual  host, this will be inherited from the application definition  and should not be specified.  | [optional] 
**ssl** | [**ApplicationSsl**](ApplicationSsl.md) |  | [optional] 
**url_style** | [**ApplicationUrlStyle**](ApplicationUrlStyle.md) |  | [optional] 

[[Back to README]](../README.md)



