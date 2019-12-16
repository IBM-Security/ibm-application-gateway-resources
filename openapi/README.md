# Overview

This directory contains the OpenAPI schema files which are used to define the YAML configuration format for the IBM Application Gateway (IAG) container.  The 'openapi.yaml' file contains the top level schema.  Each of the other yaml files are referenced from the 'openapi.yaml' file.

# Purpose
These schema files are used to:

1. Generate the configuration documentation for the IAG container;
2. Generate the python API which can be used to automate the construction of the configuration YAML file for the IAG container;
3. Generate the schema component of the Kubernetes Custom Resource Definition (CRD).

