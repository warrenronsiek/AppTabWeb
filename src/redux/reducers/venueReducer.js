import {
  UPDATE_VENUE,
  UPDATE_ACTIVE_VENUE,
  SET_VENUE_STATE, UPDATE_TIME_RANGE, ADD_TIME_RANGE
} from '../actions/venueActions'

const venues = (state = [], action) => {
  switch (action.type) {
    case UPDATE_VENUE:
      return [...state.filter(item => item.venueId !== action.venueId), {
        venueId: action.venueId,
        address: action.address,
        name: action.name,
        timeRanges: action.timeRanges
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

const activeVenue = (state = {timeRanges: []}, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_VENUE:
      return {venueId: action.venueId, address: action.address, name: action.name, timeRanges: action.timeRanges};
    case UPDATE_TIME_RANGE:
      return {
        ...state,
        timeRanges: [...state.timeRanges.filter(timeRange => timeRange.id !== action.id), {
          id: action.id,
          name: action.name,
          range: action.range
        }].sort((a, b) => a.id > b.id)
      };
    case ADD_TIME_RANGE:
      return {
        ...state,
        timeRanges: [...state.timeRanges, {
          name: '', range: '', id: (state.timeRanges.reduce((max, timeRange) => Math.max(max, parseInt(timeRange.id)), 0) + 1).toString()
        }].sort((a, b) => a.id > b.id)
      };
    default:
      return state
  }
};

export {venues, activeVenue, venueFormStatus}