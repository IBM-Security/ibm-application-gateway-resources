# ServerLocalApplicationsAznDecision

## Description

Specifies the configuration information related to the embedded authorization decision application. The authorization decision application provides a Web service for making remote authorization decisions. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path\_segment** | **str** | The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a &#39;/&#39; character).  | [optional] 
**max\_cache\_size** | **float** | The maximum number of credentials which can be cached. If the addition of a new credential will exceed this maximum cache size a least-recently-used algorithm will be used to remove an older entry, making room for the new credential.  | [optional] [default to 8192]
**max\_cache\_lifetime** | **float** | The maximum lifetime, in seconds, of an entry in the cache.  | [optional] [default to 300]

[[Back to README]](../README.md)



