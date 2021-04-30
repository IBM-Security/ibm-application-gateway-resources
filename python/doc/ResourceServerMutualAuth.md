# ResourceServerMutualAuth

## Description

Specifies the configuration information associated with mutual authentication processing for the resource server.

Example:
resource_servers:
  - path: "/example"
    # ...
    mutual_auth:
      basic_auth:
        username: admin
        password: passw0rd
      certificate_auth:
        certificate:
          - "@cert.crt"
          - "@cert.key"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic\_auth** | [**ResourceServerMutualAuthBasicAuth**](ResourceServerMutualAuthBasicAuth.md) |  | [optional] 
**certificate\_auth** | [**ResourceServerMutualAuthCertificateAuth**](ResourceServerMutualAuthCertificateAuth.md) |  | [optional] 

[[Back to README]](../README.md)



