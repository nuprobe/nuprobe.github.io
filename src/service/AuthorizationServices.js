import { url } from '@/config';

export default {
  /**
   * Send request for register user
   * @param {Object} credentials
   * @returns {Object}
  */
  register(credentials) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    return fetch(`${url}/user/registration`, requestOptions);
  },
  /**
   * Send request for login user
   * @param {Object} credentials
   * @returns {Object}
  */
  login(credentials) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    return fetch(`${url}/user/login`, requestOptions);
  },
  /**
   * Send request for password recovery
   * @param {Object} credentials
   * @returns {Object}
  */
  forgotPassword(credentials) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    return fetch(`${url}/user/forgot/password`, requestOptions);
  },
};