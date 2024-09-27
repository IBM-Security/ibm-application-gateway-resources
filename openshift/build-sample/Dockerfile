# Copyright contributors to the Application Gateway project

# The container is based on the IAG container.
FROM icr.io/ibmappgateway/ibm-application-gateway:24.09

# Copy the configuration files from the config directory
# to the docker image.
COPY config/* /var/iag/config/

# Some labels which will be associated with the image.
LABEL maintainer="iag@acme.com" \
    vendor="ACME"

