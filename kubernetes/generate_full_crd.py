#!/usr/bin/python

"""
Copyright contributors to the Application Gateway project
"""

import sys
import argparse
import logging
import yaml
import os

from collections import namedtuple

############################################################################
# This script is used to generate a full custom resource definition based
# on the supplied openapi schema files.

logger = logging.getLogger(__name__)

############################################################################
# Section: utility functions

def load_yaml(filename):
    """
    Load the specified file as yaml.
    """

    document = None

    try:
        with open(filename, 'r') as stream:
            document = yaml.safe_load(stream)
    except yaml.YAMLError as exc:
        logger.error(exc)
        sys.exit(1)
    except:
        logger.error("Unexpected error:", sys.exc_info()[0])
        sys.exit(1)

    return document

def delete_keys_from_dict(d, to_delete):
    """
    Delete keys of the specified name from the supplied dictionary.
    """

    if isinstance(to_delete, str):
        to_delete = [to_delete]

    if isinstance(d, dict):

        for single_to_delete in set(to_delete):
            if single_to_delete in d:
                del d[single_to_delete]

        for k, v in d.items():
            delete_keys_from_dict(v, to_delete)

    elif isinstance(d, list):

        for i in d:
            delete_keys_from_dict(i, to_delete)

    return d

############################################################################
# Section: Argument Parser

def process_argv():
    """
    Create the command parser and then parse the arguments.
    """

    parser = argparse.ArgumentParser(description="This script is designed "
        "to construct a complete custom resource definition for the IBM "
        "Application Gateway container using the supplied OpenAPI schema "
        "files.")

    parser.add_argument("-v", "--verbose", help="Display the commands as " 
                "they are executed.", action="store_true")

    parser.add_argument("-c", "--crd", help="The basic CRD template file.",
                        required = True)

    parser.add_argument("-s", "--schema_path", help="The OpenAPI schema files.",
                        required = True)

    parser.add_argument("-o", "--output", 
                help="The name of the file to generate.", required = True)

    return parser.parse_args()

############################################################################
# Section: Main Line

# Parse our command line arguments.
args = process_argv()

# Set up our logging.
logging.basicConfig()
logger.setLevel(logging.DEBUG if args.verbose else logging.INFO)

# Load our base CRD.
full_document = load_yaml(args.crd)

# Work out which schema files are required.
mapInfo = namedtuple("mapInfo", "file_name from_subpath to_subpath")

schema_files = [
    mapInfo(
        file_name    = "advanced.yaml", 
        from_subpath = None,
        to_subpath   = None
    ),
    mapInfo(
        file_name    = "authorization.yaml", 
        from_subpath = None,
        to_subpath   = None
    ),
    mapInfo(
        file_name    = "logging.yaml", 
        from_subpath = None,
        to_subpath   = None
    ),
    mapInfo(
        file_name    = "server.yaml", 
        from_subpath = None,
        to_subpath   = None
    ),
    mapInfo(
        file_name    = "policies.yaml", 
        from_subpath = None,
        to_subpath   = None
    ),
    mapInfo(
        file_name    = "ci_oidc.yaml", 
        from_subpath = None,
        to_subpath   = [ "identity", "properties" ]
    ),
    mapInfo(
        file_name    = "resource_server.yaml",
        from_subpath = [ "resource_server" ],
        to_subpath   = [ "resource_servers", "items" ]
    )
]

# Process each of our schema files, adding in the schema file to our
# master document.
for schema_file in schema_files:
    document = load_yaml(os.path.join(args.schema_path, schema_file.file_name))

    if schema_file.from_subpath is not None:
        for path in schema_file.from_subpath:
            document = document[path]

    properties = full_document['spec']['validation']['openAPIV3Schema']\
            ['properties']['spec']['properties']

    # If a different path has been specified we need to move to the
    # correct subpath.
    if schema_file.to_subpath is not None:
        for path in schema_file.to_subpath:
            if path not in properties:
                properties[path] = {}

            properties = properties[path]

    properties.update(document)

# The 'default' property is not supported and so we need to iterate through
# every object/node removing any instances of the 'default' property.
full_document = delete_keys_from_dict(full_document, "default")

# Write the yaml document.
with open(args.output, 'w') as yaml_file:
    yaml.dump(full_document, yaml_file)

