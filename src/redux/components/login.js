/**
 * Created by warren on 3/17/17.
 */
import React, {PropTypes} from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
require('../../css/bootstrap.min.css');


const login = ({email, password, updateEmail, updatePassword, submitLoginCredentials}) => (
  <div>
    <form>
      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" value={email} placeholder="Please enter your email"
                     onChange={text => updateEmail(text.target.value)}/>
        <ControlLabel>Password</ControlLabel>
        <FormControl type="text" value={password} placeholder="Please enter your password"
                     onChange={text => updatePassword(text.target.value)}/>
      </FormGroup>
    </form>
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