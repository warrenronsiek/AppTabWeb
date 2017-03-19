/**
 * Created by warren on 3/17/17.
 */
import loginRequest from '../../api/loginRequest'
import {
  updateAuthParams,
  updateClientId,
  statusLoggingIn,
  statusLoginComplete,
  statusWrongCredentials,
  statusNetworkError,
  statusMysteryError
} from '../actions/loginActions'
import {push} from 'react-router-redux'
import {WrongCredentialsError} from '../../errors'
const decode = require('jwt-decode');

const loginThunk = (email, password) => (dispatch) => {
  return Promise.resolve(dispatch(statusLoggingIn()))
    .then(() => {
      return loginRequest(email, password)
    })
    .then(res => {
      try {
        let params = res.authParameters;
        let
          p1 = Promise.resolve(dispatch(updateAuthParams(params.IdToken, params.AccessToken, params.RefreshToken))),
          p2 = Promise.resolve(dispatch(updateClientId(decode(params.IdToken).sub)));
        return Promise.all([p1, p2])
      } catch (err) {
        throw new WrongCredentialsError('wrong username or password')
      }
    })
    .then(() => dispatch(statusLoginComplete()))
    .then(() => dispatch(push('/counter')))
    .catch(err => {
      console.log(err);
      switch (err.name) {
        case 'WrongCredentialsError':
          dispatch(statusWrongCredentials());
          break;
        case 'NetworkError':
          dispatch(statusNetworkError());
          break;
        case 'TypeError':
          dispatch(statusNetworkError());
          break;
        default:
          dispatch(statusMysteryError());
          break;
      }
    })
};

export default loginThunk