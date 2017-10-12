import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'

require('../css/bootstrap.min.css');

const styles = {
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    textAlign: 'center',
    marginTop: '50px'
  }
};

class SupportScene extends Component {
  render() {
    return (
      <div>
        <PageHeader style={{position: 'relative', paddingLeft: '40px'}}>AppTab</PageHeader>
        <div style={styles.textContainer}>
          <h5>Questions? Problems? Need help?</h5>
          <h5>Please send an email to support@apptab.io</h5>
          <h5 style={{marginTop: '50px'}}>Is the world on fire and you need my help?</h5>
          <h5>Please call (510) 883-4346.</h5>
        </div>
      </div>
    )
  }
}

export default SupportScene