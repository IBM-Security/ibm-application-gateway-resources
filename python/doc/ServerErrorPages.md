# ServerErrorPages

## Description

This entry overloads the server generated error response pages.
This entry must be either a zip file or a path which is relative to 
the '/var/iag/config' directory of the container.  The provided 
contents will completely replace the default set of error pages
served by the IAG.

The pages which are provided should conform to the directory
structure and file name syntax explained below. The directory
structure is:

'<language\_code>/<error\_code>.<response\_code>.<mime\_type>'

### language_code

'<language\_code>' is a directory containing all the pages which will be
presented to clients which prefer that language. If you do not wish to
ever return pages to clients in a specific language, the corresponding
language_code directory can be omitted. The reverse proxy will use the
container language (set via the 'LANG' environment variable) if a page
is requested in a language which is not provided.

For example, to only ever return error pages in English and French,
include only the 'C' and 'fr' directories in the zip file and run the
container with 'LANG=C'. When a language other than English or French
is requested, the page will fall back to 'LANG' and be returned in
English.

| 'language_code' | Language              |
|-----------------|-----------------------|
| pt              | Brazilian Portuguese  |
| cs              | Czech                 |
| zh_CN           | Chinese (Simplified)  |
| zh_TW           | Chinese (Traditional) |
| C               | English               |
| fr              | French                |
| de              | German                |
| hu              | Hungarian             |
| it              | Italian               |
| ja              | Japanese              |
| ko              | Korean                |
| pl              | Polish                |
| es              | Spanish               |
| ru              | Russian               |

### error_code

'<error\_code>' corresponds to a specific error code in hexadecimal
format. The special error code of 'default' can also be used to
configure a default page which is used for any error codes which do
not have a specific page.

### response_code

'<response\_code>' can be used to control the HTTP status code which
the reverse proxy presents when it serves the page. This part of
filename is optional and the default value will be used if no
response_code is indicated.

| 'error_code' | Default 'response_code' | Description             |
|--------------|-------------------------|-------------------------|
| 38cf0420     | 301                     | Moved Permanently       |
| 38cf0421     | 302                     | Moved Temporarily       |
| 38cf0427     | 403                     | Forbidden               |
| 38cf0428     | 404                     | Not Found               |
| 38cf04c6     | 500                     | Server Not Responding   |
| 38cf04d7     | 500                     | Server Not Responding   |
| 38cf08cc     | 403                     | Forbidden (Time based)  |
| default      | 400                     | Any other error code    |

### mime_type

'<mime\_type>' corresponds to the mime sub-type which this page will be
returned for. For example, if a client request contains the 'accept'
header 'text/html', 'html' is the mime sub-type and should be used
for the file extension. If an 'accept' header is not present, the
reverse proxy will also consider the 'content-type' header.

### Examples

For example, to customise:

- the 'forbidden' error response (error code '38cf0427')
- for Korean language
- to return HTTP status 500
- for clients expecting 'application/json'

Create the following file in the zip file of error response pages:

'ko/38cf0427.500.json'

### Defaults

If no value is specified here, the default set of pages will be used.
The default set of pages, 'error_pages.zip', can be downloaded from GitHub 
(https://github.com/IBM-Security/ibm-application-gateway-resources/tree/master/pages) 
and used as a starting point for creating custom error pages.



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content which will be used for the error pages.  The content can either be the name of a directory, relative to the &#39;/var/iag/config&#39; directory of the container, or a zip file.  | [optional] 
**type** | **str** | The type of content which is being supplied.  Either a zip file or a directory name.  | [optional] 

[[Back to README]](../README.md)



