import {
  UPDATE_VENUE,
  UPDATE_ACTIVE_VENUE,
  SET_VENUE_STATE, UPDATE_TIME_RANGE, ADD_TIME_RANGE
} from '../actions/venueActions'
import {nth} from 'lodash'

const timeRangeValidator = string => {
  let regexWorks = !!string.match(/\d{1,2}:\d{2}\-\d{1,2}:\d{2}/g, '');
  let regex = /(\d{1,2}):(\d{2})?\-(\d{1,2}):(\d{2})?/;
  let groups = string.match(regex);
  console.log(groups);
  let rangeWorks = parseInt(nth(groups,1)) < parseInt(nth(groups, 3));
  let hoursWork = (parseInt(nth(groups,1)) < 24) && (parseInt(nth(groups,3)) < 24);
  let minutesWork =  (parseInt(nth(groups,2)) < 60) && (parseInt(nth(groups,4)) < 60);
  return (regexWorks && rangeWorks && hoursWork && minutesWork) ? 'success' : 'error'
};

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

const activeVenue = (state = {timeRanges: [], updateButtonDisabled: true}, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_VENUE:
      return {...state, venueId: action.venueId, address: action.address, name: action.name, timeRanges: action.timeRanges, updateButtonDisabled: true};
    case UPDATE_TIME_RANGE:
      let newTimeRanges = [...state.timeRanges.filter(timeRange => timeRange.id !== action.id), {
          id: action.id,
          name: action.name,
          range: action.range,
          rangeValid: timeRangeValidator(action.range)
        }].sort((a, b) => a.id > b.id);

      return {
        ...state,
        timeRanges: newTimeRanges,
        updateButtonDisabled: !newTimeRanges.reduce((bool, timeRange) => bool && (timeRange.rangeValid === 'success'), true)
      };
    case ADD_TIME_RANGE:
      return {
        ...state,
        timeRanges: [...state.timeRanges, {
          name: '', range: '', id: (state.timeRanges.reduce((max, timeRange) => Math.max(max, parseInt(timeRange.id)), 0) + 1).toString()
        }].sort((a, b) => a.id > b.id),
        updateButtonDisabled: true
      };
    default:
      return state
  }
};

export {venues, activeVenue, venueFormStatus}