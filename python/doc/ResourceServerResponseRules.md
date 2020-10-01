# ResourceServerResponseRules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | A boolean to indicate whether this rule is used to  detect a successful login or not. &#39;true&#39; indicates a successful login, &#39;false&#39; indicates a failed login attempt.  | [optional] 
**response\_code** | **str** | The HTTP status code expected in the response for  this rule.  | [optional] 
**headers** | [**list[ResourceServerHeaders]**](ResourceServerHeaders.md) | The HTTP headers expected in the response.  | [optional] 

[[Back to README]](../README.md)



