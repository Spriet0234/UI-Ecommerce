import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">${item.price}</div>
                <div className="cart-item-quantity">
                  Quantity: {item.quantity}
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
          <button className="cart-checkout-button">Proceed to Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
