# IdentityAuthCompleteRedirectParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The source the value should be taken from.  | [optional] 
**value** | **str** | The name of the macro, HTTP header or credential attribute the value will be taken from. When using the &#x60;macro&#x60; type source, valid values are:    - &#x60;USERNAME&#x60;   - &#x60;URL&#x60;   - &#x60;HOSTNAME&#x60;   - &#x60;PROTOCOL&#x60;  | [optional] 
**name** | **str** | The name which should be used to name the parameter inserted into the redirect URL. If this value is not specified, the parameter will be named accordingly:    - For &#x60;macro&#x60; sources, the name will be used verbatim.   - For &#x60;header&#x60; sources, the name will be of the format &#x60;HTTPHDR\_&lt;name&gt;&#x60;   - For &#x60;credential&#x60; sources, the name will be of the format &#x60;CREDATTR\_&lt;name&gt;&#x60;  | [optional] 

[[Back to README]](../README.md)



