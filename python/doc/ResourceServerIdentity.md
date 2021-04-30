# ResourceServerIdentity

## Description

Defines any special identity provider information for this resource server.

Example:
resource_servers:
  - path: "/example"
    # ...
    identity:
      oauth: "verify_introspection"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oauth** | **str** | The name of the OAuth introspection endpoint to use when accessing this resource server.  | [optional] 

[[Back to README]](../README.md)



