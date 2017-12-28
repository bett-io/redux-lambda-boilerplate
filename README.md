# helloworld on aws lambda for a web

react, react-router, react-bootstrap, redux, webpack, babel, eslint, jest, enzyme
[![Build Status](https://travis-ci.org/project20-17/helloworld-lambda-web.svg?branch=master)](https://travis-ci.org/project20-17/helloworld-lambda-web)

# Installing dependencies
Once you have the application files cloned, just go into the application directory and run command:
```
npm install
```
to download project dependencies.

# dev, standalone and lambda
There are three ways to run **helloworld-lambda-web**; dev, standalone and lambda.

## dev
```
npm run start:dev
```

This mode runs **helloworld-lambda-web** on webpack-dev-server. You can get the benefit of hot module replacement from webpack-dev-server. But note that only client part of **helloworld-lambda-web** is used in this mode. The files under the server directory are not used at all in this mode. You would also notice that react server rendering also doesn't work in this mode because it doesn't use server codes.

## standalone
```
npm run start:standalone
```

In this mode, **helloworld-lambda-web** runs on local express server. As this mode uses server code as well as client code, you can test and verify server codes. The bundles for this mode can be found under /standalone directory.

## lambda
```
npm run build
```

This mode builds and bundles **helloworld-lambda-web** to run on AWS Lambda. You can upload /dist directory to your Lambda environment. **helloworld-lambda-web** uses [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) to run express server on Lambda.

# Deployment to lambda
```
AWS_ACCESS_KEY_ID=[your AWS access key id] AWS_SECRET_ACCESS_KEY=[your AWS secret access key] npm run belazy
```

Or you can store those two environment variables to deploy.env file. Refer to node-lambda for further information.

# TODO
- https://github.com/motdotla/node-lambda (or other lambda deployment tool)
- Integrate with CI tool (https://github.com/integrations/feature/continuous-integration)
