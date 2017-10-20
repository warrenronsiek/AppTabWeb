import requester from './requester'

// invoke with {clientId}
export default requester('/get-client-login-data', 'GetLoginDataSuccessful', 'GetLoginDataFailure')