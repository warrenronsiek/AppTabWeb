/**
 * Created by warren on 3/17/17.
 */
import React from 'react'
import PropTypes from 'proptypes'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  PageHeader,
  Button,
  Glyphicon,
  HelpBlock,
  Grid,
  Row,
  Col,
  Collapse
} from 'react-bootstrap'
require('../../css/bootstrap.min.css');

const styles = {
  parent: {
    position: 'relative',
    height: 500
  },
  form: {
    marginTop: '50px'
  },
  formGroup: {
    width: '300px',
    position: 'relative',
    margin: 'auto',
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
    marginTop: '30px',
  },
  button: {
    marginRight: '10px',
    width: '90px'
  },
  statusTextContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginLeft: '-40px'
  },
  checkMarkContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const isSuccess = successArray => successArray.reduce((allSuccessful, success) => {
  return allSuccessful && (success === 'success')
}, true);

const registerMessage = registrationStatus => {
  switch (registrationStatus) {
    case 'error':
      return <h4>ERROR!</h4>;
    case 'registrationComplete':
      return <h4>Success! Please check your inbox to confirm your email before logging in.</h4>;
    case 'registering':
      return <h4>Processing...</h4>;
    default:
      return null
  }
};

const Register = ({
                    email, name, password, phoneNumber, confirmPassword, updateEmail, updateName, updatePassword,
                    updateConfirmPassword, updatePhoneNumber, registrationStatus, validEmail, validName, validPhoneNumber,
                    passwordHasLength, passwordHasChar, passwordHasInt, passwordHasCap, passwordsMatch, register,
                    validPassword
                  }) => (
  <div style={styles.parent}>
    <PageHeader style={{position: 'relative', paddingLeft: '40px'}}>AppTab</PageHeader>
    <form style={styles.form}>
      <FormGroup style={styles.formGroup} validationState={validEmail}>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" value={email} placeholder="Please enter your email"
                     onChange={text => updateEmail(text.target.value)}/>
      </FormGroup>
      <FormGroup style={styles.formGroup} validationState={validName}>
        <ControlLabel>Name</ControlLabel>
        <FormControl type="text" value={name} placeholder="Please enter your name"
                     onChange={text => updateName(text.target.value)}/>
      </FormGroup>
      <FormGroup style={styles.formGroup} validationState={validPhoneNumber}>
        <ControlLabel>Phone Number</ControlLabel>
        <FormControl type="text" value={phoneNumber} placeholder="Please enter your phone number"
                     onChange={text => updatePhoneNumber(text.target.value)}/>
      </FormGroup>
      <FormGroup style={styles.formGroup} validationState={validPassword}>
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password" value={password} placeholder="Please enter your password"
                     onChange={text => updatePassword(text.target.value)}/>
      </FormGroup>
      <FormGroup style={styles.formGroup} validationState={validPassword}>
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl type="password" value={confirmPassword} placeholder="Please enter your password again"
                     onChange={text => updateConfirmPassword(text.target.value)}/>
        <HelpBlock>
          <Collapse in={validPassword === 'error'}>
            <Grid>
              <Row>
                <Col xs={4} md={3}>at least 8 characters: </Col>
                <Col xs={2} md={2}>{passwordHasLength ? <Glyphicon glyph='check'/> :
                  <Glyphicon glyph='unchecked'/>}</Col>
              </Row>
              <Row>
                <Col xs={4} md={3}>has one capital letter: </Col>
                <Col xs={2} md={2}>{passwordHasCap ? <Glyphicon glyph='check'/> : <Glyphicon glyph='unchecked'/>}</Col>
              </Row>
              <Row>
                <Col xs={4} md={3}>has one grammatical symbol: </Col>
                <Col xs={2} md={2}>{passwordHasChar ? <Glyphicon glyph='check'/> : <Glyphicon glyph='unchecked'/>}</Col>
              </Row>
              <Row>
                <Col xs={4} md={3}>has one digit: </Col>
                <Col xs={2} md={2}>{passwordHasInt ? <Glyphicon glyph='check'/> : <Glyphicon glyph='unchecked'/>}</Col>
              </Row>
              <Row>
                <Col xs={4} md={3}>matches confirm password: </Col>
                <Col xs={2} md={2}>{passwordsMatch ? <Glyphicon glyph='check'/> : <Glyphicon glyph='unchecked'/>}</Col>
              </Row>
            </Grid>
          </Collapse>
        </HelpBlock>
      </FormGroup>
    </form>
    <div style={styles.buttonContainer}>
      {(isSuccess([validPassword, validPhoneNumber, validEmail, validName]))
        ? <Button style={styles.button} onClick={() => register()}>Register</Button>
        : <Button style={styles.button} disabled>Register</Button>
      }
    </div>
    <div style={styles.messageContainer}>
      {registerMessage(registrationStatus)}
    </div>
  </div>
);

Register.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  password: PropTypes.string,
  phoneNumber: PropTypes.string,
  confirmPassword: PropTypes.string,
  updateEmail: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateConfirmPassword: PropTypes.func.isRequired,
  updatePhoneNumber: PropTypes.func.isRequired,
  registrationStatus: PropTypes.string,
  validEmail: PropTypes.string,
  validName: PropTypes.string,
  validPhoneNumber: PropTypes.string,
  passwordHasLength: PropTypes.bool,
  passwordHasChar: PropTypes.bool,
  passwordHasInt: PropTypes.bool,
  passwordHasCap: PropTypes.bool,
  passwordsMatch: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

export default Register