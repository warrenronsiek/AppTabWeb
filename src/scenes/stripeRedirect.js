/**
 * Created by warren on 3/21/17.
 */
import React, {Component} from 'react';
import StripeRedirect from '../redux/connectedComponents/stripeRedirectConnected'
import {connect} from 'react-redux'

class StripeRedirectScene extends Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    const query = this.props.location.query;

    console.log(query);
    console.log(this.context)
  }

  render() {
    return (
      <StripeRedirect/>
    )
  }
}
export default connect()(StripeRedirectScene)