import AWS from 'aws-sdk';
import { awsConfig } from '../../config';
import shortid from 'shortid';

const file = 'server/libs/userDB.js';

let docClientInstance = null;

const docClient = () => {
  if (!docClientInstance) {
    AWS.config.update({
      region: awsConfig.common.region,
    });

    docClientInstance = new AWS.DynamoDB.DocumentClient();
  }

  return docClientInstance;
};

const createUser = (fbUserInfo) => new Promise((resolve, reject) => {
  const params = {
    TableName: awsConfig.dynamodb.userTableName,
    Item: {
      id: shortid.generate(),
      name: fbUserInfo.name,
      fbid: fbUserInfo.id,
      pictureUrl: fbUserInfo.picture,
    },
  };

  docClient().put(params, (err, data) => {
    if (err) {
      console.error({ file, function: 'userDB.createUser', params, err });
      return reject(err);
    }

    console.log({ file, function: 'userDB.createUser', params, data });
    return resolve(data);
  });
});

const findFbIdIndex = (fbId) => new Promise((resolve, reject) => {
  const params = {
    TableName : awsConfig.dynamodb.userTableName,
    IndexName: awsConfig.dynamodb.userIndexName,
    KeyConditionExpression: 'fbid = :fbid',
    ExpressionAttributeValues: {
      ':fbid': fbId,
    },
  };

  docClient().query(params, (err, data) => {
    if (err) {
      console.error({ file, function: 'findFbIdIndex', params, err });
      return reject(err);
    }

    if (data.Count > 1) {
      console.error({ file, function: 'findFbIdIndex',
        log: 'multiple user rows with the same fbid detected', params, data,
      });
    }

    console.log({ file, function: 'findFbIdIndex', data, items: data.Items });

    return resolve(data.Items[0]);
  });
});

const findUserTable = (id) => new Promise((resolve, reject) => {
  const params = {
    TableName: awsConfig.dynamodb.userTableName,
    Key: {
      id,
    },
  };

  console.log({ file, function: 'findUserTable', params });

  docClient().get(params, (err, data) => {
    if (err) {
      console.error({ file, function: 'findUserTable', params, err });
      return reject(err);
    }

    console.log({ file, function: 'findUserTable', params, data });

    return resolve(data.Item);
  });
});

const findUserByFbId = async (fbId) => {
  try {
    const fbIdUser = await findFbIdIndex(fbId);

    if (!fbIdUser || !fbIdUser.id) return null;

    const user = await findUserTable(fbIdUser.id);

    console.log({ file, function: 'findUserByFbId', fbId, user });

    return user;
  } catch(err) {
    console.error({ file, function: 'findUserByFbId', fbId, err });

    return null;
  }
};

const updateUser = () => {

};

const userDB = {
  createUser,
  findUserByFbId,
  updateUser,
};

export default userDB;
