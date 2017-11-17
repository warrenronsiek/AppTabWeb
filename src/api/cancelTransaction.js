import requester from './requester'
// call with object of shape {transactionId}
export default requester('/cancel-transaction', 'CancelTransactionSuccessful', 'CancelTransactionFailure')