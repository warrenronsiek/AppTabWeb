/**
 * Created by warren on 3/21/17.
 */
import cookie from 'react-cookie'
import stripeRedirectApi from '../../api/stripeRedirect'
import {complete, error} from '../actions/stripeRedirectActions'

const redirectThunk = (scope, authCode) => (dispatch, getState) => {
  Promise.resolve(cookie.load('clientId'))
    .then(res => stripeRedirectApi(res, authCode, scope))
    .then(res => {
      console.log(res);
      dispatch(complete())})
    .catch(err => {
      console.log(err);
      dispatch(error())
    })
};

export default  redirectThunk