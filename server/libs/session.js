import connectDynamoDb from 'connect-dynamodb';
import session from 'express-session';

const createInitialReduxState = (session) => {
  const state = {
    sessionCounter: {
      counter: session.counter,
    },
  };

  if (session.uid && session.name && session.pictureUrl && session.fbToken) {
    state.user = {
      uid: session.uid,
      name: session.name,
      pictureUrl: session.pictureUrl,
      fbToken: session.fbToken,
    };
  }

  console.log({ function: 'createInitialReduxState', state });

  return state;
};

const createSessionMiddleware = (awsRegion) => {
  const sessionOption = {
    resave: false,
    saveUninitialized: true,
    secret: 'session secret',
  };

  if (process.env.NODE_ENV === 'production') {
    // Use DynamoDB only in production. Session will be stored in memory in non-production.

    const dynamoDBOptions = {
      // Optional DynamoDB table name, defaults to 'sessions'
      table: 'hello_session',

      // Optional JSON object of AWS credentials and configuration
      AWSConfigJSON: {
        region: awsRegion,
      },

      // Optional ProvisionedThroughput params, defaults to 5
      readCapacityUnits: 2,
      writeCapacityUnits: 2,
    };

    const DynamoDBStore = connectDynamoDb({session});

    sessionOption.store = new DynamoDBStore(dynamoDBOptions);
  } else {
    console.log({ function: 'getSessionOption', log: 'session will be stored in memory' });
  }

  return session(sessionOption);
};

const updateAuthResult = (req, authResponse) => {
  req.session.uid = authResponse.uid;
  req.session.name = authResponse.name;
  req.session.pictureUrl = authResponse.pictureUrl;
  req.session.fbToken = authResponse.fbToken;
};

module.exports = {
  createInitialReduxState,
  createSessionMiddleware,
  updateAuthResult,
};
