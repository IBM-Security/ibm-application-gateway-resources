# ServicesSsl

## Description

SSL settings for the credential service connection.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **list[str]** | PEM based personal certificate files which will be used when communicating with the resource server.  These certificate  files should include the private key, a certificate signed  with the private key, and the signer certificate or signer  certificate chain (if required).  | [optional] 
**server\_dn** | **str** | Specifies the accepted DN of the certificate presented by the  credential service. If this entry is empty, any DN will be  accepted.  | [optional] 
**sni** | **str** | The server name (SNI) which will be indicated when  establishing a connection to the credential service. If this  entry is empty, no name will be indicated.  | [optional] 

[[Back to README]](../README.md)



