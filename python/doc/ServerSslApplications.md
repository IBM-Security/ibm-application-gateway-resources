# ServerSslApplications

## Description

Enables or disables the TLS protocols that are used for communication between the gateway daemon and the protected application.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tlsv10** | **bool** | A boolean which indicates whether or not TLS v1.0 is enabled.  | [optional] [default to False]
**tlsv11** | **bool** | A boolean which indicates whether or not TLS v1.1 is enabled.  | [optional] [default to False]
**tlsv12** | **bool** | A boolean which indicates whether or not TLS v1.2 is enabled.  | [optional] [default to True]
**tlsv13** | **bool** | A boolean which indicates whether or not TLS v1.3 is enabled.  | [optional] [default to True]
**key_agreement** | **str** | Control the algorithms and parameters used in key agreement for TLSv1.2 and TLSv1.3.  If custom is specified, the &#x60;supported_groups&#x60; configuration  must specify the named groups to use in the key exchange.  For other entries, the named groups will be determined  automatically.  | [optional] [default to 'hybrid-pqc-supported']
**supported_groups** | **list[str]** | Control which named groups to allow in the TLSv1.2 and  TLSv1.3 key agreement. It is only used when &#x60;key_agreement&#x60; is set to &#x60;custom&#x60;. ### Supported Groups    - &#x60;ECDHE_X25519MLKEM768&#x60;   - &#x60;ECDHE_X25519&#x60;   - &#x60;ECDHE_SecP256r1MLKEM768&#x60;   - &#x60;ECDHE_SECP256R1&#x60;   - &#x60;ECDHE_SecP384r1MLKEM1024&#x60;   - &#x60;ECDHE_SECP384R1&#x60;   - &#x60;ECDHE_SECP521R1&#x60;   - &#x60;ECDHE_X448&#x60;   - &#x60;MLKEM512&#x60;   - &#x60;MLKEM768&#x60;   - &#x60;MLKEM1024&#x60;  ### Supported Groups for TLSv1.3 The following groups can only be configured when TLSv1.3 is enabled:    - &#x60;ECDHE_X25519MLKEM768&#x60;   - &#x60;ECDHE_SecP256r1MLKEM768&#x60;   - &#x60;ECDHE_SecP384r1MLKEM1024&#x60;   - &#x60;MLKEM512&#x60;   - &#x60;MLKEM768&#x60;   - &#x60;MLKEM1024&#x60;  | [optional] 

[[Back to README]](../README.md)



