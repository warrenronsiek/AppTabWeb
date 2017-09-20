/**
 * Created by warrenronsiek on 3/19/17.
 */

import requester from './requester'

// invoke with {clientId, authCode, scope}
const stripeRedirect = requester('/stripe-redirect', 'StripeIntegrationSuccessful', 'StripeRedirectFailure');

export default stripeRedirect