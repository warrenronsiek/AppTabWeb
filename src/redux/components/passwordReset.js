import React from 'react'
import PropTypes from 'proptypes'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  PageHeader,
  Button,
  Collapse,
  Grid,
  Row,
  Col,
  Glyphicon,
  HelpBlock
} from 'react-bootstrap'

require('../../css/bootstrap.min.css');

const styles = {
  form: {
    marginTop: '50px'
  },
  formGroup: {
    width: '300px',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px'
  },
  button: {
    marginRight: '10px',
    width: '90px'
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
  }

};

const StatusMessage = ({props}) => {
  switch (props.status) {
    case 'enterEmail':
      return <h4>Please enter your email so we can send you a password reset code.</h4>;
    default:
      return null
  }
};

const CustomForm = (props) => (
  <FormGroup style={styles.formGroup} validationState={props.validationState}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl type={props.type} value={props.value} placeholder={props.placeholder}
                 onChange={text => props.updater(text.target.value)}/>
  </FormGroup>
);

const CheckMarkRow = (props) => (
  <Row>
    <Col xs={4} md={3}>{props.message}</Col>
    <Col xs={2} md={2}>{props.condition ? <Glyphicon glyph='check'/> : <Glyphicon glyph='unchecked'/>}</Col>
  </Row>
);
const PasswordReset = ({
                         password, updatePassword, email, updateEmail, confirmPassword, updateConfirmPassword, code,
                         updateResetCode, status, sendCode, resetPassword, passwordHasLength, passwordHasCap,
                         passwordHasChar, passwordHasInt, passwordsMatch, validEmail, validPassword, validCode,
                         processing
                       }) => (
  <div>
    <PageHeader style={{position: 'relative', paddingLeft: '40px'}}>AppTab</PageHeader>
    <form style={styles.form}>
      <CustomForm label='Email' type='text' value={email} placeholder='please enter your email' updater={updateEmail}
                  validationState={validEmail}/>
    </form>
    <Collapse in={status === 'enterCode'}>
      <div>
        <form>
          <CustomForm label='ConfirmationCode' type='text' value={code} updater={updateResetCode}
                      placeholder='enter the code we sent to your email address' validationState={validCode}/>
          <CustomForm label='New Password' type='password' value={password} placeholder='please enter your new password'
                      updater={updatePassword} validationState={validPassword}/>
          <FormGroup style={styles.formGroup} validationState={validPassword}>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl type='password' value={confirmPassword} placeholder='confirm your password'
                         onChange={text => updateConfirmPassword(text.target.value)}/>
            <HelpBlock>
              <Grid>
                <CheckMarkRow message='at least 8 characters: ' condition={passwordHasLength}/>
                <CheckMarkRow message='has one capital letter: ' condition={passwordHasCap}/>
                <CheckMarkRow message='has one grammatical symbol: ' condition={passwordHasChar}/>
                <CheckMarkRow message='has one digit: ' condition={passwordHasInt}/>
                <CheckMarkRow message='matches confirm password: ' condition={passwordsMatch}/>
              </Grid>
            </HelpBlock>
          </FormGroup>
        </form>
      </div>
    </Collapse>
    <div style={styles.buttonContainer}>
      {(processing)
        ? <h4>Processing...</h4>
        : (status === 'enterEmail')
          ? <Button onClick={() => sendCode(email)} disabled={validEmail !== 'success'}>Send Confirmation Code</Button>
          : <Button onClick={() => resetPassword(password)}
                    disabled={(validPassword !== 'success') || (validCode !== 'success')}>Reset Password</Button>}
    </div>
  </div>
);

PasswordReset.propTypes = {
  password: PropTypes.string,
  email: PropTypes.string,
  confirmPassword: PropTypes.string,
  code: PropTypes.string,
  updatePassword: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateConfirmPassword: PropTypes.func.isRequired,
  updateResetCode: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  sendCode: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  passwordHasLength: PropTypes.bool,
  passwordHasInt: PropTypes.bool,
  passwordHasCap: PropTypes.bool,
  passwordHasChar: PropTypes.bool,
  passwordsMatch: PropTypes.bool,
  validEmail: PropTypes.string,
  validPassword: PropTypes.string,
  validCode: PropTypes.string,
  processing: PropTypes.bool
};

export default PasswordReset