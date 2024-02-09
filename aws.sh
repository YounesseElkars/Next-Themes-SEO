#!/bin/bash

## DEPLOY STATIC EXPORT TO S3 BUCKET ##

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
LOCAL_PATH=out
S3_BUCKET=
S3_PATH=



# Install AWS CLI if not already installed
command -v aws >/dev/null 2>&1 || { echo >&2 "AWS CLI is not installed. Aborting."; exit 1; }

# Set AWS credentials
export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
export AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION

# Sync local assets to S3 bucket
aws s3 sync $LOCAL_PATH $S3_PATH --acl public-read --delete
aws s3 website s3://$S3_BUCKET/ --index-document index.html --error-document 404.html

# Output success message
echo "Static assets deployed to S3 successfully."