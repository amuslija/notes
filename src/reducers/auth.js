import v4 from 'node-uuid';

const auth = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCESS':
      return v4();
    case 'LOGIN_FAILURE':
      return null;
    default:
      return state;
  }
};

export default auth;
