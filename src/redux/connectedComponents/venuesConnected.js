import {connect} from 'react-redux'
import {updateActiveVenue, updateVenue, setVenueState} from '../actions/venueActions'
import venues from '../components/venues'
import crypto from 'crypto'

const mapStateToProps = state => ({
  venueList: state.venues,
  activeVenue: state.activeVenue,
  venueFormStatus: state.venueFormStatus
});

const mapDispatchToProps = (dispatch) => ({
  updateActiveVenue: (venueId, venueName, venueAddress) => dispatch(updateActiveVenue(venueId, venueName, venueAddress)),
  doneEditing: (venueId, venueName, venueAddress) => {
    dispatch(setVenueState(''));
    dispatch(updateVenue(venueId, venueName, venueAddress))
  },
  addVenue: () => {
    dispatch(updateActiveVenue(crypto.randomBytes(10).toString('hex'), '', ''));
    dispatch(setVenueState('addingVenue'))
  },
  editVenue: (venueId, venueName, venueAddress) => {
    dispatch(setVenueState('editing'));
    dispatch(updateActiveVenue(venueId, venueName, venueAddress))
  },
  updateVenue: (venueId, venueName, venueAddress) => dispatch(updateVenue(venueId, venueName, venueAddress)),
  cancelEditing: () => dispatch(setVenueState(''))
});

export default connect(mapStateToProps, mapDispatchToProps)(venues)