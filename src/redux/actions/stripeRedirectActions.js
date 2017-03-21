/**
 * Created by warren on 3/21/17.
 */
import {createActions} from 'redux-actions'

export const {processing, complete, error} = createActions({
  PROCESSING: () => {},
  COMPLETE: () => {},
  ERROR: () => {}
});