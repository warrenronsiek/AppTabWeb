export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';
export const updateMenuItem = (itemId, name, description, price, category, tags, optionSets, venueId) => {
  return {type: UPDATE_MENU_ITEM, itemId, name, description, price, category, tags, optionSets, venueId}
};

export const VIEW_OPTIONS = 'VIEW_OPTIONS';
export const viewOptions = (itemId, optionSets) => {
  return {type: VIEW_OPTIONS, itemId, optionSets}
};

export const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE_ACTIVE_MENU_ITEM';
export const updateActiveMenuItem = (itemId, name, description, price, category, tags, optionSets, venueId) => {
  return {type: UPDATE_ACTIVE_MENU_ITEM, itemId, name, description, price, category, tags, optionSets, venueId}
};

export const UPDATE_OPTION_SET_NAME = 'UPDATE_OPTION_SET_NAME';
export const updateOptionSetName = (optionSetId, name) => {
  return {type: UPDATE_OPTION_SET_NAME, optionSetId, name}
};

export const UPDATE_OPTION = 'UPDATE_OPTION';
export const updateOption = (optionSetId, optionId, name, price) => {
  return {type: UPDATE_OPTION, optionSetId, optionId, name, price}
};
