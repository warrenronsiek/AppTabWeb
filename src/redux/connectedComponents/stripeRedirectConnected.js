/**
 * Created by warren on 3/21/17.
 */
import {connect} from 'react-redux';
import {} from '../actions/stripeRedirectActions';
import stripeRedirect from '../components/stripeRedirect';

const mapStateToProps = (state) => {
  return {
    status: state.stripeRedirectStatus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(stripeRedirect)