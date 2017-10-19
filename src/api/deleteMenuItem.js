import requester from './requester'

// invoke with {itemId, venueId}
export default requester('/delete-menu-item', 'DeleteItemSuccessful', 'DeleteItemFailure')