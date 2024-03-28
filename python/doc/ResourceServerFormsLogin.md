# ResourceServerFormsLogin

## Description

Specifies the configuration information used for performing form-based single sign-on to the protected application.

#### Login Form Field Types

Login form fields can be populated with data from three possible sources, indicated by the `source` field:

Source | Usage
-------|------
service | Data from the credential service will be used to populate this field.
attribute | A credential attribute value will be used to populate the field.
static | A static string will be used to populate this field.

#### Login Form Field Values

Depending on the type of `source` used, the usage of the `value` can differ.

Source | Usage
-------|-------
service | The field from the credential service data to use. This can be either `username` or `password`
attribute | The name of a credential attribute for which the value of will be used to populate this field.
static | A static string literal which will be used to populate this field.

In the below example:
- Forms login will be attempted automatically on requests to the URL `authenticate/login`
- On the page, the HTML form with `action="login.jsp"` will be detected as the login form
- Credentials will be retrieved from the service named `testCredentialService` service provided in the `services/credential` YAML.
  When requests are made to this service, the `{resource}` token will be substituted with `jspApp`.
- To complete the login, IAG will send a forms POST to the URL indicated by the HTML form, containing the fields:
  - `username`, which is populated by the `username` retrieved from the credential service.
  - `password`, which is populated by the decrypted version `password` of the `password` retrieved from the credential service.
  - `SSO_SOURCE` which is a static field always containing the string `IAG-SSO`
  - `LOGIN_ORIGIN` which is populated using the value of the credential attribute `AZN_CRED_MECH_ID` for the current user session.
- When IAG submits the forms-based login, it will consider a response from the application with a HTTP status code 302 and a location header matching "*/loginSuccess" to be a successful login.
- If the response does not look like a successful login, IAG will present the login form to the client.
- As credential learning is enabled, when IAG observes the client POST to `/login.jsp`, it will extract the `username` and `password` fields and store them with the credential service for future use.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_learning** | **bool** | A boolean flag indicating whether or not credential learning is enabled for this resource server. If credential learning is enabled, when IAG is unable to automatically complete the forms login but observes a successful manual login, the credentials used will be encrypted and stored in the credential service for future use.  | [optional] [default to False]
**login_resources** | [**list[ResourceServerFormsLoginLoginResources]**](ResourceServerFormsLoginLoginResources.md) | This entry is a list of login resources which each contain configuration for each forms-based login page.  | [optional] 

[[Back to README]](../README.md)



