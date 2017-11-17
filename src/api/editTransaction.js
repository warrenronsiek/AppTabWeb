import requester from './requester'
//invoke with {transactionId, amount}
export default requester('/edit-transaction', 'EditTransactionSuccessful', 'EditTransactionFailure')