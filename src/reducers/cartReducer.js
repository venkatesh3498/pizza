import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cartActions";

export default function cartReducers(
  state = {
    cartItems: [],
  },
  action
) {
  switch (action.type) {
    case DELETE_FROM_CART:
      const filteredCart = state.cartItems.filter((item) => {
        return item != action.payload;
      });
      return {
        ...state,
        cartItems: filteredCart,
      };
    case ADD_TO_CART:
      const alreadyExist = state.cartItems.find(item=>{
        return  item._id===action.payload._id
      })
      if(alreadyExist){
        return{
            ...state,
            cartItems:state.cartItems.map(item=>item._id===action.payload._id ? {...item,qty:item.qty+action.payload.qty}:{item})
        }
      }else{
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };}

    default:
      return state;
  }
}
