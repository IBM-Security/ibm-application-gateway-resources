# ServerWebsocketTimeoutsApplications

## Description

Specifies the web socket timeouts for connections between the gateway daemon and protected applications (in seconds). If the timeout is reached the web socket connection will be closed.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read** | **float** | The maximum length of time (in seconds) to wait on a read operation to complete.  | [optional] [default to 120]
**write** | **float** | The maximum length of time (in seconds) to wait on a write operation to complete.  | [optional] [default to 120]

[[Back to README]](../README.md)



