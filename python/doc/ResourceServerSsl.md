# ResourceServerSsl

## Description

SSL settings for the server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | If required, a signer certificate required for the reverse proxy to trust the resource server can be specified here in PEM format.  | [optional] 
**server\_dn** | **str** | This option can be used to ensure that the resource server presents a specific certificate.  | [optional] 
**sni** | **str** | Specifies the expected SNI of the resource server.  | [optional] 

[[Back to README]](../README.md)



