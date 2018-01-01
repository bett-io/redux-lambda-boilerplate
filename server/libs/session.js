// @flow

import { awsConfig } from '../../config';
import connectDynamoDb from 'connect-dynamodb';
import session from 'express-session';

export type Session = {
  counter: number,
  uid: ?string,
  name: ?string,
  pictureUrl: ?string,
  fbToken: ?string,
}

export type State = {
  sessionCounter: {},
  user?: {},
}

const createInitialReduxState = (session: Session): State => {
  const state: State = {
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

const createSessionMiddleware = () => {
  const sessionOption = {
    resave: false,
    saveUninitialized: true,
    secret: 'session secret',
    store: undefined,
  };

  if (process.env.NODE_ENV === 'production') {
    // Use DynamoDB only in production. Session will be stored in memory in non-production.

    const dynamoDBOptions = {
      // Optional DynamoDB table name, defaults to 'sessions'
      table: awsConfig.dynamodb.sessionTableName,

      // Optional JSON object of AWS credentials and configuration
      AWSConfigJSON: {
        region: awsConfig.common.region,
      },

      // Optional ProvisionedThroughput params, defaults to 5
      readCapacityUnits: 2,
      writeCapacityUnits: 2,
    };

    const DynamoDBStore = connectDynamoDb({ session });

    sessionOption.store = new DynamoDBStore(dynamoDBOptions);
  } else {
    console.log({ function: 'getSessionOption', log: 'session will be stored in memory' });
  }

  return session(sessionOption);
};

export type Request = {
  session: Session,
}

export type AuthResponse = {
  uid: ?string,
  name: ?string,
  pictureUrl: ?string,
  fbToken: ?string,
}

const updateAuthResult = (req: Request, authResponse: AuthResponse) => {
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
