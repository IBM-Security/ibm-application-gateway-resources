# ResourceServerIdentityHeadersJwtClaims


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the claim which is to be added to the JWT.   If the name is not specified, and the claim value is  obtained from an attribute name, the name of the claim  will match the name of the attribute.   Nested objects can be specified, separating the name of each object  field with a . (dot).  If the name of a field itself  embeds a dot it should be escaped with a backslach  character.  | [optional] 
**text** | [**OneOfstringarray**](OneOfstringarray.md) | The literal text to be used as the claim value.  If both a &#39;text&#39; value and an &#39;attr&#39; value is specified the  &#39;text&#39; value will be used.  If an array is supplied in  the configuration the claim will be added to the JWT as a JSON array.  | [optional] 
**type** | **str** | The type of textual data which is being provided.  This will control the JSON type which is used in the JWT. Please note that this field is only valid if a &#39;text&#39;  value has been specified and will be ignored if an &#39;attr&#39; value is specified.  | [optional] [default to 'string']
**attr** | **str** | The name of the credential attribute from which the claim value will be obtained.  The &#39;*&#39; and &#39;?&#39; pattern matching characters can be used to match multiple attributes,  however the pattern matching characters will be ignored  if a claim &#39;name&#39; is specified.  If both a &#39;text&#39; value  and an &#39;attr&#39; value is specified the &#39;text&#39; value will  be used.  | [optional] 

[[Back to README]](../README.md)



