/**
 * Created by warren on 3/17/17.
 */
import {connect} from 'react-redux'
import {updatePassword, updateEmail} from '../actions/loginActions'
import login from '../components/login'
import loginThunk from '../middleware/loginThunk'
import {push} from 'react-router-redux'

const mapStateToProps = (state) => {
  return {
    email: state.loginParams.email,
    password: state.loginParams.password,
    loginStatus: state.loginStatus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: text => dispatch(updateEmail(text)),
    updatePassword: text => dispatch(updatePassword(text)),
    submitLoginCredentials: (email, password) => dispatch(loginThunk(email, password)),
    navToRegister: () => dispatch(push('/register')),
    navToPasswordReset: () => dispatch(push('/password-reset'))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(login)