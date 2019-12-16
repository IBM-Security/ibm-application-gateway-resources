# ApplicationHttpTransformations

## Description

The reverse proxy can transform inbound requests from clients before  forwarding them to the application or outgoing responses from the  application before returning them to the client.  Refer to the  documentation for information about how to author HTTP transformation  rules XSL documents.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**list[ApplicationHttpTransformation]**](ApplicationHttpTransformation.md) | This node defines the transformations which will take place on requests.  | [optional] 
**response** | [**list[ApplicationHttpTransformation]**](ApplicationHttpTransformation.md) | This node defines the transformations which will take place on responses.  | [optional] 

[[Back to README]](../README.md)



