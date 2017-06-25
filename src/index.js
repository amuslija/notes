import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router';

import Login from './components/Login.jsx';
import store from './store/';
import { history } from './store/';

import './stylesheets/css/main.css';
import firebase from './api/firebase';

firebase.auth().signInWithEmailAndPassword('core.qr@gmail.com', 'striker00').then(value => console.log(value));

const App = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Login}></Route>
    </Router>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
