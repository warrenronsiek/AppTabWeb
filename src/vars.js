/**
 * Created by warrenronsiek on 3/19/17.
 */

const env = STAGE;
let stripe, lambdaUrl;
switch (env) {
  case 'development':
    stripe = {client_id: 'ca_AIdHsDMgfqx2eS1SCftQaQwjCXxG1gbu'};
    lambdaUrl = 'https://z0r33ohl2d.execute-api.us-west-2.amazonaws.com/dev';
    break;
  case 'production':
    stripe = {client_id: 'ca_AIdHcBQ0SWvOJvYa64GCGsgD0bO1MK77'};
    lambdaUrl = '';
    break;
}

export {stripe, lambdaUrl}