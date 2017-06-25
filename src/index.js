import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Login from './components/Login.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store/';

ReactDOM.render(
  <Provider store={store}>
  <Login/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
