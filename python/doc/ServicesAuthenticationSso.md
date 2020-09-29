# ServicesAuthenticationSso

## Description

Uses the OAuth client credential flow to retrieve an access token to use when communicating with to the credential  service.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The endpoint which will be called to obtain an access  token which is used in requests to the credential service.  The endpoint should conform to the OAuth client  credential flow (OAuth 2.0 RFC 6749, section 4.4).  | [optional] 
**client\_id** | **str** | The client identifier to use during the OAuth client  credential flow.  | [optional] 
**client\_secret** | **str** | The client identifier to use during the OAuth client  credential flow.  | [optional] 
**payload** | **str** | Specifies how the client id and secret will be posted  to the authentication endpoint.   - If this value is &#39;form&#39;, the client id and secret      will be included in forms POST data.   - If this value is &#39;basic&#39;, a basic authentication      header will be constructed using the client id and      secret.  | [optional] [default to 'basic']

[[Back to README]](../README.md)



