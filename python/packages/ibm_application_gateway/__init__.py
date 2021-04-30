"""
Copyright contributors to the Application Gateway project
"""

import logging
import os

# Check to see if the debugging environment variable has been set, and if so
# we want to enable the specified log level.
if "IAG_DEBUG" in os.environ:
    logging.basicConfig(level=os.environ['IAG_DEBUG'])

