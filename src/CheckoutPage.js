import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expMonth: "",
    cvv: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart(); // Assuming this function clears all items from the cart
    navigate("/order-confirmation", { state: { cartItems, customer } }); // Passing cart items and customer info to the confirmation page
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-section">
          <h2>Shipping Details</h2>
          <div className="input-group">
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={customer.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={customer.lastName}
              onChange={handleInputChange}
              required
            />
          </div> */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={customer.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={customer.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={customer.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              value={customer.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              id="zip"
              name="zip"
              type="text"
              value={customer.zip}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-section">
          <h2>Payment Information</h2>
          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={customer.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="expMonth">Expiration (MM/YYYY)</label>
            <input
              id="expMonth"
              name="expMonth"
              type="text"
              value={customer.expMonth}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              value={customer.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="checkout-total">Total: ${calculateTotal()}</div>
        <button type="submit" className="checkout-confirm-button">
          Confirm Purchase
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
