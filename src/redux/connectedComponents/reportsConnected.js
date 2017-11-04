import reports from '../components/reports'
import {connect} from 'react-redux'
import {updateDateRange, updateGroupbyInterval} from '../actions/reportActions'
import getReportThunk from '../middleware/getReportThunk'

const mapStateToProps = state => ({
  reportType: state.reports.report,
  getReportEnabled: state.reports.getReportEnabled,
  interval: state.reports.interval
});

const mapDispatchToProps = dispatch => ({
  updateDateRange: (start, end) => dispatch(updateDateRange(start,end)),
  updateReportType: report => dispatch(getReportThunk(report)),
  updateGroupbyInterval: interval => dispatch(updateGroupbyInterval(interval))
});

export default connect(mapStateToProps, mapDispatchToProps)(reports)

