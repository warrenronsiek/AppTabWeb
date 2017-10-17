import {
  UPDATE_MENU_ITEM,
  VIEW_OPTIONS,
  UPDATE_ACTIVE_MENU_ITEM,
  UPDATE_OPTION_SET_NAME,
  UPDATE_OPTION
} from '../actions/menuActions'
import {sortBy} from 'lodash'

const menu = (state = [{
  itemId: 1,
  name: 'steak',
  description: 'a steak',
  category: 'main',
  price: '1599',
  tags: ['beef', 'sauce'],
  venueId: 'v1',
  optionSets: JSON.parse('[{"optionSetName":"steak", "optionSetId": "1","data":[{"optionName":"rare","price":0,"isSelected":false,"optionSetName":"steak", "optionId": "asdf"},{"optionName":"medium","price":0,"isSelected":false,"optionSetName":"steak", "optionId": "dfds"},{"optionName":"well-done","price":0,"isSelected":false,"optionSetName":"steak", "optionId": "dsdfs"}]}]')
}], action) => {
  switch (action.type) {
    case UPDATE_MENU_ITEM:
      return [...state.filter(item => item.itemId !== action.itemId), {
        itemId: action.itemId,
        name: action.name,
        description: action.description,
        category: action.category,
        optionSets: action.optionSets,
        price: action.price,
        tags: action.tags,
        venueId: action.venueId
      }];
    default:
      return state
  }
};

const viewableMenuOptions = (state = {itemId: '', optionSets: [{optionSetName: '', data: []}]}, action) => {
  switch (action.type) {
    case VIEW_OPTIONS:
      return {itemId: action.itemId, optionSets: action.optionSets};
    default:
      return state
  }
};

const menuViewState = (state = '', action) => {
  switch (action.type) {
    case VIEW_OPTIONS:
      return 'viewOptions';
    case UPDATE_ACTIVE_MENU_ITEM:
      return 'editingMenuItem';
    default:
      return state
  }
};

const activeMenuItem = (state = {tags: [], optionSets: [{optionSetName: '', data: []}]}, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_MENU_ITEM:
      return {
        itemId: action.itemId,
        name: action.name,
        description: action.description,
        category: action.category,
        optionSets: action.optionSets,
        price: action.price,
        tags: action.tags,
        venueId: action.venueId
      };
    case UPDATE_OPTION_SET_NAME:
      return {
        ...state,
        optionSets: sortBy([...state.options.filter(option => option.optionId !== action.optionSetId),
          {
            ...state.options.filter(option => option.optionId === action.optionSetId)[0],
            name: action.name
          }], optionSet => optionSet.optionSetId)
      };
    case UPDATE_OPTION:
      let
        otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId),
        currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];

      console.log(otherOptionSets, currentOptionSet);
      let
        otherOptions = currentOptionSet.data.filter(option => option.optionId !== action.optionId);
      let
        currentOption = currentOptionSet.data.filter(option => option.optionId === action.optionId)[0];
      console.log(otherOptions, currentOption);
      return {
        ...state, optionSets: [
          ...otherOptionSets,
          {
            ...currentOptionSet,
            data: sortBy([
              ...otherOptions,
              {optionName: action.name, price: action.price, optionId: action.optionId}
            ], option => option.optionId)
          }
        ].sort()
      };
    default:
      return state
  }
};

export {menu, menuViewState, viewableMenuOptions, activeMenuItem}