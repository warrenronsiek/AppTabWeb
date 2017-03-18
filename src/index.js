/**
 * Created by warren on 3/16/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import reducers from './redux/reducers/index'
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'

const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(middleware)));
const history = syncHistoryWithStore(browserHistory, store);

import Counter from './redux/connectedComponents/counter';
import Login from './redux/connectedComponents/loginConnected';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Login}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
