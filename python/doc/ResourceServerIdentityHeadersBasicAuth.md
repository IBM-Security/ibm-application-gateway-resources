# ResourceServerIdentityHeadersBasicAuth

## Description

Controls the basic authentication information, contained within the Authorization header, that is passed to the resource server.
See the Basic Auth table for a description of the available  modes. 
Note that some modes require additional parameters:
- If the mode is "service", the following entries must also be
  provided: 
  - service 
  - resource_name

- If the mode is "supply", the following entry must also be 
  provided:
  - password


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The mode of handling the basic authentication headers.  | [optional] [default to 'filter']
**password** | **str** | If the mode entry is set to &#39;supply&#39; then the password must be provided here.  | [optional] 
**service** | **str** | If the mode entry is set to &#39;service&#39; then the credential service name must be provided here.  | [optional] 
**resource\_name** | **str** | Used only when mode is \"service\". The name of the resource which will be passed to the  credential service when retrieving the username/password.  | [optional] 

[[Back to README]](../README.md)



