# ResourceServerIdentityHeadersKerberosUserIdentity

## Description

Configures the UPN used by the gateway when performing Kerberos constrained delegation.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | An administrator can overwrite the UPN or sections of the UPN for Kerberos constrained delegation users with this entry. The replacement information can be either plain text or names of credential attributes that store the required information. If you specify plain text, the text is directly copied into the UPN sections. If you specify names of credential attributes by surrounding the text with braces eg. &#x60;{preferred_username}&#x60;, the replacement text is fetched from the value of the corresponding credential attribute.  | [optional] 
**realm** | **str** | The realm to append to the client credential for Kerberos constrained delegation. The realm value must be uppercase. Any input data that is not uppercase is automatically converted to uppercase. The realm must also be added as a realm to the Kerberos configuration in the Services module.  | [optional] 

[[Back to README]](../README.md)



