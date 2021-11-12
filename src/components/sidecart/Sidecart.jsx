import "./sidecart.css";
import pic from "../../Assets/Hands - Shopping Cart Error.png";
function Sidecart({ cartItems }) {
  const cartEmptyStatus = true;
  console.log(cartItems);
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
          {cartItems.map((ite) => {
            price += ite.price;
            return (
              <div className="c-item-desc">
                <p>{ite.name}</p>
                <p>{ite.price}</p>
              </div>
            );
          })}
          <button>Checkout {Number.parseFloat(price).toFixed(2)} </button>
        </div>
      )}
    </div>
  );
}

export default Sidecart;
