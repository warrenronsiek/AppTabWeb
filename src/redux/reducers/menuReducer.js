import {
  UPDATE_MENU_ITEM,
  VIEW_OPTIONS,
  UPDATE_ACTIVE_MENU_ITEM,
  UPDATE_OPTION_SET_NAME,
  UPDATE_OPTION,
  CANCEL_EDITING,
  ADD_OPTION,
  ADD_OPTION_SET,
  ADD_MENU_ITEM,
  DELETE_MENU_ITEM,
  UPDATE_TIME_RANGES
} from '../actions/menuActions'
import {sortBy, maxBy, get} from 'lodash'
import crypto from 'crypto'

// a menu item is of shape { itemId, name, description, category, itemOptions, price, tags, venueId,timeRanges, extendedDescription, imageUrl}
const menu = (state = [], action) => {
  switch (action.type) {
    case UPDATE_MENU_ITEM:
      return [...state.filter(item => item.itemId !== action.payload.itemId), {
        ...action.payload
      }].sort((a, b) => a.itemName > b.itemName);
    case DELETE_MENU_ITEM:
      return [...state.filter(item => item.itemId !== action.payload.itemId)];
    default:
      return state
  }
};

const viewableMenuOptions = (state = {itemId: '', itemOptions: [{optionSetName: '', data: []}]}, action) => {
  switch (action.type) {
    case VIEW_OPTIONS:
      return {itemId: action.itemId, itemOptions: action.itemOptions};
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
    case ADD_MENU_ITEM:
      return 'editingMenuItem';
    default:
      return state
  }
};

const activeMenuItem = (state = {
  tags: [],
  itemOptions: [{optionSetName: '', optionSetId: 0, data: []}],
  timeRanges: []
}, action) => {
  let otherOptionSets, currentOptionSet, otherOptions;
  switch (action.type) {
    case UPDATE_ACTIVE_MENU_ITEM:
      return {
        ...action.payload
      };
    case UPDATE_TIME_RANGES:
      return {...state, timeRanges: action.timeRanges};
    case ADD_MENU_ITEM:
      return {
        itemId: crypto.randomBytes(10).toString('hex'),
        itemName: '',
        itemDescription: '',
        category: '',
        itemOptions: [],
        price: 0,
        tags: [],
        venueId: action.venueId,
        timeRanges: [],
        extendedDescription: '',
        imageUrl: ''
      };
    case UPDATE_OPTION_SET_NAME:
      otherOptionSets = state.itemOptions.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.itemOptions.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      return {
        ...state,
        itemOptions: sortBy([...otherOptionSets,
          {
            ...currentOptionSet,
            optionSetName: action.name
          }], optionSet => optionSet.optionSetId)
      };
    case UPDATE_OPTION:
      otherOptionSets = state.itemOptions.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.itemOptions.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      otherOptions = currentOptionSet.data.filter(option => option.optionId !== action.optionId);
      return {
        ...state, itemOptions: sortBy([
          ...otherOptionSets,
          {
            ...currentOptionSet,
            data: sortBy([
              ...otherOptions,
              {optionName: action.name, price: action.price, optionId: action.optionId}
            ], option => option.optionId)
          }
        ], optionSet => optionSet.optionSetId)
      };
    case ADD_OPTION_SET:
      return {
        ...state,
        itemOptions: [...state.itemOptions, {
          optionSetName: '',
          optionSetId: get(maxBy(state.itemOptions, optionSet => optionSet.optionSetId), 'optionSetId') + 1 || 0,
          data: []
        }]
      };
    case ADD_OPTION:
      otherOptionSets = state.itemOptions.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.itemOptions.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      return {
        ...state,
        itemOptions: sortBy([...otherOptionSets, {
          ...currentOptionSet,
          data: sortBy([
            ...currentOptionSet.data,
            {
              optionName: '',
              price: 0,
              optionId: get(maxBy(currentOptionSet.data, option => option.optionId), 'optionId') + 1 || 0
            }
          ], option => option.optionId)
        }], optionSet => optionSet.optionSetId)
      };
    default:
      return state
  }
};

export {menu, menuViewState, viewableMenuOptions, activeMenuItem}