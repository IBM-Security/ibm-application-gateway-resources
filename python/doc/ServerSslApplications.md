# ServerSslApplications

## Description

Enables or disables the TLS protocols that are used for communication between the gateway daemon and the protected application.

Example:
server:
  ssl:
    applications:
      tlsv13: true


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tlsv10** | **bool** | A boolean which indicates whether or not TLS v1.0 is enabled.  | [optional] [default to False]
**tlsv11** | **bool** | A boolean which indicates whether or not TLS v1.1 is enabled.  | [optional] [default to False]
**tlsv12** | **bool** | A boolean which indicates whether or not TLS v1.2 is enabled.  | [optional] [default to True]
**tlsv13** | **bool** | A boolean which indicates whether or not TLS v1.3 is enabled.  | [optional] [default to False]

[[Back to README]](../README.md)



