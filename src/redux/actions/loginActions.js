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

