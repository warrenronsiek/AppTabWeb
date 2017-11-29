import {connect} from 'react-redux';
import {
  updateActiveTransaction,
} from '../actions/transactionActions';
import {updateActiveVenue} from '../actions/venueActions'
import transactions from '../components/transactions';
import {cancelTransactionThunk, editTransactionThunk} from '../middleware/transactionThunks'

const mapStateToProps = state => ({
  transactions: state.transactions.visibleTransactions,
  venues: state.venues,
  activeVenue: state.activeVenue,
  activeTransaction: state.transactions.activeTransaction,
});

const mapDispatchToProps = dispatch => ({
  setActiveVenue: (venueId, name, address, timeRanges) => dispatch(updateActiveVenue(venueId, name, address, timeRanges)),
  updateTransactionAmount: ({transactionId, amount}) => dispatch(editTransactionThunk({transactionId, amount})),
  cancelTransaction: ({transactionId}) => dispatch(cancelTransactionThunk({transactionId})),
  updateActiveTransaction: ({transactionId, amount}) => dispatch(updateActiveTransaction({transactionId, amount})),
});

export default connect(mapStateToProps, mapDispatchToProps)(transactions)