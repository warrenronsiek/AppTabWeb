import {deleteMenuItem, updateMenuItem} from '../actions/menuActions'
import updateMenuItemApi from '../../api/updateMenuItem'
import deleteMenuItemApi from '../../api/deleteMenuItem'
import {s3} from "../../api/aws";
import {find} from 'lodash'
import {imageBucketUrl} from "../../vars";

const updateMenuItemThunk = ({itemId, itemName, itemDescription, price, category, tags, itemOptions, venueId, timeRanges, extendedDescription, imageUrl}) => (dispatch) => {
  dispatch(updateMenuItem({itemId, itemName, itemDescription, price, category, tags, itemOptions, venueId, timeRanges, extendedDescription, imageUrl}));
  updateMenuItemApi({itemId, itemName, itemDescription, price, category, tags, itemOptions: (itemOptions.length === 0) ? 'NULL' : itemOptions, venueId, timeRanges, extendedDescription, imageUrl})
    .catch(err => console.log(err))
};

const deleteMenuItemThunk = (venueId, itemId) => (dispatch) => {
  dispatch(deleteMenuItem(itemId));
  deleteMenuItemApi({itemId, venueId})
    .catch(err => console.log(err))
};

const updateImageThunk = (file, itemId) => (dispatch, getState) => {
  const state = getState();
  let key = state.activeVenue.venueId + '/' + itemId + '.png';
  let menuItem = find(state.menu, item => item.itemId === itemId);
  let imageUrl = imageBucketUrl + '/' + key;
  dispatch(updateMenuItem({...menuItem, image: {imageUrl, imageName: file.name}}));

  s3.upload({Key: key, Body: file}).promise()
    .then(() => updateMenuItemApi({...menuItem, imageUrl, imageName: file.name}))
    .catch(err => console.log(err));
};

export {updateMenuItemThunk, deleteMenuItemThunk, updateImageThunk}