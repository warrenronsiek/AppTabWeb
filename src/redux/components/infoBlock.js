import React, {Component} from 'react'
import PropTypes from 'proptypes'

const styles = {
  infoBlockContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  infoSVGContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
  },
  infoSVGSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoTextContainer: {
    paddingTop: 50,
    flex: 5,
    width: '70%'
  }
};

const infoBlockWrapper = (SvgComponent) => {
  return class extends Component {
    render() {
      return (
        <div style={styles.infoBlockContainer}>
          <div style={styles.infoSVGContainer}>
            <div style={styles.infoSVGSubContainer}>
              <SvgComponent/>
            </div>
          </div>
          <div style={styles.infoTextContainer}>
            {this.props.children}
          </div>
        </div>)
    }
  }
};
export default infoBlockWrapper