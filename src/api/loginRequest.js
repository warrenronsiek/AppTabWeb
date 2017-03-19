/**
 * Created by warren on 3/17/17.
 */

const rp = require('request-promise');

const url = require('./vars').environments.dev;
const loginRequest = (email, password) => {
  const options = {
    method: 'POST',
    url: url + '/login',
    body: JSON.stringify({email, password})
  };
  return rp(options).then(res => {
    console.log('request response: ', res);
    return JSON.parse(res)})
};

export default loginRequest