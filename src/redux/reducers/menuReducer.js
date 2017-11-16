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

const menu = (state = [], action) => {
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
        venueId: action.venueId,
        timeRanges: action.timeRanges
      }].sort((a, b) => a.name > b.name);
    case DELETE_MENU_ITEM:
      return [...state.filter(item => item.itemId !== action.itemId)];
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
    case ADD_MENU_ITEM:
      return 'editingMenuItem';
    default:
      return state
  }
};

const activeMenuItem = (state = {
  tags: [],
  optionSets: [{optionSetName: '', optionSetId: 0, data: []}],
  timeRanges: []
}, action) => {
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
        venueId: action.venueId,
        timeRanges: action.timeRanges
      };
    case UPDATE_TIME_RANGES:
      return {...state, timeRanges: action.timeRanges};
    case ADD_MENU_ITEM:
      return {
        itemId: crypto.randomBytes(10).toString('hex'),
        name: '',
        description: '',
        category: '',
        optionSets: [],
        price: 0,
        tags: [],
        venueId: action.venueId,
        timeRanges: []
      };
    case UPDATE_OPTION_SET_NAME:
      otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      return {
        ...state,
        optionSets: sortBy([...otherOptionSets,
          {
            ...currentOptionSet,
            optionSetName: action.name
          }], optionSet => optionSet.optionSetId)
      };
    case UPDATE_OPTION:
      otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      otherOptions = currentOptionSet.data.filter(option => option.optionId !== action.optionId);
      return {
        ...state, optionSets: sortBy([
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
        optionSets: [...state.optionSets, {
          optionSetName: '',
          optionSetId: get(maxBy(state.optionSets, optionSet => optionSet.optionSetId), 'optionSetId') + 1 || 0,
          data: []
        }]
      };
    case ADD_OPTION:
      otherOptionSets = state.optionSets.filter(optionSet => optionSet.optionSetId !== action.optionSetId);
      currentOptionSet = state.optionSets.filter(optionSet => optionSet.optionSetId === action.optionSetId)[0];
      return {
        ...state,
        optionSets: sortBy([...otherOptionSets, {
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