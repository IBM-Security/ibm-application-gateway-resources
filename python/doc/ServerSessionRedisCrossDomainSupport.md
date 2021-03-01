# ServerSessionRedisCrossDomainSupport

## Description

Specifies the configuration information associated with  the sharing of sessions across multiple DNS domains.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master\_authn\_server\_url** | **str** | The base URL of the master authentication server for  this collection of Redis servers.  The master  authentication server, if specified, will be  responsible for the generation of all new sessions  for this collection.  The entry  should be of the format: http{s}://server{:port}.  | [optional] 
**master\_session\_code\_lifetime** | **float** | The maximum number of seconds that a session code,  used when communicating the session information from  the master authentication server, will remain valid.  | [optional] [default to 30]

[[Back to README]](../README.md)



