import axios from 'axios';

const signin = (fbToken) => new Promise((resolve, reject) => {
  axios.post('/signin', {
    fbToken,
  })
  .then(function(response) {
    console.log(response);
    resolve(response);
  })
  .catch(function(error) {
    console.log(error);
    reject(error);
  });
});

const signout = () => new Promise((resolve, reject) => {
  axios.post('/signout', {})
  .then(function(response) {
    console.log(response);
    resolve(response);
  })
  .catch(function(error) {
    console.log(error);
    reject(error);
  });
});

export default {
  signin,
  signout,
};
