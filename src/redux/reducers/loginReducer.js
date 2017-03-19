/**
 * Created by warren on 3/17/17.
 */
import {
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_AUTH_PARAMS,
  UPDATE_CLIENT_ID,
  STATUS_LOGGING_IN,
  STATUS_LOGIN_COMPLETE,
  STATUS_WRONG_CREDENTIALS
} from '../actions/loginActions'

const loginParams = (state = {password: "P@33word", email: "wronsiek@gmail.com"}, action) => {
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
        refreshToken: action.refreshToken
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
    default:
      return state

  }
};

export {loginParams, authParams, clientId, loginStatus}