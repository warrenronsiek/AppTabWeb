import {connect} from 'react-redux';
import {} from '../actions/menuActions';
import menus from '../components/menus';

const mapStateToProps = state => ({
  menuItems: state.menu
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(menus)