import "./sidecart.css";
import pic from "../../Assets/Hands - Shopping Cart Error.png";
import { useState } from "react";
function Sidecart() {
  const cartItems = 0;
  const cartEmptyStatus = true;
  let price = 0;
  return (
    <div className="cart-home">
      <div className="empty-cart">
        <img src={pic} alt="" />
        
      </div>
    </div>
    // <div className="cart-home">
    //   {cartItems.length === 0 ? (
    //     <div className="empty-cart">
    //       <img src={pic} />
    //       <h2>Your Cart Is Empty</h2>
    //       <p>Continue Shopping And Add Products To Cart</p>
    //     </div>
    //   ) : (
    //     <div className="cart-item">
    //       <div className="cart-head">
    //         <h3>Cart</h3>
    //         <p>{cartItems.length>1?`${cartItems.length}items`:`${cartItems.length}item`}</p>
    //       </div>
    //       {cartItems.map((ite) => {
    //         price += ite.price;
    //         return (
    //           <div className="c-item-desc">
    //             <p>{ite.name}</p>
    //             <div className="cart-qn-but">
    //               <button className="inc-but" >+</button>
    //               {ite.qty}
    //               <button className="dec-but" >-</button>
    //             </div>
    //             <p>{ite.price}</p>
    //           </div>
    //         );
    //       })}
    //       <div className="cart-foot">
    //         <h3>Sub Total {Number.parseFloat(price).toFixed(2)}</h3>
    //         <button className="cart-but">Place Order →</button>
    //       </div>
          
    //     </div>
    //   )}
    // </div>
  );
}

export default Sidecart;
