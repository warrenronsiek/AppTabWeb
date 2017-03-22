/**
 * Created by warrenronsiek on 3/19/17.
 */

import 'whatwg-fetch'
import {lambdaUrl} from '../vars'

const stripeRedirect = (clientId, authCode) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({clientId, authCode}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(lambdaUrl + '/stripe-redirect', options).then(res => res.json())
};

export default stripeRedirect
