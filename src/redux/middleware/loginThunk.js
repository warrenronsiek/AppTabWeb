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
  statusMysteryError,
  updateStripeId
} from '../actions/loginActions'
import {updateVenue} from '../actions/venueActions'
import {push} from 'react-router-redux'
import {WrongCredentialsError} from '../../errors'
import cookie from 'react-cookie'
import getClientLoginData from '../../api/getClientLoginData'

const decode = require('jwt-decode');

const loginThunk = (email, password) => (dispatch) => {
  let clientId, stripeId;
  return Promise.resolve(dispatch(statusLoggingIn()))
    .then(() => {
      return loginRequest({email, password})
    })
    .then(res => {
      let params = res.authParameters;
      if (params.code === 'NotAuthorizedException') {
        throw new WrongCredentialsError('wrong username or password')
      }
      clientId = decode(params.IdToken).sub;
      cookie.save('clientId', clientId);
      cookie.save('idToken', params.IdToken);
      cookie.save('refreshToken', params.RefreshToken);
      cookie.save('accessToken', params.AccessToken);
      cookie.save('updateTime', new Date().toISOString());
      let
        p1 = Promise.resolve(dispatch(updateAuthParams(params.IdToken, params.AccessToken, params.RefreshToken, new Date()))),
        p2 = Promise.resolve(dispatch(updateClientId(clientId)));
      return Promise.all([p1, p2])
    })
    .then(() => getClientLoginData({clientId}))
    .then((res) => {
      stripeId = res.stripeData.Item.StripeId.S;
      res.venues.Items.forEach(venue => dispatch(updateVenue(venue.VenueId.S, venue.Name.S, venue.Address.S)));
      dispatch(updateStripeId(stripeId));
      return Promise.resolve(dispatch(statusLoginComplete()));
    })
    .then(() => {
      if (stripeId) {
        return Promise.resolve(dispatch(push('/venues')))
      } else {
        return Promise.resolve(dispatch(push('/stripeConnect')))
      }
    })
    .catch(err => {
      switch (err.message) {
        case 'wrong username or password':
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