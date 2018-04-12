/**
 * Created by warrenronsiek on 3/19/17.
 */

let stripe, lambdaUrl, apiKey, identityPoolId, identityPoolName, imageBucketName, imageBucketUrl;
switch (__STAGE__) {
  case 'development':
    stripe = {client_id: 'ca_AIdHsDMgfqx2eS1SCftQaQwjCXxG1gbu'};
    lambdaUrl = 'https://re103c7uwb.execute-api.us-west-2.amazonaws.com/dev';
    apiKey = '2Gl0EVjqm11VgAHS42Hq65pENDZ9rp43zJYsW630';
    identityPoolId = 'us-west-2:5224663f-d191-4bec-8ff4-10aac46707ed';
    identityPoolName = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_GmCLiZERr';
    imageBucketName = 'dev-apptab-image-bucket';
    imageBucketUrl = 'https://dev-apptab-image-bucket.s3.us-west-2.amazonaws.com';
    break;
  case 'production':
    stripe = {client_id: 'ca_AIdHcBQ0SWvOJvYa64GCGsgD0bO1MK77'};
    lambdaUrl = ' https://1ivbfd6j2f.execute-api.us-west-2.amazonaws.com/prod';
    apiKey = 'OuIsllPQmv4GK1vBmCsuYa4MkPERXlBPadqggIii';
    identityPoolId = 'us-west-2:e53dd1a7-7c51-434e-9516-32eb5facedca';
    identityPoolName = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_BgcfYE6qh';
    imageBucketName = 'prod-apptab-image-bucket';
    imageBucketUrl = 'https://prod-apptab-image-bucket.s3.us-west-2.amazonaws.com';
    break;
}

export {stripe, lambdaUrl, apiKey, identityPoolId, identityPoolName, imageBucketName, imageBucketUrl}