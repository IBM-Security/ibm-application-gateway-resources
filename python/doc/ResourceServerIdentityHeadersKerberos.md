# ResourceServerIdentityHeadersKerberos

## Description

Specifies the information associated with Kerberos tokens. Note that the instance
level 'services/kerberos' entry must be configured before enabling Kerberos tokens
for any resource server.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource\_spn** | **str** | The the service principal name of the target when requesting a Kerberos token.  The service principal name can be determined by executing the Microsoft utility  &#39;setspn&#39; (that is, &#39;setspn -L user&#39;, where &#39;user&#39; is the identity of the back-end  web servers account).  | [optional] 
**always\_send\_tokens** | **bool** | Indicates whether IAG sends a security token for every HTTP request or whether  IAG waits for a 401 response before it adds the security token.  | [optional] [default to False]
**user\_identity** | [**ResourceServerIdentityHeadersKerberosUserIdentity**](ResourceServerIdentityHeadersKerberosUserIdentity.md) |  | [optional] 

[[Back to README]](../README.md)



