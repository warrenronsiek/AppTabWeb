/**
 * Created by warrenronsiek on 3/19/17.
 */
class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

class NetworkError extends ExtendableError {}
class WrongCredentialsError extends ExtendableError {}
class MysteryError extends ExtendableError {}
export {NetworkError, WrongCredentialsError, MysteryError}