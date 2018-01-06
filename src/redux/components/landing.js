/**
 * Created by warren on 3/17/17.
 */
import React, {Component} from 'react'
import PropTypes from 'proptypes'
import {FormGroup, ControlLabel, FormControl, PageHeader, Button, Image} from 'react-bootstrap'
import LandingImage from '../../static/landingImage.jpg'
import infoBlockWrapper from './infoBlock'
import Chronometer from '../../static/chronometer'

const ChonometerWrapped = infoBlockWrapper(Chronometer);
import Savings from '../../static/piggy-bank'

const SavingsWrapped = infoBlockWrapper(Savings);
import Charts from '../../static/bar-chart'

const ChartsWrapped = infoBlockWrapper(Charts);
import Contact from '../../static/phone-call'

const ContactWrapped = infoBlockWrapper(Contact);
import YouTube from 'react-youtube'
import Logo from '../../static/apptab_logo_circle.png'
import ProfilePic from '../../static/Simone-Anne-Warren-Oakland-Headshots-23.jpg'

require('../../css/bootstrap.min.css');

const styles = {
  parent: {
    position: 'relative',
    flex: 1,
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
    height: 400,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
  youTubeContainer: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 30
  },
  header: {
    display: 'flex',
    flex: 1,
    height: 83,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    position: 'fixed',
    width: '100%',
    borderBottomWidth: 'thin',
    paddingBottom: 1,
    borderBottom: 'solid'
  },
  logoContainer: {
    width: 80,
    maxWidth: 80
  },
  navContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 30,
    flex: 1,
    display: 'flex'
  },
  contactContainer: {
    flex: 1,
    display: 'flex',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 500,
    marginBottom: 50
  },
  profileSubContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid',
    borderWidth: 1,
    borderColor: '#D4D4D4',
    flexDirection: 'column',
    maxWidth: 302,
  },
  profileTextContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  profileImageContainer: {
    width: 300,
    height: 370,
    overflow: 'hidden',
  },
  footer: {
    height: 200,
    backgroundColor: '#d4d4d4',
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'flex',
    flex: 1,
    paddingLeft: 30,
    flexDirection: 'column'
  },
  navButton: {
    flex: 1,
    border: 'none',
    marginLeft: 5,
    marginRight: 5,
    outline: 0,
    hover: 'none'
  }
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {stickyNav: false}
  }

  render() {
    return (
      <div style={styles.parent}>
        <div style={Object.assign({}, styles.header,{} )}>
          <div style={styles.logoContainer}>
            <Image src={Logo} responsive/>
          </div>
          <div style={styles.navContainer}>
            <button style={styles.navButton} onClick={() => this.refs.info.scrollIntoView({behavior: 'smooth'})}>Info</button>
            <button style={styles.navButton} onClick={() => this.refs.demo.scrollIntoView({behavior: 'smooth'})}>Demo</button>
            <button style={styles.navButton} onClick={() => this.refs.contact.scrollIntoView({behavior: 'smooth'})}>Contact</button>
            <button style={styles.navButton} onClick={() => this.refs.team.scrollIntoView({behavior: 'smooth'})}>Team</button>
          </div>
          <div style={styles.loginContainer}>
            <Button onClick={() => navToLogin()}>Login</Button>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <h1 style={{color: 'black', fontSize: 60}}>AppTab</h1>
          <h1 style={{color: 'black', fontSize: 30}}>Turn tables faster at reduced cost.</h1>
          <h1 style={{color: 'black', fontSize: 30}}>Smartphone Mobile POS.</h1>
        </div>
        <div style={styles.infoContainer} ref='info'>
          <ChonometerWrapped>
            <h5 style={styles.infoText}>Not all customers want to talk to waitstaff. AppTab allows those customers to
              order and transact faster.</h5>
          </ChonometerWrapped>
          <SavingsWrapped>
            <h5 style={styles.infoText}>Letting AppTab handle some of your customer service allows you to serve more
              customers with fewer staff.</h5>
          </SavingsWrapped>
          <ChartsWrapped>
            <h5 style={styles.infoText}>Our analytics portal should serve all of your needs. If it doesn't have the
              reports
              you want, we will build it.</h5>
          </ChartsWrapped>
        </div>
        <div style={styles.youTubeContainer} ref='demo'>
          <YouTube videoId='QMwfFrMjlHE'/>
        </div>
        <div style={styles.contactContainer} ref='contact'>
          <ContactWrapped>
            <h5 style={{color: 'black', fontSize: 18, textAlign: 'center'}}>Email: support@apptab.io</h5>
            <h5 style={{color: 'black', fontSize: 18, textAlign: 'center'}}>Phone: (510) 883-4346</h5>
          </ContactWrapped>
        </div>
        <div style={styles.profileContainer} ref='team'>
          <div style={styles.profileSubContainer}>
            <div style={styles.profileImageContainer}>
              <Image src={ProfilePic} responsive style={{maxHeight: 500, marginLeft: 0, marginTop: -70}}/>
            </div>
            <div style={styles.profileTextContainer}>
              <h5 style={{color: 'black', fontSize: 16, textAlign: 'center', fontWeight: 'normal'}}>
                Warren Ronsiek is the founder and CEO of AppTab Inc. As a fullstack developer, data scientist, and AWS
                architect there is almost nothing that he can't accomplish.
              </h5>
            </div>
          </div>
        </div>
        <div style={styles.footer}>
          <h5>&#169; AppTab Inc.</h5>
          <h5 style={{marginTop: -5}}>1511 Julia Street</h5>
          <h5 style={{marginTop: -5}}>Apt. 4</h5>
          <h5 style={{marginTop: -5}}>Berkeley, CA. 94703</h5>
          <h5 style={{marginTop: -5}}>Icons by <a href="https://www.flaticon.com/authors/gregor-cresnar">Gregor Cresnar</a>.</h5>
        </div>
      </div>
    )
  }
};

Landing.propTypes = {
  navToLogin: PropTypes.func.isRequired
};

export default Landing