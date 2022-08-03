import React from 'react';
import {
  CopyButton,
  Select,
  SelectItem,
  Link,
} from 'carbon-components-react';

import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import addCustomYamlValidation from './customYamlValidation.js'
import "ace-builds/src-noconflict/theme-github";

import yaml from 'js-yaml';

const DOC_URL = "https://docs.verify.ibm.com/gateway/docs/";

const SAMPLE_EMPTY_YAML = "version: 22.07";

const SAMPLE_EMPTY = {
    "yaml": SAMPLE_EMPTY_YAML,
    "link": "#"
}

const SAML_AUTHZ_YAML = "version: \"22.07\"\n" +
                        "#\n" +
                        "# Configure an IAG container to proxy a single Web application, and define \n" +
                        "# an authorization policy for the Web application.  This configuration will \n" +
                        "# simply define a server certificate, configure an IBM Security Verify tenant \n" +
                        "# as the identity provider, define a single application and then define some \n" +
                        "# authorization rules for this application. \n" +
                        "# \n" +
                        "\n" +
                        "# \n" +
                        "# Specify a server certificate to be used by the container.  The server \n" +
                        "# certificate was created using an openssl command: \n" +
                        "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \n" +
                        "#        -out cert.pem \n" +
                        "# \n" +
                        "# To remove the dependency on external files a base-64 representation of the \n" +
                        "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                        "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                        "#   \"B64:PGhy4KICAgIDxoND5....\" \n" +
                        "# \n" +
                        "# If no certificate is specified a self-signed certificate will be \n" +
                        "# automatically created and used by the container. \n" +
                        "# \n" +
                        "\n" +
                        "server: \n" +
                        "  ssl: \n" +
                        "    front_end: \n" +
                        "      certificate: \n" + 
                        "        - \"@cert.pem\" \n" +
                        "        - \"@key.pem\" \n" +
                        "\n" +
                        "# \n" +
                        "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                        "# container.  Please note that the values provided below are for illustrative \n" +
                        "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                        "# using the instructions found at the following URL: \n" +
                        "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers \n" +
                        "# \n" +
                        "# The discovery endpoint has the following format: \n" +
                        "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration \n" +
                        "# \n" +
                        "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                        "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                        "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be \n" +
                        "# specified when creating the custom application within the IBM Security \n" +
                        "# Verify administrators console. \n" +
                        "# \n" +
                        "\n" +
                        "identity: \n" +
                        "  oidc: \n" +
                        "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\" \n" +
                        "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\" \n" +
                        "    client_secret: \"wPP8rM8N0d\"\n" +
                        "#\n" +
                        "# Define an resource server which will be hosted at the '/static' path of the\n" +
                        "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                        "# hosts the resource server.\n" +
                        "#\n" +
                        "# An authorization policy has also been defined which:\n" +
                        "#   1. Allows 'application owners' to retrieve any resource;\n" +
                        "#   2. Allows unauthenticated used to retrieve the '/unauth' resource;\n" +
                        "#   3. Allows any authenticated user to retrieve the '/everyone' resource;\n" +
                        "#   4. Denies access to everything else.\n" +
                        "#\n" +
                        "\n" +
                        "resource_servers:\n" +
                        "  - path: \"/static\"\n" +
                        "    connection_type: \"tcp\"\n" +
                        "    servers:\n" +
                        "      - host: \"10.10.10.200\"\n" +
                        "        port: 1337\n" +
                        "    transparent_path: false\n" +
                        "\n" +
                        "policies:\n" +
                        "  authorization:\n" +
                        "    - name: \"app_owners\"\n" +
                        "      methods:\n" +
                        "        - \"GET\"\n" +
                        "      paths:\n" + 
                        "        - \"*\"\n" +
                        "      rule: (any groupIds = \"application owners\")\n" +
                        "      action: \"permit\"\n" +
                        "\n" +
                        "    - name: \"any_user\"\n" +
                        "      methods:\n" +
                        "        - \"GET\"\n" +
                        "      paths:\n" + 
                        "        - \"/unauth\"\n" +
                        "      rule: \"anyuser\"\n" +
                        "      action: \"permit\"\n" +
                        "\n" +
                        "    - name: \"any_auth_user\"\n" +
                        "      methods:\n" +
                        "        - \"GET\"\n" +
                        "      paths: \n" +
                        "        - \"/everyone\"\n" +
                        "      rule: \"anyauth\"\n" +
                        "      action: \"permit\"\n" +
                        "\n" +
                        "    - name: \"go-away\"\n" +
                        "      paths: \n" +
                        "        - \"*\"\n" +
                        "      rule: \"()\"\n" +
                        "      action: \"deny\"";

const SAMPLE_AUTHZ = {
    "yaml": SAML_AUTHZ_YAML,
    "link": DOC_URL + "examples-authorization-yaml"
}

