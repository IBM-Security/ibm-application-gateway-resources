# Policies

## Description

The `policies` node defines the configuration of path based policies for the IBM Application Gateway.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_transformations** | [**PoliciesHttpTransformations**](PoliciesHttpTransformations.md) |  | [optional] 
**cors** | [**list[PoliciesCors]**](PoliciesCors.md) | The reverse proxy can support cross-origin resource sharing with CORS aware clients. Each defined policy must at a minimum contain:   * name   * method   * policy:allow_origins  This entry is an array and can be used to specify multiple CORS policies.  | [optional] 
**rate_limiting** | [**list[PoliciesRateLimiting]**](PoliciesRateLimiting.md) | The gateway can apply rate limiting to incoming requests. This entry defines the rate limiting policies and where they will be applied. Refer to the documentation for information about how to author a rate-limiting policy. This entry is an array and can be used to define multiple policies.  | [optional] 
**content_injection** | [**list[PoliciesContentInjection]**](PoliciesContentInjection.md) | The gateway can inject content into responses. This entry defines the content and when injection should take place. Content injection is performed based on the request path and a specific location within the response. This entry is an array and can define multiple content injection points.  | [optional] 
**authorization** | [**list[PoliciesAuthorization]**](PoliciesAuthorization.md) | The gateway can apply authorization rules to incoming requests. This entry defines a list of matching requests, rules and actions to perform if matches are found. The rules can be either:   * Defined directly here in an entry.   * Defined in the authorization section and reference by name here in an entry.  This entry defines authorization rules directly. There are also two pre-defined rules which can be used:   * \&quot;anyuser\&quot; : Which allows access to any user, even if they are not authenticated.   * \&quot;anyauth\&quot; : Which allows access to any authenticated user.  | [optional] 
**waf** | [**PoliciesWaf**](PoliciesWaf.md) |  | [optional] 

[[Back to README]](../README.md)



