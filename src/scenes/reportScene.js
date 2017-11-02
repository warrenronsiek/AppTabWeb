import React from 'react'
import AdminNavContainer from '../redux/connectedComponents/adminNavConnected'
import Reports from '../redux/connectedComponents/reportsConnected'

export default () => (
  <AdminNavContainer>
    <Reports/>
  </AdminNavContainer>
)