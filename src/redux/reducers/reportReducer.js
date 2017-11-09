import {
  UPDATE_DATE_RANGE,
  UPDATE_GROUPBY_INTERVAL,
  UPDATE_REPORT_TYPE,
  UPDATE_REPORT_URL,
  UPDATE_REPORT_PROCESSING
} from '../actions/reportActions'
import {
  UPDATE_ACTIVE_VENUE
} from "../actions/venueActions";

const reports = (state = {
  start: null,
  end: null,
  interval: null,
  report: null,
  getReportEnabled: false,
  reportUrl: null,
  processing: false,
  venueUpdated: false
}, action) => {
  switch (action.type) {
    case UPDATE_GROUPBY_INTERVAL:
      return {...state, interval: action.interval, getReportEnabled: !!(state.start && state.end && action.interval) && state.venueUpdated};
    case UPDATE_DATE_RANGE:
      return {
        ...state,
        start: action.start,
        end: action.end,
        getReportEnabled: !!(action.start && action.end && state.interval) && state.venueUpdated
      };
    case UPDATE_REPORT_TYPE:
      return {...state, report: action.report, getReportEnabled: !!(state.start && state.end && action.interval) && state.venueUpdated};
    case UPDATE_REPORT_URL:
      return {...state, reportUrl: action.reportUrl};
    case UPDATE_REPORT_PROCESSING:
      return {...state, processing: action.bool};
    case UPDATE_ACTIVE_VENUE:
      return {...state, venueUpdated: true, getReportEnabled: !!(state.start && state.end && state.interval)};
    default:
      return state
  }
};

export {reports}