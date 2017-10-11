import requester from './requester'

// invoke with {confirmationCode, email, password}
const resetPassword = requester('/reset-password', 'PasswordResetSuccessful', 'Password reset failed', null, false);

export default resetPassword