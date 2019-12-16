# LoggingStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file\_name** | **str** | The full path name of the generated log file.  | [optional] 
**component** | **str** | The name of the statistical component to be enabled. Refer to the troubleshooting documentation for the full list of component names.  | [optional] 
**count** | **float** | The number of reports sent to the log file. After the count value is reached, reporting to a log file stops. However, the statistic component is still enabled. If the interval value is not set or is set to 0 the count will have no effect. If the interval value is set and count is not set, statistics information will be sent to the log file at the interval indefinitely.  | [optional] 
**interval** | **float** | The time interval (in seconds) when statistics are sent from the memory buffer to the log file. If the interval is not set or is set to 0, no statistics are sent to the log file. However, the statistic component is still enabled. If interval is set and count value is not set, statistics information will be sent to the log file at the interval indefinitely.  | [optional] 

[[Back to README]](../README.md)



