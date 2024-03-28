# ServerSessionRedisConcurrentSessions

## Description

Specifies the configuration information associated with the tracking and management of concurrent user sessions.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Is concurrent user session tracking and management enabled?  | [optional] [default to True]
**prompt_for_displacement** | **bool** | If enabled the gateway will prompt users before automatically displacing existing sessions with the same user identity.  If disabled the gateway will automatically log out the existing user session.  | [optional] [default to True]
**max_user_sessions** | **float** | The maximum number of concurrent sessions which are allowed for a single user.  A value of &#x60;0&#x60; indicates that an unlimited number of sessions are allowed, and a value of &#x60;-1&#x60; indicates that only a single session is allowed for the user and that any existing sessions will be displaced by the new session.  The maximum number of user sessions for a particular session can also be defined using the &#x60;tagvalue_max_concurrent_web_sessions&#x60; attribute of the credential.  | [optional] [default to 0]
**user_identity_attribute_name** | **str** | The name of the credential attribute which holds the unique user identity for the session.  If the configured attribute does not exist in the credential the default user identity of &#x60;unknown&#x60; will be used.  | [optional] [default to 'AZN_CRED_PRINCIPAL_NAME']

[[Back to README]](../README.md)



