# ServerSession

## Description

Specifies the configuration for client sessions. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie\_name** | **str** | The name of the session cookie presented to clients.  | [optional] 
**max\_sessions** | **float** | The maximum number of concurrent sessions.  | [optional] [default to 4096]
**timeout** | **float** | The maximum lifetime (in seconds) for a session. If set to 0 the sessions will not have a maximum lifetime, however once max\_sessions is reached sessions will be reaped using a least recently used algorithm.  | [optional] [default to 3600]
**inactive\_timeout** | **float** | The maximum lifetime (in seconds) a session can remain inactive before it is expired. If set to 0 the sessions will not have a maximum inactive lifetime.  | [optional] [default to 600]

[[Back to README]](../README.md)



