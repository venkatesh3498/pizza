import './sidecart.css'
import pic from '../../Assets/Hands - Shopping Cart Error.png';
function Sidecart() {
    const cartEmptyStatus = true;
    return (
        <div className="cart-home">
            {cartEmptyStatus ? (
                <div className="empty-cart">
                <img src={pic} />
                <h2>Your Cart Is Empty</h2>
                <p>Continue Shopping And Add Products To Cart</p>
            </div>
            ):(
                <div className="cart-item">
                    <h2>Product Name</h2>
                    <h4>Price</h4>
                    <button>Checkout</button>
                </div>
            )}
            
        </div>
    )
}

export default Sidecart
