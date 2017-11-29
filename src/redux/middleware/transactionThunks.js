import {
  cancelTransaction,
  updateTransactionAmount,
  finishedEditingTransactionAmount
} from "../actions/transactionActions";
import cancelTransactionApi from '../../api/cancelTransaction'
import editTransaction from '../../api/editTransaction'

const cancelTransactionThunk = ({transactionId}) => (dispatch) => {
  cancelTransactionApi({transactionId});
  dispatch(cancelTransaction({transactionId}));
};

const editTransactionThunk = ({transactionId, amount}) => (dispatch) => {
  editTransaction({transactionId, amount});
  dispatch(updateTransactionAmount({transactionId, amount}));
  dispatch(finishedEditingTransactionAmount())
};

export {cancelTransactionThunk, editTransactionThunk}