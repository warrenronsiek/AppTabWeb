import {
  UPDATE_TRANSACTION,
  CANCEL_TRANSACTION,
  UPDATE_TRANSACTION_AMOUNT,
  UPDATE_ACTIVE_TRANSACTION,
  FINISHED_EDITING_TRANSACTION_AMOUNT
} from '../actions/transactionActions'
import {UPDATE_ACTIVE_VENUE} from '../actions/venueActions'
import {find} from 'lodash'

const transactions = (state = {
  allTransactions: [],
  visibleTransactions: [],
  activeTransaction: {}
}, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION:
      return {
        ...state, allTransactions:
          [...state.allTransactions.filter(transaction => transaction.transactionId !== action.payload.transactionId),
            {...action.payload, date: new Date(action.payload.createDate)}
          ].sort((a, b) => a.createDate > b.createDate)
      };
    case CANCEL_TRANSACTION:
      if (JSON.stringify(state.activeTransaction) === JSON.stringify({})) {
        return {
          ...state,
          allTransactions: state.allTransactions.filter(transaction => transaction.transactionId !== action.payload.transactionId),
          visibleTransactions: state.visibleTransactions.filter(transaction => transaction.transactionId !== action.payload.transactionId)
        };
      }
      return {
        ...state,
        activeTransaction: {}
      };
    case UPDATE_ACTIVE_VENUE:
      return {
        ...state,
        visibleTransactions: state.allTransactions.filter(transaction => transaction.venueId === action.venueId)
      };
    case UPDATE_ACTIVE_TRANSACTION:
      return {
        ...state,
        activeTransaction: {...action.payload}
      };
    case UPDATE_TRANSACTION_AMOUNT:
      return {
        ...state,
        allTransactions: [
          ...state.allTransactions.filter(transaction => transaction.transactionId !== action.payload.transactionId),
          {
            ...find(state.allTransactions, transaction => transaction.transactionId === action.payload.transactionId),
            amount: action.payload.amount
          }
        ].sort((a, b) => a.createDate > b.createDate),
        visibleTransactions: [
          ...state.visibleTransactions.filter(transaction => transaction.transactionId !== action.payload.transactionId),
          {
            ...find(state.visibleTransactions, transaction => transaction.transactionId === action.payload.transactionId),
            amount: action.payload.amount
          }
        ].sort((a, b) => a.createDate > b.createDate)
      };
    case FINISHED_EDITING_TRANSACTION_AMOUNT:
      return {
        ...state,
        activeTransaction: {}
      };
    default:
      return state
  }
};

export {transactions}