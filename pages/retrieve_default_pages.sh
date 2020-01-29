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

temp_unzip_dir=`mktemp -d`
temp_dir=`mktemp -d`

trap cleanup 1 2 3 6

cleanup()
{
  echo "Cleaning up...."
  rm -rf $temp_unzip_dir $temp_dir
  exit 1
}

echo "Starting the container...."

IAG_IMAGE=${1:-sec-iag-team-docker-local.artifactory.swg-devops.com/iag:latest}

IAG_CONTAINER=$(docker run --rm -dt --entrypoint bash ${IAG_IMAGE})

ZipDirectory() {
    CONTAINER=$1
    CONTENT_PATH=$2
    CONTENT_OUTPUT=$3
    LAST_PWD=${PWD}

    echo "Zipping `basename $CONTENT_OUTPUT`"

    # Grab the files from the docker container.
    echo "   copying the files from the docker container...."
    docker exec -it ${CONTAINER} find ${CONTENT_PATH}
    docker cp ${CONTAINER}:${CONTENT_PATH} ${temp_dir}

    # Unzip the current zip file.
    echo "   unzipping...."
    cd ${temp_unzip_dir}
    unzip -q ${CONTENT_OUTPUT}

    # Compare the contents of the files.
    echo "   comparing...."
    diff -rq ${temp_unzip_dir} $temp_dir/$(basename ${CONTENT_PATH})

    if [ $? -ne 0 ] ; then
        echo "    updates are available, zipping...."
        cd ${temp_dir}/$(basename ${CONTENT_PATH})
        zip -r ${CONTENT_OUTPUT} *
    else
        echo "     no update required."
    fi

    cd ${LAST_PWD}

    rm -rf $temp_unzip_dir/* $temp_dir/*
}

echo "Zipping the files....."

ZipDirectory ${IAG_CONTAINER} /var/pdweb/default/server-root/lib/errors ${PWD}/error_pages.zip
ZipDirectory ${IAG_CONTAINER} /var/pdweb/default/server-root/lib/management ${PWD}/management_pages.zip
ZipDirectory ${IAG_CONTAINER} /var/pdweb/default/server-root/lib/junction-root ${PWD}/local_pages.zip

echo "Stopping the container...."

docker stop ${IAG_CONTAINER}

cleanup

