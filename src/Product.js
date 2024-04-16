import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ id, image, name, price }) {
  return (
    <Link to={`/products/${id}`} className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  );
}

export default Product;
