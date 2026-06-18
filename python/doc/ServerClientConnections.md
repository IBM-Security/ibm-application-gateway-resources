# ServerClientConnections

## Description

Specifies configuration parameters for tuning client connections.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connect_timeout** | **float** | Initial client connection timeout in seconds. This is the maximum time to wait for the initial connection from a client.  | [optional] [default to 120]
**persistent_timeout** | **float** | HTTP/1.1 persistent connection timeout in seconds. This only affects connections to clients, not backend systems.  | [optional] [default to 5]
**intra_request_timeout** | **float** | Intra-request timeout in seconds. This is the timeout between data received or sent for a given request, but not the first read. When this value is non-zero, it also enables timeouts on HTTP writes to clients and causes a TCP RST packet to be sent if a connection timeout occurs on non-first data I/O.  | [optional] [default to 60]

[[Back to README]](../README.md)



