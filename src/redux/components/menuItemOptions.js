import React from 'react'
import {Collapse, Table} from 'react-bootstrap'
import centsIntToString from '../../common/centsIntToString'

const styles = {
  collapseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  optionsTable: {
    width: '100%'
  },
  optionsPriceCol: {
    width: '40%',
    textAlign: 'right'
  },
  optionsNameCol: {
    width: '60%'
  },
};

const MenuItemOptions = ({optionsData, viewState}) => (
  <div style={styles.collapseContainer}>
    <Collapse in={viewState === 'viewOptions'}>
      <div>
        {optionsData.map(optionSet => (
          <div key={optionSet.optionSetName}>
            <h4>{optionSet.optionSetName}</h4>
            <Table style={styles.optionsTable}>
              <thead>
              <tr>
                <th style={styles.optionsNameCol}>Option Name</th>
                <th style={styles.optionsPriceCol}>Option Price</th>
              </tr>
              </thead>
              <tbody>
              {optionSet.data.map(option => (
                <tr key={option.optionName}>
                  <td style={styles.optionsNameCol}>{option.optionName}</td>
                  <td style={styles.optionsPriceCol}>{centsIntToString(option.price)}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </Collapse>
  </div>
);

export default MenuItemOptions