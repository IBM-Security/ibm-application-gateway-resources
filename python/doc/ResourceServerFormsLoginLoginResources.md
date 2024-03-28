# ResourceServerFormsLoginLoginResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | This entry specifies a pattern that uniquely identifies requests for an application&#39;s login page. The page will then be intercepted to begin the forms-login sign-on process. The pattern provided is compared to the request URI.  | [optional] 
**form_action** | **str** | This entry specifies a pattern that identifies which form contained in the intercepted page is the login form. The matching is performed based on the &#x60;action&#x60; attribute of the HTML &#x60;&lt;form&gt;&#x60; node.  | [optional] 
**form_response_pattern** | **str** | This optional entry specifies a pattern which is used to determine if the page contains the login form or not. If the page content does not include this pattern, it will be returned to the client. By default, the gateway will only examine the first 32,768 bytes of the response for the pattern. Because the pattern is checked against the entire cached response it will usually start and end with a &#39;*&#39;.  | [optional] 
**service** | **str** | The name of the credential service which is used to store and retrieve credentials for this resource.  | [optional] 
**resource_name** | **str** | The resource name which will be used when making requests to the configured credential service.  | [optional] 
**fields** | [**list[ResourceServerFormsLoginFields]**](ResourceServerFormsLoginFields.md) | This entry is a list of the form fields which are need to complete the form-based login.  | [optional] 
**response_rules** | [**list[ResourceServerFormsLoginResponseRules]**](ResourceServerFormsLoginResponseRules.md) | A list of rules which are used to determine if the forms-based was successful or not. These rules are evaluated in the order they are provided here.  | [optional] 

[[Back to README]](../README.md)



