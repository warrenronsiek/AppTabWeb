#!/usr/bin/env bash

aws s3 rm  s3://apptab.io/ --recursive
aws s3 cp $(pwd)/dist/ s3://apptab.io --recursive
aws cloudfront create-invalidation --distribution-id E2R6SUX14P500V --paths '/*'