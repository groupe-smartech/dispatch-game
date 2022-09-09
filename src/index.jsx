import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './app/store.js'

import './style/global.css';

import Game from './Game';
import NewGame from './NewGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <NewGame />
  </Provider>
);