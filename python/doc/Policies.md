# Policies

## Description

The 'policies' node defines the configuration of path based policies for the IBM Application Gateway.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http\_transformations** | [**PoliciesHttpTransformations**](PoliciesHttpTransformations.md) |  | [optional] 
**cors** | [**list[PoliciesCors]**](PoliciesCors.md) | The reverse proxy can support cross-origin resource sharing with CORS aware clients.| [optional] 
**rate\_limiting** | [**list[PoliciesRateLimiting]**](PoliciesRateLimiting.md) | The gateway can apply rate limiting to incoming requests.| [optional] 
**content\_injection** | [**list[PoliciesContentInjection]**](PoliciesContentInjection.md) | The gateway can inject content into responses.| [optional] 
**authorization** | [**list[PoliciesAuthorization]**](PoliciesAuthorization.md) | The gateway can apply authorization rules to incoming requests.| [optional] 

[[Back to README]](../README.md)



