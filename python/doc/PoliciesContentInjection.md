# PoliciesContentInjection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name to be associated with this content injection rule.  | [optional] 
**paths** | **list[str]** | The path for which content injection will take place. This entry is an array and can be used to specify multiple paths.  | [optional] 
**full\_line\_match** | **bool** | Should the location match a full line, or should it match any string in the response?  When a full line match is configured the content will be inserted prior to the matching line.  When a partial line match is configured the content will be inserted immediately prior to the matching string.  | [optional] [default to True]
**location** | **str** | The location where the content should be injected. If a full line match is being used the location is pattern matched against a line in the response using the &#x60;*.&#x60; wildcard characters.  The maximum length of a line which can be matched is 8192 bytes.  | [optional] 
**replace\_match** | **bool** | If a partial line match is being used this configuration entry will control whether the matching string is replaced with the supplied content, or whether the supplied content is inserted prior to the matching string.  This configuration entry will be ignored if full line matches are being used.  | [optional] [default to False]
**content** | **str** | The data which is to be injected.  | [optional] 

[[Back to README]](../README.md)



