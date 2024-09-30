# PoliciesWafRules

## Description

Defines the rule files for the ModSecurity engine. This entry must  be either a zip file or a path which is relative to the  `/var/iag/config` directory of the container. The specified  location must contain at least one file. Files with a `.conf`  suffix will be treated as configuration files, other files will be treated as data files.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content which will be used as rules for the ModSecurity  engine.  | [optional] 
**type** | **str** | The type of content which is being supplied.  Either a zip  file or a directory name.  | [optional] 

[[Back to README]](../README.md)



