/**
 * Created by warren on 3/16/17.
 */

import {connect} from 'react-redux';
import {incrementCounter} from '../actions/counter';
import counter from '../components/counter';

const mapStateToProps = (state) => {
  return {count: state.counter}
};

const mapDispatchToProps = (dispatch) => {
  return {incrementCounter: () => dispatch(incrementCounter())}
};

export default connect(mapStateToProps, mapDispatchToProps)(counter)