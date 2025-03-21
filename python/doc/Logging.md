# Logging

## Description

The `logging` node defines the configuration entries which are used to manage the various logging capabilities of the IBM Application Gateway.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Specifies the language in which the log messages will be displayed. The LANG environment variable, if set, will take precedence over this configuration entry.  The following languages are supported: Language Code | Language ------------- | -------- cs | Czech de | German en | English es | Spanish fr | French hu | Hungarian it | Italian ja | Japanese ko | Korean pl | Polish pt | Brazilian Portuguese ru | Russian zh_CN | Chinese (Simplified) zh_TW | Chinese (Traditional)  | [optional] [default to 'en']
**json_logging** | **bool** | A boolean which indicates whether the logging will be in JSON format or not. If not specified logging will not be in JSON format.  | [optional] [default to False]
**components** | **list[str]** | Specifies an array of auditing components to be enabled.  | [optional] 
**request_log** | [**LoggingRequestLog**](LoggingRequestLog.md) |  | [optional] 
**tracing** | [**list[LoggingTracing]**](LoggingTracing.md) | Specifies an array of trace components to be enabled. Tracing can be used to assist with problem determination in the environment.  | [optional] 
**transaction** | [**LoggingTransaction**](LoggingTransaction.md) |  | [optional] 
**statistics** | [**LoggingStatistics**](LoggingStatistics.md) |  | [optional] 

[[Back to README]](../README.md)



