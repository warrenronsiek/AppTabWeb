/**
 * Created by warren on 3/17/17.
 */

import 'whatwg-fetch'
import requester from './requester'

// invoke with {email, password}
const loginRequest = requester('/login', 'LoginSuccessful', 'LoginFailed', null, false);

export default loginRequest