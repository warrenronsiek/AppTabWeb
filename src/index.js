/**
 * Created by warren on 3/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router'
import {store, history} from "./redux/store";

import Login from './redux/connectedComponents/loginConnected';
import StripeConnect from './scenes/stripeConnect';
import StripeRedirect from './scenes/stripeRedirect'

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
    </Router>
  </Provider>,
  document.getElementById('app')
);
