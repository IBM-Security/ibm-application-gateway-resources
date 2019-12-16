# Overview

This directory contains some resource files which can be used to assist with the deployment of the IBM Application Gateway (IAG) in a Red Hat OpenShift environment.

# Files

|File Name|Description
|---------|-----------
| build-sample | Sample files which illustrates how to bake the IAG configuration into a new image.
| iag-build.yaml | A sample YAML definition which shows how to generate a custom build of the IAG image.
|iag-crd-roles.yaml | A YAML file which shows how to define a role which allows access to a Custom Resource Definition.
|iag-template.yaml | A YAML file which shows how to define an OpenShift template for the IAG image.
