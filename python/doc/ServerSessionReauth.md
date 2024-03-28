# ServerSessionReauth

## Description

These entries control the behaviour of the re-authentication policies.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_time_window** | **float** | Controls the amount of time a re-authentication will be  considered valid for. This is a time (in seconds) after a re-authentication occurs during which a client will not be prompted to perform re-authentication again. By default, the login_time_window is set to zero, which means that every request to a resource protected with the reauth  policy directive will require the client to perform  re-authentication.  | [optional] [default to 0]

[[Back to README]](../README.md)



