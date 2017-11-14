import {connect} from 'react-redux'
import {updateActiveVenue, setVenueState, updateTimeRange, addTimeRange} from '../actions/venueActions'
import venues from '../components/venues'
import crypto from 'crypto'
import venueThunk from '../middleware/venueThunk'

const mapStateToProps = state => ({
  venueList: state.venues,
  activeVenue: state.activeVenue,
  venueFormStatus: state.venueFormStatus,
  updateButtonDisabled: state.activeVenue.updateButtonDisabled
});

const mapDispatchToProps = (dispatch) => ({
  updateActiveVenue: (venueId, venueName, venueAddress, timeRanges) => dispatch(updateActiveVenue(venueId, venueName, venueAddress, timeRanges)),
  doneEditing: (venueId, venueName, venueAddress, timeRanges) => dispatch(venueThunk(venueId, venueName, venueAddress, timeRanges)),
  addVenue: () => {
    dispatch(updateActiveVenue(crypto.randomBytes(10).toString('hex'), '', '', []));
    dispatch(setVenueState('addingVenue'))
  },
  setActiveVenue: (venueId, venueName, venueAddress, timeRanges) => {
    dispatch(setVenueState('editing'));
    dispatch(updateActiveVenue(venueId, venueName, venueAddress, timeRanges))
  },
  cancelEditing: () => dispatch(setVenueState('')),
  updateTimeRange: (name, id, range) => dispatch(updateTimeRange(name, id, range)),
  addTimeRange: () => dispatch(addTimeRange())
});

export default connect(mapStateToProps, mapDispatchToProps)(venues)