# ResourceServerCookies

## Description

Specifies the configuration information associated with the processing of cookies from the resource server.

Example:
resource_servers:
  - path: "/example"
    # ...
    cookies:
      junction_cookie:
        position: inhead
        version: onfocus
        ensure_unique: true
        preserve_name: true


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**junction\_cookie** | [**ResourceServerCookiesJunctionCookie**](ResourceServerCookiesJunctionCookie.md) |  | [optional] 

[[Back to README]](../README.md)



