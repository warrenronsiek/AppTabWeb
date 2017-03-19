/**
 * Created by warren on 3/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Route, Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import reducers from './redux/reducers/index'
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'

const routerBrowserMiddleware = routerMiddleware(browserHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(routerBrowserMiddleware, thunk)));
const history = syncHistoryWithStore(browserHistory, store);

import Counter from './redux/connectedComponents/counter';
import Login from './redux/connectedComponents/loginConnected';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Login}/>
      <Route path='/counter' component={Counter}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
