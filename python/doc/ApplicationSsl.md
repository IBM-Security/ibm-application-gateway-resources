# ApplicationSsl

## Description

SSL settings for the server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | If required, a signer certificate required for the reverse  proxy to trust the application server can be specified  here in PEM format.  | [optional] 
**server_dn** | **str** | This option can be used to ensure that the application  server presents a specific certificate.  | [optional] 
**sni** | **str** | The expected SNI of the application server can be  indicated here.  | [optional] 

[[Back to README]](../README.md)



