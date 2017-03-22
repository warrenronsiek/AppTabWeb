/**
 * Created by warren on 3/21/17.
 */
import React, {Component} from 'react'
import ConnectButton from '../redux/components/stripeConnect'

class ConnectScene extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ConnectButton/>
    )
  }
}

export default ConnectScene
