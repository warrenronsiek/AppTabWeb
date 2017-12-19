import React, {Component} from 'react'
import {Table, Button, ToggleButton} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {find} from 'lodash'
import centsIntToString from '../../common/centsIntToString'

const styles = {
  tableContainer: {
    marginLeft: '70px',
    marginRight: '70px',
  },
  nameCol: {
    width: '10%'
  },
  descriptionCol: {
    width: '35%',
  },
  categoryCol: {
    width: '10%'
  },
  priceCol: {
    width: '5%'
  },
  tagsCol: {
    width: '20%',
    flexDirection: 'column',
  },
  optionsCol: {
    width: '15%',
    textAlign: 'center'
  },
  editCol: {
    width: '5%',
    textAlign: 'center'
  },
  tagBox: {
    borderRadius: '3px',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginLeft: '2px',
    paddingLeft: '3px',
    paddingRight: '3px'
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  chooseFile: {
    maxWidth: '200px',
  }
};

class MenuTable extends Component {
  static propTypes = {
    menuItems: PropTypes.array,
    activeVenueTimeRanges: PropTypes.array,
    viewOptions: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    updateImage: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.inputRefs = {};
  }

  render() {
    return (
      <div style={styles.tableContainer}>
        <Table>
          <thead>
          <tr>
            <th style={styles.nameCol}>Name</th>
            <th style={styles.descriptionCol}>Description</th>
            <th style={styles.categoryCol}>Category</th>
            <th style={styles.priceCol}>Price</th>
            <th style={styles.tagsCol}>Tags</th>
            <th>Menu</th>
            <th style={styles.optionsCol}/>
            <th style={styles.editCol}/>
            <th/>
            <th/>
          </tr>
          </thead>
          <tbody>
          {this.props.menuItems.map(item => (
            <tr key={item.itemId}>
              <td style={styles.nameCol}>{item.itemName}</td>
              <td style={styles.descriptionCol}>{item.itemDescription}</td>
              <td style={styles.categoryCol}>{item.category}</td>
              <td style={styles.priceCol}>{centsIntToString(item.price)}</td>
              <td style={styles.tagsCol}>
                <div style={styles.tagContainer}>
                  {item.tags.map(tag => <div style={styles.tagBox} key={tag}>
                    <text>{tag}</text>
                  </div>)}
                </div>
              </td>
              <td>
                {item.timeRanges.map(timeRangeId => <text
                  key={timeRangeId}>{find(this.props.activeVenueTimeRanges, timeRange => timeRange.id === timeRangeId).name + ' '}</text>)}
              </td>
              <td style={styles.optionsCol} onClick={() => this.props.viewOptions(item.itemId, item.itemOptions)}>
                <Button>View Options</Button>
              </td>
              <td style={styles.editCol}>
                <Button
                  onClick={() => this.props.editItem({...item})}>Edit</Button>
              </td>
              <td>
                <Button onClick={() => this.props.deleteItem(item.itemId, item.venueId)}>Delete</Button>
              </td>
              <td>
                <input type="file" id={item.itemId + '-input'} key={item.itemId + '-input'}
                       ref={input => this.inputRefs[item.itemId + '-input'] = input}
                       onChange={change => {
                         let file = this.inputRefs[item.itemId + '-input'].files[0];
                         this.props.updateImage(file, item.itemId);
                       }}/>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MenuTable
