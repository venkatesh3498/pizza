import "./sidecart.css";
import pic from "../../Assets/Hands - Shopping Cart Error.png";
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from "../../actions/cartActions";

function Sidecart() {
  const cartItems = useSelector(state=>state.cartReducers.cartItems);
  const dispatch = useDispatch();
  let price = 0;
  
  return (
    
    <div className="cart-home">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={pic} />
          <h2>Your Cart Is Empty</h2>
          <p>Continue Shopping And Add Products To Cart</p>
        </div>
      ) : (
        <div className="cart-item">
          <div className="cart-head">
            <h3>Cart</h3>
            <p>{cartItems.length>1?`${cartItems.length}items`:`${cartItems.length}item`}</p>
          </div>
          {cartItems.map((item) => {
            price += item.price*item.quantity;
            return (
              <div className="c-item-desc">
                <p>{item.name}</p>
                <div className="cart-qn-but">
                  <button className="inc-but" onClick={()=>{dispatch(addToCart(item,item.quantity+1))}}  >+</button>
                  {item.quantity}
                  <button className="dec-but" onClick={()=>{dispatch(addToCart(item,item.quantity-1))}} >-</button>
                </div>
                <p>{Number.parseFloat(item.price*item.quantity).toFixed(2)}</p>
              </div>
            );
          })}
          <div className="cart-foot">
            <h3>Sub Total {Number.parseFloat(price).toFixed(2)}</h3>
            <button className="cart-but">Place Order →</button>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Sidecart;
