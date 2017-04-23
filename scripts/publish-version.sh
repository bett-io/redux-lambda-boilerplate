#!/usr/bin/env bash

set -e

# Make sure aws-cli installed
which aws || { echo 'aws-cli(https://aws.amazon.com/cli/) have to be installed first'; exit 1; }
which jq || { echo 'jq(https://stedolan.github.io/jq/) have to be installed first'; exit 1; }

script_dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
aws_config="$script_dir/../aws.config.json"
lambda_name=`jq -r '.lambda.function_name' "$aws_config"`
git_hash=`git rev-parse HEAD`

if [ -z "$AWS_DEFAULT_REGION" ]; then
    aws_region="us-west-2"
else
    aws_region=$AWS_DEFAULT_REGION
fi

aws lambda publish-version --function-name $lambda_name --description $git_hash --region $aws_region
