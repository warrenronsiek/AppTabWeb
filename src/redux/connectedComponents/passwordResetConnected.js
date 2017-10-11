import PasswordReset from '../components/passwordReset'
import {connect} from 'react-redux'
import {sendCode, resetPassword} from "../middleware/passwordResetThunks";
import {
  updateResetConfirmPassword,
  updateResetEmail,
  updateResetPassword,
  updateResetCode
} from '../actions/passwordResetActions'

const mapStateToProps = state => ({
  password: state.passwordReset.password,
  confirmPassword: state.passwordReset.confirmPassword,
  email: state.passwordReset.email,
  code: state.passwordReset.code,
  stage: state.passwordResetStatus.stage,
  error: state.passwordResetStatus.error,
  processing: state.passwordResetStatus.processing,
  validEmail: state.passwordResetValidator.validEmail,
  validCode: state.passwordResetValidator.validCode,
  validPassword: state.validResetPassword.isValid,
  passwordHasInt: state.validResetPassword.hasInt,
  passwordHasChar: state.validResetPassword.hasChar,
  passwordHasCap: state.validResetPassword.hasCap,
  passwordHasLength: state.validResetPassword.hasLength,
  passwordsMatch: state.validResetPassword.matches,
});

const mapDispatchToProps = dispatch => ({
  updateConfirmPassword: confirmPassword => dispatch(updateResetConfirmPassword(confirmPassword)),
  updateEmail: email => dispatch(updateResetEmail(email)),
  updatePassword: password => dispatch(updateResetPassword(password)),
  updateResetCode: code => dispatch(updateResetCode(code)),
  sendCode: email => dispatch(sendCode(email)),
  resetPassword: (email, password, code) => dispatch(resetPassword(email, password, code))
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset)