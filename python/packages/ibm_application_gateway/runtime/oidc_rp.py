"""
Copyright contributors to the Application Gateway project
"""

import json
import logging
import requests
import time
import urllib3
import sys
import re

from urllib.parse import urlparse

logger = logging.getLogger(__name__)

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

class OidcRp(object):
    """
    This class is used to test the OIDC RP authentication capability of
    the IBM Application Gateway.  The class should never be used directly - an
    OP specific implementation should be used instead.
    """

    def __init__(self, url):
        """
        Initialise this object.

        \param url  [in] : The URL to the IBM Application Gateway.
        """

        super(OidcRp, self).__init__()

        self.url_ = url

    def authenticate(self, user, password, oidc_name="default", virtual_host=None):
        """
        Perform an OIDC authentication against the configured OP using the
        specified user name and password.  The created session will be
        returned upon a successful authentication, otherwise an exception
        will be raised.
        """

        session = requests.session()

        headers = None

        if virtual_host is not None:
            headers = {
                "host": virtual_host
            }

        # The first request used to start the flow.
        rsp = session.get(self.url_, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to request the initial WRP page")

        # The second request, for the pkmsoidc page to kick start the OIDC
        # authentication.  The response to this request should be a 302.
        rsp = session.get("{0}/pkmsoidc?iss={1}&TAM_OP=login".format(
                self.url_, oidc_name), headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to start the OIDC RP flow")

        # The third request should be to the OIDC OP.
        rsp = self.authenticate_at_op(rsp.headers['location'], user, password, session)

        self.check_rsp_code(rsp, 302, "The OIDC flow failed at the OP")

        # Now we can complete the OIDC flow.  We have to massage the location
        # which is returned by the OP, substituting the fake host with the
        # real address information.
        url = re.sub(
           r"http(s?)://.*/",
           "{0}/".format(self.url_),
           rsp.headers['location']
        )

        rsp = session.get(url, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to complete the OIDC RP flow")

        # We can finally make a request for a protected resource to verify
        # that we are correctly authenticated.
        rsp = session.get(self.url_, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 200, "Failed to use the authenticated session")

        return session

    def authenticate_redirect(self, user, password, virtual_host=None):
        """
        Redirect Obligation.
        Perform an OIDC authentication against the configured OP using the
        specified user name and password with redirect on success.  The created
        session will be returned upon a successful authentication.
        """

        session = requests.session()

        headers = None

        if virtual_host is not None:
            headers = {
                "host": virtual_host
            }

        # The first request used to start the flow.
        rsp = session.get(self.url_, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to request the initial WRP page")

        # The second request, for the pkmsoidc page to kick start the OIDC
        # authentication.  The response to this request should be a 302.
        rsp = session.get("{0}/pkmsoidc?iss=default&TAM_OP=login".format(
                self.url_), headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to start the OIDC RP flow")

        # The third request should be to the OIDC OP.
        rsp = self.authenticate_at_op(rsp.headers['location'], user, password, session)

        self.check_rsp_code(rsp, 302, "The OIDC flow failed at the OP")

        # Now we can complete the OIDC flow.  We have to massage the location
        # which is returned by the OP, substituting the fake host with the
        # real address information.
        url = re.sub(
           r"http(s?)://.*/",
           "{0}/".format(self.url_),
           rsp.headers['location']
        )

        rsp = session.get(url, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to complete the OIDC RP flow")

        # We can finally make a request for a protected resource to verify
        # that we are correctly authenticated.
        rsp = session.get(self.url_, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to use the authenticated session")

        return session

    def reauthenticate(self, session, target_url, user, password, virtual_host=None):
        """
        Perform an OIDC re-authentication against the configured OP using the
        specified user name and password.  The updated session and response
        will be returned upon a successful re-authentication, otherwise an
        exception will be raised.
        """

        headers = None

        if virtual_host is not None:
            headers = {
                "host": virtual_host
            }

        # The first request used to start the flow.
        rsp = session.get("{0}{1}".format(self.url_, target_url),
                          headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to request the initial WRP page")

        # The second request, for the pkmsoidc page to kick start the OIDC
        # authentication.  The response to this request should be a 302.
        rsp = session.get("{0}/pkmsoidc?iss=default&TAM_OP=login".format(
                self.url_), headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to start the OIDC RP flow")

        # The third request should be to the OIDC OP.
        rsp = self.reauthenticate_at_op(rsp.headers['location'], session, user, password)

        self.check_rsp_code(rsp, 302, "The OIDC flow failed at the OP")

        # Now we can complete the OIDC flow.  We have to massage the location
        # which is returned by the OP, substituting the fake host with the
        # real address information.
        url = re.sub(
           r"http(s?)://.*/",
           "{0}/".format(self.url_),
           rsp.headers['location']
        )

        rsp = session.get(url, headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to complete the OIDC RP flow")

        # We can finally make a request for a protected resource to verify
        # that we are correctly re-authenticated.
        rsp = session.get(rsp.headers['location'], headers=headers, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 200, "Failed to use the re-authenticated session")

        return session, rsp

    @classmethod
    def authenticate_at_op(self, location, user, password, session=None):
        """
        Perform an authentication at the OP.  This function should be
        implemented for each type of OP which we support.
        """

        logger.critical("A base class has been used instead of specific OP "
                "implementation!")

        sys.exit(1)

    @classmethod
    def reauthenticate_at_op(self, location, session, user, password):
        """
        Perform an authentication at the OP.  This function should be
        implemented for each type of OP which we support.
        """

        logger.critical("A base class has been used instead of specific OP "
                "implementation!")

        sys.exit(1)

    @classmethod
    def check_rsp_code(self, rsp, expected, description):
        """
        This helper function is used to check the response code contained in
        the HTTP response and display an error if an unexpected response code
        is received.
        """

        if expected != rsp.status_code:
            message = "{0}\nstatus: {1}\nheaders: {2}\nbody: {3}".format(
                description, rsp, rsp.headers, rsp.text)

            logger.critical(message)

            raise Exception(message)

class CIOidcRp(OidcRp):

    @classmethod
    def authenticate_at_op(self, location, user, password, session=None):
        """
        Perform an authentication at the IBM Verify OP.
        """

        # Create a new session against CI.
        if session is None:
            session = requests.session()

        logger.info("Authenticating to IBM Verify....")

        # We now need to authenticate against the tenant.  This will involve
        # retrieving the login form, extracting the URL from the login form
        # and then posting the username/password to perform the authentication.
        parts = urlparse(location)

        form_url = "{0}://{1}/authsvc/mtfim/sps/authsvc?" \
            "PolicyId=urn:ibm:security:authentication:asf:basicldapuser".format(
            parts.scheme, parts.netloc)

        rsp = session.get(form_url, verify=False)

        self.check_rsp_code(rsp, 200,
                                "IBM Verify did not return the expected login form")

        # Pull out the action from the body.  We could use a module such as
        # Beautiful Soup to parse the response body, but what we want is pretty
        # simple and so it is easier to just do a regular expression match.
        auth_uri = self.extract_form_action(rsp.text)

        rsp = session.post("{0}://{1}{2}".format(
                            parts.scheme, parts.netloc, auth_uri),
                        data = {
                            "operation" : "verify",
                            "username"  : user,
                            "password"  : password
                        })

        self.check_rsp_code(rsp, 200, "Failed to authenticate to IBM Verify")

        # Now that we have an authenticated session we want to perform the
        # OIDC flow.
        rsp = session.get(location, verify=False, allow_redirects=False)

        self.check_rsp_code(rsp, 302, "The OIDC flow failed in IBM Verify")

        logger.info("Successfully authenticated to IBM Verify.")

        return rsp

    @classmethod
    def reauthenticate_at_op(self, location, session, user, password):
        """
        Perform a re-authentication at the IBM Verify OP.
        """

        # Get the login form
        rsp = session.get(location, verify=False)

        logger.info("Re-authenticating with IBM Verify....")

        # We now need to authenticate against the tenant.  This will involve
        # retrieving the login form, extracting the URL from the login form
        # and then posting the username/password to perform the authentication.
        parts = urlparse(location)

        # Pull out the action from the body.  We could use a module such as
        # Beautiful Soup to parse the response body, but what we want is pretty
        # simple and so it is easier to just do a regular expression match.
        auth_uri = self.extract_form_action(rsp.text)

        # Complete the login form
        rsp = session.post("{0}://{1}{2}".format(
                            parts.scheme, parts.netloc, auth_uri),
                        data = {
                            "operation" : "verify",
                            "username"  : user,
                            "password"  : password,
                            "error_redirect_support": "true"
                        },
                        allow_redirects=False)

        self.check_rsp_code(rsp, 302, "Failed to authenticate to IBM Verify")

        rsp = session.get(rsp.headers["location"], verify=False, allow_redirects=False)
        
        self.check_rsp_code(rsp, 302, "The OIDC flow failed in IBM Verify")

        logger.info("Successfully authenticated to IBM Verify.")

        return rsp

    @classmethod
    def extract_form_action(self, body):

        # Legacy form actions

        auth_uri_patterns = [
            'var action = "(.+?)"',
            'const action = "(.+?)"',
            '<body action="(.+?)"'
        ]

        for uri_pattern in auth_uri_patterns:
            m = re.search(uri_pattern, body)
            if not m:
                continue
            return m.group(1)


        idSources_patterns = [
            # JavaScript idSources (September 2020)
            'const idSources = (.+?);',
            # meta tag idSources (September 2024)
            '<meta id="idSourcesMeta" content=\'(.+?)\''
        ]

        for pattern in idSources_patterns:
            m = re.search(pattern, body)
            if m:
                auth_json = json.loads(m.group(1))

                for id_source in auth_json:
                    if id_source["type"] == "CLOUDDIRECTORY":
                        url = urlparse(id_source["loginUrl"])
                        return "{url.path}?{url.query}".format(url=url)

        message = "Failed to parse the auth URI from the CI login page: {0}" \
            .format(body)
        logger.critical(message)
        raise Exception(message)
