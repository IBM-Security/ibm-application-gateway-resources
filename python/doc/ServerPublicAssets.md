# ServerPublicAssets

## Description

This entry overloads the default assets used in server generated error and management response pages.
These assets are served by the application gateway on the configured path segment (default `pkmspublic`) and are suitable for embedding in server generated responses such as error or management pages.


#### Defaults

If no value is specified here, the default set of assets will be used.
The default set of assets, used by the default error and management pages, `public_assets.zip`, can be downloaded from GitHub (https://github.com/IBM-Security/ibm-application-gateway-resources/tree/master/pages).


Example:

server:
  public_assets:
    content: "@publicAssets.zip"
    type: zip
    path_segment: public


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content which will be used for the public assets.  The content can either be the name of a directory, relative to the &#x60;/var/iag/config&#x60; directory of the container, or a zip file.  | [optional] 
**type** | **str** | The type of content which is being supplied.  Either a zip file or a directory name.  | [optional] 
**path\_segment** | **str** | The path which the assets will be available from. By default, this is &#x60;pkmspublic&#x60;.  | [optional] [default to 'pkmspublic']

[[Back to README]](../README.md)



