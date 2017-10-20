import React from 'react'
import AdminNavContainer from '../redux/connectedComponents/adminNavConnected'
import Menus from '../redux/connectedComponents/menusConnected'

export default () => (
  <AdminNavContainer>
    <Menus/>
  </AdminNavContainer>
)