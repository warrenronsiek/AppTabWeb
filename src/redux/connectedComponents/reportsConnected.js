import Reports from '../components/reports'
import {connect} from 'react-redux'
import {updateDateRange, updateGroupbyInterval, updateReportType} from '../actions/reportActions'

const mapStateToProps = state => ({
  reportType: state.reports.report,
  getReportEnabled: state.reports.getReportEnabled,
  interval: state.reports.interval
});

const mapDispatchToProps = dispatch => ({
  updateDateRange: (start, end) => dispatch(updateDateRange(start,end)),
  updateReportType: report => dispatch(updateReportType(report)),
  updateGroupbyInterval: interval => dispatch(updateGroupbyInterval(interval))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports)

