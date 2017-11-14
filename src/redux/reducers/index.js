/**
 * Created by warren on 3/16/17.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {stripeRedirectStatus} from './stripeRedirectReducer'
import {loginParams, authParams, clientId, loginStatus, stripeData} from './loginReducer'
import {validPassword, registerParams, registerParamValidation, registrationStatus} from './registerReducer'
import {
  passwordReset,
  passwordResetStatus,
  passwordResetValidator,
  validResetPassword,
} from './passwordResetReducer'
import {venueFormStatus, venues, activeVenue} from './venueReducer'
import {menu, activeMenuItem, viewableMenuOptions, menuViewState} from './menuReducer'
import {reports} from "./reportReducer";

export default combineReducers({
  routing: routerReducer,
  stripeData,
  reports,
  passwordResetStatus,
  passwordResetValidator,
  validResetPassword,
  passwordReset,
  menu,
  validPassword,
  registerParams,
  loginParams,
  authParams,
  clientId,
  loginStatus,
  registerParamValidation,
  stripeRedirectStatus,
  registrationStatus,
  venueFormStatus,
  venues,
  activeVenue,
  activeMenuItem,
  viewableMenuOptions,
  menuViewState
})