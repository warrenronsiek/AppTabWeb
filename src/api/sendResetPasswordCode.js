import requester from './requester'

// invoke with {email}
const sendResetPasswordCode = requester('/send-reset-password-code', 'CallingSendResetPasswordCodeSuccessful', 'Error sending password reset email', null, false);

export default sendResetPasswordCode