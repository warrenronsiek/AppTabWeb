import requester from './requester'

//invoke with {clientId, venueId, address, name}
export default requester('/create-venue', 'VenueCreationSuccessful', 'Venue creation failed')