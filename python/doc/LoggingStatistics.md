# LoggingStatistics

## Description

Configures the statistic collection and publishing capability for the gateway.  The statistics for the configured components will be  published to the specified statsd server over UDP.  Statistics can be  used to monitor the environment, or assist with problem determination  in the environment. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server** | **str** | The server on which the statsd server is listening for requests.  | [optional] 
**port** | **float** | The port on which the statsd server is listening for requests.  | [optional] [default to 8125]
**frequency** | **float** | The frequency (in seconds) that statistics are sent from the memory buffer to the statsd server.   | [optional] 
**components** | **list[str]** | Specifies an array of statistic components to be enabled.  Refer to the troubleshooting documentation for a full description of the available component names.  | [optional] 

[[Back to README]](../README.md)



