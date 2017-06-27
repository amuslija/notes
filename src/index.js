import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router';

import store from './store/';
import { history } from './store/';

import Login from './containers/Login';
import AddText from './components/AddText'

import './stylesheets/css/main.css';

const App = (
  <Provider store={store}>
    <Router history={history}>
        <Route path='/' component={Login}></Route>
        <Route path='/notes' component={AddText}></Route>
    </Router>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
