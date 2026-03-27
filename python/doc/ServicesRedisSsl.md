# ServicesRedisSsl

## Description

The SSL information associated with the Redis server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust_certificates** | **list[str]** | The PEM based certificates which are to be trusted when communicating with the Redis server.  The trusted certificates should include the CA certificate for the Redis server certificate, as well as any intermediate certificates used to sign the client certificate (if mutual authentication is in use).  SSL/TLS will not be used when communicating with the Redis server if no trust certificates are specified.  | [optional] 
**client_certificate** | **list[str]** | The PEM based personal certificate files which will be used when performing mutual authentication with the resource server.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).  | [optional] 
**sni** | **str** | The Server Name Indication (SNI) value which is provided when establishing the SSL connection with the Redis server.  | [optional] 
**key_agreement** | **str** | Control the algorithms and parameters used in key agreement for TLSv1.2 and TLSv1.3.  If custom is specified, the &#x60;supported_groups&#x60; configuration  must specify the named groups to use in the key exchange.  For other entries, the named groups will be determined  automatically.  | [optional] [default to 'provider-default']
**supported_groups** | **list[str]** | Control which named groups to allow in the TLSv1.2 and  TLSv1.3 key agreement. It is only used when &#x60;key_agreement&#x60; is set to &#x60;custom&#x60;. ### Supported Groups    - &#x60;ECDHE_X25519MLKEM768&#x60;   - &#x60;ECDHE_X25519&#x60;   - &#x60;ECDHE_SecP256r1MLKEM768&#x60;   - &#x60;ECDHE_SECP256R1&#x60;   - &#x60;ECDHE_SecP384r1MLKEM1024&#x60;   - &#x60;ECDHE_SECP384R1&#x60;   - &#x60;ECDHE_SECP521R1&#x60;   - &#x60;ECDHE_X448&#x60;   - &#x60;MLKEM768&#x60;   - &#x60;MLKEM1024&#x60;  ### Supported Groups for TLSv1.3 The following groups can only be configured when TLSv1.3 is enabled:    - &#x60;ECDHE_X25519MLKEM768&#x60;   - &#x60;ECDHE_SecP256r1MLKEM768&#x60;   - &#x60;ECDHE_SecP384r1MLKEM1024&#x60;   - &#x60;MLKEM768&#x60;   - &#x60;MLKEM1024&#x60;  | [optional] 

[[Back to README]](../README.md)



