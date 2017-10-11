import {
  passwordResetFailed,
  passwordResetSuccessful,
  enterCodeStatus,
  enterEmailStatus,
  passwordResetProcessing
} from "../actions/passwordResetActions";
import resetPasswordApi from '../../api/resetPassword'
import sendResetPasswordCode from '../../api/sendResetPasswordCode'
import {push} from 'react-router-redux'

const sendCode = (email) => (dispatch) => {
  Promise.resolve(dispatch(passwordResetProcessing()))
    .then(res => {
      return sendResetPasswordCode({email})
    })
    .then(res => {
      return Promise.resolve(dispatch(enterCodeStatus()))
    })
    .catch(err => {
      dispatch(passwordResetFailed());
    })
};

const resetPassword = (email, password, code) => (dispatch) => {
  Promise.resolve(dispatch(passwordResetProcessing()))
    .then(res => {
      return resetPasswordApi({email, password, confirmationCode: code})
    })
    .then(res => {
      return Promise.all([
        Promise.resolve(dispatch(passwordResetSuccessful())),
        new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
      ])
    })
    .then(res => {
      dispatch(push('/'));
      return Promise.all([Promise.resolve(dispatch(enterEmailStatus()))])})
    .catch(err => {
      dispatch(enterEmailStatus());
      dispatch(passwordResetFailed());
    })
};

export {sendCode, resetPassword}