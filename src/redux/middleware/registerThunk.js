import register from '../../api/register'
import {registering, registrationComplete, registrationError} from '../actions/registerActions'
import cookie from 'react-cookie'

const registerThunk = () => (dispatch, getState) => {
  const state = getState();
  return Promise.resolve(dispatch(registering()))
    .then(res => register({
      email: state.registerParams.email,
      password: state.registerParams.password,
      name: state.registerParams.name,
      phoneNumber: '+1' + state.registerParams.phoneNumber.replace(/\D/g, '')
    }))
    .then(res => {
      cookie.save('clientId', res.clientId);
      cookie.save('email', state.registerParams.email);
      return Promise.resolve(dispatch(registrationComplete()))
    })
    .catch(err => {
      dispatch(registrationError('failed'));
    })
};

export default registerThunk