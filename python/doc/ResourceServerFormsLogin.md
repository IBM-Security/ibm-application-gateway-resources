# ResourceServerFormsLogin


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential\_learning** | **bool** | A boolean flag indicating whether or not credential learning is  enabled for this resource server. If credential learning is  enabled, when IAG is unable to automatically complete the forms login but observes a successful manual login, the credentials  used will be encrypted and stored in the credential service for future use.  | [optional] [default to False]
**login\_resources** | [**list[ResourceServerLoginResources]**](ResourceServerLoginResources.md) | This entry is a list of login resources which each contain  configuration for each forms-based login page.  | [optional] 

[[Back to README]](../README.md)



