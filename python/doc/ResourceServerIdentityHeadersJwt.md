# ResourceServerIdentityHeadersJwt

## Description

Specifies the information associated with the generation of JSON Web tokens (JWT).


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **list[str]** | PEM based personal certificate files which will be used to sign the JWT.  These certificate files should include the private key, a certificate signed with the private key, and the signer certificate or signer certificate chain (if required).  | [optional] 
**hdr\_name** | **str** | The name of the HTTP header which will contain the generated JWT.  | [optional] [default to 'jwt']
**claims** | [**list[ResourceServerIdentityHeadersJwtClaims]**](ResourceServerIdentityHeadersJwtClaims.md) | The claims which are to be added to the JWT.  The claim can either be obtained from a literal string, or from the value of a credential attribute.  | [optional] 

[[Back to README]](../README.md)



