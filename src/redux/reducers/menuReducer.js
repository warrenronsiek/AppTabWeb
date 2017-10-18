import {
  UPDATE_MENU_ITEM,
  VIEW_OPTIONS,
  UPDATE_ACTIVE_MENU_ITEM,
  UPDATE_OPTION_SET_NAME,
  UPDATE_OPTION,
  CANCEL_EDITING,
  ADD_OPTION,
  ADD_OPTION_SET
} from '../actions/menuActions'
import {sortBy} from 'lodash'
import crypto from 'crypto'

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
    case UPDATE_MENU_ITEM:
      return '';
    case CANCEL_EDITING:
      return '';
    case VIEW_OPTIONS:
      return (state === 'viewOptions') ? '' : 'viewOptions';
    case UPDATE_ACTIVE_MENU_ITEM:
      return 'editingMenuItem';
    default:
      return state
  }
};

const activeMenuItem = (state = {tags: [], optionSets: [{optionSetName: '', data: []}]}, action) => {
  let otherOptionSets, currentOptionSet, otherOptions;
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
      otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      return {
        ...state,
        optionSets:[...otherOptionSets,
          {
            ...currentOptionSet,
            optionSetName: action.name
          }]
      };
    case UPDATE_OPTION:
        otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
        currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
        otherOptions = currentOptionSet.data.filter(option => option.optionId !== action.optionId);
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
        ]
      };
    case ADD_OPTION_SET:
      return {
        ...state,
        optionSets: [...state.optionSets, {
          optionSetName: '',
          optionSetId: crypto.randomBytes(5).toString('hex'),
          data: []
        }]
      };
    case ADD_OPTION:
      otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      return {
        ...state,
        optionSets: [...otherOptionSets, {
          ...currentOptionSet,
          data: [
            ...currentOptionSet.data,
            {
              optionName: '',
              price: '',
              optionId: crypto.randomBytes(5).toString('hex')
            }
          ]
        }]
      };
    default:
      return state
  }
};

export {menu, menuViewState, viewableMenuOptions, activeMenuItem}