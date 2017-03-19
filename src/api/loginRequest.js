/**
 * Created by warren on 3/17/17.
 */

import 'whatwg-fetch'

const url = require('./vars').environments.dev;
const loginRequest = (email, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(url + '/login', options).then(res => res.json())
};

export default loginRequest