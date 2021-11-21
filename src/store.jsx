import {combineReducers,createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import { getAllItemsReducers } from './reducers/dataReducer';

const finalReducers = combineReducers({
    getAllItemsReducers : getAllItemsReducers,

});

const initialState = {};


const store = createStore(finalReducers,initialState,compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;