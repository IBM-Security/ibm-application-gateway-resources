# ResourceServerSslCfg

## Description

Specifies the configuration the gateway server will use when securely  communicating with the resource server. 
This configuration overrides the [Server settings](#server_ssl_applications)


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tlsv10** | **bool** | A boolean which indicates whether or not TLS v1.0 is enabled.  | [optional] 
**tlsv11** | **bool** | A boolean which indicates whether or not TLS v1.1 is enabled.  | [optional] 
**tlsv12** | **bool** | A boolean which indicates whether or not TLS v1.2 is enabled.  | [optional] 
**tlsv13** | **bool** | A boolean which indicates whether or not TLS v1.3 is enabled.  | [optional] 
**key_agreement** | **str** | Control the algorithms and parameters used in key agreement for TLSv1.2 and TLSv1.3.  If custom is specified, the &#x60;supported_groups&#x60; configuration  must specify the named groups to use in the key exchange.  For other entries, the named groups will be determined  automatically.  | [optional] 
**supported_groups** | **list[str]** | Control which named groups to allow in the TLSv1.2 and  TLSv1.3 key agreement. It is only used when &#x60;key_agreement&#x60; is set to &#x60;custom&#x60;. ### Supported Groups   - &#x60;ECDHE_X25519MLKEM768&#x60;   - &#x60;ECDHE_X25519&#x60;   - &#x60;ECDHE_SecP256r1MLKEM768&#x60;   - &#x60;ECDHE_SECP256R1&#x60;   - &#x60;ECDHE_SecP384r1MLKEM1024&#x60;   - &#x60;ECDHE_SECP384R1&#x60;   - &#x60;ECDHE_SECP521R1&#x60;   - &#x60;ECDHE_X448&#x60;   - &#x60;MLKEM768&#x60;   - &#x60;MLKEM1024&#x60; ### Supported Groups for TLSv1.3 The following groups can only be configured when TLSv1.3 is enabled:   - &#x60;ECDHE_X25519MLKEM768&#x60;   - &#x60;ECDHE_SecP256r1MLKEM768&#x60;   - &#x60;ECDHE_SecP384r1MLKEM1024&#x60;   - &#x60;MLKEM768&#x60;   - &#x60;MLKEM1024&#x60;  | [optional] 
**fips_processing** | **bool** | A boolean which indicates whether FIPS 140 certified cryptography providers should be used for communication with the protected  application.   The FIPS 140 compliance level depends on the version of the  cryptography provider in use. By default, this will be FIPS 140-3.  If version 8 of the cryptography provider is used, due to TLS 1.1  or earlier being enabled, this will be FIPS 140-2.  | [optional] 

[[Back to README]](../README.md)



