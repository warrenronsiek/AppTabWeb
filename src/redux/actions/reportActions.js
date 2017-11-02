export const UPDATE_DATE_RANGE = 'UPDATE_DATE_RANGE';
export const updateDateRange = (start, end) => {
  return {type: UPDATE_DATE_RANGE, start, end}
};

export const UPDATE_REPORT_TYPE = 'UPDATE_REPORT_TYPE';
export const updateReportType = (report) => {
  return {type: UPDATE_REPORT_TYPE, report}
};

export const UPDATE_GROUPBY_INTERVAL = 'UPDATE_GROUPBY_INTERVAL';
export const updateGroupbyInterval = (interval) => {
  return {type: UPDATE_GROUPBY_INTERVAL, interval}
};


