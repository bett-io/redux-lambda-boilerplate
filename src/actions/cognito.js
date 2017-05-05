import AWS from 'aws-sdk';
import awsConfig from '../../aws.config.json';

const facebookCredName = 'graph.facebook.com';

const createAWSCreds = (fbToken) => {
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityCredentials.html
  let creds = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: awsConfig.cognito.identity_pool_id,
  }, {
    region: awsConfig.common.region,
  });

  // http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-browser-credentials-cognito.html
  if (fbToken) {
    creds.params.Logins = {};
    creds.params.Logins[facebookCredName] = fbToken;
  }

  return creds;
};

const initialize = (fbToken) => new Promise((resolve, reject) => {
  AWS.config.region = awsConfig.common.region;
  AWS.config.credentials = createAWSCreds(fbToken);

  AWS.config.credentials.get(function(err) {
    if (err) {
      reject();
    } else {
      resolve();
    }
  });
});

const updateFbToken = (fbToken) => new Promise((resolve, reject) => {
  if (!AWS.config.credentials) {
    reject('Assertion failure');
    return;
  }

  AWS.config.credentials.params.Logins = {};
  AWS.config.credentials.params.Logins[facebookCredName] = fbToken;
  AWS.config.credentials.expired = true;

  AWS.config.credentials.get(function(err) {
    if (err) {
      reject();
    } else {
      resolve();
    }
  });
});

export default {
  initialize,
  updateFbToken,
};
