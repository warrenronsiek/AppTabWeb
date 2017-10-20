/**
 * Created by warren on 3/17/17.
 */
import {
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_AUTH_PARAMS,
  UPDATE_CLIENT_ID,
  UPDATE_STRIPE_ID,
  STATUS_LOGGING_IN,
  STATUS_LOGIN_COMPLETE,
  STATUS_WRONG_CREDENTIALS,
  STATUS_NETWORK_ERROR,
  STATUS_MYSTERY_ERROR
} from '../actions/loginActions'

const loginParams = (state = {email: 'warrenronsiek@gmail.com', password: 'P@33word!'}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {...state, ...{password: action.password}};
    case UPDATE_EMAIL:
      return {...state, ...{email: action.email}};
    default:
      return state
  }
};

const authParams = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_AUTH_PARAMS:
      let newState = {
        idToken: action.idToken,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        updateTime: action.updateTime
      };
      return {...state, ...newState};
    default:
      return state
  }
};

const clientId = (state = '', action) => {
  switch (action.type) {
    case UPDATE_CLIENT_ID:
      return action.id;
    default:
      return state
  }
};

const loginStatus = (state = '', action) => {
  switch (action.type) {
    case STATUS_LOGIN_COMPLETE:
      return 'loggedIn';
    case STATUS_WRONG_CREDENTIALS:
      return 'wrongCredentials';
    case STATUS_LOGGING_IN:
      return 'loggingIn';
    case STATUS_NETWORK_ERROR:
      return 'networkError';
    case STATUS_MYSTERY_ERROR:
      return 'mysteryError';
    default:
      return state
  }
};

const stripeData = (state = {connected: false, stripeId: null}, action) => {
  switch (action.type) {
    case UPDATE_STRIPE_ID:
      return {connected: true, stripeId: action.stripeId};
    default:
      return state
  }
};

export {loginParams, authParams, clientId, loginStatus, stripeData}