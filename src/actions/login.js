import { login } from '../api/firebase';

export const loginSuccess = (username, uid) => ({
  type: 'LOGIN_SUCCESS',
  username,
  uid
});

export const loginFailure = (message) => ({
  type: 'LOGIN_FAILURE',
  message
});

export const asyncLogin = (username, password) => (dispatch) => {
  login(username, password)
    .then(user => {
      dispatch(loginSuccess(user.email, user.uid));
    })
    .catch(error => dispatch(loginFailure(error.message)));
};
