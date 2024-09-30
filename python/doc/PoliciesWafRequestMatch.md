# PoliciesWafRequestMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The HTTP method for which this match should be triggered. This value can include the wildcard &#x60;*&#x60; character to match multiple methods.  | [optional] 
**path** | **str** | The HTTP path for which this match should be triggered. This value can include the wildcard &#x60;*&#x60; character to match multiple paths.  | [optional] 
**version** | **str** | The HTTP version string for which this match should be  triggered. This value can include the wildcard &#x60;*&#x60; character to match multiple versions.  | [optional] [default to '*']
**phases** | [**PoliciesWafPhases**](PoliciesWafPhases.md) |  | [optional] 

[[Back to README]](../README.md)



