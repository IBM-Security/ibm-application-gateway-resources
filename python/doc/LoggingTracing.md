# LoggingTracing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file\_name** | **str** | The name of the generated log file.  If the file name  is supplied without any path information the file will be written to the &#39;/var/iag/logs&#39; directory.  If the file name contains path information the hosting directory must be created and available before the container is started.  | [optional] 
**component** | **str** | The name of the tracing component to be enabled. Refer to the troubleshooting documentation for the full list of component names.  | [optional] 
**level** | **float** | The level of detail to be gathered by the tracing component in the range 0 to 9. Level 1 specifies the least detailed output and level 9 specifies the most detailed output. Level 0 will disable tracing for the component.  | [optional] 

[[Back to README]](../README.md)



