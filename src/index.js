import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router';

import Login from './containers/Login.js';
import store from './store/';
import { history } from './store/';

import './stylesheets/css/main.css';

const App = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Login}></Route>
    </Router>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
