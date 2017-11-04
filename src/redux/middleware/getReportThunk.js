import {updateReportType} from '../actions/reportActions'
import generateReport from '../../api/generateReport'

const reportThunk = (reportType) => (dispatch, getState) => {
  dispatch(updateReportType(reportType));
  const state = getState(),
    venueId = state.activeVenue.venueId,
    report = reportType,
    start = state.reports.start,
    end = state.reports.end,
    groupbyInterval = state.reports.interval;

  generateReport({venueId, report, start, end, groupbyInterval})
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

export default reportThunk