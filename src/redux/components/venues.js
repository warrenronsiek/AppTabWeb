import React from 'react'
import PropTypes from 'proptypes'
import {FormGroup, FormControl, ControlLabel, HelpBlock, Grid, Col, Row, Table, Button, Collapse} from 'react-bootstrap'

const styles = {
  editButtonCol: {
    width: '10%'
  },
  venueNameCol: {
    width: '30%'
  },
  addressCol: {
    width: '60%'
  },
  formGroup: {
    width: '50%',
    position: 'relative',
    margin: 'auto',
    marginTop: '10px'
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
};

const venues = ({venueList, activeVenue, venueFormStatus, editVenue, updateActiveVenue, doneEditing, addVenue, updateVenue, cancelEditing}) => (
  <div>
    <div style={{marginLeft: '70px', marginRight: '70px'}}>
      <Table>
        <thead>
        <tr>
          <th style={styles.venueNameCol}>Venue Name</th>
          <th style={styles.addressCol}>Address</th>
          <th style={styles.editButtonCol}/>
        </tr>
        </thead>
        <tbody>
        {venueList.map(venue => (
          <tr key={venue.venueId}>
            <td style={styles.venueNameCol}>{venue.name}</td>
            <td style={styles.addressCol}>{venue.address}</td>
            <td style={styles.editButtonCol}><Button
              onClick={() => editVenue(venue.venueId, venue.name, venue.address)}>Edit</Button></td>
          </tr>))}
        </tbody>
      </Table>
    </div>
    <Collapse in={venueFormStatus !== ''}>
      <div>
        <form>
          <FormGroup style={styles.formGroup}>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' value={activeVenue.name}
                         onChange={text => updateActiveVenue(activeVenue.venueId, text.target.value, activeVenue.address)}/>
            <ControlLabel>Address</ControlLabel>
            <FormControl type='text' value={activeVenue.address}
                         onChange={text => updateActiveVenue(activeVenue.venueId, activeVenue.name, text.target.value)}/>
          </FormGroup>
        </form>
        <div style={styles.buttonContainer}>
          <Button style={styles.button}
                  onClick={() => doneEditing(activeVenue.venueId, activeVenue.name, activeVenue.address)}>Done</Button>
          <Button style={styles.button} onClick={() => cancelEditing()}>Cancel</Button>
        </div>
      </div>
    </Collapse>
    <Collapse in={venueFormStatus === ''}>
      <div>
        <div style={styles.buttonContainer}>
          <Button onClick={() => addVenue()}>Add Venue</Button>
        </div>
      </div>
    </Collapse>
  </div>
);

venues.propTypes = {
  venueList: PropTypes.arrayOf(PropTypes.shape({
    venueId: PropTypes.string,
    address: PropTypes.string,
    name: PropTypes.string
  })),
  activeVenue: PropTypes.shape({
    venueId: PropTypes.string,
    address: PropTypes.string,
    name: PropTypes.string
  }),
  venueFormStatus: PropTypes.string.isRequired,
  editVenue: PropTypes.func.isRequired,
  updateActiveVenue: PropTypes.func.isRequired,
  doneEditing: PropTypes.func.isRequired,
  addVenue: PropTypes.func.isRequired,
  updateVenue: PropTypes.func.isRequired
};

export default venues