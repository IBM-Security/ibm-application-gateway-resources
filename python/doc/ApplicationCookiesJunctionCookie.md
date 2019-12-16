# ApplicationCookiesJunctionCookie

## Description

The reverse proxy can set a "junction cookie" in returned HTML  pages indicating which junction the page was served from. This  is useful for applications which dynamically generate URLs that  may not be aware or capable of generating URLs containing the  path which the reverse proxy served them from.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **str** | Controls the position in which the &lt;script&gt; block will be inserted.  | [optional] 
**version** | **str** | Controls how the cookie is set.  | [optional] 
**ensure_unique** | **bool** | Inserts the application path or host to ensure that the  cookie is unique.  | [optional] 
**preserve_name** | **bool** | When the junction cookie is enabled, non-domain cookies are  renamed AMWEBJCT!&lt;path&gt;. Set this option to true to preserve  the original name.  | [optional] 

[[Back to README]](../README.md)



