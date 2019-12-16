# ApplicationContentInjection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A name to be associated with this content injection rule.  | [optional] 
**url** | **str** | The URL for which content injection will take place.  | [optional] 
**location** | **str** | The location where the content should be injected. The  location is pattern matched against a line in the response  using the &#39;*.&#39; wildcard characters.  The maximum length of  a line which can be matched by this mechanism is 8192 bytes.  | [optional] 
**content** | **str** | The data which is to be injected.  | [optional] 

[[Back to README]](../README.md)



