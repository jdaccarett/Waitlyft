//Redux side of our app. and render our root component to the dom.
//Juan
import './sass/App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
// test code
window.axios = axios;
//action creator


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


//takes two arguments (root comp, where to render inside our dom)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
