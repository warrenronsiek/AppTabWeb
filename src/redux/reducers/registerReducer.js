import {
  UPDATE_CONFIRM_PASSWORD,
  UPDATE_PASSWORD,
  UPDATE_PHONE_NUMBER,
  UPDATE_NAME,
  UPDATE_EMAIL
} from '../actions/registerActions'
import phoneNumberHandler from '../../common/phoneNumberHandler'

const registerParams = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {...state, email: action.email};
    case UPDATE_NAME:
      return {...state, name: action.name};
    case UPDATE_PHONE_NUMBER:
      return {...state, phoneNumber: phoneNumberHandler(action.phoneNumber)};
    case UPDATE_PASSWORD:
      return {...state, password: action.password};
    case UPDATE_CONFIRM_PASSWORD:
      return {...state, confirmPassword: action.confirmPassword};
    default:
      return state
  }
};

const validPassword = (state = {password: '', confirmPassword: ''}, action) => {
  let hasLength, hasInt, hasCap, hasChar, matches;
  switch (action.type) {
    case UPDATE_PASSWORD:
      hasLength = action.password.length > 7;
      hasInt = !!action.password.match(/[0-9]/);
      hasCap = !!action.password.match(/.*[A-Z].*/);
      hasChar = !!action.password.match(/[-!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);
      matches = action.password === state.confirmPassword;
      return {
        ...state,
        hasCap,
        hasChar,
        matches,
        hasInt,
        hasLength,
        password: action.password,
        isValid: (hasLength && hasInt && hasCap && hasChar && matches) ? 'success' : 'error'
      };
    case UPDATE_CONFIRM_PASSWORD:
      matches = state.password === action.confirmPassword;
      return {
        ...state,
        matches,
        confirmPassword: action.confirmPassword,
        isValid: (state.hasLength && state.hasInt && state.hasCap && state.hasChar && matches) ? 'success' : 'error'
      };
    default:
      return state
  }
};

const registerParamValidation = (state = {validEmail: null, validName: null, validPhoneNumber: null}, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {...state, validEmail: !!action.email.match(/\w+@\w+\.\w+/) ? 'success' : 'error'};
    case UPDATE_PHONE_NUMBER:
      return {...state, validPhoneNumber: !!action.phoneNumber.match(/\(\d{3}\) \d{3}-\d{4}/) ? 'success' : 'error'};
    case UPDATE_NAME:
      return {...state, validName: !!action.name.match(/\w{2,}/) ? 'success' : 'error'};
    default:
      return state
  }
};

export {registerParams, validPassword, registerParamValidation};