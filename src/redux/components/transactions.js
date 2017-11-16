import React from 'react'
import PropTypes from 'prop-types'
import {
  FormGroup,
  FormControl,
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
  },
  tableNumberCol: {
    width: '10%'
  },
  dateCol: {
    width: '20%'
  },
  nameCol: {
    width: '15%'
  },
  amountCol: {
    width: '10%',
  },
  itemsCol: {
    width: '20%'
  },
  editButtonCol: {
    width: '10%'
  },
  cancelButtonCol: {
    width: '10%'
  }
};

const transactions = ({transactions, venues, activeVenue, setActiveVenue, updateActiveTransaction, cancelTransaction, updateTransactionAmount, activeTransaction}) => (
  <div style={styles.container}>
    <VenueSelectionDropdown setActiveVenue={setActiveVenue} activeVenue={activeVenue} venues={venues}/>
    <Table style={styles.table}>
      <thead>
      <tr>
        <th style={styles.tableNumberCol}>Table Number</th>
        <th style={styles.dateCol}>Date</th>
        <th style={styles.nameCol}>Name</th>
        <th style={styles.amountCol}>Amount</th>
        <th style={styles.itemsCol}>Items</th>
        <th style={styles.editButtonCol}/>
        <th style={styles.cancelButtonCol}/>
      </tr>
      </thead>
      <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.transactionId}>
          <td>{transaction.transactionId.slice(-3)}</td>
          <td>{transaction.createDate.toLocaleDateString() + ' ' + transaction.createDate.toLocaleTimeString()}</td>
          <td>{transaction.name}</td>
          <td>{(transaction.transactionId === activeTransaction.transactionId)
            ? <FormGroup><FormControl type='text' value={activeTransaction.amount ? centsIntToString(activeTransaction.amount) : 0}
                                      onChange={text => updateActiveTransaction({
                                        transactionId: activeTransaction.transactionId,
                                        amount: stringToCentsInt(text.target.value)
                                      })}/></FormGroup>
            : '$' + centsIntToString(transaction.amount)}
          </td>
          <td>{transaction.items.map(item => (
            <div key={item.itemId}>
              <text>{item.itemName}</text>
            </div>))}
          </td>
          {(activeTransaction.transactionId)
            ? <td>
              <Button onClick={() => updateTransactionAmount({transactionId: activeTransaction.transactionId, amount: activeTransaction.amount})}>Done</Button>
            </td>
            : <td>
            <Button onClick={() => updateActiveTransaction({transactionId: transaction.transactionId, amount: transaction.amount})}>Edit</Button>
          </td>}
          <td>
            <Button onClick={() => cancelTransaction({transactionId: transaction.transactionId})}>Cancel</Button>
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
  activeTransaction: PropTypes.object,
  updateTransactionAmount: PropTypes.func.isRequired,
  updateActiveTransaction: PropTypes.func.isRequired,
  cancelTransaction: PropTypes.func.isRequired
};

export default transactions