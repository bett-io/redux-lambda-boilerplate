#!/usr/bin/env bash

set -e

lambda_name=helloworld-lambda-web
git_hash=`git rev-parse HEAD`

# Make sure aws-cli installed
which aws || { echo 'aws-cli(https://aws.amazon.com/cli/) have to be installed first'; exit 1; }

if [ -z "$AWS_DEFAULT_REGION" ]; then
    aws_region="us-west-2"
else
    aws_region=$AWS_DEFAULT_REGION
fi

aws lambda publish-version --function-name $lambda_name --description $git_hash --region $aws_region
