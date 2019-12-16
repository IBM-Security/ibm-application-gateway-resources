# Overview

This directory contains the files which can be used to create a Kubernetes Custom Resource Definition (CRD).  The CRD is used to define the format of a Kubernetes Custom Object, which in turn can hold the IBM Application Gateway (IAG) configuration information.  Further information on the Kubernetes CRD functionality is available in the Kubernetes documentation: [https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/](https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/)

# Files

|File Name|Description
|---------|-----------
| crd.yaml| A basic custom resource definition for the IAG container.  This file doesn't contain the full schema of the IAG configuration, but instead just defines the top level configuration items.
| generate\_full_crd.py | This python script can be used to generate a full custom resource definition, which contains the full IAG configuration schema.  The schema is obtained from the OpenAPI schema files found within the 'openapi' directory of this GitHub repository.  Execute the 'python3 generate\_full_crd.py --help' command to obtain help on running this script.

