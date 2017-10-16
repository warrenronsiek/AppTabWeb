export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';
export const updateMenuItem = (itemId, name, description, price, category, tags, options, venueId) => {
  return {type: UPDATE_MENU_ITEM, itemId, name, description, price, category, tags, options, venueId}
};

export const VIEW_OPTIONS = 'VIEW_OPTIONS';
export const viewOptions = (itemId, options) => {
  return {type: VIEW_OPTIONS, itemId, options}
};

export const EDIT_MENU_ITEM = 'EDIT_MENU_ITEM';
export const editMenuItem = () => {
  return {type: EDIT_MENU_ITEM, }
};

export const UPDATE_ACTIVE_MENU_ITEM = 'UPDATE_ACTIVE_MENU_ITEM';
export const updateActiveMenuItem = (itemId, name, description, price, category, tags, options, venueId) => {
  return {type: UPDATE_ACTIVE_MENU_ITEM, itemId, name, description, price, category, tags, options, venueId}
};

