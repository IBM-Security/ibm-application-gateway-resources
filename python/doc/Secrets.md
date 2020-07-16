# Secrets

## Description

The 'secrets' node defines secret data which can be used to obfuscate or encrypt entries within the YAML configuration documents.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**obf\_key** | **str** | Specifies an obfuscation key which is used to decrypt the &#39;OBF:&lt;data&gt;&#39;  type entries.&lt;br/&gt; The obfuscation key is a passphrase which can be used to perform key derivation to generate the key used to decrypt obfuscated entries. Example:An obfuscated entry can be generated with the following command which requires OpenSSL 1.1.1 or newer:      echo -n \"&lt;configuration entry&gt;\" | openssl enc -aes256 \\         -pbkdf2 -pass pass:\"&lt;obfuscation key&gt;\" -md sha512 \\         -base64       U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA&#x3D;      This obfuscation key and obfuscated entry can be provided in the      configuration YAML:      secrets:       obf_key: \"&lt;obfuscation key&gt;\"     ...     identity:       oidc:         client_secret: \"OBF:U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA&#x3D;\"  | [optional] 
**enc\_key** | **str** | Specifies an encryption key which is used to decrypt the &#39;ENC:&lt;data&gt;&#39;  type entries.&lt;br/&gt; The encryption key is an RSA private key which can be used to decrypt entries which were encrypted using the corresponding RSA public key.&lt;br/&gt; This entry must be a PEM representation of an RSA private key,  beginning with &#39;-----BEGIN RSA PRIVATE KEY-----&#39; and ending with &#39;-----END RSA PRIVATE KEY-----&#39;. Example:An RSA key pair can be created with the following commands:      Generate the RSA private key:      openssl genrsa -out private.pem 2048      Generate the corresponding public key:      openssl rsa -pubout -in private.pem -out public.pem      An encrypted entry can be generated with the following command using     the public key:      echo -n \"&lt;configuration entry&gt;\" | openssl rsautl \\         -encrypt -inkey public.pem -pubin | base64      oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw&#x3D;&#x3D;      This encryption key and encrypted entry can be provided in the      configuration YAML:      secrets:       enc_key: \"&lt;the RSA private key&gt;\"     ...     identity:       oidc:         client_secret: \"ENC:oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw&#x3D;&#x3D;\"  | [optional] 

[[Back to README]](../README.md)



