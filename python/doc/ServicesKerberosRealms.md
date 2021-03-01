# ServicesKerberosRealms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the Kerberos Realm being configured.  | [optional] 
**kdc** | **str** | The name or address of a host running a KDC for that realm. An optional port number, separated  from the hostname by a colon, may be included.  | [optional] 
**properties** | [**list[ServicesKerberosProperties]**](ServicesKerberosProperties.md) | Advanced additional properties to be added to the Realm configuration. These properties correspond to the properties in the [realms] &lt;realm name&gt; section of krb5.conf.  | [optional] 
**hostname** | **str** | The hostname for this realm.  | [optional] 

[[Back to README]](../README.md)



