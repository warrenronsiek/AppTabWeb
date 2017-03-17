/**
 * Created by warren on 3/17/17.
 */
import {UPDATE_PASSWORD, UPDATE_EMAIL} from '../actions/loginActions'

const loginParams = (state={password: "", email: ""}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {...state, ...{password: action.password}};
    case UPDATE_EMAIL:
      return {...state, ...{email: action.email}};
    default:
      return state
  }
};

export default loginParams