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

