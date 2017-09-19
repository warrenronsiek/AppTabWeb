/**
 * Created by warren on 3/21/17.
 */
import cookie from 'react-cookie'
import stripeRedirectApi from '../../api/stripeRedirect'
import {updateAuthParams, updateClientId} from "../actions/loginActions"
import {complete, error} from '../actions/stripeRedirectActions'

const redirectThunk = (scope, authCode) => (dispatch, getState) => {
  Promise.resolve()
    .then(res => {
      const
        clientId = cookie.load('clientId'),
        accessToken = cookie.load('accessToken'),
        refreshToken = cookie.load('refreshToken'),
        idToken = cookie.load('idToken'),
        updateTime = cookie.load('updateTime');

      let
        p1 = Promise.resolve(dispatch(updateAuthParams(idToken, accessToken, refreshToken, updateTime))),
        p2 = Promise.resolve(dispatch(updateClientId(clientId)));
      return Promise.all([p1, p2])
    })
    .then(res => {
      const state = getState();
      return stripeRedirectApi(state.clientId, authCode, scope)
    })
    .then(res => {
      console.log(res);
      dispatch(complete())})
    .catch(err => {
      console.log(err);
      dispatch(error())
    })
};

export default  redirectThunk