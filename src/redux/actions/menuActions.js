
// payload is of shape: {itemId, name, description, price, category, tags, itemOptions, venueId, timeRanges, extendedDescription, imageUrl}
export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';
export const updateMenuItem = (payload) => {
  return {
    type: UPDATE_MENU_ITEM, payload: payload
  }
};

export const VIEW_OPTIONS = 'VIEW_OPTIONS';
export const viewOptions = (itemId, itemOptions) => {
  return {type: VIEW_OPTIONS, itemId, itemOptions}
};

// payload is of shape: {itemId, name, description, price, category, tags, itemOptions, venueId, timeRanges, extendedDescription, imageUrl}
export const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE_ACTIVE_MENU_ITEM';
export const updateActiveMenuItem = (payload) => {
  return {
    type: UPDATE_ACTIVE_MENU_ITEM, payload : payload
  }
};

export const UPDATE_OPTION_SET_NAME = 'UPDATE_OPTION_SET_NAME';
export const updateOptionSetName = (optionSetId, name) => {
  return {type: UPDATE_OPTION_SET_NAME, optionSetId, name}
};

export const UPDATE_OPTION = 'UPDATE_OPTION';
export const updateOption = (optionSetId, optionId, name, price) => {
  return {type: UPDATE_OPTION, optionSetId, optionId, name, price}
};

export const CANCEL_EDITING = 'CANCEL_EDITING';
export const cancelEditing = () => {
  return {type: CANCEL_EDITING,}
};

export const ADD_OPTION = 'ADD_OPTION';
export const addOption = (optionSetId) => {
  return {type: ADD_OPTION, optionSetId}
};

export const ADD_OPTION_SET = 'ADD_OPTION_SET';
export const addOptionSet = () => {
  return {type: ADD_OPTION_SET,}
};

export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const addMenuItem = (venueId) => {
  return {type: ADD_MENU_ITEM, venueId}
};

export const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';
export const deleteMenuItem = (itemId) => {
  return {type: DELETE_MENU_ITEM, itemId}
};

export const UPDATE_TIME_RANGES = 'UPDATE_TIME_RANGES';
export const updateTimeRanges = (timeRanges) => {
  return {type: UPDATE_TIME_RANGES, timeRanges}
};

