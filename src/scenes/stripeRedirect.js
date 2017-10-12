/**
 * Created by warren on 3/21/17.
 */
import React, {Component} from 'react';
import StripeRedirect from '../redux/connectedComponents/stripeRedirectConnected'
import {connect} from 'react-redux'
import redirectThunk from '../redux/middleware/redirectThunk'

class StripeRedirectScene extends Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const query = this.props.location.query;
    this.props.dispatch(redirectThunk(query.scope, query.code));
  }

  render() {
    return (
      <StripeRedirect/>
    )
  }
}
export default connect()(StripeRedirectScene)