import {UPDATE_DATE_RANGE, UPDATE_GROUPBY_INTERVAL, UPDATE_REPORT_TYPE} from '../actions/reportActions'

const reports = (state = {start: null, end: null, interval: null, report: null, getReportEnabled: false}, action) => {
  switch (action.type) {
    case UPDATE_GROUPBY_INTERVAL:
      return {...state, interval: action.interval, getReportEnabled: !!(state.start && state.end && action.interval)};
    case UPDATE_DATE_RANGE:
      return {
        ...state,
        start: action.start,
        end: action.end,
        getReportEnabled: !!(action.start && action.end && state.interval)
      };
    case UPDATE_REPORT_TYPE:
      return {...state, report: action.report, getReportEnabled: !!(state.start && state.end && action.interval)};
    default:
      return state
  }
};

export {reports}