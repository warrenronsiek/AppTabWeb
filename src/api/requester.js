import {store} from "../redux/store"
import {lambdaUrl} from "../vars"
import 'whatwg-fetch'
import decode from 'jwt-decode'
import {updateAuthParams, updateClientId} from "../redux/actions/loginActions"

const requester = (apiPath, successMessage, errorMessage, responseProcessor, allowTokenRefresh = true, errorProcessor) => (postBody) => {
    const state = store.getState();
    const desiredFetchParams = {
      method: 'POST',
      headers: {'Authorization': state.authParams.idToken, 'Content-Type': 'application/json'},
      body: JSON.stringify(postBody)
    };

    const tokenRefreshFetchParams = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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
        console.log(res);
        return res.json()})
      .then(resBody => {
        console.log(resBody);
        const idVals = decode(resBody['authParameters']['IdToken']);
        console.log(idVals);
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
    console.log(state.authParams.updateTime);
    console.log(timeCondition);
    if (timeCondition && allowTokenRefresh) {
      return tokenRefreshFetch().then(() => desiredFetch())
    } else {
      return desiredFetch()
    }
  }
;

export default requester