const SAMPLE_BASIC_YAML = "version: \"22.07\"\n" +
                          "\n" +
                          "#\n" +
                          "# Configure an IAG container with a very basic configuration.  This \n" +
                          "# configuration will simply define a server certificate, and configure an IBM \n" +
                          "# Security Verify tenant as the identity provider.\n" +
                          "#\n" +
                          "\n" +
                          "#\n" +
                          "# Specify a server certificate to be used by the container.  The server \n" +
                          "# certificate was created using an openssl command:\n" +
                          "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                          "#        -out cert.pem\n" +
                          "#\n" +
                          "# To remove the dependency on external files a base-64 representation of the\n" +
                          "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                          "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                          "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                          "# \n" +
                          "# If no certificate is specified a self-signed certificate will be \n" +
                          "# automatically created and used by the container.\n" +
                          "#\n" +
                          "\n" +
                          "server:\n" +
                          "  ssl:\n" +
                          "    front_end:\n" +
                          "      certificate: \n" +
                          "        - \"@cert.pem\"\n" +
                          "        - \"@key.pem\"\n" +
                          "\n" +
                          "#\n" +
                          "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                          "# container.  Please note that the values provided below are for illustrative\n" +
                          "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                          "# using the instructions found at the following URL:\n" +
                          "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                          "#\n" +
                          "# The discovery endpoint has the following format:\n" +
                          "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                          "#\n" +
                          "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                          "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                          "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                          "# specified when creating the custom application within the IBM Security Verify\n" +
                          "# administrators console.\n" +
                          "\n" +
                          "#\n" +
                          "\n" +
                          "identity:\n" +
                          "  oidc:\n" +
                          "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                          "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                          "    client_secret: \"wPP8rM8N0d\"";

const SAMPLE_BASIC = {
    "yaml": SAMPLE_BASIC_YAML,
    "link": DOC_URL + "examples-oidc-verify-yaml"
}                          

const SAMPLE_ISVA_YAML =  "version: \"22.07\"\n" +
                          "\n" +
                          "#\n" +
                          "# Configure an IAG container with a very basic configuration.  This \n" +
                          "# configuration will simply define a server certificate, and configure an IBM \n" +
                          "# Security Verify Access system as the identity provider.\n" +
                          "#\n" +
                          "\n" +
                          "#\n" +
                          "# Specify a server certificate to be used by the container.  The server \n" +
                          "# certificate was created using an openssl command:\n" +
                          "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                          "#        -out cert.pem\n" +
                          "#\n" +
                          "# To remove the dependency on external files a base-64 representation of the\n" +
                          "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                          "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                          "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                          "# \n" +
                          "# If no certificate is specified a self-signed certificate will be \n" +
                          "# automatically created and used by the container.\n" +
                          "#\n" +
                          "\n" +
                          "server:\n" +
                          "  ssl:\n" +
                          "    front_end:\n" +
                          "      certificate: \n" +
                          "        - \"@cert.pem\"\n" +
                          "        - \"@key.pem\"\n" +
                          "\n" +
                          "#\n" +
                          "# Specify an IBM Security Verify Access or IBM Security Access Manager 9.0.7.0+ \n" +
                          "# system as the identity provider for the container.  Please note that the \n" +
                          "# values provided below are for illustrative purposes only and don't reflect \n" +
                          "# a real system.\n" +
                          "#\n" +
                          "# The discovery endpoint is constructed from the IBM Security Verify Access\n" +
                          "# hostname, the junction point and the OIDC definition, and is of the following\n" +
                          "# format:\n" +
                          "#     https://<host>/<junction>/sps/oauth/oauth20/metadata/<oidc definition>\n" +
                          "#\n" +
                          "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                          "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                          "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                          "# specified when creating the custom application within the Security Verify \n" +
                          "# Access administrators console.\n" +
                          "#\n" +
                          "# The certificate used in this example is the exported CA certificate of the \n" +
                          "# Security Verify Access system which has been copied to the IAG container\n" +
                          "# in the default configuration location:\n" +
                          "#  /var/iag/config\n" +
                          "\n" +
                          "identity:\n" +
                          "  oidc:\n" +
                          "    discovery_endpoint: \"https://www.myidp.ibm.com/mga/sps/oauth/oauth20/metadata/oidc_def\"\n" +
                          "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                          "    client_secret: \"wPP8rM8N0d\"\n" +
                          "    ssl:\n" +
                          "      certificate:\n" + 
                          "        - \"@cert.cer\"";                          

const SAMPLE_ISVA = {
    "yaml": SAMPLE_ISVA_YAML,
    "link": DOC_URL + "examples-oidc-verify-access-yaml"
} 

const SAMPLE_CREDVIEWER_YAML = "version: \"22.07\"\n" +
                               "\n" +
                               "#\n" +
                               "# Configure an IAG container with a very basic configuration.  This \n" +
                               "# configuration will simply define a server certificate, configure an IBM\n" + 
                               "# Security Verify tenant as the identity provider, and enable the inbuilt\n" +
                               "# credential viewer application.\n" +
                               "#\n" +
                               "\n" +
                               "#\n" +
                               "# Specify a server certificate to be used by the container.  The server \n" +
                               "# certificate was created using an openssl command:\n" +
                               "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                               "#        -out cert.pem\n" +
                               "#\n" +
                               "# To remove the dependency on external files a base-64 representation of the\n" +
                               "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                               "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                               "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                               "# \n" +
                               "# If no certificate is specified a self-signed certificate will be \n" +
                               "# automatically created and used by the container.\n" +
                               "#\n" +
                               "\n" +
                               "server:\n" +
                               "  ssl:\n" +
                               "    front_end:\n" +
                               "      certificate: \n" +
                               "        - \"@cert.pem\"\n" +
                               "        - \"@key.pem\"\n" +
                               "\n" +
                               "  #\n" +
                               "  # Enable the inbuilt credential viewer application.  The 'enable_html'\n" +
                               "  # configuration entry will control whether the HTML file is enabled in\n" +
                               "  # addition to the JSON API.  We also exclude the 'AUTHENTICATION_LEVEL' \n" +
                               "  # credential attribute from the response.\n" +
                               "  #\n" +
                               "\n" +
                               "  local_applications:\n" +
                               "    cred_viewer:\n" +
                               "      path_segment: \"cred-viewer\"\n" +
                               "      enable_html: true\n" +
                               "      attributes:\n" +
                               "        - -AUTHENTICATION_LEVEL\n" +
                               "\n" +
                               "#\n" +
                               "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                               "# container.  Please note that the values provided below are for illustrative\n" +
                               "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                               "# using the instructions found at the following URL:\n" +
                               "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                               "#\n" +
                               "# The discovery endpoint has the following format:\n" +
                               "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                               "#\n" +
                               "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                               "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                               "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                               "# specified when creating the custom application within the IBM Security Verify\n" +
                               "# administrators console.\n" +
                               "#\n" +
                               "\n" +
                               "identity:\n" +
                               "  oidc:\n" +
                               "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                               "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                               "    client_secret: \"wPP8rM8N0d\"";

