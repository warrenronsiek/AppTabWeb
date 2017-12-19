/**
 * Created by warren on 3/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router'
import {store, history} from "./redux/store"
import cookie from 'react-cookie'
import {loadData} from "./common/loadData";
import './css/bootstrap.min.css';

import Login from './redux/connectedComponents/loginConnected'
import Register from './redux/connectedComponents/registerConnected'
import StripeConnect from './scenes/stripeConnect'
import StripeRedirect from './scenes/stripeRedirect'
import PasswordReset from './redux/connectedComponents/passwordResetConnected'
import Transactions from './scenes/transactionScene'
import SupportScene from './scenes/support'
import VenueScene from './scenes/venueScene'
import MenuScene from './scenes/menuScene'
import ReportScene from './scenes/reportScene'
import {updateAuthParams, updateClientId} from "./redux/actions/loginActions";

const loginRequired = (nextState, replace) => {
  if (store.getState().loginStatus !== 'loggedIn') {
    const
      clientId = cookie.load('clientId'),
      accessToken = cookie.load('accessToken'),
      refreshToken = cookie.load('refreshToken'),
      idToken = cookie.load('idToken'),
      updateTime = cookie.load('updateTime');
    if (clientId && accessToken && refreshToken && idToken && updateTime) {
      store.dispatch(updateClientId(clientId));
      store.dispatch(updateAuthParams(idToken, accessToken, refreshToken, decodeURIComponent(updateTime)));
      loadData()
        .catch(err => {
          store.dispatch({
            type: '@@router/LOCATION_CHANGE',
            payload: {
              pathname: '/',
              search: '',
              hash: '',
              action: 'RESET',
              key: null,
              query: {}
            }
          })
        })
    } else {
      store.dispatch({
        type: '@@router/LOCATION_CHANGE',
        payload: {
          pathname: '/',
          search: '',
          hash: '',
          action: 'RESET',
          key: null,
          query: {}
        }
      })
    }
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
      <Route path="/menus" components={MenuScene} onEnter={loginRequired}/>
      <Route path="/reports" components={ReportScene} onEnter={loginRequired}/>
      <Route path="/transactions" components={Transactions} onEnter={loginRequired}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
