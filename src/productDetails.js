import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "./itemsContext";
import "./ProductDetails.css"; // Import the CSS for styling
import { useCart } from "./CartContext";

function ProductDetails() {
  const { productId } = useParams();
  const a = 1;
  const { items } = useContext(ItemsContext);
  const { addToCart } = useCart();

  // Find the product by ID
  const product = items.find((item) => item.id.toString() === productId);

  if (!product) {
    return <div>Product not found! {` ${productId}`}</div>;
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h1>{product.name}</h1>
        <p className="product-details-price">${product.price}</p>
        <p>{product.description}</p>
        <button className="cart-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
