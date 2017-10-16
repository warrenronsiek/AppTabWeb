import React from 'react'
import {Button, Table, Collapse} from 'react-bootstrap'
import PropTypes from 'proptypes'
import centsIntToString from '../../common/centsIntToString'

const styles = {
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
    width: '15%'
  },
  editCol: {
    width: '5%'
  },
  formGroup: {
    width: '50%',
    position: 'relative',
    margin: 'auto',
  },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
  },
  button: {
    marginRight: '10px',
    width: '90px'
  },
  tableContainer: {
    marginLeft: '70px',
    marginRight: '70px',
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
  optionsTableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  optionsTable: {
    width: '30%'
  },
  optionsPriceCol: {
    width: '30%'
  },
  optionsNameCol: {
    width: '70%'
  }
};

const Menus = ({menuItems, updateItem, addItem, setStateToEditingItem, setStateToAddingItem, viewOptions, optionsData, viewState}) => (
  <div>
    <div style={styles.tableContainer}>
      <Table>
        <thead>
        <tr>
          <th style={styles.nameCol}>Name</th>
          <th style={styles.descriptionCol}>Description</th>
          <th style={styles.categoryCol}>Category</th>
          <th style={styles.priceCol}>Price</th>
          <th style={styles.tagsCol}>Tags</th>
          <th style={styles.optionsCol}>Options</th>
          <th style={styles.editCol}>Edit</th>
        </tr>
        </thead>
        <tbody>
        {menuItems.map(item => (
          <tr key={item.itemId}>
            <td style={styles.nameCol}>{item.name}</td>
            <td style={styles.descriptionCol}>{item.description}</td>
            <td style={styles.categoryCol}>{item.category}</td>
            <td style={styles.priceCol}>{centsIntToString(item.price)}</td>
            <td style={styles.tagsCol}>
              <div style={styles.tagContainer}>
                {item.tags.map(tag => <div style={styles.tagBox} key={tag}>
                  <text>{tag}</text>
                </div>)}
              </div>
            </td>
            <td style={styles.optionsCol}><Button>View Options</Button></td>
            <td style={styles.editCol}><Button>Edit</Button></td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
    <Collapse in={viewState === 'viewingOptions'}>
      <div style={styles.optionsTableContainer}>
        <Table style={styles.optionsTable}>
          <thead>
          <tr>
            <th style={styles.optionsNameCol}>Option Name</th>
            <th style={styles.optionsPriceCol}>Option Price</th>
          </tr>
          </thead>
        </Table>
      </div>
    </Collapse>
  </div>
);

Menus.propTypes = {
  menuItems: PropTypes.array,
};

export default Menus