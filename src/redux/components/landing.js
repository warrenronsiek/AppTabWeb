/**
 * Created by warren on 3/17/17.
 */
import React, {Component} from 'react'
import PropTypes from 'proptypes'
import {FormGroup, ControlLabel, FormControl, PageHeader, Button, Image, Nav, Navbar} from 'react-bootstrap'

require('../../css/bootstrap.min.css');
require('../../css/style.css');

const styles = {
  parent: {
    position: 'relative',
    flex: 1,
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
    <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a data-scroll className="navbar-brand" onClick={() => this.refs.hero.scrollIntoView({behavior: 'smooth'})}><img src={require("../../static/logo.png")}/></a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a data-scroll onClick={() => this.refs.features.scrollIntoView({behavior: 'smooth', block: 'end'})}>Features</a></li>
              <li><a data-scroll onClick={() => this.refs.demo.scrollIntoView({behavior: 'smooth'})}>Demo</a></li>
              <li><a data-scroll onClick={() => this.refs.team.scrollIntoView({behavior: 'smooth'})}>Team</a></li>
              <li><a data-scroll onClick={() => this.refs.contact.scrollIntoView({behavior: 'smooth'})}>Contact</a></li>
              <li><a data-scroll onClick={() => this.props.navToLogin()}>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="hero" className="hero jumbotron jumbotron-fluid" ref="hero">
        <div className="container">
          <div className="row row-flex">
            <div className="heroMsg col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 col-v-centered col-xs-12">
              <p><span className="small">Smartphone Mobile POS</span><br/>
              <span className="big">Turn tables faster, <br/>at reduced cost.</span><br/>
              <a data-scroll onClick={() => this.refs.features.scrollIntoView({behavior: 'smooth',  block: 'end'})}><img className="bttn" src={require("../../static/btn.png")} height="50px"/></a></p>
            </div>
          </div>
        </div>
      </div>
        <div id="features" className="features" ref="features">
            <div className="container">
          <div className="row">
            <div className="col-md-12"><h2>Features</h2></div>
          </div>
          <div className="row">
            <div className="col-md-6"><img className="img-responsive phoneImg" src={require("../../static/phone.jpg")} width="500px"/></div>
            <div className="col-md-6">
              <div className="featBox">
                <h3>Reduce Friction</h3>
                <div className="featCopy">Not all customers want to talk to waitstaff. AppTab allows those customers to order and transact faster.</div>
              </div>
              <div className="featBox">
                  <h3>Increase Efficiency</h3>
                  <div className="featCopy">Letting AppTab handle some of your customer service allows you to serve more customers with fewer staff.</div>
                </div>
                <div className="featBox">
                    <h3>Seamless Management</h3>
                    <div className="featCopy">Our analytics portal should serve all of your needs. If it doesn't have the reports you want, we will build it.</div>
                  </div>
            </div>
          </div>
        </div>
        </div>
        <div id="demo" className="demo" ref="demo">
            <div className="container">
          <div className="row">
            <div className="col-md-12"><h2>Demo</h2></div>
          </div>
          <div className="row">
            <div className="col-md-12">
                <div className="video"><div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="800" height="450" src="https://www.youtube.com/embed/QMwfFrMjlHE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
                  </div></div>
            </div>
          </div>
        </div>
        </div>
        <div id="team" className="team" ref="team">
            <div className="container">
          <div className="row">
            <div className="col-md-12"><h2>Team</h2></div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="teamBox warren">
                <img className="img-responsive" src={require("../../static/warren.jpg")} width="350px"/>
                <div className="name text-left"><h3>Warren Ronsiek</h3>Founder and CEO</div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="teamBox">
                <img className="img-responsive" src={require("../../static/ben.jpg")} width="350px"/>
                <div className="name text-left"><h3>Ben Weinstein</h3>Design Lead</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="contact" className="contact" ref="contact">
            <div className="container">
          <div className="row">
            <div className="col-md-12"><h2>Contact</h2></div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6"><div className="contactBox center-block"><img src={require("../../static/mail.png")} width="50px"/>support [at] apptab.io</div></div>
            <div className="col-md-6 col-sm-6"><div className="contactBox center-block"><img src={require("../../static/phone.png")} width="50px"/>(510) 883-4346</div></div>
          </div>
        </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">© 2018 AppTab Inc.</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
};

Landing.propTypes = {
  navToLogin: PropTypes.func.isRequired
};

export default Landing