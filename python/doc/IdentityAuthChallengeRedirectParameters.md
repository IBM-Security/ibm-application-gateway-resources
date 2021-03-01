# IdentityAuthChallengeRedirectParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | The source the value should be taken from.  | [optional] 
**value** | **str** | The name of the macro, HTTP header or credential attribute the value will be taken from. When using the &#39;macro&#39; type source, valid values are:    * TAM\_OP   * USERNAME   * METHOD   * URL   * REFERER   * HOSTNAME   * PROTOCOL  | [optional] 
**name** | **str** | The name which should be used to name the parameter inserted into the redirect URL. If this value is not specified, the parameter will be named accordingly:    * For &#39;macro&#39; sources, the name will be used verbatim.   * For &#39;header&#39; sources, the name will be of the format &#x60;HTTPHDR\_&lt;name&gt;&#x60;   * For &#39;credential&#39; sources, the name will be of the format &#x60;CREDATTR\_&lt;name&gt;&#x60;  | [optional] 

[[Back to README]](../README.md)



