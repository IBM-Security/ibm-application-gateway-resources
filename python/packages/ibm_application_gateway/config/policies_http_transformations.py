# coding: utf-8

"""
    IBM Application Gateway Configuration Specification (OpenAPI)

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 25.06
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

class PoliciesHttpTransformations(object):
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
        'request': 'list[PoliciesHttpTransformationRule]',
        'preazn': 'list[PoliciesHttpTransformationRule]',
        'postazn': 'list[PoliciesHttpTransformationRule]',
        'postauthn': 'list[PoliciesHttpPostAuthnTransformationRule]',
        'response': 'list[PoliciesHttpTransformationRule]',
        'secrets': 'list[PoliciesHttpTransformationsSecrets]'
    }

    attribute_map = {
        'request': 'request',
        'preazn': 'preazn',
        'postazn': 'postazn',
        'postauthn': 'postauthn',
        'response': 'response',
        'secrets': 'secrets'
    }

    def __init__(self, request=None, preazn=None, postazn=None, postauthn=None, response=None, secrets=None):  # noqa: E501
        """PoliciesHttpTransformations - a model defined in OpenAPI"""  # noqa: E501

        self._request = None
        self._preazn = None
        self._postazn = None
        self._postauthn = None
        self._response = None
        self._secrets = None
        self.discriminator = None

        if request is not None:
            self.request = request
        if preazn is not None:
            self.preazn = preazn
        if postazn is not None:
            self.postazn = postazn
        if postauthn is not None:
            self.postauthn = postauthn
        if response is not None:
            self.response = response
        if secrets is not None:
            self.secrets = secrets

    @property
    def request(self):
        """Gets the request of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on requests. This entry is an array and can be used to specify multiple transformations.   # noqa: E501

        :return: The request of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationRule]
        """
        return self._request

    @request.setter
    def request(self, request):
        """Sets the request of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on requests. This entry is an array and can be used to specify multiple transformations.   # noqa: E501

        :param request: The request of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationRule]
        """

        self._request = request

    @property
    def preazn(self):
        """Gets the preazn of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on requests before authorization has been completed. This entry is  an array and can be used to specify multiple transformations.   # noqa: E501

        :return: The preazn of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationRule]
        """
        return self._preazn

    @preazn.setter
    def preazn(self, preazn):
        """Sets the preazn of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on requests before authorization has been completed. This entry is  an array and can be used to specify multiple transformations.   # noqa: E501

        :param preazn: The preazn of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationRule]
        """

        self._preazn = preazn

    @property
    def postazn(self):
        """Gets the postazn of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on requests after authorization has been completed. This entry is  an array and can be used to specify multiple transformations.   # noqa: E501

        :return: The postazn of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationRule]
        """
        return self._postazn

    @postazn.setter
    def postazn(self, postazn):
        """Sets the postazn of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on requests after authorization has been completed. This entry is  an array and can be used to specify multiple transformations.   # noqa: E501

        :param postazn: The postazn of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationRule]
        """

        self._postazn = postazn

    @property
    def postauthn(self):
        """Gets the postauthn of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on requests after authentication has been completed. This entry is  an array and can be used to specify multiple transformations.   # noqa: E501

        :return: The postauthn of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpPostAuthnTransformationRule]
        """
        return self._postauthn

    @postauthn.setter
    def postauthn(self, postauthn):
        """Sets the postauthn of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on requests after authentication has been completed. This entry is  an array and can be used to specify multiple transformations.   # noqa: E501

        :param postauthn: The postauthn of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpPostAuthnTransformationRule]
        """

        self._postauthn = postauthn

    @property
    def response(self):
        """Gets the response of this PoliciesHttpTransformations.  # noqa: E501

        This node defines the transformations which will take place on responses. This entry is an array and can be used to specify multiple transformations.   # noqa: E501

        :return: The response of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationRule]
        """
        return self._response

    @response.setter
    def response(self, response):
        """Sets the response of this PoliciesHttpTransformations.

        This node defines the transformations which will take place on responses. This entry is an array and can be used to specify multiple transformations.   # noqa: E501

        :param response: The response of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationRule]
        """

        self._response = response

    @property
    def secrets(self):
        """Gets the secrets of this PoliciesHttpTransformations.  # noqa: E501

        This node contains secrets which can be loaded in Lua HTTP  Transformation rules. The secret values can be loaded using the `Control.getConfig` method, passing a nil value for the first parameter and the secret name for the second parameter. For example, the following Lua snippet loads the value of a  secret named \"serviceApiKey\": ``` value = Control.getConfig(nil, \"serviceApiKey\") ```   # noqa: E501

        :return: The secrets of this PoliciesHttpTransformations.  # noqa: E501
        :rtype: list[PoliciesHttpTransformationsSecrets]
        """
        return self._secrets

    @secrets.setter
    def secrets(self, secrets):
        """Sets the secrets of this PoliciesHttpTransformations.

        This node contains secrets which can be loaded in Lua HTTP  Transformation rules. The secret values can be loaded using the `Control.getConfig` method, passing a nil value for the first parameter and the secret name for the second parameter. For example, the following Lua snippet loads the value of a  secret named \"serviceApiKey\": ``` value = Control.getConfig(nil, \"serviceApiKey\") ```   # noqa: E501

        :param secrets: The secrets of this PoliciesHttpTransformations.  # noqa: E501
        :type: list[PoliciesHttpTransformationsSecrets]
        """

        self._secrets = secrets

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
        if not isinstance(other, PoliciesHttpTransformations):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PoliciesHttpTransformations):
            return True

        return self.to_dict() != other.to_dict()
