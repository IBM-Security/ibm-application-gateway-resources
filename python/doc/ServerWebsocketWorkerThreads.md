# ServerWebsocketWorkerThreads

## Description

The number of available WebSocket worker threads.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **float** | The maximum number of threads which will be used used to proxy  WebSocket connections through the gateway. A value of zero will cause WebSockets to be blocked. Each WebSocket connection will require two worker threads. If more than the max value are in use, the daemon will immediately close the WebSocket even if the  WebSocket upgrade request to the application succeeded. The  WebSocket threads operate independently from the server:worker\_threads entry.  | [optional] [default to 0]
**idle** | **float** | To avoid the overhead of starting and stopping web socket worker threads a number of threads can be left running idle. This will consume memory resources to keep them alive and idle when not in use, but will save CPU and thread start-up time when a new web socket requires threads. This option specifies the maximum count of cached idle worker threads. A value of zero will disable the caching of idle threads.  | [optional] [default to 0]

[[Back to README]](../README.md)