const SAMPLE_CREDVIEWER = {
    "yaml": SAMPLE_CREDVIEWER_YAML,
    "link": DOC_URL + "examples-cred-viewer-yaml"
}

const SAMPLE_LWP_YAML = "version: \"22.07\"\n" +
                        "\n" +
                        "#\n" +
                        "# Configure an IAG container with a very basic configuration.  This \n" +
                        "# configuration will simply define a server certificate, configure an IBM\n" + 
                        "# Security Verify tenant as the identity provider, and defines a static Web\n" +
                        "# page which will be served by the IAG container.\n" +
                        "#\n" +
                        "\n" +
                        "#\n" +
                        "# Specify a server certificate to be used by the container.  The server \n" +
                        "# certificate was created using an openssl command:\n" +
                        "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                        "#        -out cert.pem\n" +
                        "#\n" +
                        "# To remove the dependency on external files a base-64 representation of the\n" +
                        "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                        "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                        "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                        "# \n" +
                        "# If no certificate is specified a self-signed certificate will be \n" +
                        "# automatically created and used by the container.\n" +
                        "#\n" +
                        "\n" +
                        "server:\n" +
                        "  ssl:\n" +
                        "    front_end:\n" +
                        "      certificate: \n" +
                        "        - \"@cert.pem\"\n" +
                        "        - \"@key.pem\"\n" +
                        "\n" +
                        "  #\n" +
                        "  # Provide a zip file of pages which will be hosted by the IAG container.\n" +
                        "  #\n" +
                        "\n" +
                        "  local_pages:\n" +
                        "    content: \"@local-pages.zip\"\n" +
                        "    type: zip\n" +
                        "\n" +
                        "#\n" +
                        "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                        "# container.  Please note that the values provided below are for illustrative\n" +
                        "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                        "# using the instructions found at the following URL:\n" +
                        "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                        "#\n" +
                        "# The discovery endpoint has the following format:\n" +
                        "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                        "#\n" +
                        "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                        "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                        "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                        "# specified when creating the custom application within the IBM Security Verify\n" +
                        "# administrators console.\n" +
                        "#\n" +
                        "\n" +
                        "identity:\n" +
                        "  oidc:\n" +
                        "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                        "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                        "    client_secret: \"wPP8rM8N0d\"";

const SAMPLE_LWP = {
    "yaml": SAMPLE_LWP_YAML,
    "link": DOC_URL + "examples-local-webpages-yaml"
}

const SAMPLE_RL_YAML = "version: \"22.07\"\n" +
                      "\n" +
                      "#\n" +
                      "# Configure an IAG container to proxy a single Web application.  This \n" +
                      "# configuration will simply define a server certificate, configure an IBM \n" +
                      "# Security Verify tenant as the identity provider, define a single\n" +
                      "# application, and define a rate limiting policy for access to the\n" +
                      "# application.\n" +
                      "#\n" +
                      "\n" +
                      "#\n" +
                      "# Specify a server certificate to be used by the container.  The server \n" +
                      "# certificate was created using an openssl command:\n" +
                      "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                      "#        -out cert.pem\n" +
                      "#\n" +
                      "# To remove the dependency on external files a base-64 representation of the\n" +
                      "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                      "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                      "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                      "# \n" +
                      "# If no certificate is specified a self-signed certificate will be \n" +
                      "# automatically created and used by the container.\n" +
                      "#\n" +
                      "\n" +
                      "server:\n" +
                      "  ssl:\n" +
                      "    front_end:\n" +
                      "      certificate: \n" +
                      "        - \"@cert.pem\"\n" +
                      "        - \"@key.pem\"\n" +
                      "\n" +
                      "#\n" +
                      "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                      "# container.  Please note that the values provided below are for illustrative\n" +
                      "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                      "# using the instructions found at the following URL:\n" +
                      "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                      "#\n" +
                      "# The discovery endpoint has the following format:\n" +
                      "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                      "#\n" +
                      "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                      "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                      "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                      "# specified when creating the custom application within the IBM Security Verify\n" +
                      "# administrators console.\n" +
                      "#\n" +
                      "\n" +
                      "identity:\n" +
                      "  oidc:\n" +
                      "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                      "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                      "    client_secret: \"wPP8rM8N0d\"\n" +
                      "\n" +
                      "#\n" +
                      "# Define a resource server which will be hosted at the '/static' path of the\n" +
                      "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                      "# hosts the resource.\n" +
                      "#\n" +
                      "\n" +
                      "resource_servers:\n" +
                      "  - path: \"/static\"\n" +
                      "    connection_type: \"tcp\"\n" +
                      "    servers:\n" +
                      "      - host: \"10.10.10.200\"\n" +
                      "        port: 1337\n" +
                      "    transparent_path: false\n" +
                      "\n" +
                      "#\n" +
                      "# Define the policies for the gateway.\n" +
                      "#\n" +
                      "\n" +
                      "policies:\n" +
                      "    #\n" +
                      "    # Specify a rate limiting policy, applied to all application resources,\n" +
                      "    # which restricts the number of requests from each individual IP address \n" +
                      "    # to 3 per minute.\n" +
                      "    #\n" +
                      "\n" +
                      "    rate_limiting:\n" + 
                      "      - name: \"limited_by_ip\"\n" +
                      "        methods: \n" +
                      "          - \"*\"\n" +
                      "        paths: \n" +
                      "          - \"*\"\n" +
                      "        rule: |\n" +
                      "          ip: true\n" +
                      "          capacity: 3\n" +
                      "          interval: 60\n" +
                      "          reaction: TEMPLATE";

