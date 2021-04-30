# ServerSessionRedisSsl

## Description

The SSL information associated with the Redis server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust\_certificates** | **list[str]** | The PEM based certificates which are to be trusted when communicating with the Redis server.  The trusted certificates should include the CA certificate for the Redis server certificate, as well as any intermediate certificates used to sign the client certificate (if mutual authentication is in use).  SSL/TLS will not be used when communicating with the Redis server if no trust certificates are specified.  | [optional] 
**client\_certificate** | **list[str]** | The PEM based personal certificate files which will be used when performing mutual authentication with the resource server.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).  | [optional] 
**sni** | **str** | The Server Name Indication (SNI) value which is provided when establishing the SSL connection with the Redis server.  | [optional] 

[[Back to README]](../README.md)



