import axios from 'axios';

const signin = (fbToken) => new Promise((resolve, reject) => {
  axios.post('/signin', {
    fbToken,
  })
  .then(function(response) {
    resolve(response);
  })
  .catch(function(error) {
    console.error({ function: 'signin', error });
    reject(error);
  });
});

const signout = () => new Promise((resolve, reject) => {
  axios.post('/signout', {})
  .then(function(response) {
    resolve(response);
  })
  .catch(function(error) {
    console.error({ function: 'signout', error });
    reject(error);
  });
});

export default {
  signin,
  signout,
};
