import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({});

const middlewares = [
  thunk,
  routerMiddleware(browserHistory)
]

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const history = syncHistoryWithStore(browserHistory, store)
export default store;
