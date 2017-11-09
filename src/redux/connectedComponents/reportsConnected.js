import reports from '../components/reports'
import {connect} from 'react-redux'
import {updateDateRange, updateGroupbyInterval} from '../actions/reportActions'
import {updateActiveVenue} from "../actions/venueActions"
import getReportThunk from '../middleware/getReportThunk'

const mapStateToProps = state => ({
  reportType: state.reports.report,
  getReportEnabled: state.reports.getReportEnabled,
  interval: state.reports.interval,
  processing: state.reports.processing,
  url: state.reports.reportUrl,
  venues: state.venues,
  activeVenue: state.activeVenue,
});

const mapDispatchToProps = dispatch => ({
  updateDateRange: (start, end) => dispatch(updateDateRange(start, end)),
  updateReportType: report => dispatch(getReportThunk(report)),
  updateGroupbyInterval: interval => dispatch(updateGroupbyInterval(interval)),
  setActiveVenue: (venueId, name, address) => dispatch(updateActiveVenue(venueId, name, address))
});

export default connect(mapStateToProps, mapDispatchToProps)(reports)

