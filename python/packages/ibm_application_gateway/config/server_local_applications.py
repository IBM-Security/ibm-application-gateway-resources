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

class ServerLocalApplications(object):
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
        'cred_viewer': 'ServerLocalApplicationsCredViewer',
        'azn_decision': 'ServerLocalApplicationsAznDecision',
        'jwks': 'ServerLocalApplicationsJwks'
    }

    attribute_map = {
        'cred_viewer': 'cred_viewer',
        'azn_decision': 'azn_decision',
        'jwks': 'jwks'
    }

    def __init__(self, cred_viewer=None, azn_decision=None, jwks=None):  # noqa: E501
        """ServerLocalApplications - a model defined in OpenAPI"""  # noqa: E501

        self._cred_viewer = None
        self._azn_decision = None
        self._jwks = None
        self.discriminator = None

        if cred_viewer is not None:
            self.cred_viewer = cred_viewer
        if azn_decision is not None:
            self.azn_decision = azn_decision
        if jwks is not None:
            self.jwks = jwks

    @property
    def cred_viewer(self):
        """Gets the cred_viewer of this ServerLocalApplications.  # noqa: E501


        :return: The cred_viewer of this ServerLocalApplications.  # noqa: E501
        :rtype: ServerLocalApplicationsCredViewer
        """
        return self._cred_viewer

    @cred_viewer.setter
    def cred_viewer(self, cred_viewer):
        """Sets the cred_viewer of this ServerLocalApplications.


        :param cred_viewer: The cred_viewer of this ServerLocalApplications.  # noqa: E501
        :type: ServerLocalApplicationsCredViewer
        """

        self._cred_viewer = cred_viewer

    @property
    def azn_decision(self):
        """Gets the azn_decision of this ServerLocalApplications.  # noqa: E501


        :return: The azn_decision of this ServerLocalApplications.  # noqa: E501
        :rtype: ServerLocalApplicationsAznDecision
        """
        return self._azn_decision

    @azn_decision.setter
    def azn_decision(self, azn_decision):
        """Sets the azn_decision of this ServerLocalApplications.


        :param azn_decision: The azn_decision of this ServerLocalApplications.  # noqa: E501
        :type: ServerLocalApplicationsAznDecision
        """

        self._azn_decision = azn_decision

    @property
    def jwks(self):
        """Gets the jwks of this ServerLocalApplications.  # noqa: E501


        :return: The jwks of this ServerLocalApplications.  # noqa: E501
        :rtype: ServerLocalApplicationsJwks
        """
        return self._jwks

    @jwks.setter
    def jwks(self, jwks):
        """Sets the jwks of this ServerLocalApplications.


        :param jwks: The jwks of this ServerLocalApplications.  # noqa: E501
        :type: ServerLocalApplicationsJwks
        """

        self._jwks = jwks

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
        if not isinstance(other, ServerLocalApplications):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ServerLocalApplications):
            return True

        return self.to_dict() != other.to_dict()
