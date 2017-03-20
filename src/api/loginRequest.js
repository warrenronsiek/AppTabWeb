/**
 * Created by warren on 3/17/17.
 */

import 'whatwg-fetch'
import {lambdaUrl} from '../vars'

const loginRequest = (email, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(lambdaUrl + '/login', options).then(res => res.json())
};

export default loginRequest