import {
  UPDATE_RESET_EMAIL,
  UPDATE_RESET_CONFIRM_PASSWORD,
  UPDATE_RESET_PASSWORD,
  UPDATE_RESET_CODE,
  ENTER_CODE_STATUS,
  ENTER_EMAIL_STATUS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_SUCCESSFUL,
  PASSWORD_RESET_PROCESSING
} from '../actions/passwordResetActions'

const passwordReset = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_RESET_CODE:
      return {...state, code: action.code};
    case UPDATE_RESET_CONFIRM_PASSWORD:
      return {...state, confirmPassword: action.confirmPassword};
    case UPDATE_RESET_PASSWORD:
      return {...state, password: action.password};
    case UPDATE_RESET_EMAIL:
      return {...state, email: action.email};
    default:
      return state
  }
};

const validResetPassword = (state = {password: '', confirmPassword: ''}, action) => {
  let hasLength, hasInt, hasCap, hasChar, matches;
  switch (action.type) {
    case UPDATE_RESET_PASSWORD:
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
    case UPDATE_RESET_CONFIRM_PASSWORD:
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


const passwordResetValidator = (state = {validEmail: null, validCode: null}, action) => {
  switch (action.type) {
    case UPDATE_RESET_EMAIL:
      return {...state, validEmail: !!action.email.match(/\w+@\w+\.\w+/) ? 'success' : 'error'};
    case UPDATE_RESET_CODE:
      return {...state, validCode: !!action.code.match(/[0-9]{6}/) ? 'success' : 'error'};
    default:
      return state
  }
};

const passwordResetStatus = (state = {stage: "enterEmail", error: null, processing: false}, action) => {
  switch (action.type) {
    case ENTER_EMAIL_STATUS:
      return {...state, stage: 'enterEmail',  processing: false};
    case ENTER_CODE_STATUS:
      return {...state, stage: 'enterCode', processing: false};
    case PASSWORD_RESET_FAILED:
      return {...state, error: 'resetFailed', processing: false};
    case PASSWORD_RESET_SUCCESSFUL:
      return {...state, error: 'success', processing: false};
    case PASSWORD_RESET_PROCESSING:
      return {...state, processing: true};
    default:
      return state;
  }
};


export {passwordReset, passwordResetStatus, passwordResetValidator, validResetPassword}