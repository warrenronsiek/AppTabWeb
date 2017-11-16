import React from 'react'
import AdminNavContainer from '../redux/connectedComponents/adminNavConnected'
import Transactions from '../redux/connectedComponents/transactionsConnected'

export default () => (
  <AdminNavContainer>
    <Transactions/>
  </AdminNavContainer>
)