# ServerWebsocket

## Description

Specifies the configuration for WebSocket support.

Example:
server:
  websocket:
    worker_threads:
      max: 100
      idle: 0
    timeouts:
      applications:
        read: 30
        write: 30
      front_end:
        read: 30
        write: 30


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worker\_threads** | [**ServerWebsocketWorkerThreads**](ServerWebsocketWorkerThreads.md) |  | [optional] 
**timeouts** | [**ServerWebsocketTimeouts**](ServerWebsocketTimeouts.md) |  | [optional] 

[[Back to README]](../README.md)



