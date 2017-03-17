/**
 * Created by warren on 3/17/17.
 */
import {connect} from 'react-redux';
import {updatePassword, updateEmail} from '../actions/loginActions';
import login from '../components/login';

const mapStateToProps = (state) => {
  return {email: state.loginParams.email, password: state.loginParams.password}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: text => dispatch(updateEmail(text)),
    updatePassword: text => dispatch(updatePassword(text)),
    submitLoginCredentials: () => 100
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(login)