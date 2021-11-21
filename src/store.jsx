import {combineReducers,createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import { getAllItemsReducers } from './reducers/dataReducer';
import cartReducers from './reducers/cartReducer';
import { userRegisterReducer } from './reducers/userReducer';

const finalReducers = combineReducers({
    getAllItemsReducers : getAllItemsReducers,
    cartReducers:cartReducers,
    userRegisterReducer:userRegisterReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []
const initialState = {
    cartReducers:{
        cartItems:cartItems
    },
    userLoginReducer:{
        currentUser:currentUser
    }
    
};


const store = createStore(finalReducers,initialState,compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;