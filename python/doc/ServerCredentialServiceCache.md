# ServerCredentialServiceCache

## Description

Specifies the configuration for the credential service cache. When the cache is enabled, IAG will cache the encrypted credentials received from the external credential service. If the cache is not enabled, IAG will request credentials from the credential service for every request requiring single sign-on.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_enabled** | **bool** | A boolean to indicate whether the credential service cache is enabled or not.  | [optional] [default to False]
**cache_size** | **float** | The cache size, the number of entries which will be cached.  | [optional] [default to 1024]
**entry_lifetime** | **float** | The entry lifetime, the maximum number of seconds entries will be cached for, regardless of whether they are being used or not.  | [optional] [default to 900]
**entry_idle_timeout** | **float** | The entry idle timeout, the number of seconds a cache entry which is not being used will remain cached for.  | [optional] [default to 900]
**login_clear_user** | **bool** | If set to true, on successful authentication any existing cached credentials for the authenticating user will be cleared.  | [optional] [default to False]

[[Back to README]](../README.md)



