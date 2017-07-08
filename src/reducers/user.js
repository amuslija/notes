const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        username: action.username,
        token: action.token,
      }
    case 'LOGIN_FAILURE':
      return {};
    default:
      return state;
  }
};

export const message = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return null;
    case 'LOGIN_FAILURE':
      return action.message;
    default:
      return state;
  }
}
export default user;
