import { combineReducers } from 'redux';
import user, { message } from './user';
import { routerReducer } from 'react-router-redux';
import { notes } from './notes';

export default combineReducers({
  notes: notes,
  user: user,
  message: message,
  routing: routerReducer
});
