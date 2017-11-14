export const UPDATE_VENUE = 'UPDATE_VENUE';
export const updateVenue = (venueId, name, address, timeRanges) => {
  return {type: UPDATE_VENUE, venueId, name, address, timeRanges}
};

export const SET_VENUE_STATE = 'SET_VENUE_STATE';
export const setVenueState = (state) => {
  return {type: SET_VENUE_STATE, state}
};

export const UPDATE_ACTIVE_VENUE = 'UPDATE_ACTIVE_VENUE';
export const updateActiveVenue = (venueId, name, address, timeRanges) => {
  return {type: UPDATE_ACTIVE_VENUE, venueId, name, address, timeRanges}
};

export const UPDATE_TIME_RANGE = 'UPDATE_TIME_RANGE';
export const updateTimeRange = (name, id, range) => {
  return {type: UPDATE_TIME_RANGE, name, id, range}
};

export const ADD_TIME_RANGE = 'ADD_TIME_RANGE';
export const addTimeRange = () => {
  return {type: ADD_TIME_RANGE, }
};

