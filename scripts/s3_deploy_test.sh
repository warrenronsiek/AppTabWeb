#!/usr/bin/env bash

aws s3 rm  s3://apptabtest.io/ --recursive
aws s3 cp $(pwd)/dist/ s3://apptabtest.io --recursive
#aws cloudfront create-invalidation --distribution-id E1AIUK0V3JOT56 --paths /*