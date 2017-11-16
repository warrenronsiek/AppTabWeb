import React from 'react'
import {Nav, NavItem, PageHeader} from 'react-bootstrap'

export default class NavContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PageHeader style={{position: 'relative', paddingLeft: '40px'}}>AppTab</PageHeader>
        <Nav bsStyle="tabs" onSelect={eventKey => this.props.navHandler(eventKey)} activeKey={this.props.activeKey} style={{paddingLeft: '12px'}}>
          <NavItem eventKey='/venues'>Venues</NavItem>
          <NavItem eventKey='/menus'>Menus</NavItem>
          <NavItem eventKey='/reports'>Reports</NavItem>
          <NavItem eventKey='/transactions'>Orders</NavItem>
        </Nav>
        {this.props.children}
      </div>
    )
  }
}
