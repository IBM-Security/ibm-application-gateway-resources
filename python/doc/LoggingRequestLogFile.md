# LoggingRequestLogFile

## Description

By default the request log events will be written to the console of the container.  By setting the `file` configuration the request log events can instead be written to a local file.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file\_name** | **str** | The name of the generated log file.  If the file name is supplied without any path information the file will be written to the &#x60;/var/iag/logs&#x60; directory.  If the file name contains path information the hosting directory must be created and available before the container is started.  | [optional] 
**max\_file\_size** | **float** | The maximum size (in MB) that the file can reach before it is rolled over.  | [optional] [default to 1]
**max\_rollover\_files** | **float** | The maximum number of rollover files to be kept on disk.  When the number of rollover log files reaches the specified threshold, the oldest log file is deleted.  | [optional] [default to 1]
**compress** | **bool** | A boolean which indicates whether rolled over log files should be automatically compressed to conserve disk space.  | [optional] [default to True]

[[Back to README]](../README.md)



