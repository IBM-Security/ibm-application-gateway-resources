# ResourceServerFormsLoginResponseRules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | A boolean to indicate whether this rule is used to detect a successful login or not. &#x60;true&#x60; indicates a successful login, &#x60;false&#x60; indicates a failed login attempt.  | [optional] 
**response_code** | **str** | The HTTP status code expected in the response for this rule.  | [optional] 
**headers** | [**list[ResourceServerFormsLoginHeaders]**](ResourceServerFormsLoginHeaders.md) | The HTTP headers expected in the response.  | [optional] 

[[Back to README]](../README.md)



