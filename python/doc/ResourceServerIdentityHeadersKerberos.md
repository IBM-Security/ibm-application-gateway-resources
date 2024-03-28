# ResourceServerIdentityHeadersKerberos

## Description

Specifies the information associated with Kerberos tokens. Note that the instance level `services/kerberos` entry must be configured before enabling Kerberos tokens for any resource server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_spn** | **str** | The the service principal name of the target when requesting a Kerberos token. The service principal name can be determined by executing the Microsoft utility &#x60;setspn&#x60; (that is, &#x60;setspn -L user&#x60;, where &#x60;user&#x60; is the identity of the back-end web servers account).  | [optional] 
**always_send_tokens** | **bool** | Indicates whether IAG sends a security token for every HTTP request or whether IAG waits for a 401 response before it adds the security token.  | [optional] [default to False]
**user_identity** | [**ResourceServerIdentityHeadersKerberosUserIdentity**](ResourceServerIdentityHeadersKerberosUserIdentity.md) |  | [optional] 

[[Back to README]](../README.md)



