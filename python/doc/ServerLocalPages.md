# ServerLocalPages

## Description

Defines static assets which are served from the default '/' path of the reverse proxy. This entry must be either a zip file or a path  which is relative to the '/var/iag/config' directory of the container. The provided contents will completely replace the default set of  pages served from the '/' path of the IAG.
### Defaults
If no value is specified here, the default set of pages will be used. The default set of pages, 'local_pages.zip', can be downloaded from GitHub (https://github.com/IBM-Security/ibm-application-gateway-resources/tree/master/pages) and used as a starting point for creating custom pages.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content which will be used for the local web space.  The content can either be the name of a directory, relative to the &#39;/var/iag/config&#39; directory of the container, or a zip file.  | [optional] 
**type** | **str** | The type of content which is being supplied.  Either a zip file or a directory name.  | [optional] 

[[Back to README]](../README.md)



