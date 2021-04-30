# ResourceServerIdentityHeadersJwtClaims


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the claim which is to be added to the JWT. If the name is not specified, and the claim value is obtained from an attribute name, the name of the claim will match the name of the attribute.   Nested objects can be specified, separating the name of each object field with a . (dot).  If the name of a field itself embeds a dot it should be escaped with a backslash character.  | [optional] 
**text** | [**OneOfstringarray**](OneOfstringarray.md) | The literal text to be used as the claim value.  If both a &#x60;text&#x60; value and an &#x60;attr&#x60; value is specified the &#x60;text&#x60; value will be used.  If an array is supplied in the configuration the claim will be added to the JWT as a JSON array.  | [optional] 
**type** | **str** | The type of textual data which is being provided.  This will control the JSON type which is used in the JWT. Please note that this field is only valid if a &#x60;text&#x60; value has been specified and will be ignored if an &#x60;attr&#x60; value is specified.  | [optional] [default to 'string']
**attr** | **str** | The name of the credential attribute from which the claim value will be obtained.  The &#x60;*&#x60; and &#x60;?&#x60; pattern matching characters can be used to match multiple attributes, however the pattern matching characters will be ignored if a claim &#x60;name&#x60; is specified.  If both a &#x60;text&#x60; value and an &#x60;attr&#x60; value is specified the &#x60;text&#x60; value will be used.  | [optional] 

[[Back to README]](../README.md)



