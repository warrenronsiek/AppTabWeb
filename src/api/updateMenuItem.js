import requester from './requester'

// invoke with {itemId, itemName, itemDescription, venueId, tags, price, category, itemOptions}

export default requester('/update-menu-item', 'UpdateItemSuccessful', 'UpdateFailure')

