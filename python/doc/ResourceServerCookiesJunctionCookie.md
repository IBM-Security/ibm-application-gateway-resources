# ResourceServerCookiesJunctionCookie

## Description

The reverse proxy can set a "junction cookie" in returned HTML pages indicating which resource server the page was served from.
This is useful for resource servers which dynamically generate URLs that may not be aware or capable of generating URLs containing the path which the reverse proxy served them from.

### Junction Cookie Positions

**position** | Description
---------|---------
**inhead**     | The junction cookie is set in a JavaScript block within the `<head>` `</head>` tags of the page. This is required for HTML 4.01 compliance.
**trailer**    | The junction cookie is set in a JavaScript block that is appended to the end of the HTML page.
**httpheader** | The junction cookie is returned as a standard HTTP cookie in the HTTP response headers.

### Junction Cookie Versions

**version** | Description
---------|---------
**onfocus**  | The JavaScript block will contain an onfocus event handler to ensure the correct junction cookie is used in a multiple-junction/multiple-browser-window scenario.
**xhtml10**  | The inserted JavaScript block is HTML 4.01 and XHTML 1.0 compliant.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **str** | Controls the position in which the &#x60;&lt;script&gt;&#x60; block will be inserted. Refer to the  [Junction Cookie Positions](#junction-cookie-positions) table  above for an explanation of these values.  | [optional] 
**version** | **str** | Controls how the cookie is set. This option is only valid for the &#x60;inhead&#x60; and &#x60;trailer&#x60; positions. Refer to the  [Junction Cookie Versions](#junction-cookie-versions) table  above for an explanation of these values.  | [optional] 
**ensure\_unique** | **bool** | A boolean flag indicating whether or not to insert the resource server path or host to ensure that the cookie is unique.  | [optional] [default to False]
**preserve\_name** | **bool** | A boolean flag indicating whether or not to preserve the original cookie name. When set to &#x60;false&#x60;, non-domain cookies are renamed &#x60;AMWEBJCT!&lt;path&gt;&#x60;.  | [optional] [default to False]

[[Back to README]](../README.md)



