import {connect} from 'react-redux';
import {
  cancelTransaction,
  updateTransactionAmount,
  updateActiveTransaction,
  finishedEditingTransactionAmount
} from '../actions/transactionActions';
import {updateActiveVenue} from '../actions/venueActions'
import transactions from '../components/transactions';

const mapStateToProps = state => ({
  transactions: state.transactions.visibleTransactions,
  venues: state.venues,
  activeVenue: state.activeVenue,
  activeTransaction: state.transactions.activeTransaction,
});

const mapDispatchToProps = dispatch => ({
  setActiveVenue: (venueId, name, address, timeRanges) => dispatch(updateActiveVenue(venueId, name, address, timeRanges)),
  updateTransactionAmount: ({transactionId, amount}) => {
    dispatch(updateTransactionAmount({transactionId, amount}));
    dispatch(finishedEditingTransactionAmount())
  },
  cancelTransaction: ({transactionId}) => dispatch(cancelTransaction({transactionId})),
  updateActiveTransaction: ({transactionId, amount}) => dispatch(updateActiveTransaction({transactionId, amount})),
});

export default connect(mapStateToProps, mapDispatchToProps)(transactions)