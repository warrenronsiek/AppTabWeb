/**
 * Created by warren on 3/16/17.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import loginParams from './loginReducer';
import counter from './counter'

export default combineReducers({counter, routing: routerReducer, loginParams})