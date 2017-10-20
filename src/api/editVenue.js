import requester from './requester'

//invoke with {venueId, address, name}
export default requester('/edit-venue', 'VenueEditSuccessful', 'Venue edit failure')
