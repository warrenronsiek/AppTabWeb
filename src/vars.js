/**
 * Created by warrenronsiek on 3/19/17.
 */

let stripe, lambdaUrl, apiKey, identityPoolId, identityPoolName, imageBucketName, imageBucketUrl;
switch (__STAGE__) {
  case 'development':
    stripe = {client_id: 'ca_AIdHsDMgfqx2eS1SCftQaQwjCXxG1gbu'};
    lambdaUrl = 'https://7chigyexij.execute-api.us-west-2.amazonaws.com/dev';
    apiKey = '3sZVX8Ya8e1DblJtrrxsW4GneFMvkz9x3KXYHDby';
    identityPoolId = 'us-west-2:ee1c2097-66c6-4f2b-a812-ef9ceb83af99';
    identityPoolName = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_B7BP9Wkno';
    imageBucketName = 'dev-apptab-image-bucket';
    imageBucketUrl = 'https://dev-apptab-image-bucket.s3.us-west-2.amazonaws.com';
    break;
  case 'production':
    stripe = {client_id: 'ca_AIdHcBQ0SWvOJvYa64GCGsgD0bO1MK77'};
    lambdaUrl = 'https://9w9crn7s63.execute-api.us-west-2.amazonaws.com/prod';
    apiKey = '60L4kBdG9v7VE3cREC1V67haiov4JwC34EWyzg4c';
    identityPoolId = 'us-west-2:c23fb744-bd40-4441-ae59-4b5ef26cc44f';
    identityPoolName = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_ZnP1Hcnse';
    imageBucketName = 'prod-apptab-image-bucket';
    imageBucketUrl = 'https://prod-apptab-image-bucket.s3.us-west-2.amazonaws.com';
    break;
}

export {stripe, lambdaUrl, apiKey, identityPoolId, identityPoolName, imageBucketName, imageBucketUrl}