import {connect} from 'react-redux';
import {
  cancelTransaction,
  updateTransactionAmount,
  setActiveTransaction,
  finishedEditingTransactionAmount
} from '../actions/transactionActions';
import {updateActiveVenue} from '../actions/venueActions'
import transactions from '../components/transactions';

const mapStateToProps = state => ({
  transactions: state.transactions.visibleTransactions,
  venues: state.venues,
  activeVenue: state.activeVenue,
  activeTransactionId: state.transactions.activeTransactionId,

});

const mapDispatchToProps = dispatch => ({
  setActiveVenue: (venueId, name, address, timeRanges) => dispatch(updateActiveVenue(venueId, name, address, timeRanges)),
  updateTransactionAmount: ({transactionId, amount, createDate, nodeId, items, venueId, name}) =>
    dispatch(updateTransactionAmount({transactionId, amount})),
  cancelTransaction: ({transactionId}) => dispatch(cancelTransaction({transactionId})),
  setActiveTransaction: (transactionId) => dispatch(setActiveTransaction(transactionId)),
  finishedEditingTransactionAmount: () => dispatch(finishedEditingTransactionAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(transactions)