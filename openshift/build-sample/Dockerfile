# (c) Copyright International Business Machines Corp. 2019
# The source code for this program is not published or otherwise divested
# of its trade secrets, irrespective of what has been deposited with the
# U.S. Copyright Office.

# The container is based on the IAG container.
FROM ibmcom/ibm-application-gateway:20.04

# Copy the configuration files from the config directory
# to the docker image.
COPY config/* /var/iag/config/

# Some labels which will be associated with the image.
LABEL maintainer="iag@acme.com" \
    vendor="ACME"

