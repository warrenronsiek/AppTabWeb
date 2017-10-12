export const UPDATE_RESET_PASSWORD = 'UPDATE_RESET_PASSWORD';
export const updateResetPassword = (password) => {
  return {type: UPDATE_RESET_PASSWORD, password}
};

export const UPDATE_RESET_CONFIRM_PASSWORD = 'UPDATE_RESET_CONFIRM_PASSWORD';
export const updateResetConfirmPassword = (confirmPassword) => {
  return {type: UPDATE_RESET_CONFIRM_PASSWORD, confirmPassword}
};

export const UPDATE_RESET_EMAIL = 'UPDATE_RESET_EMAIL';
export const updateResetEmail = (email) => {
  return {type: UPDATE_RESET_EMAIL, email}
};

export const UPDATE_RESET_CODE = 'UPDATE_RESET_CODE';
export const updateResetCode = (code) => {
  return {type: UPDATE_RESET_CODE, code}
};

export const ENTER_EMAIL_STATUS = 'ENTER_EMAIL_STATUS';
export const enterEmailStatus = () => {
  return {type: ENTER_EMAIL_STATUS, }
};

export const ENTER_CODE_STATUS = 'ENTER_CODE_STATUS';
export const enterCodeStatus = () => {
  return {type: ENTER_CODE_STATUS, }
};

export const PASSWORD_RESET_SUCCESSFUL = 'PASSWORD_RESET_SUCCESSFUL';
export const passwordResetSuccessful = () => {
  return {type: PASSWORD_RESET_SUCCESSFUL, }
};

export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';
export const passwordResetFailed = () => {
  return {type: PASSWORD_RESET_FAILED, }
};

export const PASSWORD_RESET_PROCESSING = 'PASSWORD_RESET_PROCESSING';
export const passwordResetProcessing = () => {
  return {type: PASSWORD_RESET_PROCESSING, }
};

