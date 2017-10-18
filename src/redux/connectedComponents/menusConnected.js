import {connect} from 'react-redux';
import {
  viewOptions,
  updateActiveMenuItem,
  updateMenuItem,
  updateOptionSetName,
  updateOption,
  cancelEditing, addOption, addOptionSet
} from '../actions/menuActions';
import menus from '../components/menus';

const mapStateToProps = state => ({
  menuItems: state.menu,
  viewState: state.menuViewState,
  optionsData: state.viewableMenuOptions.optionSets,
  activeItem: state.activeMenuItem
});

const mapDispatchToProps = dispatch => ({
  viewOptions: (itemId, optionSets) => dispatch(viewOptions(itemId, optionSets)),
  editItem: (itemId, itemName, itemDescription, price, category, tags, options, venueId) =>
    dispatch(updateActiveMenuItem(itemId, itemName, itemDescription, price, category, tags, options, venueId)),
  updateOptionSetName: (optionSetId, name) => dispatch(updateOptionSetName(optionSetId, name)),
  updateOption: (optionSetId, optionId, name, price) => dispatch(updateOption(optionSetId, optionId, name, price)),
  updateItem:  (itemId, itemName, itemDescription, price, category, tags, options, venueId) =>
    dispatch(updateMenuItem(itemId, itemName, itemDescription, price, category, tags, options, venueId)),
  cancelEditing: () => dispatch(cancelEditing()),
  addOption: optionSetId => dispatch(addOption(optionSetId)),
  addOptionSet: () => dispatch(addOptionSet())
});

export default connect(mapStateToProps, mapDispatchToProps)(menus)