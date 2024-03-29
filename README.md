# Overview
This repository contains the SDK for the IBM Application Gateway (IAG) container.  This includes the openapi specification files which define the format of the IAG configuration yaml, along with a python API which can be used to generate and manage the IAG configuration.

# Directories

|Directory Name|Description
|--------------|-----------
| config-ui | This directory contains source code for the configuration YAML UI [live version](https://ibm.biz/ibm-app-gateway-yaml) (see [README.md](config-ui/generator/README.md)).
| kubernetes | This directory contains some files which are useful when executing the IAG container in a Kubernetes environment (see [README.md](kubernetes/README.md)).
| openapi | This directory contains the OpenAPI schema files which are used to define the YAML format of the IAG configuration (see [README.md](openapi/README.md)).
| openshift | This directory contains some files which are useful when executing the IAG container in a RedHat OpenShift environment (see [README.md](openshift/README.md)).
| pages | This directory contains the default pages included in the IBM Application Gateway (IAG) (see [README.md](pages/README.md)).
| python | This directory contains the python API which can be used to automate the generation of the IAG YAML configuration files (see [README.md](python/README.md)).
