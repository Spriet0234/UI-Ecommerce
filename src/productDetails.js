import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "./itemsContext";
import "./ProductDetails.css"; // Import the CSS for styling
import { useCart } from "./CartContext";

function ProductDetails() {
  const [addedToCart, setAddedToCart] = useState(false);
  const { productId } = useParams();
  const a = 1;
  const { items } = useContext(ItemsContext);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

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
        <button className="cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {addedToCart && <div className="cart-message">Added to cart!</div>}
      </div>
    </div>
  );
}

export default ProductDetails;
