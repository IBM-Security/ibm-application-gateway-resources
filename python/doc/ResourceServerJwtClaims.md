# ResourceServerJwtClaims


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the claim which is to be added to the JWT.  If the name is not specified, and the claim value is obtained from an attribute name, the name of the claim will match the name of the attribute.  | [optional] 
**text** | **str** | The literal text to be used as the claim value.  If both a &#39;text&#39; value and an &#39;attr&#39; value is specified the &#39;text&#39;  value will be used.  | [optional] 
**attr** | **str** | The name of the credential attribute from which the claim value will be obtained.  The &#39;*&#39; and &#39;?&#39; pattern matching characters can be used to match multiple attributes, however the pattern matching characters will be ignored if a claim &#39;name&#39; is specified.  If both a &#39;text&#39; value and an &#39;attr&#39; value is specified the &#39;text&#39; value will be used.  | [optional] 

[[Back to README]](../README.md)



