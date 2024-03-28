# LoggingTransaction

## Description

Defines and enables transaction logging. This logging can be used to pinpoint performance issues in the environment.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | The name of the generated log file.  If the file name is supplied without any path information the file will be written to the &#x60;/var/iag/logs&#x60; directory.  If the file name contains path information the hosting directory must be created and available before the container is started.  | [optional] 
**max_file_size** | **float** | The maximum size of the log file (in kilobytes) before it is rolled over. If not specified the file size is 262144 KB (256MB).  | [optional] [default to 262144]
**max_files** | **float** | The maximum number of files to be created, including rollover files. If not specified the max number of files is unlimited.  | [optional] [default to 1]
**compress** | **bool** | A boolean which indicates whether the generated file should be compressed. If not specified the files will not be compressed.  | [optional] [default to False]

[[Back to README]](../README.md)



