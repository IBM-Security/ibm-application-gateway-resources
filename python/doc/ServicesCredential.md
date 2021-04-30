# ServicesCredential


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name which is associated with this credential service.  | [optional] 
**host** | **str** | The hostname of the endpoint where the credentials will be retrieved from.  | [optional] 
**port** | **str** | The port of the endpoint where the credentials will be retrieved from.  | [optional] 
**proxy** | **str** | The proxy server which will be used when connecting to the credential service. The configuration entry should be of the form: &#x60;&lt;server&gt;:&lt;port&gt;&#x60;  | [optional] 
**url\_pattern** | **str** | The path of the endpoint where the credentials will be retrieved from. This must contain the {user} and {resource} macros. When communicating with the credential service, IAG will substitute &#x60;{resource}&#x60; for the resource name provided in the configuration which refers to this credential service.  | [optional] 
**user\_attribute** | **str** | The name of the credential attribute which is used to populate the {user} macro in the URL used when communicating with the credential service.  | [optional] [default to 'AZN_PRINCIPAL_ID']
**user\_attribute\_encoding** | **str** | The type of encoding to perform on the user\_attribute for inclusion in the URL to communicate with the credential service.   - If this value is &#x60;url&#x60;, the user attribute value will be URL Encoded.   - If this value is &#x60;base64url&#x60;, the user attribute value will be converted to lower case and Base64 Encoded for URL.  | [optional] [default to 'url']
**enc\_key** | **str** | The key which will be used to encrypt and decrypt credential data. This key should be an RSA or ECDSA key for which the private and public parts are available.  | [optional] 
**ssl** | [**ServicesSsl**](ServicesSsl.md) |  | [optional] 
**authentication** | [**ServicesAuthentication**](ServicesAuthentication.md) |  | [optional] 

[[Back to README]](../README.md)



