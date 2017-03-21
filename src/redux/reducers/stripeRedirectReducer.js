/**
 * Created by warren on 3/21/17.
 */
import {handleActions} from 'redux-actions'
import {processing, complete, error} from '../actions/stripeRedirectActions'

export const stripeRedirectStatus = handleActions({
  [processing]: (state, action) => "processing",
  [complete]: (state, action) => "complete",
  [error]: (state, action) => 'error'
}, "processing");