import {
  updatePhoneNumber,
  updateConfirmPassword,
  updateEmail,
  updateName,
  updatePassword
} from '../actions/registerActions'
import {connect} from 'react-redux'
import Register from '../components/register'

const mapStateToProps = state => ({
  name: state.registerParams.name,
  email: state.registerParams.email,
  password: state.registerParams.password,
  confirmPassword: state.registerParams.confirmPassword,
  phoneNumber: state.registerParams.phoneNumber,
  validEmail: state.registerParamValidation.validEmail,
  validPhoneNumber: state.registerParamValidation.validPhoneNumber,
  validName: state.registerParamValidation.validName,
  validPassword: state.validPassword.isValid,
  passwordHasCap: state.validPassword.hasCap,
  passwordHasChar: state.validPassword.hasChar,
  passwordHasInt: state.validPassword.hasInt,
  passwordHasLength: state.validPassword.hasLength,
  passwordsMatch: state.validPassword.matches
});

const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(updateName(name)),
  updatePassword: password => dispatch(updatePassword(password)),
  updateEmail: email => dispatch(updateEmail(email)),
  updateConfirmPassword: confirmPassword => dispatch(updateConfirmPassword(confirmPassword)),
  updatePhoneNumber: phoneNumber => dispatch(updatePhoneNumber(phoneNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register)