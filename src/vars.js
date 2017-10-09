/**
 * Created by warrenronsiek on 3/19/17.
 */

let stripe, lambdaUrl;
switch (__STAGE__) {
  case 'development':
    stripe = {client_id: 'ca_AIdHsDMgfqx2eS1SCftQaQwjCXxG1gbu'};
    lambdaUrl = 'https://kapwsrjkn1.execute-api.us-west-2.amazonaws.com/dev';
    break;
  case 'production':
    stripe = {client_id: 'ca_AIdHcBQ0SWvOJvYa64GCGsgD0bO1MK77'};
    lambdaUrl = 'https://9w9crn7s63.execute-api.us-west-2.amazonaws.com/prod';
    break;
}

export {stripe, lambdaUrl}