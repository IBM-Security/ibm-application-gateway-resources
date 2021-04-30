# ServicesKerberos

## Description

This configuration is used to describe a Kerberos configuration file which IAG can use to perform Kerberos Constrained Delegation as a means of authentication to a protected application.
The Kerberos service must contain:
  * keytab
  * keytab_spn
  * realms
  * libdefaults

`keytab_spn` and `keytab` must correspond to the service principal name and generated key table for a user which IAG will authenticate itself as. This user must have permission to perform delegated authentication.
This entry is an object and can be used to specify a single kerberos service.

Example:
services:
  kerberos:
    keytab: "@ibm-app-gateway.keytab"
    keytab_spn: HTTP/ibm-app-gateway@IBM.COM
    realms:
      - name: IBM.COM
        kdc: ibm.com
    libdefaults:
      properties:
        - name: default_tgs_enctypes
          value: "rc4-hmac des-cbc-md5 des-cbc-crc aes256-cts"
        - name: default_tkt_enctypes
          value: "rc4-hmac des-cbc-md5 des-cbc-crc aes256-cts"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keytab** | **str** | The Kerberos key table file which IAG will use to authenticate with the server.  | [optional] 
**keytab\_spn** | **str** | The service principal name of the impersonating user when creating a Kerberos token. The service principal name can be determined by executing the Microsoft utility &#x60;setspn&#x60; (that is, setspn -L user, where user is the identity of the IAG account).  | [optional] 
**realms** | [**list[ServicesKerberosRealms]**](ServicesKerberosRealms.md) | Realm-specific contact information and settings associated with the Microsoft Windows Server to use for performing Kerberos impersonation.  | [optional] 
**libdefaults** | [**ServicesKerberosLibdefaults**](ServicesKerberosLibdefaults.md) |  | [optional] 
**capaths** | [**list[ServicesKerberosCapaths]**](ServicesKerberosCapaths.md) | Authentication paths for non-hierarchical cross-realm.  | [optional] 

[[Back to README]](../README.md)



