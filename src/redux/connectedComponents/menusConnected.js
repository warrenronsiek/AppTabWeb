import {connect} from 'react-redux';
import {
  viewOptions,
  updateActiveMenuItem,
  updateOptionSetName,
  updateOption,
  cancelEditing, addOption, addOptionSet, addMenuItem
} from '../actions/menuActions';
import {updateActiveVenue} from "../actions/venueActions";
import menus from '../components/menus';
import {updateMenuItemThunk, deleteMenuItemThunk} from '../middleware/menuThunks'

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
    dispatch(updateMenuItemThunk(itemId, itemName, itemDescription, price, category, tags, options, venueId)),
  cancelEditing: () => dispatch(cancelEditing()),
  addOption: optionSetId => dispatch(addOption(optionSetId)),
  addOptionSet: () => dispatch(addOptionSet()),
  addMenuItem: venueId => dispatch(addMenuItem(venueId)),
  setActiveVenue: (venueId, name, address) => dispatch(updateActiveVenue(venueId, name, address)),
  deleteMenuItem: (itemId, venueId) => dispatch(deleteMenuItemThunk(venueId, itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(menus)