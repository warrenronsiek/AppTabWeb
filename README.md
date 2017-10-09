AppTabWeb
=========

Notes:
-----
* apptabwebS3.yaml is associated with the cloudformation stack AppTabIO in us-west-2
* apptabwebCloudfront.yaml is associated with the cloudformation stack AppTabCloudFront in us-east-1

Cloudformation
---------------
The differnece between the stacks is zero, however the route 53 may point to the S3 bucket and not the cloudfront
distribution. This is because you would have to invalidate the distribution each time you wanted to change something
otherwise. 