/**
 * Created by warren on 3/17/17.
 */
import React from 'react'
import PropTypes from 'proptypes'
import {FormGroup, ControlLabel, FormControl, PageHeader, Button, Image} from 'react-bootstrap'
import LandingImage from '../../static/landingImage.jpg'
import InfoBlock from './infoBlock'
import Chronometer from '../../static/chronometer'

require('../../css/bootstrap.min.css');

const styles = {
  parent: {
    position: 'relative',
    flex: 1,
  },
  form: {
    marginTop: '150px'
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
    margin: "auto"
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
    margin: 'auto',
    marginTop: '20px'
  },
  passwordResetButtonContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  passwordResetButton: {
    width: '130px',
    marginRight: '10px'
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 600,
    height: 600,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    height: 600,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  }
};

const LoginSwitch = (props) => {
  switch (props.loginStatus) {
    case 'loggingIn':
      return <h3>Logging In...</h3>;
    case 'wrongCredentials':
      return <h3>Wrong username or password</h3>;
    case 'networkError':
      return <h3>Network Error</h3>;
    case 'mysteryError':
      return <h3>Mysterious Error</h3>;
    default:
      return null;
  }
};



const login = ({
                 email, password, updateEmail, updatePassword, submitLoginCredentials, loginStatus, navToRegister,
                 navToPasswordReset
               }) => (
  <div style={styles.parent}>
    <div style={styles.imageContainer}>
      <h1 style={{color: 'black', fontSize: 60}}>AppTab</h1>
      <h1 style={{color: 'black', fontSize: 30}}>Turn tables faster at reduced cost.</h1>
    </div>
    <div style={styles.infoContainer}>
      <InfoBlock RenderSvg={Chronometer}>
        <p>test</p>
      </InfoBlock>
    </div>
    <form style={styles.form}>
      <FormGroup style={styles.formGroup}>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" value={email} placeholder="Please enter your email"
                     onChange={text => updateEmail(text.target.value)}/>
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password" value={password} placeholder="Please enter your password"
                     onChange={text => updatePassword(text.target.value)}/>
      </FormGroup>
    </form>
    {(loginStatus === 'loggingIn')
      ? null
      : <div>
        <div style={styles.buttonContainer}>
          <Button style={styles.button} onClick={() => submitLoginCredentials(email, password)}>Login</Button>
          <Button style={styles.button} onClick={() => navToRegister()}>Register</Button>
        </div>
        <div style={styles.passwordResetButtonContainer}>
          <Button style={styles.passwordResetButton} onClick={() => navToPasswordReset()}>Reset Password</Button>
        </div>
      </div>
    }
    <div style={styles.statusTextContainer}>
      <LoginSwitch loginStatus={loginStatus}/>
    </div>
  </div>
);

login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  submitLoginCredentials: PropTypes.func.isRequired,
  loginStatus: PropTypes.string,
  navToRegister: PropTypes.func.isRequired,
  navToPasswordReset: PropTypes.func.isRequired
};

export default login