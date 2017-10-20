import {
  UPDATE_VENUE,
  UPDATE_ACTIVE_VENUE,
  SET_VENUE_STATE
} from '../actions/venueActions'

const venues = (state = [], action) => {
  switch (action.type) {
    case UPDATE_VENUE:
      return [...state.filter(item => item.venueId !== action.venueId), {
        venueId: action.venueId,
        address: action.address,
        name: action.name
      }];
    default:
      return state
  }
};

const venueFormStatus = (state = '', action) => {
  switch (action.type) {
    case SET_VENUE_STATE:
      return action.state;
    default:
      return state
  }
};

const activeVenue = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_VENUE:
      return {venueId: action.venueId, address: action.address, name: action.name};
    default:
      return state
  }
};

export {venues, activeVenue, venueFormStatus}