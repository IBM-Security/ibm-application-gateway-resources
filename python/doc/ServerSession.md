# ServerSession

## Description

Specifies the configuration for client sessions.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie_name** | **str** | The name of the session cookie presented to clients.  | [optional] [default to 'PD-S-SESSION-ID']
**max_sessions** | **float** | The maximum number of concurrent sessions.  | [optional] [default to 4096]
**timeout** | **float** | The maximum lifetime (in seconds) for a session. If set to &#x60;0&#x60; the sessions will not have a maximum lifetime, however once &#x60;max_sessions&#x60; is reached sessions will be reaped using a least recently used algorithm.  | [optional] [default to 3600]
**inactive_timeout** | **float** | The maximum lifetime (in seconds) a session can remain inactive before it is expired. If set to &#x60;0&#x60; the sessions will not have a maximum inactive lifetime.  | [optional] [default to 600]
**permit_user_switching** | **bool** | During an obligated re-authentication, depending on the policy and identity provider a different user credential may be returned to the application gateway. By default, the application gateway will not accept a credential if the user name does not match the user which the session was originally established for. Use this entry to change the behaviour and allow the application gateway to accept a credential containing a different user name during re-authentication.  | [optional] [default to False]
**redis** | [**ServerSessionRedis**](ServerSessionRedis.md) |  | [optional] 
**reauth** | [**ServerSessionReauth**](ServerSessionReauth.md) |  | [optional] 

[[Back to README]](../README.md)



