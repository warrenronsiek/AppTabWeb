import createVenue from '../../api/createVenue'
import editVenue from '../../api/editVenue'
import {updateVenue, setVenueState} from '../actions/venueActions'

const venueThunk = (venueId, name, address) => (dispatch, getState) => {
  let state = JSON.parse(JSON.stringify(getState()));
  Promise.resolve(dispatch(setVenueState('updating')))
    .then(res => {
      if (state.venueFormStatus === 'editing') {
        return editVenue({venueId, name, address})
      } else if (state.venueFormStatus === 'addingVenue') {
        return createVenue({venueId, name, address, clientId: state.clientId})
      } else {
        throw new Error('state is not in \'editing\' or in \'addingVenue\'')
      }
    })
    .then(() => {
      dispatch(setVenueState(''));
      dispatch(updateVenue(venueId, name, address))
    })
    .catch(err => console.log(err))
};

export default venueThunk