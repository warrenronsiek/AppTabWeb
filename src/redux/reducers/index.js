/**
 * Created by warren on 3/16/17.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {loginParams, authParams, clientId, loginStatus} from './loginReducer'
import counter from './counter'

export default combineReducers({counter, routing: routerReducer, loginParams, authParams, clientId, loginStatus})