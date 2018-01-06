import {connect} from 'react-redux';
import landing from '../components/landing';
import {push} from 'react-router-redux'
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  navToLogin: () => dispatch(push('/login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(landing)