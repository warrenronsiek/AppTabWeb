/**
 * Created by warrenronsiek on 3/19/17.
 */

let stripe, lambdaUrl, apiKey;
switch (__STAGE__) {
  case 'development':
    stripe = {client_id: 'ca_AIdHsDMgfqx2eS1SCftQaQwjCXxG1gbu'};
    lambdaUrl = 'https://7chigyexij.execute-api.us-west-2.amazonaws.com/dev';
    apiKey = '3sZVX8Ya8e1DblJtrrxsW4GneFMvkz9x3KXYHDby';
    break;
  case 'production':
    stripe = {client_id: 'ca_AIdHcBQ0SWvOJvYa64GCGsgD0bO1MK77'};
    lambdaUrl = 'https://9w9crn7s63.execute-api.us-west-2.amazonaws.com/prod';
    apiKey = '60L4kBdG9v7VE3cREC1V67haiov4JwC34EWyzg4c';
    break;
}

export {stripe, lambdaUrl, apiKey}