# ServerLocalApplicationsJwks

## Description

Specifies the configuration information related to the embedded jwks application. The jwks application returns the public keys contained in the key database used for junction communication. The response data will conform to RFC 7517.

Example:
server:
  local_applications:
    jwks:
      path_segment: jwks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path\_segment** | **str** | The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a &#x60;/&#x60; character).  | [optional] 

[[Back to README]](../README.md)



