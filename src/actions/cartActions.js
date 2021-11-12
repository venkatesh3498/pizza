export const ADD_ITEMS = "ADD_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";



export function addItems(items){
    return{
        type:ADD_ITEMS,
        items
    }
}
export function addToCart(item){
    return{
        type:ADD_TO_CART,
        item
    }
}