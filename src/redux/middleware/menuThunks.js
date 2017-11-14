import {deleteMenuItem, updateMenuItem} from '../actions/menuActions'
import updateMenuItemApi from '../../api/updateMenuItem'
import deleteMenuItemApi from '../../api/deleteMenuItem'

const updateMenuItemThunk = (itemId, itemName, itemDescription, price, category, tags, itemOptions, venueId, timeRanges) => (dispatch) => {
  dispatch(updateMenuItem(itemId, itemName, itemDescription, price, category, tags, itemOptions, venueId, timeRanges));
  updateMenuItemApi({itemId, itemName, itemDescription, price, category, tags, itemOptions: (itemOptions.length === 0) ? 'NULL' : itemOptions, venueId, timeRanges})
    .catch(err => console.log(err))
};

const deleteMenuItemThunk = (venueId, itemId) => (dispatch) => {
  dispatch(deleteMenuItem(itemId));
  deleteMenuItemApi({itemId, venueId})
    .catch(err => console.log(err))
};

export {updateMenuItemThunk, deleteMenuItemThunk}