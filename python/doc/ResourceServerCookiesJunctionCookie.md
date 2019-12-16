# ResourceServerCookiesJunctionCookie

## Description

The reverse proxy can set a "junction cookie" in returned HTML pages indicating which junction the page was served from. This is useful for resource servers which dynamically generate URLs that may not be aware or capable of generating URLs containing the path which the reverse proxy served them from.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **str** | Controls the position in which the &lt;script&gt; block will be inserted.  | [optional] 
**version** | **str** | Controls how the cookie is set.  | [optional] 
**ensure\_unique** | **bool** | A boolean flag indicating whether or not to insert the resource server path or host to ensure that the cookie is unique.  | [optional] [default to False]
**preserve\_name** | **bool** | A boolean flag indicating whether or not to preserve the original cookie name. When set to false, non-domain cookies are renamed AMWEBJCT!&lt;path&gt;.  | [optional] [default to False]

[[Back to README]](../README.md)



