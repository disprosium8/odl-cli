#!/usr/bin/env python

# =============================================================================
#  High Performance ParalleX Library (libhpx)
#
#  Copyright (c) 2013-2015, Trustees of Indiana University,
#  All rights reserved.
#
#  This software may be modified and distributed under the terms of the BSD
#  license.  See the COPYING file for details.
#
#  This software was created at the Indiana University Center for Research in
#  Extreme Scale Technologies (CREST).
# =============================================================================

from setuptools import setup

version = "0.1"

setup(
    name="odl-cli",
    version=version,
    packages=[],
    package_data={},
    author="Ezra Kissel",
    author_email="ezkissel@indiana.edu",
    license="BSD",
    url="https://github.com/disprosium8/odl-cli",
    description="OpenDayLight-CommandLine Interface",
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Topic :: Utilities",
        "License :: OSI Approved :: BSD License",
        ],
    install_requires=[
        "python-odl",
        "requests",
        "docopt",
        ],
    entry_points = {
        'console_scripts': [
            'blippd = blipp.blippd:main',
            'blippcmd = scripts.blippcmd:main'
            ]
        }
    )
