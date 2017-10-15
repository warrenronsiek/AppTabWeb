import React from 'react'
import AdminNavContainer from '../redux/connectedComponents/adminNavConnected'
import Venues from '../redux/connectedComponents/venuesConnected'

export default () => (
  <AdminNavContainer>
    <Venues/>
  </AdminNavContainer>
)