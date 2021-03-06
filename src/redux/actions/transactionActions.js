export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const updateTransaction = ({transactionId, amount, createDate, nodeId, items, venueId, name}) => {
  return {type: UPDATE_TRANSACTION, payload: {transactionId, amount, createDate, nodeId, items, venueId, name}}
};

export const CANCEL_TRANSACTION = 'CANCEL_TRANSACTION';
export const cancelTransaction = ({transactionId}) => {
  return {type: CANCEL_TRANSACTION, payload: {transactionId}}
};

export const UPDATE_TRANSACTION_AMOUNT = 'UPDATE_TRANSACTION_AMOUNT';
export const updateTransactionAmount = ({transactionId, amount}) => {
  return {type: UPDATE_TRANSACTION_AMOUNT, payload: {transactionId, amount}}
};

export const UPDATE_ACTIVE_TRANSACTION = 'UPDATE_ACTIVE_TRANSACTION';
export const updateActiveTransaction = ({transactionId, amount}) => {
  return {type: UPDATE_ACTIVE_TRANSACTION, payload: {transactionId, amount}}
};

export const FINISHED_EDITING_TRANSACTION_AMOUNT = 'FINISHED_EDITING_TRANSACTION_AMOUNT';
export const finishedEditingTransactionAmount = () => {
  return {type: FINISHED_EDITING_TRANSACTION_AMOUNT, }
};
