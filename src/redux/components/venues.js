import React from 'react'
import PropTypes from 'proptypes'
import {FormGroup, FormControl, ControlLabel, Table, Button, Collapse, Grid, Row, Col} from 'react-bootstrap'

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
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
    marginRight: '70px'
  }
};

const venues = ({venueList, activeVenue, venueFormStatus, setActiveVenue, updateActiveVenue, doneEditing, addVenue, cancelEditing, updateTimeRange, addTimeRange}) => (
  <div style={styles.container}>
    <div style={styles.tableContainer}>
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
              onClick={() => setActiveVenue(venue.venueId, venue.name, venue.address, venue.timeRanges)}>Edit</Button>
            </td>
          </tr>))}
        </tbody>
      </Table>
    </div>
    <Collapse in={venueFormStatus !== ''}>
      <div style={{width: '450px', flex: 1}}>
        <form width={{maxWidth: '450px'}}>
          <FormGroup style={styles.formGroup}>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' value={activeVenue.name}
                         onChange={text => updateActiveVenue(activeVenue.venueId, text.target.value, activeVenue.address, activeVenue.timeRanges)}/>
            <ControlLabel>Address</ControlLabel>
            <FormControl type='text' value={activeVenue.address}
                         onChange={text => updateActiveVenue(activeVenue.venueId, activeVenue.name, text.target.value, activeVenue.timeRanges)}/>
          </FormGroup>
          {activeVenue.timeRanges.map(timeRange => (
            <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '10px'}} key={timeRange.id}>
              <Grid style={{width: '100%'}}>
                <Row>
                  <Col sm={6}>
                    <FormGroup style={{display: 'inlineBlock'}}>
                      <ControlLabel>Menu Name</ControlLabel>
                      <FormControl type='text' value={timeRange.name}
                                   onChange={text => updateTimeRange(text.target.value, timeRange.id, timeRange.range)}/>
                    </FormGroup>
                  </Col>
                  <Col sm={6}>
                    <FormGroup style={{display: 'inlineBlock'}}>
                      <ControlLabel>Time Range</ControlLabel>
                      <FormControl type='text' value={timeRange.range}
                                   onChange={text => updateTimeRange(timeRange.name, timeRange.id, text.target.value)}/>
                    </FormGroup>
                  </Col>
                </Row>
              </Grid>
            </div>
          ))}
          <div style={styles.buttonContainer}>
                <Button style={styles.button} onClick={() => addTimeRange()}>Add Menu</Button>
              </div>
        </form>
        {(venueFormStatus === 'updating')
          ? <div style={{justifyContent: 'center', alignItems: 'center', position: 'relative', textAlign: 'center'}}>
            <h3>Updating...</h3>
          </div>
          : <div style={styles.buttonContainer}>
            <Button style={styles.button}
                    onClick={() => doneEditing(activeVenue.venueId, activeVenue.name, activeVenue.address, activeVenue.timeRanges)}>Done</Button>
            <Button style={styles.button} onClick={() => cancelEditing()}>Cancel</Button>
          </div>
        }
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
  setActiveVenue: PropTypes.func.isRequired,
  updateActiveVenue: PropTypes.func.isRequired,
  doneEditing: PropTypes.func.isRequired,
  addVenue: PropTypes.func.isRequired,
  updateTimeRange: PropTypes.func.isRequired,
  addTimeRange: PropTypes.func.isRequired
};

export default venues