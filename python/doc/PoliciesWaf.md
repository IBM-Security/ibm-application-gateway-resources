# PoliciesWaf

## Description

The gateway can act as a Web Application Firewall using the ModSecurity engine.
The Web Application Firewall policy must at a minimum contain:
  * configuration
  * rules

If there are no request_match entries defined, the WAF will only be active when the Control.triggerWAF function has been called from  within a Lua HTTP Transformation. 


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**PoliciesWafConfiguration**](PoliciesWafConfiguration.md) |  | [optional] 
**rules** | [**PoliciesWafRules**](PoliciesWafRules.md) |  | [optional] 
**request_match** | [**list[PoliciesWafRequestMatch]**](PoliciesWafRequestMatch.md) | This entry defines a list of request matches for which the Web  Application Firewall will be run. Each defined request match must contain at least:   * method   * path  | [optional] 

[[Back to README]](../README.md)



