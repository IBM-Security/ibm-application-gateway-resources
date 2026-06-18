# ServerCaching

## Description

Specifies configuration parameters for tuning request caching behavior.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_request_bytes** | **float** | The maximum amount of data cached per request when a user is prompted to authenticate before a request can be fulfilled. This value should account for the maximum size of all request components including headers, cookies, and the request body.  | [optional] [default to 8192]
**max_request_body_read** | **float** | The maximum number of bytes that will be read from the body of a request.  | [optional] [default to 32768]

[[Back to README]](../README.md)



