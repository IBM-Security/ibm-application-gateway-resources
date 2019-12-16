#!/bin/bash

#
# retrieve_default_pages.sh
#
# This script can be used to generate zip files containing the default pages
# for the IBM Application Gateway (IAG). This script operates by temporarily 
# starting an IAG container, copying over the default contents and creating
# the zip files.
#
# By default, this script will use the current latest image, this script can
# be executed against a different image by passing the complete image tag
# as an argument.
#
# The zip files will be created in the current working directory.
#

IAG_IMAGE=${1:-ibmcom/ibm-application-gateway:latest}

IAG_CONTAINER=$(docker run --rm -dt --entrypoint bash ${IAG_IMAGE})

ZipDirectory() {
	CONTAINER=$1
	CONTENT_PATH=$2
	CONTENT_OUTPUT=$3
	LAST_PWD=${PWD}
	TMP_DIR=$(mktemp -d)

	docker exec -it ${CONTAINER} find ${CONTENT_PATH}
	docker cp ${CONTAINER}:${CONTENT_PATH} ${TMP_DIR}

	cd ${TMP_DIR}/$(basename ${CONTENT_PATH})
	zip -r ${CONTENT_OUTPUT} *
	cd ${LAST_PWD}
}

ZipDirectory ${IAG_CONTAINER} /var/pdweb/default/server-root/lib/errors ${PWD}/error_pages.zip
ZipDirectory ${IAG_CONTAINER} /var/pdweb/default/server-root/lib/management ${PWD}/management_pages.zip
ZipDirectory ${IAG_CONTAINER} /var/pdweb/default/server-root/lib/junction-root ${PWD}/local_pages.zip

docker stop ${IAG_CONTAINER}
