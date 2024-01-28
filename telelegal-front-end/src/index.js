import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';  // method to make a redux store
import { Provider } from 'react-redux';  // component to wrap the whole app
import rootReducer from './redux-elements/reducers/rootReducer';

const theStore = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={theStore}>
    <App />
  </Provider>

);