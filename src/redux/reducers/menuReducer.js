import {UPDATE_MENU_ITEM, VIEW_OPTIONS, UPDATE_ACTIVE_MENU_ITEM} from '../actions/menuActions'

const menu = (state = [{itemId: 1, name: 'steak', description: 'a steak', category: 'main', price: '1599', tags: ['beef', 'sauce'], venueId: 'v1',
  options: JSON.parse('[{"optionSetName":"steak","data":[{"optionName":"rare","price":0,"isSelected":false,"optionSetName":"steak"},{"optionName":"medium","price":0,"isSelected":false,"optionSetName":"steak"},{"optionName":"well-done","price":0,"isSelected":false,"optionSetName":"steak"}]}]')}], action) => {
  switch (action.type) {
    case UPDATE_MENU_ITEM:
      return [...state.filter(item => item.itemId !== action.itemId), {
        itemId: action.itemId,
        name: action.name,
        description: action.description,
        category: action.category,
        options: action.options,
        price: action.price,
        tags: action.tags,
        venueId: action.venueId
      }];
    default:
      return state
  }
};

const viewableMenuOptions = (state = {}, action) => {
  switch (action.type) {
    case VIEW_OPTIONS:
      return {itemId: action.itemId, options: action.options};
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

const activeMenuItem = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_MENU_ITEM:
      return {itemId: action.itemId,
        name: action.name,
        description: action.description,
        category: action.category,
        options: action.options,
        price: action.price,
        tags: action.tags,
        venueId: action.venueId};
    default:
      return state
  }
};

export {menu, menuViewState, viewableMenuOptions, activeMenuItem}