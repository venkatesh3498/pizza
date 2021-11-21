export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";


export const addToCart=(item,quantity)=>(dispatch,getState)=>{
    var cartItem = {
        name : item.name ,
        _id : item._id,
        quantity : Number(quantity) ,
        price : item.price * quantity

    }
    if(cartItem.quantity>10){
        alert("max 10 quantity per product")
    } else{
        if(cartItem.quantity<1)
        {
            dispatch({type:DELETE_FROM_CART , payload:item}) 
        }
        else{
            dispatch({type:ADD_TO_CART , payload : cartItem})
        }
       
    }
    const cartItems = getState().cartReducers.cartItems

    localStorage.setItem('cartItems',JSON.stringify(cartItems));
}
export const deleteFromCart=(item)=>(dispatch,getState)=>{
    dispatch({
        type:DELETE_FROM_CART,
        payload:item
    });
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}