# PoliciesObligation

## Description

If the action for this rule is obligate or reauth, this obligation can be used to indicate that authentication should take place again with specific parameters.

This parameter is required for policies with the 'obligation' action, and is optional for policies with the 'reauth' action.

Note that a policy can only contain one obligated action, that is, this entry must contain `oidc` or `redirect_url`.

### Redirect URL Macros
The following macros are available:

Macro | Value
------|------
%USERNAME% | The current logged in user, or `unauthenticated` for unauthenticated users.
%METHOD% | The HTTP method of the request which matched this policy.
%URL% | The URL the client was attempting to access when this policy was matched.
%HOSTNAME% | The hostname (HTTP Host header) of the client request which matched this policy.
%PROTOCOL% | The protocol (`http` or `https`) which was used
%CREDATTR{<attribute_name>}% | The value of the credential attribute named by `<attribute_name>`.
%HTTPHDR{<header_name>}% | The value of the HTTP header from the client request named by `<header_name>`.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oidc** | [**PoliciesObligationOidc**](PoliciesObligationOidc.md) |  | [optional] 
**redirect_url** | **str** | Allows clients to be redirected to a URL as a result of this policy evaluating successfully. This URL can contain embedded macros to include contextual information about the request and client which was obligated to be redirected to this URL. See the  [Redirect URL Macros](#redirect-url-macros) table above for  the available macros.  | [optional] 

[[Back to README]](../README.md)



