import {connect} from 'react-redux';
import {
  viewOptions,
  updateActiveMenuItem,
  updateMenuItem,
  updateOptionSetName,
  updateOption,
  cancelEditing, addOption, addOptionSet, addMenuItem
} from '../actions/menuActions';
import {updateActiveVenue} from "../actions/venueActions";
import menus from '../components/menus';

const mapStateToProps = state => ({
  menuItems: state.menu.filter(item => item.venueId === state.activeVenue.venueId),
  viewState: state.menuViewState,
  optionsData: state.viewableMenuOptions.optionSets,
  activeItem: state.activeMenuItem,
  activeVenue: state.activeVenue,
  venues: state.venues
});

const mapDispatchToProps = dispatch => ({
  viewOptions: (itemId, optionSets) => dispatch(viewOptions(itemId, optionSets)),
  editItem: (itemId, itemName, itemDescription, price, category, tags, options, venueId) =>
    dispatch(updateActiveMenuItem(itemId, itemName, itemDescription, price, category, tags, options, venueId)),
  updateOptionSetName: (optionSetId, name) => dispatch(updateOptionSetName(optionSetId, name)),
  updateOption: (optionSetId, optionId, name, price) => dispatch(updateOption(optionSetId, optionId, name, price)),
  updateItem: (itemId, itemName, itemDescription, price, category, tags, options, venueId) =>
    dispatch(updateMenuItem(itemId, itemName, itemDescription, price, category, tags, options, venueId)),
  cancelEditing: () => dispatch(cancelEditing()),
  addOption: optionSetId => dispatch(addOption(optionSetId)),
  addOptionSet: () => dispatch(addOptionSet()),
  addMenuItem: venueId => dispatch(addMenuItem(venueId)),
  setActiveVenue: (venueId, name, address) => {
    dispatch(updateActiveVenue(venueId, name, address))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(menus)