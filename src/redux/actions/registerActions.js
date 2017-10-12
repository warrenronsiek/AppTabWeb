export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const updatePassword = (password) => {
  return {type: UPDATE_PASSWORD, password}
};

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const updateEmail = (email) => {
  return {type: UPDATE_EMAIL, email}
};

export const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER';
export const updatePhoneNumber = (phoneNumber) => {
  return {type: UPDATE_PHONE_NUMBER, phoneNumber}
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = (name) => {
  return {type: UPDATE_NAME, name}
};

export const UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD';
export const updateConfirmPassword = (confirmPassword) => {
  return {type: UPDATE_CONFIRM_PASSWORD, confirmPassword}
};

export const REGISTERING = 'REGISTERING';
export const registering = () => {
  return {type: REGISTERING, }
};

export const REGISTRATION_COMPLETE = 'REGISTRATION_COMPLETE';
export const registrationComplete = () => {
  return {type: REGISTRATION_COMPLETE, }
};

export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const registrationError = (error) => {
  return {type: REGISTRATION_ERROR, error}
};

