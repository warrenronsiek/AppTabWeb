/**
 * Created by warren on 3/17/17.
 */
import React, {PropTypes} from 'react'
import {FormGroup, ControlLabel, FormControl, PageHeader, Button} from 'react-bootstrap'
require('../../css/bootstrap.min.css');

const styles = {
  parent: {
    position: 'relative',
    height: 500
  },
  form: {
    width: '300px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: "100px 0 0 -170px"
  },
  header: {
    textAlign: 'center',
  },
  subHeader: {
    textAlign: 'center',
    margin: "30px 0 0 0"
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '450px',
    marginLeft: '-30px'
  },
  button: {
    marginRight: '10px',
    width: '90px'
  }
};

const login = ({email, password, updateEmail, updatePassword, submitLoginCredentials}) => (
  <div style={styles.parent}>
    <PageHeader style={{position: 'relative', paddingLeft: '40px'}}>AppTab</PageHeader>
    <form>
      <FormGroup style={styles.form}>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" value={email} placeholder="Please enter your email"
                     onChange={text => updateEmail(text.target.value)}/>
        <ControlLabel>Password</ControlLabel>
        <FormControl type="text" value={password} placeholder="Please enter your password"
                     onChange={text => updatePassword(text.target.value)}/>
      </FormGroup>
    </form>
    <div style={styles.buttonContainer}>
      <Button style={styles.button} onClick={(email, password) => submitLoginCredentials(email, password)}>Login</Button>
    </div>
  </div>
);

login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  submitLoginCredentials: PropTypes.func.isRequired
};

export default login