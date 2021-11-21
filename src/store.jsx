import {combineReducers,createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import { getAllItemsReducers } from './reducers/dataReducer';
import cartReducers from './reducers/cartReducer';

const finalReducers = combineReducers({
    getAllItemsReducers : getAllItemsReducers,
    cartReducers:cartReducers

});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducers:{
        cartItems:cartItems
    }
    
};


const store = createStore(finalReducers,initialState,compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;