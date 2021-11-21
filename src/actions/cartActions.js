export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";


export const addToCart=(item,quantity)=>(dispatch,getState)=>{
   

    dispatch({
        type:ADD_TO_CART,
        payload:item
    })
    const cartItems = getState().cartReducers.cartItems

    localStorage.setItem('cartItems',JSON.stringify(cartItems));
}
export const deleteFromCart=(item)=>dispatch=>{
    dispatch({
        type:DELETE_FROM_CART,
        payload:item
    })
}