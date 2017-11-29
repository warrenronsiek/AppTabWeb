import requester from './requester'

//invoke with {clientId}
export default requester('/get-transactions', 'GetTransactionsSuccessful', 'GetTransactionFailure')