# LoggingTransaction

## Description

Defines and enables transaction logging. This logging can be used to pinpoint performance issues in the environment. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file\_name** | **str** | The full path name of the generated log file.  | [optional] 
**max\_file\_size** | **float** | The maximum size of the log file (in bytes) before it is rolled over. If not specified the file size is unlimited.  | [optional] 
**max\_files** | **float** | The maximum number of files to be created, including rollover files. If not specified the max number of files is unlimited.  | [optional] 
**compress** | **bool** | A boolean which indicates whether the generated file should be compressed. If not specified the files will not be compressed.  | [optional] [default to False]

[[Back to README]](../README.md)



