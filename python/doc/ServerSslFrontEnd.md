# ServerSslFrontEnd

## Description

Specifies the configuration the gateway server will use when securely communicating with clients. This configuration includes:

  - The certificate to be used for secure communication with clients.  If a certificate is not provided, the gateway will generate a self-signed certificate during bootstrapping.

  - The TLS protocols that are enabled for client communication.

  - Any additional server certificates which should be used for specific hosts using the `server name indication` (SNI) TLS extension.


Example:
server:
  ssl:
    front_end:
      certificate:
        - "@host.crt"
        - "@host.key"
        - "@ca.crt"
      tlsv12: true
      sni:
        - certificate:
          - "@test.crt"
          - "@test.key"
          hostname: www.test.com
        - certificate:
            - "@example.crt"
            - "@example.key"
          hostname: www.example.com
    trust_certificates:
      - "@www-dev.pem"
      - "@redis-staging-1.pem"
      - "@redis-staging-2.pem"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **list[str]** | PEM based personal certificate files which will be used when communicating with the client.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required). If a certificate is not provided, the gateway will generate a self-signed certificate during bootstrapping.  | [optional] 
**tlsv10** | **bool** | A boolean which indicates whether or not TLS v1.0 is enabled.  | [optional] [default to False]
**tlsv11** | **bool** | A boolean which indicates whether or not TLS v1.1 is enabled.  | [optional] [default to False]
**tlsv12** | **bool** | A boolean which indicates whether or not TLS v1.2 is enabled.  | [optional] [default to True]
**tlsv13** | **bool** | A boolean which indicates whether or not TLS v1.3 is enabled.  | [optional] [default to False]
**sni** | [**list[ServerSslFrontEndSni]**](ServerSslFrontEndSni.md) | Specifies a list of SNI certificate to hostname mappings for the front end.  | [optional] 

[[Back to README]](../README.md)



