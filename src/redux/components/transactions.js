import React from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Table
} from 'react-bootstrap'
import centsIntToString from '../../common/centsIntToString'
import stringToCentsInt from '../../common/stringToCentsInt'
import VenueSelectionDropdown from './venueSelectionDropdown'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  table: {
    width: '90%'
  }

};

const transactions = ({transactions, venues, activeVenue, setActiveVenue, setActiveTransaction, cancelTransaction, finishedEditingTransactionAmount, updateTransactionAmount, activeTransactionId}) => (
  <div style={styles.container}>
    <VenueSelectionDropdown setActiveVenue={setActiveVenue} activeVenue={activeVenue} venues={venues}/>
    <Table style={styles.table}>
      <thead>
      <tr>
        <th>Table Number</th>
        <th>Date</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Items</th>
        <th/>
        <th/>
      </tr>
      </thead>
      <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.transactionId}>
          <td>{transaction.transactionId.slice(-3)}</td>
          <td>{transaction.createDate.toLocaleDateString() + ' ' + transaction.createDate.toLocaleTimeString()}</td>
          <td>{transaction.name}</td>
          <td>{(transaction.transactionId === activeTransactionId)
            ? <FormGroup><FormControl type='text' value={centsIntToString(transaction.amount)} onChange={text => updateTransactionAmount({transactionId: transaction.transactionId, amount: stringToCentsInt(text.target.value)})}/></FormGroup>
            : '$' + centsIntToString(transaction.amount)}
          </td>
          <td>{transaction.items.map(item => (<div>
            <text>{item.itemName}</text>
          </div>))}</td>
          <td>
            <Button onClick={() => cancelTransaction({transactionId: transaction.transactionId})}>Cancel</Button>
          </td>
          <td>
            <Button onClick={() => setActiveTransaction(transaction.transactionId)}>Edit</Button>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  </div>);

transactions.propTypes = {
  transactions: PropTypes.array,
  venues: PropTypes.array,
  activeVenue: PropTypes.object,
  setActiveVenue: PropTypes.func.isRequired,
  activeTransactionId: PropTypes.string.isRequired,
  updateTransactionAmount: PropTypes.func.isRequired,
  setActiveTransaction: PropTypes.func.isRequired,
  finishedEditingTransactionAmount: PropTypes.func.isRequired,
  cancelTransaction: PropTypes.func.isRequired
};

export default transactions