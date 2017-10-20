/**
 * Created by warrenronsiek on 3/19/17.
 */

import React from 'react'
import {Button, PageHeader} from 'react-bootstrap'
import {stripe} from '../../vars'

const redirectUrl = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${stripe.client_id}&scope=read_write`;

const styles = {
  parent: {
    position: 'relative',
    height: 500
  },
  redirectButton: {
    width: '200px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-100px'
  },
};

const redirectButton = () => (
  <div style={styles.parent}>
    <PageHeader style={{position: 'relative', paddingLeft: '40px'}}>AppTab</PageHeader>
    <Button href={redirectUrl} style={styles.redirectButton}>Connect To Stripe</Button>
  </div>
);

export default  redirectButton