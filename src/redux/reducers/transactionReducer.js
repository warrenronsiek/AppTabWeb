import {
  UPDATE_TRANSACTION,
  CANCEL_TRANSACTION,
  UPDATE_TRANSACTION_AMOUNT,
  SET_ACTIVE_TRANSACTION,
  FINISHED_EDITING_TRANSACTION_AMOUNT
} from '../actions/transactionActions'
import {UPDATE_ACTIVE_VENUE} from '../actions/venueActions'
import {find} from 'lodash'

const transactions = (state = {
  allTransactions: [{
    transactionId: 'asdfasdf',
    amount: '1923',
    createDate: new Date('2017-10-31T19:35:01.240Z'),
    nodeId: 'asdf001',
    items: [
      {
        itemId: '43d1066a6eb389e9f544',
        itemName: 'Clam Chowder',
        itemDescription: 'Chowder with clams.',
        viewablePrice: '$10.99',
        price: '1099',
        tags: ['shellfish'],
        category: 'main',
        venueId: '5913c829b6739ed3b963',
        showIncrementer: false,
        itemOptions: 'NULL',
        count: 1
      },
      {
        itemId: '61942c7353f988371997',
        itemName: 'Beef Bourguignon',
        itemDescription: ['Sides: Salad', 'Fries: Garlic'],
        viewablePrice: '$19.99',
        price: '1999',
        tags: ['beef'],
        category: 'main',
        venueId: '5913c829b6739ed3b963',
        showIncrementer: false,
        itemOptions:
          [{
            optionName: 'Salad',
            price: 0,
            optionId: 0,
            isSelected: true,
            optionSetId: 0,
            optionSetName: 'Sides',
            viewablePrice: '$0.00',
            key: '00'
          },
            {
              optionName: 'Garlic',
              price: 300,
              optionId: 2,
              isSelected: true,
              optionSetId: 1,
              optionSetName: 'Fries',
              viewablePrice: '$3.00',
              key: '12'
            }],
        count: 1
      }
    ],
    venueId: 'asdfasdf',
    name: 'Biff'
  }],
  visibleTransactions: [
    {
      transactionId: 'asdfasdf',
      amount: '1923',
      createDate: new Date('2017-10-31T19:35:01.240Z'),
      nodeId: 'asdf001',
      items: [
        {
          itemId: '43d1066a6eb389e9f544',
          itemName: 'Clam Chowder',
          itemDescription: 'Chowder with clams.',
          viewablePrice: '$10.99',
          price: '1099',
          tags: ['shellfish'],
          category: 'main',
          venueId: '5913c829b6739ed3b963',
          showIncrementer: false,
          itemOptions: 'NULL',
          count: 1
        },
        {
          itemId: '61942c7353f988371997',
          itemName: 'Beef Bourguignon',
          itemDescription: ['Sides: Salad', 'Fries: Garlic'],
          viewablePrice: '$19.99',
          price: '1999',
          tags: ['beef'],
          category: 'main',
          venueId: '5913c829b6739ed3b963',
          showIncrementer: false,
          itemOptions:
            [{
              optionName: 'Salad',
              price: 0,
              optionId: 0,
              isSelected: true,
              optionSetId: 0,
              optionSetName: 'Sides',
              viewablePrice: '$0.00',
              key: '00'
            },
              {
                optionName: 'Garlic',
                price: 300,
                optionId: 2,
                isSelected: true,
                optionSetId: 1,
                optionSetName: 'Fries',
                viewablePrice: '$3.00',
                key: '12'
              }],
          count: 1
        }
      ],
      venueId: 'asdfasdf',
      name: 'Biff'
    }],
  activeTransactionId: ''
}, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION:
      return {
        ...state, allTransactions:
          [...state.allTransactions.filter(transaction => transaction.transactionId !== action.transactionId),
            {...action.payload, date: new Date(action.createDate)}
          ].sort((a, b) => a.createDate > b.createDate)
      };
    case CANCEL_TRANSACTION:
      return {
        ...state,
        allTransactions: state.allTransactions.filter(transaction => transaction.transactionId !== action.transactionId),
        visibleTransactions: state.visibleTransactions.filter(transaction => transaction.transactionId !== action.transactionId)
      };
    case UPDATE_ACTIVE_VENUE:
      return {
        ...state,
        visibleTransactions: state.allTransactions.filter(transaction => transaction.venueId === action.venueId)
      };
    case SET_ACTIVE_TRANSACTION:
      return {
        ...state,
        activeTransactionId: action.transactionId
      };
    case UPDATE_TRANSACTION_AMOUNT:
      return {
        ...state,
        allTransactions: [...state,
          state.allTransactions.filter(transaction => transaction.transactionId !== action.transactionId),
          {...find(state.allTransactions, transaction => transaction.transactionId === action.transactionId), amount: action.amount}
        ].sort((a, b) => a.createDate > b.createDate),
        visibleTransactions: [...state,
          state.visibleTransactions.filter(transaction => transaction.transactionId !== action.transactionId),
          {...find(state.visibleTransactions, transaction => transaction.transactionId === action.transactionId), amount: action.amount}
        ].sort((a, b) => a.createDate > b.createDate)
      };
    case FINISHED_EDITING_TRANSACTION_AMOUNT:
      return {
        ...state,
        activeTransactionId: ''
      };
    default:
      return state
  }
};

export {transactions}