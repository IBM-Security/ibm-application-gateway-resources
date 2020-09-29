# ResourceServerIdentityHeadersLtpa

## Description

Specifies the information associated with the generation of an LTPA token.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key which is used to protect the LTPA token.  This key must be in the correct proprietary format for an LTPA key.  | [optional] 
**key\_password** | **str** | The password which is used to access the LTPA key.  | [optional] 
**version** | **float** | The version of the LTPA token to create.  Valid versions are 1 or 2, with a default of 1.  | [optional] [default to 1]

[[Back to README]](../README.md)



