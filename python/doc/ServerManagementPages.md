# ServerManagementPages

## Description

This entry overloads the server generated management response pages.
This entry must be either a zip file or a path which is relative to the `/var/iag/config` directory of the container.
The provided contents will completely replace the default set of management pages served by the IAG.

The pages which are provided should conform to the directory structure and file name syntax explained below.
The directory structure is:

`<language_code>/<page_name>.<response_code>.<mime_type>`

#### language_code

`<language_code>` is a directory containing all the pages which will be presented to clients which prefer that language.
If you do not wish to ever return pages to clients in a specific language, the corresponding language_code directory can be omitted.
The reverse proxy will use the container language (set via the `LANG` environment variable) if a page is requested in a language which is not provided.

For example, to only ever return management pages in English and French, include only the `C` and `fr` directories in the zip file and run the container with `LANG=C`.
When a language other than English or French is requested, the page will fall back to `LANG` and be returned in English.

| `language_code` | Language              |
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

#### page_name

`<page_name>` corresponds to the specific event which the page is returned for.
The list of valid page_names are:

| `page_name`           |
|-----------------------|
| help                  |
| login_success         |
| logout                |
| oidc_fragment         |
| ratelimit             |
| redirect              |
| temp_cache_response |

#### response_code

`<response_code>` can be used to control the HTTP status code which the reverse proxy presents when it serves the page.
This part of filename is optional and 200 will be used if no response_code is indicated.

#### mime_type

`<mime_type>` corresponds to the mime sub-type which this page will be returned for.
For example, if a client request contains the `accept` header `text/html`, `html` is the mime sub-type and should be used for the file extension.
If an `accept` header is not present, the reverse proxy will also consider the `content-type` header.

#### Examples

For example, to customise:

- the `ratelimit` management response
- for English language
- to return HTTP status 500
- for clients expecting `text/html`

Create the following file in the zip file of management response pages:

`C/ratelimit.500.html`

#### Defaults

If no value is specified here, the default set of pages will be used.
The default set of pages, `management_pages.zip`, can be downloaded from GitHub (https://github.com/IBM-Security/ibm-application-gateway-resources/tree/master/pages) and used as a starting point for creating custom management pages.


Example:

server:
  management_pages:
    content: "@mgmtPages.zip"
    type: zip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content which will be used for the management pages.  The content can either be the name of a directory, relative to the &#x60;/var/iag/config&#x60; directory of the container, or a zip file.  | [optional] 
**type** | **str** | The type of content which is being supplied.  Either a zip file or a directory name.  | [optional] 

[[Back to README]](../README.md)



