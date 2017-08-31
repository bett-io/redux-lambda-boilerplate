import awsDevoConfig from './aws.config.devo.json';
import awsProdConfig from './aws.config.prod.json';
import socialDevoConfig from './social.config.devo.json';
import socialProdConfig from './social.config.prod.json';

let awsConfig = awsDevoConfig;
let socialConfig = socialDevoConfig;

if (process.env.NODE_ENV === 'production') {
  awsConfig = awsProdConfig;
  socialConfig = socialProdConfig;
}

export {
  awsConfig,
  socialConfig,
};
