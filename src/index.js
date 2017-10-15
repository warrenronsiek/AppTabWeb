/**
 * Created by warren on 3/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router'
import {store, history} from "./redux/store"

import Login from './redux/connectedComponents/loginConnected'
import Register from './redux/connectedComponents/registerConnected'
import StripeConnect from './scenes/stripeConnect'
import StripeRedirect from './scenes/stripeRedirect'
import PasswordReset from './redux/connectedComponents/passwordResetConnected'
import SupportScene from './scenes/support'
import VenueScene from './scenes/venueScene'

const loginRequired = (nextState, replace) => {
  if (store.getState().loginStatus !== 'loggedIn') {
    replace('/')
  }
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Login}/>
      <Route path="/stripeConnect" component={StripeConnect} onEnter={loginRequired}/>
      <Route path="/stripeRedirect" component={StripeRedirect}/>
      <Route path="/register" component={Register}/>
      <Route path="/password-reset" component={PasswordReset}/>
      <Route path="/support" component={SupportScene}/>
      <Route path="/venues" components={VenueScene} onEnter={loginRequired}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
