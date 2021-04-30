# ResourceServerHealth

## Description

Specifies the configuration which is used to establish the health of the resource server.

Example:
resource_servers:
  - path: "/example"
    # ...
    health:
      ping:
        method: HEAD
        url: /
        policy:
          frequency: 600
          threshold: 1
          recovery:
              frequency: 300
              threshold: 1
          timeout: 10
          rule:
              - -50?
              - +*
      rule:
        - -50?
        - +*


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ping** | [**ResourceServerHealthPing**](ResourceServerHealthPing.md) |  | [optional] 

[[Back to README]](../README.md)



