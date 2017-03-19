/**
 * Created by warren on 3/17/17.
 */
import loginRequest from '../../api/loginRequest'
import {
  updateAuthParams,
  updateClientId,
  statusLoggingIn,
  statusLoginComplete,
  statusWrongCredentials
} from '../actions/loginActions';
import {push} from 'react-router-redux'
const decode = require('jwt-decode');

const loginThunk = (email, password) => (dispatch) => {
  return Promise.resolve(dispatch(statusLoggingIn()))
    .then(() => {
      return loginRequest(email, password)
    })
    .then(res => {
      console.log(res);
      let params = res.authParameters;
      let
        p1 = Promise.resolve(dispatch(updateAuthParams(res.idToken, res.accessToken, res.refreshToken))),
        p2 = Promise.resolve(dispatch(updateClientId(decode(res.idToken).sub)));
      return Promise.all([p1, p2])
    })
    .then(() => dispatch(statusLoginComplete()))
    .then(() => push('/counter'))
    .catch(err => {
      console.log(err);
      dispatch(statusWrongCredentials())})
};

export default loginThunk