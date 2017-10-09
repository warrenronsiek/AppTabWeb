/**
 * Created by warren on 3/16/17.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {stripeRedirectStatus} from './stripeRedirectReducer'
import {loginParams, authParams, clientId, loginStatus} from './loginReducer'
import {validPassword, registerParams, registerParamValidation} from './registerReducer'

export default combineReducers({
  routing: routerReducer,
  validPassword,
  registerParams,
  loginParams,
  authParams,
  clientId,
  loginStatus,
  registerParamValidation,
  stripeRedirectStatus
})