const SAMPLE_RL = {
    "yaml": SAMPLE_RL_YAML,
    "link": DOC_URL + "examples-rate-limiting-yaml" 
};

const SAMPLE_STDAPP_YAML = "version: \"22.07\"\n" +
                          "\n" +
                          "#\n" +
                          "# Configure an IAG container to proxy a single Web application.  This \n" +
                          "# configuration will simply define a server certificate, configure an IBM \n" +
                          "# Security Verify tenant as the identity provider, and define a single\n" +
                          "# application.\n" +
                          "#\n" +
                          "# Specify a server certificate to be used by the container.  The server \n" +
                          "# certificate was created using an openssl command:\n" +
                          "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                          "#        -out cert.pem\n" +
                          "#\n" +
                          "# To remove the dependency on external files a base-64 representation of the\n" +
                          "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                          "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                          "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                          "# \n" +
                          "# If no certificate is specified a self-signed certificate will be \n" +
                          "# automatically created and used by the container.\n" +
                          "#\n" +
                          "\n" +
                          "server:\n" +
                          "  ssl:\n" +
                          "    front_end:\n" +
                          "      certificate: \n" +
                          "        - \"@cert.pem\"\n" +
                          "        - \"@key.pem\"\n" +
                          "\n" +
                          "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                          "# container.  Please note that the values provided below are for illustrative\n" +
                          "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                          "# using the instructions found at the following URL:\n" +
                          "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                          "#\n" +
                          "# The discovery endpoint has the following format:\n" +
                          "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                          "#\n" +
                          "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                          "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                          "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                          "# specified when creating the custom application within the IBM Security Verify\n" +
                          "# administrators console.\n" +
                          "#\n" +
                          "\n" +
                          "identity:\n" +
                          "  oidc:\n" +
                          "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                          "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                          "    client_secret: \"wPP8rM8N0d\"\n" +
                          "\n" +
                          "# Define a resource server which will be hosted at the '/static' path of the\n" +
                          "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                          "# hosts the resource.\n" +
                          "#\n" +
                          "\n" +
                          "resource_servers:\n" +
                          "  - path: \"/static\"\n" +
                          "    connection_type: \"tcp\"\n" +
                          "    servers:\n" +
                          "      - host: \"10.10.10.200\"\n" +
                          "        port: 1337\n" +
                          "    transparent_path: false";

const SAMPLE_STDAPP = {
    "yaml": SAMPLE_STDAPP_YAML,
    "link": DOC_URL + "examples-standard-application-yaml"
};

const SAMPLE_TRACING_YAML = "version: \"22.07\"\n" +
                            "\n" +
                            "#\n" +
                            "# Configure an IAG container to proxy a single Web application, and activate\n" +
                            "# tracing within the container.  This configuration will simply define a \n" +
                            "# server certificate, configure an IBM Security Verify tenant as the identity \n" +
                            "# provider, define a single application and then enable the iag.azn and\n" +
                            "# pdweb.snoop trace points.\n" +
                            "#\n" +
                            "# Specify a server certificate to be used by the container.  The server \n" +
                            "# certificate was created using an openssl command:\n" +
                            "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                            "#        -out cert.pem\n" +
                            "#\n" +
                            "# To remove the dependency on external files a base-64 representation of the\n" +
                            "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                            "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                            "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                            "# \n" +
                            "# If no certificate is specified a self-signed certificate will be \n" +
                            "# automatically created and used by the container.\n" +
                            "#\n" +
                            "\n" +
                            "server:\n" +
                            "  ssl:\n" +
                            "    front_end:\n" +
                            "      certificate: \n" +
                            "        - \"@cert.pem\"\n" +
                            "        - \"@key.pem\"\n" +
                            "\n" +
                            "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                            "# container.  Please note that the values provided below are for illustrative\n" +
                            "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                            "# using the instructions found at the following URL:\n" +
                            "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                            "#\n" +
                            "# The discovery endpoint has the following format:\n" +
                            "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                            "#\n" +
                            "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                            "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                            "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                            "# specified when creating the custom application within the IBM Security Verify\n" +
                            "# administrators console.\n" +
                            "#\n" +
                            "\n" +
                            "identity:\n" +
                            "  oidc:\n" +
                            "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                            "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                            "    client_secret: \"wPP8rM8N0d\"\n" +
                            "\n" +
                            "# Define a resource server which will be hosted at the '/static' path of the\n" +
                            "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                            "# hosts the resource.\n" +
                            "#\n" +
                            "\n" +
                            "resource_servers:\n" +
                            "  - path: \"/static\"\n" +
                            "    connection_type: \"tcp\"\n" +
                            "    servers:\n" +
                            "      - host: \"10.10.10.200\"\n" +
                            "        port: 1337\n" +
                            "    transparent_path: false\n" +
                            "#\n" +
                            "# Enable tracing of the iag.azn and pdweb.snoop tracing components.  The\n" +
                            "# output of each tracing component will be sent to the configured trace\n" +
                            "# file.\n" +
                            "#\n" +
                            "\n" +
                            "logging:\n" +
                            "  tracing:\n" +
                            "    - file_name: /var/tmp/iag-azn.log\n" +
                            "      component: iag.azn\n" +
                            "      level: 9\n" +
                            "    - file_name: /var/tmp/snoop.log\n" +
                            "      component: pdweb.snoop\n" +
                            "      level: 9";

