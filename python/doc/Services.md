# Services

## Description

The `services` node defines services within the Application Gateway configuration.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | [**list[ServicesCredential]**](ServicesCredential.md) | This configuration is used to describe an external credential service which IAG can use to retrieve credentials for use in single sign-on to protected applications. Each credential service must contain:   * name   * enc_key   * host   * url_pattern   * user_attribute  This entry is an array and can be used to specify multiple credential services.  | [optional] 
**kerberos** | [**ServicesKerberos**](ServicesKerberos.md) |  | [optional] 
**redis** | [**ServicesRedis**](ServicesRedis.md) |  | [optional] 

[[Back to README]](../README.md)



