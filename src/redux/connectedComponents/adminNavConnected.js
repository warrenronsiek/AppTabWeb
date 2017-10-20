import {connect} from 'react-redux'
import adminNavContainer from '../components/adminNavContainer'
import {push} from 'react-router-redux'

const mapStateToProps = state => ({
  activeKey: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = dispatch => ({
  navHandler: key => dispatch(push(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(adminNavContainer)