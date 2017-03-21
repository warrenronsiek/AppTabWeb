/**
 * Created by warren on 3/16/17.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {stripeRedirectStatus} from './stripeRedirectReducer'
import {loginParams, authParams, clientId, loginStatus} from './loginReducer'

export default combineReducers({
  routing: routerReducer,
  loginParams,
  authParams,
  clientId,
  loginStatus,
  stripeRedirectStatus
})