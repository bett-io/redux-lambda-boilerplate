#!/usr/bin/env bash

# Deploys the Lambda .zip file to AWS Lambda as version $LATEST

set -e

# Make sure aws-cli installed
which aws || { echo 'aws-cli(https://aws.amazon.com/cli/) have to be installed first'; exit 1; }
which jq || { echo 'jq(https://stedolan.github.io/jq/) have to be installed first'; exit 1; }

script_dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
aws_config="$script_dir/../aws.config"
lambda_name=`jq -r '.lambda.function_name' "$aws_config"`
zip_file="$script_dir/../dist.zip"

if [ -z "$AWS_DEFAULT_REGION" ]; then
    aws_region="us-west-2"
else
    aws_region=$AWS_DEFAULT_REGION
fi

aws lambda update-function-code --function-name $lambda_name --zip-file fileb://$zip_file --region $aws_region
