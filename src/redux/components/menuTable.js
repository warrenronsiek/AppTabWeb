import React from 'react'
import {Table, Button} from 'react-bootstrap'
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
};

const MenuTable = ({menuItems, viewOptions, editItem}) => (
  <div style={styles.tableContainer}>
    <Table>
      <thead>
      <tr>
        <th style={styles.nameCol}>Name</th>
        <th style={styles.descriptionCol}>Description</th>
        <th style={styles.categoryCol}>Category</th>
        <th style={styles.priceCol}>Price</th>
        <th style={styles.tagsCol}>Tags</th>
        <th style={styles.optionsCol}/>
        <th style={styles.editCol}/>
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
          <td style={styles.optionsCol} onClick={() => viewOptions(item.itemId, item.optionSets)}>
            <Button>View Options</Button>
          </td>
          <td style={styles.editCol}>
            <Button onClick={() => editItem(item.itemId, item.name, item.description, item.price, item.category, item.tags, item.optionSets, item.venueId)}>Edit</Button>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  </div>
);

export default MenuTable
