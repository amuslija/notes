import { combineReducers } from 'redux';
import user, { message } from './user';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  user: user,
  message: message,
  routing: routerReducer
});