const SAMPLE_TRACING = {
    "yaml": SAMPLE_TRACING_YAML,
    "link": DOC_URL + "examples-tracing-yaml"
};

const SAMPLE_UNAUTH_YAML = "version: \"22.07\"\n" +
                           "\n" +
                          "#\n" +
                          "# Configure an IAG container to proxy a single Web application.  Due to the\n" + 
                          "# fact that no identity source has been specified unauthenticated access\n" +
                          "# will be allowed to this application.\n" +
                          "#\n" +
                          "# Define a resource server which will be hosted at the '/static' path of the\n" +
                          "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                          "# hosts the resource.\n" +
                          "#\n" +
                          "\n" +
                          "resource_servers:\n" +
                          "  - path: \"/static\"\n" +
                          "    connection_type: \"tcp\"\n" +
                          "    servers:\n" +
                          "      - host: \"10.10.10.200\"\n" +
                          "        port: 1337";

const SAMPLE_UNAUTH = {
    "yaml": SAMPLE_UNAUTH_YAML,
    "link": DOC_URL + "examples-unauth-application-yaml"
};      

const SAMPLE_ISV_2FA_YAML = "version: \"22.07\"\n" +
                             "\n" +
                            "#\n" +
                            "# Configure an IAG container to proxy a single Web application, and define\n" +
                            "# an authorization policy for the Web application. The authorization policy\n" +
                            "# will enforce that a particular ACR is present in the token received from\n" +
                            "# IBM Security Verify.\n" +
                            "#\n" +
                            "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                            "# container.  Please note that the values provided below are for illustrative\n" +
                            "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                            "# using the instructions found at the following URL:\n" +
                            "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                            "#\n" +
                            "# The discovery endpoint has the following format:\n" +
                            "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                            "#\n" +
                            "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                            "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                            "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                            "# specified when creating the custom application within the IBM Security Verify\n" +
                            "# administrators console.\n" +
                            "#\n" +
                            "\n" +
                            "identity:\n" +
                            "  oidc:\n" +
                            "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                            "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                            "    client_secret: \"wPP8rM8N0d\"\n" +
                            "\n" +
                            "# Define a resource server which will be hosted at the '/static' path of the\n" +
                            "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                            "# hosts the resource.\n" +
                            "#\n" +
                            "\n" +
                            "resource_servers:\n" +
                            "  - path: \"/static\"\n" +
                            "    connection_type: \"tcp\"\n" +
                            "    servers:\n" +
                            "      - host: \"10.10.10.200\"\n" +
                            "        port: 1337\n" +
                            "    transparent_path: false\n" +
                            "#\n" +
                            "#\n" +
                            "# The following authorization policy will enforce that the current credential\n" +
                            "# contains the 'acr' attribute with the value 'urn:ibm:security:policy:id:2'.\n" +
                            "# If the 'acr' is any other value, this policy will obligate that \n" +
                            "# authentication should take place again and indicate to the identity provider\n" +
                            "# that we want the 'urn:ibm:security:policy:id:2' authentication experience to\n" +
                            "# take place.\n" +
                            "#\n" +
                            "# Note that:\n" +
                            "#  - The field which we receive from the identity provider is 'acr', this is \n" +
                            "#    stored in the credential and can be used in our policy rule authoring.\n" +
                            "#  - The parameter we send to the identity provider during authentication is\n" +
                            "#    named 'acr_values', this is a space separated string of authentication\n" +
                            "#    experiences that IAG as a relying party is asking to take place.\n" +
                            "#\n" +
                            "\n" +
                            "policies:\n" +
                            "  authorization:\n" +
                            "    - name: \"enforce_2fa\"\n" +
                            "      paths: \n" +
                            "        - \"*\"\n" +
                            "      rule: 'acr != \"urn:ibm:security:policy:id:2\"'\n" +
                            "      action: \"obligate\"\n" +
                            "      obligation:\n" +
                            "        oidc:\n" +
                            "          acr_values: \"urn:ibm:security:policy:id:2\"\n" +
                            "    - name: \"permit_with_2fa\"\n" +
                            "      paths: \n" +
                            "        - \"*\"\n" +
                            "      rule: 'acr = \"urn:ibm:security:policy:id:2\"'\n" +
                            "      action: \"permit\"\n" +
                            "    - name: \"deny_access\"\n" +
                            "      paths: \n" +
                            "        - \"*\"\n" +
                            "      rule: \"()\"\n" +
                            "      action: \"deny\"";

const SAMPLE_ISV_2FA = {
    "yaml": SAMPLE_ISV_2FA_YAML,
    "link": DOC_URL + "examples-2fa-verify-yaml"
};

