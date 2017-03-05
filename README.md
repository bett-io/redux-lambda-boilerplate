# helloworld on aws lambda for a web

react, react-router, react-bootstrap, webpack, babel, eslint, mocha, chai, enzyme

# dev, standalone and lambda
There are three ways to run **helloworld-lambda-web**; dev, standalone and lambda.

## dev
```
npm run start:dev
```

This mode runs **helloworld-lambda-web** on webpack-dev-server. You can get the benefit of hot module repleacement from webpack-dev-server. But note that only client part of **helloworld-lambda-web** is used in this mode. The files under the server directory are not used at all in this mode. You would also notice that react server rendering also doesn't work in this mode because it doesn't use server codes.

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

# TODO
- https://github.com/motdotla/node-lambda (or other lambda deployment tool)
- Integrate with CI tool (https://github.com/integrations/feature/continuous-integration)
