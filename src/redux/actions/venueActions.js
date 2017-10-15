export const UPDATE_VENUE = 'UPDATE_VENUE';
export const updateVenue = (venueId, name, address) => {
  return {type: UPDATE_VENUE, venueId, name, address}
};

export const SET_VENUE_STATE = 'SET_VENUE_STATE';
export const setVenueState = (state) => {
  return {type: SET_VENUE_STATE, state}
};

export const UPDATE_ACTIVE_VENUE = 'UPDATE_ACTIVE_VENUE';
export const updateActiveVenue = (venueId, name, address) => {
  return {type: UPDATE_ACTIVE_VENUE, venueId, name, address}
};

