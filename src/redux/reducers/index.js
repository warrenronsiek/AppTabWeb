/**
 * Created by warren on 3/16/17.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {stripeRedirectStatus} from './stripeRedirectReducer'
import {loginParams, authParams, clientId, loginStatus} from './loginReducer'
import {validPassword, registerParams, registerParamValidation, registrationStatus} from './registerReducer'
import {
  passwordReset,
  passwordResetStatus,
  passwordResetValidator,
  validResetPassword,
  passwordResetProcessing
} from './passwordResetReducer'

export default combineReducers({
  routing: routerReducer,
  passwordResetStatus,
  passwordResetValidator,
  validResetPassword,
  passwordReset,
  passwordResetProcessing,
  validPassword,
  registerParams,
  loginParams,
  authParams,
  clientId,
  loginStatus,
  registerParamValidation,
  stripeRedirectStatus,
  registrationStatus
})