const SAMPLE_VH_YAML = "version: \"22.07\"\n" +
                       "\n" +
                      "#\n" +
                      "# Configure an IAG container to proxy a single virtual host Web application.  \n" +
                      "# This configuration will simply define a server certificate, configure an IBM \n" +
                      "# Security Verify tenant as the identity provider, and define a single\n" +
                      "# application.\n" +
                      "# \n" +
                      "# Specify a server certificate to be used by the container.  The server \n" +
                      "# certificate was created using an openssl command:\n" +
                      "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                      "#        -out cert.pem\n" +
                      "#\n" +
                      "# To remove the dependency on external files a base-64 representation of the\n" +
                      "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                      "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                      "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                      "# \n" +
                      "# If no certificate is specified a self-signed certificate will be \n" +
                      "# automatically created and used by the container.\n" +
                      "#\n" +
                      "\n" +
                      "server:\n" +
                      "  ssl:\n" +
                      "    front_end:\n" +
                      "      certificate: \n" +
                      "        - \"@cert.pem\"\n" +
                      "        - \"@key.pem\"\n" +
                      "\n" +
                      "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                      "# container.  Please note that the values provided below are for illustrative\n" +
                      "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                      "# using the instructions found at the following URL:\n" +
                      "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                      "#\n" +
                      "# The discovery endpoint has the following format:\n" +
                      "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                      "#\n" +
                      "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                      "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                      "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                      "# specified when creating the custom application within the IBM Security Verify\n" +
                      "# administrators console.\n" +
                      "#\n" +
                      "\n" +
                      "identity:\n" +
                      "  oidc:\n" +
                      "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                      "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                      "    client_secret: \"wPP8rM8N0d\"\n" +
                      "\n" +
                      "#\n" +
                      "# Define a virtual host resource server which will be identified by the \n" +
                      "# 'test.ibm.com' host header.  A single Web server, located at \n" +
                      "# http://10.10.10.200:1337, hosts the resource.\n" +
                      "#\n" +
                      "\n" +
                      "resource_servers:\n" +
                      "  - virtual_host: \"test.ibm.com\"\n" +
                      "    connection_type: \"tcp\"\n" +
                      "    servers:\n" +
                      "      - host: \"10.10.10.200\"\n" +
                      "        port: 1337";

const SAMPLE_VH = {
    "yaml": SAMPLE_VH_YAML,
    "link": DOC_URL + "examples-virtualhost-application-yaml"
};

const SAMPLE_HTTPTRAN_YAML = "version: \"22.07\"\n" +
                             "\n" +
                            "#\n" +
                            "# Configure an IAG container to proxy a single Web application.  This \n" +
                            "# configuration will simply define a server certificate, configure an IBM \n" +
                            "# Security Verify tenant as the identity provider, define a single\n" +
                            "# application, and define a HTTP transformation policy for the application.\n" +
                            "#\n" +
                            "# Specify a server certificate to be used by the container.  The server \n" +
                            "# certificate was created using an openssl command:\n" +
                            "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                            "#        -out cert.pem\n" +
                            "#\n" +
                            "# To remove the dependency on external files a base-64 representation of the\n" +
                            "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                            "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                            "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                            "# \n" +
                            "# If no certificate is specified a self-signed certificate will be \n" +
                            "# automatically created and used by the container.\n" +
                            "#\n" +
                            "\n" +
                            "server:\n" +
                            "  ssl:\n" +
                            "    front_end:\n" +
                            "      certificate: \n" +
                            "        - \"@cert.pem\"\n" +
                            "        - \"@key.pem\"\n" +
                            "\n" +
                            "# Specify an IBM Security Verify tenant as the identity provider for the \n" +
                            "# container.  Please note that the values provided below are for illustrative\n" +
                            "# purposes only and don't reflect a real tenant.  A free tenant can be created \n" +
                            "# using the instructions found at the following URL:\n" +
                            "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                            "#\n" +
                            "# The discovery endpoint has the following format:\n" +
                            "#    https://<tenant host>/oidc/endpoint/default/.well-known/openid-configuration\n" +
                            "#\n" +
                            "# The redirect URI which is used in the SSO flow is constructed from the host \n" +
                            "# header contained in the request, appended with '/pkmsoidc' (for example: \n" +
                            "# https://ibm-app-gateway.ibm.com/pkmsoidc).  This redirect URI should be\n" +
                            "# specified when creating the custom application within the IBM Security Verify\n" +
                            "# administrators console.\n" +
                            "#\n" +
                            "\n" +
                            "identity:\n" +
                            "  oidc:\n" +
                            "    discovery_endpoint: \"https://ibm-app-gw.verify.ibm.com/oidc/endpoint/default/.well-known/openid-configuration\"\n" +
                            "    client_id: \"300141b6-690b-4e4e-862d-2c96da2bb1ba\"\n" +
                            "    client_secret: \"wPP8rM8N0d\"\n" +
                            "\n" +
                            "# Define a resource server which will be hosted at the '/static' path of the\n" +
                            "# IAG container.  A single Web server, located at http://10.10.10.200:1337, \n" +
                            "# hosts the resource.\n" +
                            "#\n" +
                            "\n" +
                            "resource_servers:\n" +
                            "  - path: \"/static\"\n" +
                            "    connection_type: \"tcp\"\n" +
                            "    servers:\n" +
                            "      - host: \"10.10.10.200\"\n" +
                            "        port: 1337\n" +
                            "    transparent_path: false\n" +
                            "#\n" +
                            "#\n" +
                            "# Define the policies for the gateway.\n" +
                            "#\n" +
                            "\n" +
                            "policies:\n" +
                            "    #\n" +
                            "    # Specify a HTTP transformation policy, applied to all \n" +
                            "    # resources, which will add the 'IAG_HTTP_XFORM_RESP: HELLO_WORLD' \n" +
                            "    # HTTP header to all responses.\n" +
                            "    #\n" +
                            "\n" +
                            "    http_transformations:\n" +
                            "      response:\n" +
                            "        - name: \"ResponseHeaderInjector\"\n" +
                            "          method: \"*\"\n" +
                            "          paths: \n" +
                            "            - \"*\"\n" +
                            "          rule: |\n" +
                            "            <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                            "            <xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\">\n" +
                            "              <xsl:strip-space elements=\"*\" />\n" +
                            "              <xsl:template match=\"/\">\n" +
                            "                <HTTPResponseChange>\n" +
                            "                  <xsl:apply-templates />\n" +
                            "                </HTTPResponseChange>\n" +
                            "              </xsl:template>\n" +
                            "              <xsl:template match=\"//HTTPRequest/Headers\">\n" +
                            "                <Header action=\"add\" name=\"IAG_HTTP_XFORM_RESP\">HELLO_WORLD</Header>\n" +
                            "              </xsl:template>\n" +
                            "            </xsl:stylesheet>";

