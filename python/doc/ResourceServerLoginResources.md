# ResourceServerLoginResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | This entry specifies a pattern that uniquely identifies  requests for an application&#39;s login page. The page will then be intercepted to begin the forms-login  sign-on process. The pattern provided is compared to the request URI.  | [optional] 
**form\_action** | **str** | This entry specifies a pattern that identifies which form  contained in the intercepted page is the login form. The matching is performed based on the &#39;action&#39; attribute of  the HTML &#39;&lt;form&gt;&#39; node.  | [optional] 
**service** | **str** | The name of the credential service which is used to store and retrieve credentials for this resource.  | [optional] 
**resource\_name** | **str** | The resource name which will be used when making requests to the configured credential service.  | [optional] 
**fields** | [**list[ResourceServerFields]**](ResourceServerFields.md) | This entry is a list of the form fields which are need to complete the form-based login.  | [optional] 
**response\_rules** | [**list[ResourceServerResponseRules]**](ResourceServerResponseRules.md) | A list of rules which are used to determine if the  forms-based was successful or not. These rules are  evaluated in the order they are provided here.  | [optional] 

[[Back to README]](../README.md)



