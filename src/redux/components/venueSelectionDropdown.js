import React from 'react'
import {
  DropdownButton,
  MenuItem,
  ButtonGroup
} from 'react-bootstrap'
import PropTypes from 'proptypes'


const styles= {
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '50px',
  },
  button: {
    width: '140px'
  }
};


const VenueDropdown = ({venues, setActiveVenue, activeVenue}) => (
  <div style={styles.buttonContainer}>
      <ButtonGroup justified style={styles.button}>
        <DropdownButton title={activeVenue.name || 'Select Venue'} id='Venue Selection'>
          {venues.map(venue => (
            <MenuItem key={venue.venueId}
                      onClick={() => setActiveVenue(venue.venueId, venue.name, venue.address, venue.timeRanges)}>{venue.name}</MenuItem>
          ))}
        </DropdownButton>
      </ButtonGroup>
    </div>
);

VenueDropdown.propTypes = {
  activeVenue: PropTypes.object,
  venues: PropTypes.array,
  setActiveVenue: PropTypes.func.isRequired
};

export default VenueDropdown