const SAMPLE_HTTPTRAN = {
    "yaml": SAMPLE_HTTPTRAN_YAML,
    "link": DOC_URL + "examples-transformation-yaml"
};

const SAMPLE_OAUTH_ISVA_YAML = "version: \"22.07\"\n" +
                               "\n" +
                              "#\n" +
                              "# Configure an IAG container with a very basic configuration.  This \n" +
                              "# configuration will simply define a server certificate, and configure an IBM \n" +
                              "# Security Verify Access environment as the OAuth introspection endpoint.\n" +
                              "#\n" +
                              "# Specify a server certificate to be used by the container.  The server \n" +
                              "# certificate was created using an openssl command:\n" +
                              "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                              "#        -out cert.pem\n" +
                              "#\n" +
                              "# To remove the dependency on external files a base-64 representation of the\n" +
                              "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                              "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                              "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                              "# \n" +
                              "# If no certificate is specified a self-signed certificate will be \n" +
                              "# automatically created and used by the container.\n" +
                              "#\n" +
                              "\n" +
                              "server:\n" +
                              "  ssl:\n" +
                              "    front_end:\n" +
                              "      certificate: \n" +
                              "        - \"@cert.pem\"\n" +
                              "        - \"@key.pem\"\n" +
                              "\n" +
                              "#\n" +
                              "# Specify an IBM Security Verify Access environment as the OAuth introspection \n" +
                              "# endpoint for the container.  Please note that the values provided below are \n" +
                              "# for illustrative purposes only and don't reflect a real environment. \n" +
                              "#\n" +
                              "\n" +
                              "identity:\n" +
                              "  oauth:\n" +
                              "    - name: VerifyAccess\n" +
                              "      attributes:\n" +
                              "        - +*\n" +
                              "      client_id: c10e5e0b-1019-49b8-b7e2-600af9310e010\n" +
                              "      client_secret: t21bxcYY92\n" +
                              "      introspection_endpoint: \"https://www.myidp.ibm.com/mga/sps/oauth/oauth20/introspect\"\n" +
                              "      mapped_identity: \"{sub}\"\n" +
                              "      multi_valued_scope: true\n" +
                              "      restricted: false\n" +
                              "      token_type_hint: access_token\n" +
                              "      auth_method: client_secret_post\n" +
                              "      ssl:\n" +
                              "        certificate:\n" + 
                              "          - \"@cert.cer\"";

const SAMPLE_OAUTH_ISVA = {
    "yaml": SAMPLE_OAUTH_ISVA_YAML,
    "link": DOC_URL + "examples-oauth-verify-access-yaml"
};

const SAMPLE_OAUTH_ISV_YAML = "version: \"22.07\"\n" +
                              "\n" +
                              "#\n" +
                              "# Configure an IAG container with a very basic configuration.  This \n" +
                              "# configuration will simply define a server certificate, and configure an IBM \n" +
                              "# Security Verify tenant as the OAuth introspection endpoint.\n" +
                              "#\n" +
                              "# Specify a server certificate to be used by the container.  The server \n" +
                              "# certificate was created using an openssl command:\n" +
                              "#  openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 \\n" +
                              "#        -out cert.pem\n" +
                              "#\n" +
                              "# To remove the dependency on external files a base-64 representation of the\n" +
                              "# key.pem and cert.pem files can be embedded within this yaml, where the \n" +
                              "# base-64 encoded file is prefixed with 'B64:', for example: \n" +
                              "#   \"B64:PGhy4KICAgIDxoND5....\"\n" +
                              "# \n" +
                              "# If no certificate is specified a self-signed certificate will be \n" +
                              "# automatically created and used by the container.\n" +
                              "#\n" +
                              "\n" +
                              "server:\n" +
                              "  ssl:\n" +
                              "    front_end:\n" +
                              "      certificate: \n" +
                              "        - \"@cert.pem\"\n" +
                              "        - \"@key.pem\"\n" +
                              "\n" +
                              "#\n" +
                              "# Specify an IBM Security Verify tenant as the OAuth introspection endpoint for \n" +
                              "# the container.  Please note that the values provided below are for \n" +
                              "# illustrative purposes only and don't reflect a real tenant.  A free tenant \n" +
                              "# can be created using the instructions found at the following URL:\n" +
                              "#    https://www.ibm.com/us-en/marketplace/cloud-identity-for-consumers\n" +
                              "#\n" +
                              "\n" +
                              "identity:\n" +
                              "  oauth:\n" +
                              "    - name: Verify\n" +
                              "      attributes:\n" +
                              "        - +*\n" +
                              "      client_id: c10e5e0b-1019-49b8-b7e2-600af9310e010\n" +
                              "      client_secret: t21bxcYY92\n" +
                              "      introspection_endpoint: \"https://ibm-app-gw.verify.ibm.com/v1.0/endpoint/default/introspect\"\n" +
                              "      mapped_identity: \"{sub}\"\n" +
                              "      multi_valued_scope: true\n" +
                              "      restricted: false\n" +
                              "      token_type_hint: access_token\n" +
                              "      auth_method: client_secret_post";

const SAMPLE_OAUTH_ISV = {
    "yaml": SAMPLE_OAUTH_ISV_YAML,
    "link": DOC_URL + "examples-oauth-verify-yaml"
};

/**
 * Properties for the copy button.
 */
