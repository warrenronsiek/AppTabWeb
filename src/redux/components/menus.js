import React from 'react'
import {
  Button,
  Collapse,
  FormControl,
  FormGroup,
  HelpBlock,
  ControlLabel,
  Grid,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'
import PropTypes from 'proptypes'
import centsIntToString from '../../common/centsIntToString'
import stringToCentsInt from '../../common/stringToCentsInt'
import MenuTable from './menuTable'
import MenuItemOptions from './menuItemOptions'
import ActiveItemForm from './activeItemForm'

const styles = {
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
    marginBottom: '50px'
  },
  button: {
    marginRight: '10px',
    width: '130px'
  },
  collapseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
};

const Menus = ({
                 menuItems, updateItem, addItem, editItem, viewOptions, optionsData, viewState, activeItem,
                 updateOptionSetName, updateOption, cancelEditing, addOption, addOptionSet, addMenuItem, activeVenue,
                 venues, setActiveVenue, deleteMenuItem
               }) => (
  <div>
    <div style={styles.buttonContainer}>
      <DropdownButton title={activeVenue.name || 'Select Venue'} id='Venue Selection'>
        {venues.map(venue => (
          <MenuItem key={venue.venueId} onClick={() => setActiveVenue(venue.venueId, venue.name, venue.address)}>{venue.name}</MenuItem>
        ))}
      </DropdownButton>
    </div>

    <MenuTable menuItems={menuItems} viewOptions={viewOptions} editItem={editItem} deleteItem={deleteMenuItem}/>
    <MenuItemOptions optionsData={optionsData} viewState={viewState}/>
    <ActiveItemForm viewState={viewState} activeItem={activeItem} editItem={editItem}
                    updateOptionSetName={updateOptionSetName} updateOption={updateOption} addOption={addOption}
                    addOptionSet={addOptionSet} updateItem={updateItem} cancelEditing={cancelEditing}/>
    <div style={styles.buttonContainer}>
      <Button style={styles.button} onClick={() => addMenuItem(activeVenue.venueId)} disabled={!activeVenue.venueId}>Add Item</Button>
    </div>
  </div>
);

Menus.propTypes = {
  menuItems: PropTypes.array,
  viewState: PropTypes.oneOf(['', 'viewOptions', 'editingMenuItem']).isRequired,
  optionsData: PropTypes.array,
  activeItem: PropTypes.object,
  editItem: PropTypes.func.isRequired,
  updateOptionSetName: PropTypes.func.isRequired,
  updateOption: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  addOption: PropTypes.func.isRequired,
  addOptionSet: PropTypes.func.isRequired,
  addMenuItem: PropTypes.func.isRequired,
  activeVenueId: PropTypes.string,
  activeVenue: PropTypes.object,
  venues: PropTypes.array,
  setActiveVenue: PropTypes.func.isRequired,
  deleteMenuItem: PropTypes.func.isRequired
};

export default Menus