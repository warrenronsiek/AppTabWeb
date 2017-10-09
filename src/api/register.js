import requester from './requester'

// invoke with {password, email, name, phoneNumber}
const register = requester('/register', 'RegistrationSuccessful', 'RegistrationFailed', null, false);

export default register