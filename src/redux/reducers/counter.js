/**
 * Created by warren on 3/16/17.
 */
import {INCREMENT_COUNTER} from '../actions/counter';

const counter =  (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state
  }
};

export default counter;