# Eai

## Description

External Authentication Interface, which allows an application to assert client identity information to the IBM Application Gateway container.
Please note that an access policy which allows unauthenticated access to this resource must be created. The URL string patterns are case-sensitive and may contain wild card patterns.

The format for a regular path-based application is: `<URL pattern>`
The format for a Virtual Host application is: `http[s]://virtual-host-name[:port]/<URL pattern>`
For Virtual Host applications to match a trigger they must also have the same protocol (http[s] = TCP/SSL) and have the same `virtual-host-name` and `port` as the trigger.
Example:
identity:
  eai:
    triggers:
      # Path-based application
      - /auth_app/login_complete
      - /auth_app/login_complete_v2
      # Virtual Host application
      - https://auth.ibm.com:9443/eai/login
      - https://auth.ibm.com:9443/eai/login_v2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggers** | **list[str]** | The list of URLs for which the response could potentially contain authentication information.  | [optional] 

[[Back to README]](../README.md)



