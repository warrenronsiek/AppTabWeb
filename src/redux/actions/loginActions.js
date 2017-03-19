/**
 * Created by warren on 3/17/17.
 */
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const updateEmail = (email) => {
  return {type: UPDATE_EMAIL, email}
};

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const updatePassword = (password) => {
  return {type: UPDATE_PASSWORD, password}
};

export const UPDATE_AUTH_PARAMS = 'UPDATE_AUTH_PARAMS';
export const updateAuthParams = (idToken, accessToken, refreshToken) => {
  return {type: UPDATE_AUTH_PARAMS, idToken, accessToken, refreshToken}
};

export const UPDATE_CLIENT_ID = 'UPDATE_CLIENT_ID';
export const updateClientId = (id) => {
  return {type: UPDATE_CLIENT_ID, id}
};

export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
export const updateLoginStatus = (status) => {
  return {type: UPDATE_LOGIN_STATUS, status}
};

export const STATUS_LOGGING_IN = 'STATUS_LOGGING_IN';
export const statusLoggingIn = () => {
  return {type: STATUS_LOGGING_IN, }
};

export const STATUS_WRONG_CREDENTIALS = 'STATUS_WRONG_CREDENTIALS';
export const statusWrongCredentials = () => {
  return {type: STATUS_WRONG_CREDENTIALS, }
};

export const STATUS_LOGIN_COMPLETE = 'STATUS_LOGIN_COMPLETE';
export const statusLoginComplete = () => {
  return {type: STATUS_LOGIN_COMPLETE, }
};

