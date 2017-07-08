import { login } from '../api/notes-api';
import { push } from 'react-router-redux';

export const loginSuccess = (username, token) => ({
  type: 'LOGIN_SUCCESS',
  username,
  token
});

export const loginFailure = (message) => ({
  type: 'LOGIN_FAILURE',
  message
});

export const asyncLogin = (username, password) => (dispatch) => {
  login(username, password)
    .then(user => {
      dispatch(loginSuccess(user.email, user.token));
      dispatch(push('/notes'));
    })
    .catch(error => dispatch(loginFailure(error.message)));
};
