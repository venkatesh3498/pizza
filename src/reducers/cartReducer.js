import { ADD_TO_CART,ADD_ITEMS } from "../actions/cartActions";

const initialState = {
    list:[],
    cartList:[]
}

export default function items(state = initialState,action){
    switch(action.type){
        case ADD_ITEMS:
            return{
                ...state,
                list:action.items
            }
        case ADD_TO_CART:
            return{
                ...state,
                cartList:[action.item,...state.cartList]
            }

        default:
            return state;
    }
}