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
import {transactions} from "./transactionReducer";
import {venueFormStatus, venues, activeVenue} from './venueReducer'
import {menu, activeMenuItem, viewableMenuOptions, menuViewState} from './menuReducer'
import {reports} from "./reportReducer";
import cookie from 'react-cookie'

const appReducer = combineReducers({
  routing: routerReducer,
  stripeData,
  reports,
  passwordResetStatus,
  passwordResetValidator,
  validResetPassword,
  passwordReset,
  menu,
  transactions,
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
});

const rootReducer = (state, action) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    cookie.save('path', action.payload.pathname)
  }
  return appReducer(state, action)
};

export default rootReducer