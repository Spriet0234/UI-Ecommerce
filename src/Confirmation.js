import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderConfirmation.css"; // Ensure to create this CSS file for styling

function OrderConfirmationPage() {
  const { state } = useLocation();
  const { cartItems, customer } = state;

  return (
    <div className="order-confirmation-page">
      <h1>Order Confirmation</h1>
      <p>
        Thank you, {customer.firstName}, your order has been placed
        successfully!
      </p>
      <h2>Shipping Information:</h2>
      <div className="shipping-address">
        <strong>Name: {customer.firstName}</strong>
        <strong>
          Address:{customer.address}, {customer.city} {customer.state}{" "}
          {customer.zip}
        </strong>
      </div>
      <h2>Order Details:</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="confirmation-item">
          <img
            src={item.image}
            alt={item.name}
            className="confirmation-item-image"
          />
          <div className="confirmation-item-details">
            <div className="confirmation-item-name">{item.name}</div>
            <div className="confirmation-item-price">${item.price}</div>
            <div className="confirmation-item-quantity">
              Quantity: {item.quantity}
            </div>
          </div>
        </div>
      ))}
      <h3>
        Total: $
        {cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </h3>
    </div>
  );
}

export default OrderConfirmationPage;
