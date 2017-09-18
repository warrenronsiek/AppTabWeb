import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'

const routerBrowserMiddleware = routerMiddleware(browserHistory);
let composeEnhancers;
switch (__STAGE__){
  case 'development':
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    break;
  case 'production':
    composeEnhancers = compose;
    break;
  default:
    composeEnhancers = compose;
    break;
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(routerBrowserMiddleware, thunk)));
const history = syncHistoryWithStore(browserHistory, store);

export {store, history}