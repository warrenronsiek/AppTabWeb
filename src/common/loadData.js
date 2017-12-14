import {store} from '../redux/store'
import {updateMenuItem} from "../redux/actions/menuActions";
import {updateVenue} from "../redux/actions/venueActions";
import {statusLoginComplete, updateStripeId} from "../redux/actions/loginActions";
import getClientLoginData from "../api/getClientLoginData";
import getTransactions from "../api/getTransactions";
import {updateTransaction} from "../redux/actions/transactionActions";
import {get} from 'lodash'

function decapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const dedynamoify = objlist => {
  if (!objlist) {
    return []
  }
  return objlist.map(obj => Object.keys(obj.M).reduce((accum, key) => {
    accum[decapitalizeFirstLetter(key)] = get(obj, `M[${key}].S`) || get(obj, `M[${key}].N`);
    return accum
  }, {}))
};

const loadData = () => {
  const state = store.getState();

  return getClientLoginData({clientId: state.clientId})
    .then((res) => {
      let stripeId = get(res, 'stripeData.Item.StripeId.S');
      res.venues.Items.forEach(venue => store.dispatch(updateVenue(venue.VenueId.S, venue.Name.S, venue.Address.S, dedynamoify(get(venue, 'TimeRanges.L')))));
      res.menus.forEach(item =>
        store.dispatch(updateMenuItem(item.ItemId.S, item.ItemName.S, item.ItemDescription.S, item.Price.N, item.Category.S,
          (JSON.stringify(item.Tags.SS) === JSON.stringify(['NULL'])) ? [] : item.Tags.SS,
          (item.ItemOptions.S === '"NULL"') ? [] : JSON.parse(item.ItemOptions.S),
          item.VenueId.S,
          (item.TimeRanges) ? get(item, 'TimeRanges.SS') : [])));
      store.dispatch(updateStripeId(stripeId));
      store.dispatch(statusLoginComplete());
      return getTransactions({clientId: state.clientId})
    })
    .then(res => res.transactions.forEach(t => store.dispatch(updateTransaction({
      transactionId: t.TransactionId.S,
      amount: parseInt(t.Amount.N),
      createDate: t.CreateDate.S,
      nodeId: t.NodeId.S,
      items: t.Items.SS.map(item => JSON.parse(item)),
      venueId: t.VenueId.S,
      name: get(t, 'Name.S')
    }))))
};

export {loadData}