const props = () => ({
  feedback: 'Copied!',
  feedbackTimeout: 3000,
  iconDescription: 'Copy to clipboard',
  onClick: copyTextToClipboard,
  style: {zIndex: "15", float: "right"}
});

/**
 * Function is called to copy the editor text to the clipboard.
 */
const copyTextToClipboard = () => {
    var editor = ace.edit("yamlEditor");

    const el = document.createElement('textarea');
    el.value = editor.getSession().getValue();;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

/**
 * On editor change need to update the window copy of the IAG config
 */
const editorChange = (newValue) => {
    
    var editor = ace.edit("yamlEditor");

    var yamlop = editor.getSession().getValue();
    window.iagyaml = yamlop;

    updateLinks(yamlop);
};

/**
 * This function will check to see if a component has an existing YAML entry.
 * If so the link in the menu will be underlined as an indication to the user.
 */
const updateLinks = (yamlop) => {
    try {
        var json = yaml.load(yamlop);

        <REMOVE_POPCLASS>

        if(json) {
            <ADD_POPCLASS>
        }
    } catch(error) {
        // Ignore it
    }
};

const loadSample = () => {

    var selection = document.getElementById("sample_yaml_id").value;

    var editor = ace.edit("yamlEditor");
    var docLink = document.getElementById("sample_yaml_doc_link");
    docLink.href = "#";
    docLink.style.display = "none";

    var obj = {};

    switch(selection) {
        case "empty":
            obj = SAMPLE_EMPTY;
            break;
        case "authz":
            obj = SAMPLE_AUTHZ;
            break;
        case "basic":
            obj = SAMPLE_BASIC;
            break;
        case "isva":
            obj = SAMPLE_ISVA;
            break;
        case "credviewer":
            obj = SAMPLE_CREDVIEWER;
            break;
        case "lwp":
            obj = SAMPLE_LWP;
            break;
        case "rl":
            obj = SAMPLE_RL;
            break;
        case "stdapp":
            obj = SAMPLE_STDAPP;
            break;
        case "trace":
            obj = SAMPLE_TRACING;
            break;
        case "unauth":
            obj = SAMPLE_UNAUTH;
            break;
        case "isv2fa":
            obj = SAMPLE_ISV_2FA;
            break;
        case "vh":
            obj = SAMPLE_VH;
            break;
        case "httptran":
            obj = SAMPLE_HTTPTRAN;
            break;
        case "oauthisva":
            obj = SAMPLE_OAUTH_ISVA;
            break;
        case "oauthisv":
            obj = SAMPLE_OAUTH_ISV;
            break;
        
    }

    if(obj && obj.yaml && obj.link) {
        editor.setValue(obj.yaml);
        docLink.href = obj.link;
        docLink.style.display = "block";
    }
};

const LandingPage = () => {

    window.iagpage = "yaml_editor";
    
    const inputRef = React.createRef();

    // Extand the ace yaml mode to include custom validation
    addCustomYamlValidation(ace);

    return (
        <div className="bx--grid--no-gutter bx--grid--full-width landing-page">
          <div className="bx--row landing-page__banner" style={{paddingBottom:"3rem"}}>
            <div className="bx--col-lg-13 bx--offset-lg-1">
              <h1 className="landing-page__heading">
                <APPLICATION_NAME>
              </h1>
            </div>
          </div>
          <div className="bx--row landing-page__r2">
            <div className="bx--col bx--no-gutter">
                  <div className="bx--grid--no-gutter bx--grid--no-gutter bx--grid--full-width">
                    <div >
                      <div>
                        <h2 className="landing-page__subheading">
                          YAML
                        </h2>
                        <br/><br/>
                        <Select
                          id={"sample_yaml_id"} labelText="Load Sample" onChange={loadSample}>
                          <SelectItem text="None" value="" />
                          <SelectItem text="Clear" value="empty" />
                          <SelectItem text="Authorization" value="authz" />
                          <SelectItem text="Basic" value="basic" />
                          <SelectItem text="Credential Viewer Application" value="credviewer" />
                          <SelectItem text="HTTP Transformation" value="httptran" />
                          <SelectItem text="IBM Security Verify Access" value="isva" />
                          <SelectItem text="IBM Security Verify with 2FA" value="isv2fa" />
                          <SelectItem text="Local Web Pages" value="lwp" />
                          <SelectItem text="OAuth with IBM Security Verify Access" value="oauthisva" />
                          <SelectItem text="OAuth with IBM Security Verify" value="oauthisv" />
                          <SelectItem text="Rate Limiting" value="rl" />
                          <SelectItem text="Standard Application" value="stdapp" />
                          <SelectItem text="Tracing Activation" value="trace" />
                          <SelectItem text="Unauthenticated Application" value="unauth" />
                          <SelectItem text="Virtual Host Application" value="vh" />
                        </Select>
                        <br/>
                        <Link id={"sample_yaml_doc_link"} style={{display:"none"}} target="_blank" href="#">Sample YAML Documentation</Link>
                        <CopyButton {...props()} />
                        <AceEditor style={{width: '100%', height: '65vh', border: 'groove'}}
                            mode="yaml"
                            theme="github"
                            name="yamlEditor"
                            id="yamlEditor"
                            onChange={editorChange}
                            editorProps={{ $blockScrolling: true }}
                            value={window.iagyaml}
                            setOptions={{
                              enableBasicAutocompletion: true,
                              enableLiveAutocompletion: true,
                              enableSnippets: true,
                              highlightActiveLine: true,
                              showPrintMargin: false,
                              copyWithEmptySelection: true,
                              useWorker: true,
                            }}
                          />
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
    );
};

export default LandingPage;
