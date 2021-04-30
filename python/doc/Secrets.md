# Secrets

## Description

The `secrets` node defines secret data which can be used to obfuscate or encrypt entries within the YAML configuration documents.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**obf\_key** | **str** | Specifies an obfuscation key which is used to decrypt the &#x60;OBF:&lt;data&gt;&#x60; type entries.  The obfuscation key is a passphrase which can be used to perform key derivation to generate the key used to decrypt obfuscated entries.  ### Example Steps:  An obfuscated entry can be generated with the following command which requires OpenSSL 1.1.1 or newer:  &#x60;&#x60;&#x60;shell echo -n \"&lt;configuration entry&gt;\" | openssl enc -aes256     -pbkdf2 -pass pass:\"&lt;obfuscation key&gt;\" -md sha512     -base64  U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA&#x3D; &#x60;&#x60;&#x60;  This obfuscation key and obfuscated entry can be provided in the configuration YAML.  | [optional] 
**enc\_key** | **str** | Specifies an encryption key which is used to decrypt the &#x60;ENC:&lt;data&gt;&#x60; type entries.  The encryption key is an RSA private key which can be used to decrypt entries which were encrypted using the corresponding RSA public key.  This entry must be a PEM representation of an RSA private key, beginning with &#x60;-----BEGIN RSA PRIVATE KEY-----&#x60; and ending with &#x60;-----END RSA PRIVATE KEY-----&#x60;.  ### Example Steps:  An RSA key pair can be created with the following commands:  Generate the RSA private key:  &#x60;&#x60;&#x60;shell openssl genrsa -out private.pem 2048 &#x60;&#x60;&#x60;  Generate the corresponding public key:  &#x60;&#x60;&#x60;shell openssl rsa -pubout -in private.pem -out public.pem &#x60;&#x60;&#x60;  An encrypted entry can be generated with the following command using the public key:  &#x60;&#x60;&#x60;shell echo -n \"&lt;configuration entry&gt;\" | openssl rsautl     -encrypt -inkey public.pem -pubin | base64  oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw&#x3D;&#x3D; &#x60;&#x60;&#x60;  This encryption key and encrypted entry can be provided in the configuration YAML.  | [optional] 

[[Back to README]](../README.md)



