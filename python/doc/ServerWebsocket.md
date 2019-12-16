# ServerWebsocket

## Description

Specifies the configuration for Web socket support. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worker\_threads** | **float** | The number of available Web socket worker threads.  | [optional] 
**max** | **float** | The maximum number of threads which will be used used to proxy web socket connections through the gateway. A value of zero will cause web sockets to be blocked. Each web socket connection will require two worker threads. If more than the max value are in use, the daemon will immediately close the web socket even if the web socket upgrade request to the application succeeded. The web socket threads operate independently from the server:worker\_threads entry.  | [optional] [default to 0]
**idle** | **float** | To avoid the overhead of starting and stopping web socket worker threads a number of threads can be left running idle. This will consume memory resources to keep them alive and idle when not in use, but will save CPU and thread start-up time when a new web socket requires threads. This option specifies the maximum count of cached idle worker threads. A value of zero will disable the caching of idle threads.  | [optional] [default to 0]
**timeouts** | [**ServerWebsocketTimeouts**](ServerWebsocketTimeouts.md) |  | [optional] 

[[Back to README]](../README.md)



