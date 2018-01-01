import AWS from 'aws-sdk'
import {identityPoolId, identityPoolName, imageBucketName} from '../vars'

let s3;

const updateCredentials = idToken => {
  AWS.config.update({
    region: 'us-west-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: identityPoolId,
      Logins: {
        [identityPoolName]: idToken
      }
    })
  });
  AWS.config.credentials.get(() => {
    s3 = new AWS.S3({params: {Bucket: imageBucketName}});
  });

};


export {updateCredentials, s3}