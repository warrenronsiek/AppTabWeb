#!/usr/bin/env bash

aws s3 rm  s3://apptabtest.io/ --recursive
aws s3 cp $(pwd)/dist/ s3://apptabtest.io --recursive