# ServerSsl

## Description

Specifies the secure configuration for the gateway server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**front\_end** | [**ServerSslFrontEnd**](ServerSslFrontEnd.md) |  | [optional] 
**applications** | [**ServerSslApplications**](ServerSslApplications.md) |  | [optional] 
**ciphers** | **list[str]** | Specifies the ciphers and cipher suites which will be permitted for all secure communications.| [optional] 
**trust\_certificates** | **list[str]** | PEM based signer certificates or signer certificate chains which  should be added to IAG&#39;s trust store.| [optional] 

[[Back to README]](../README.md)



