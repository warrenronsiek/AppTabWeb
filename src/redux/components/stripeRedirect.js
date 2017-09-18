/**
 * Created by warren on 3/21/17.
 */

import React from 'react'
import PropTypes from 'proptypes'

const styles = {
  parent: {
    position: 'relative'
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: window.innerHeight / 2,
    transform: 'translate(-50%, -50%)',
  },
  headerStyle: {
    textAlign: 'center'
  },
  textStyle: {textAlign: 'center'}
};

const GenHtml = (props) => (
  <div style={styles.textContainer}>
    <h3 style={styles.headerStyle}>{props.header}</h3>
    <text style={styles.textStyle}>{props.message}</text>
  </div>
);

const StatusSwitch = (props) => {
  switch (props.status) {
    case 'processing':
      return (
        <GenHtml header="Processing" message="Processing stripe integration, please do not close your browser."/>
      );
    case 'complete':
      return (
        <GenHtml header="Complete" message="Stripe integration complete. You can now close your browser."/>
      );
    case 'error':
      return (
        <GenHtml header="ERROR" message="OHS NOES!"/>
      );
    default:
      return (
        <GenHtml header="Processing" message="Processing stripe integration, please do not close your browser."/>
      );
  }
};

const stripeRedirect = ({status}) => (
  <div style={styles.parent}>
    <StatusSwitch status={status}/>
  </div>
);

stripeRedirect.propTypes = {
  status: PropTypes.string.isRequired
};

export default stripeRedirect