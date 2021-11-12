import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux"
import items from './reducers/cartReducer';

const store = createStore(items)

ReactDOM.render(
  <BrowserRouter>
   
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);


