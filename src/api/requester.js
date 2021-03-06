import {store} from "../redux/store"
import {lambdaUrl, apiKey} from "../vars"
import 'whatwg-fetch'
import decode from 'jwt-decode'
import {updateAuthParams, updateClientId} from "../redux/actions/loginActions"

const requester = (apiPath, successMessage, errorMessage, responseProcessor, allowTokenRefresh = true, errorProcessor) => (postBody) => {
    const state = store.getState();
    const desiredFetchParams = {
      method: 'POST',
      headers: {'Authorization': state.authParams.idToken, 'x-api-key': apiKey, 'Content-Type': 'application/json'},
      body: JSON.stringify(postBody)
    };

    const tokenRefreshFetchParams = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'x-api-key': apiKey},
      body: JSON.stringify({
        refreshToken: state.authParams.refreshToken,
      })
    };

    const desiredFetch = () => fetch(lambdaUrl + apiPath, desiredFetchParams)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('failed to fetch url ' + apiPath)
        }
      })
      .then(body => {
          if (body.message === successMessage) {
            return responseProcessor ? responseProcessor(body) : body
          } else if (errorProcessor) {
            return errorProcessor(body)
          } else {
            throw new Error(errorMessage, body)
          }
        }
      );

    const tokenRefreshFetch = () => fetch(lambdaUrl + '/refresh-cognito-tokens', tokenRefreshFetchParams)
      .then(res => {
        return res.json()})
      .then(resBody => {
        const idVals = decode(resBody['authParameters']['IdToken']);
        return Promise.resolve({
          accessToken: resBody['authParameters']['AccessToken'],
          idToken: resBody['authParameters']['IdToken'],
          refreshToken: resBody['authParameters']['RefreshToken'],
          userName: idVals['name'],
          customerId: idVals['sub']
        });
      })
      .then(res => {
        const p1 = store.dispatch(updateAuthParams(res.accessToken, res.idToken, res.refreshToken)),
          p2 = store.dispatch(updateClientId(res.customerId));
        return Promise.all([p1, p2])})
      .catch(err => console.log('failedTokenRefreshFetch', err));

    const timeCondition = (new Date() - state.authParams.updateTime) / (60 * 1000) > 30;
    if (timeCondition && allowTokenRefresh) {
      return tokenRefreshFetch().then(() => desiredFetch())
    } else {
      return desiredFetch()
    }
  }
;

export default requester