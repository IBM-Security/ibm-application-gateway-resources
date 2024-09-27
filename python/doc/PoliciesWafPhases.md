# PoliciesWafPhases

## Description

The phases of the request cycle for which this match should be triggered. The default is to trigger at each phase of the  request cycle.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_headers** | **bool** | Whether or not to run the WAF rules after the HTTP request  headers have been received.  | [optional] [default to True]
**request_body** | **bool** | Whether or not to run the WAF rules after the HTTP request body has been received.  | [optional] [default to True]
**response_headers** | **bool** | Whether or not to run the WAF rules after the HTTP response headers have been received.  | [optional] [default to True]
**response_body** | **bool** | Whether or not to run the WAF rules after the HTTP response body has been received.  | [optional] [default to True]
**logging** | **bool** | Whether or not to run the WAF rules during the logging phase.  | [optional] [default to True]

[[Back to README]](../README.md)



