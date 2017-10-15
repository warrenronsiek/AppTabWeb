import {connect} from 'react-redux'
import adminNavContainer from '../components/adminNavContainer'
import {invert} from 'lodash'
import {push} from 'react-router-redux'

const routeToKeyMap = {
  '/venues': 'venues',
  '/menus': 'menu'
};

const keyToRouteMap = invert(routeToKeyMap);

const mapStateToProps = state => ({
  activeKey: routeToKeyMap[state.routing.locationBeforeTransitions.pathname]
});

const mapDispatchToProps = dispatch => ({
  navHandler: key => dispatch(push(keyToRouteMap[key]))
});

export default connect(mapStateToProps, mapDispatchToProps)(adminNavContainer)