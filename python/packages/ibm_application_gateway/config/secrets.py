# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 21.04
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class Secrets(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'obf_key': 'str',
        'enc_key': 'str'
    }

    attribute_map = {
        'obf_key': 'obf_key',
        'enc_key': 'enc_key'
    }

    def __init__(self, obf_key=None, enc_key=None):  # noqa: E501
        """Secrets - a model defined in OpenAPI"""  # noqa: E501

        self._obf_key = None
        self._enc_key = None
        self.discriminator = None

        if obf_key is not None:
            self.obf_key = obf_key
        if enc_key is not None:
            self.enc_key = enc_key

    @property
    def obf_key(self):
        """Gets the obf_key of this Secrets.  # noqa: E501

        Specifies an obfuscation key which is used to decrypt the `OBF:<data>` type entries.  The obfuscation key is a passphrase which can be used to perform key derivation to generate the key used to decrypt obfuscated entries.  ### Example Steps:  An obfuscated entry can be generated with the following command which requires OpenSSL 1.1.1 or newer:  ```shell echo -n \"<configuration entry>\" | openssl enc -aes256     -pbkdf2 -pass pass:\"<obfuscation key>\" -md sha512     -base64  U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA= ```  This obfuscation key and obfuscated entry can be provided in the configuration YAML.  Example:  secrets:   obf_key: \"<obfuscation key>\"   # ... identity:   oidc:     client_secret: \"OBF:U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA=\"   # noqa: E501

        :return: The obf_key of this Secrets.  # noqa: E501
        :rtype: str
        """
        return self._obf_key

    @obf_key.setter
    def obf_key(self, obf_key):
        """Sets the obf_key of this Secrets.

        Specifies an obfuscation key which is used to decrypt the `OBF:<data>` type entries.  The obfuscation key is a passphrase which can be used to perform key derivation to generate the key used to decrypt obfuscated entries.  ### Example Steps:  An obfuscated entry can be generated with the following command which requires OpenSSL 1.1.1 or newer:  ```shell echo -n \"<configuration entry>\" | openssl enc -aes256     -pbkdf2 -pass pass:\"<obfuscation key>\" -md sha512     -base64  U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA= ```  This obfuscation key and obfuscated entry can be provided in the configuration YAML.  Example:  secrets:   obf_key: \"<obfuscation key>\"   # ... identity:   oidc:     client_secret: \"OBF:U2FsdGVkX19iBhlwc53+QkybjO6RjFHhSbz4VRudYHA=\"   # noqa: E501

        :param obf_key: The obf_key of this Secrets.  # noqa: E501
        :type: str
        """

        self._obf_key = obf_key

    @property
    def enc_key(self):
        """Gets the enc_key of this Secrets.  # noqa: E501

        Specifies an encryption key which is used to decrypt the `ENC:<data>` type entries.  The encryption key is an RSA private key which can be used to decrypt entries which were encrypted using the corresponding RSA public key.  This entry must be a PEM representation of an RSA private key, beginning with `-----BEGIN RSA PRIVATE KEY-----` and ending with `-----END RSA PRIVATE KEY-----`.  ### Example Steps:  An RSA key pair can be created with the following commands:  Generate the RSA private key:  ```shell openssl genrsa -out private.pem 2048 ```  Generate the corresponding public key:  ```shell openssl rsa -pubout -in private.pem -out public.pem ```  An encrypted entry can be generated with the following command using the public key:  ```shell echo -n \"<configuration entry>\" | openssl rsautl     -encrypt -inkey public.pem -pubin | base64  oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw== ```  This encryption key and encrypted entry can be provided in the configuration YAML.  Example: secrets:   enc_key: \"@private.pem\" # ... identity:   oidc:     client_secret: \"ENC:oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw==\"   # noqa: E501

        :return: The enc_key of this Secrets.  # noqa: E501
        :rtype: str
        """
        return self._enc_key

    @enc_key.setter
    def enc_key(self, enc_key):
        """Sets the enc_key of this Secrets.

        Specifies an encryption key which is used to decrypt the `ENC:<data>` type entries.  The encryption key is an RSA private key which can be used to decrypt entries which were encrypted using the corresponding RSA public key.  This entry must be a PEM representation of an RSA private key, beginning with `-----BEGIN RSA PRIVATE KEY-----` and ending with `-----END RSA PRIVATE KEY-----`.  ### Example Steps:  An RSA key pair can be created with the following commands:  Generate the RSA private key:  ```shell openssl genrsa -out private.pem 2048 ```  Generate the corresponding public key:  ```shell openssl rsa -pubout -in private.pem -out public.pem ```  An encrypted entry can be generated with the following command using the public key:  ```shell echo -n \"<configuration entry>\" | openssl rsautl     -encrypt -inkey public.pem -pubin | base64  oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw== ```  This encryption key and encrypted entry can be provided in the configuration YAML.  Example: secrets:   enc_key: \"@private.pem\" # ... identity:   oidc:     client_secret: \"ENC:oYpkxULIexyLR2wUl+mz6Nfki8Pd23Fv0buZZxAuh+Cq1A677NTZwmcWcWN9+MBBVJaISNM0uIVd33/n83Awf77Q/LXtjtzsk41Ux690YVsagh75n/BPk7Ca+4txzwB48yOrTKtIRVbNC2H+Rpa/7LMNSc1Zjez9PqNO4WIa323NzKA4y3Cx1h3DTKANrgsJgXDHNWNs/Ar9pPXxSeFNGmgnYRVtEZtN73IAMs8TzNJKNGkBkmr6vdZvlkjI6ebezJS1kawDvaKQ/C5GXdbpoaJE+JYgYsHDEZLpiasn0Ii4yt3HHNKpsX0UUBSIMO3di0brjJPoJFccVPHLDYgPlw==\"   # noqa: E501

        :param enc_key: The enc_key of this Secrets.  # noqa: E501
        :type: str
        """

        self._enc_key = enc_key

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Secrets):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Secrets):
            return True

        return self.to_dict() != other.to_dict()
