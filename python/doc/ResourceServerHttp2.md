# ResourceServerHttp2

## Description

Specifies the information associated with the HTTP2 configuration of the resource server.

Example:
resource_servers:
  - path: "/example"
    # ...
    http2:
    enabled: true
    sni: www.test.com


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | A boolean flag indicating whether or not to use HTTP/2 when making requests by the reverse proxy to the resource server.  | [optional] [default to False]
**sni** | **str** | The Server Name Indicator the reverse proxy will indicate to the resource server when communicating using HTTP/2.  | [optional] 

[[Back to README]](../README.md)



