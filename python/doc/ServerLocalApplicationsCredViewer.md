# ServerLocalApplicationsCredViewer

## Description

Specifies the configuration information related to the embedded credential viewer application.
The credential viewer application can be used to display information about the credential associated with the current user session.

### Attributes Format

The rules which define the credential attributes which will be included in the response data.
The format of the configuration entry is:

`[+|-]<attribute-name>`

where:

Element | Description
------- | -----------
+ | Indicates that this attribute should be added to the response.
- | Indicates that this attribute should not be added to the response.
&lt;attribute-name&gt; | The name of the credential attribute, which can also contain pattern matching characters (i.e. * ?).

For example the value `-AUTHENTICATION_LEVEL` indicates that the authentication level attribute should not be added to the response.
When constructing a response each credential attribute will be evaluated against each rule in sequence until a match is found.
The corresponding code (+|-) will then be used to determine whether the credential attribute will be added to the response or not.
If the attribute name does not match a configured rule it will, by default, be added to the response.
The rule could alternatively contain the name of a single credential attribute whose value is used to define the attribute rules.
In this scenario each individual rule in the attribute should be separated by a space character.
If only a single attribute-rule configuration entry is defined, and the entry does not start with a `+` or `-` character, it will be used as the name of the credential attribute which contains the attribute rules.


Example:

server:
  local_applications:
    cred_viewer:
      path_segment: credview
      enable_html: true
      attributes:
        - "-AUTHENTICATION_LEVEL"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path\_segment** | **str** | The path at which the application will be available. The path should be a simple path segment (i.e. should not contain a &#x60;/&#x60; character).  | [optional] 
**enable\_html** | **bool** | A boolean flag indicating whether or not the embedded HTML page which can render the JSON data is enabled.  | [optional] [default to True]
**attributes** | **list[str]** | The rules which define the credential attributes which will be included in the response data.  See the  [Attributes Format](#attributes-format) table for a description of the expected format.  | [optional] 

[[Back to README]](../README.md)



