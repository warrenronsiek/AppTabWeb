import requester from './requester'

// invoke with object of shape {venueId, report, start, end, groupbyInterval}
export default requester('/generate-report', 'GenerateReportSuccessful', 'GenerateReportFailed')