import React, {Component} from 'react'
import PropTypes from 'proptypes'
import Loadable from 'react-loadable'

let RenderSvg;
const styles = {
  infoBlockContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  infoSVGContainer: {
    flex: 1,
  },
  infoTextContainer: {
    flex: 1
  }
};

class InfoBlock extends Component {
  static propTypes = {
    RenderSvg: PropTypes.func.isRequired
  };
  componentWillMount () {
    RenderSvg = this.props.RenderSvg
  }

  render() {
    return (
      <div style={styles.infoBlockContainer}>
        <div style={styles.infoSVGContainer}>
          <RenderSvg/>
        </div>
        <div style={styles.infoTextContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default InfoBlock