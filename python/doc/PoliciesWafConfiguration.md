# PoliciesWafConfiguration

## Description

Defines configuration files for the ModSecurity engine. This entry must be either a zip file or a path which is relative to the  `/var/iag/config` directory of the container. The specified  location must contain at least one file, named `modsecurity.conf`. The `modsecurity.conf` configuration will be applied first, other configuration files (with the `.conf` suffix) will be applied in alphabetical order.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content which will be used for configuring the ModSecurity  engine.  | [optional] 
**type** | **str** | The type of content which is being supplied.  Either a zip  file or a directory name.  | [optional] 

[[Back to README]](../README.md)



