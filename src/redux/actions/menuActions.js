export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (itemId, name, description, price, addons) => {
  return {type: UPDATE_ITEM, itemId, name, description, price, addons}
};

