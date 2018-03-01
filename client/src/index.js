//Redux side of our app. and render our root component to the dom.
import './sass/App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());


//takes two arguments (root comp, where to render inside our dom)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
