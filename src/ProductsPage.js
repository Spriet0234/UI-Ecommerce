import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemsContext } from "./itemsContext";
import Product from "./Product";
import "./Product.css"; // Make sure your CSS is imported

function ProductsPage() {
  const { items } = useContext(ItemsContext);
  const location = useLocation();
  const searchTerm = location.state?.searchTerm?.toLowerCase();

  const [sortOrder, setSortOrder] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity });

  let filteredItems = items.filter(
    (item) =>
      (!searchTerm || item.name.toLowerCase().includes(searchTerm)) &&
      item.price >= priceFilter.min &&
      item.price <= priceFilter.max
  );

  if (sortOrder === "lowToHigh") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="page-layout">
      <div className="sidebar">
        <label>Sort by price:</label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <label>Filter by price range:</label>
        <input
          type="number"
          placeholder="Min price"
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, min: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Max price"
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, max: Number(e.target.value) })
          }
        />
      </div>
      <div className="product-list">
        {filteredItems.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
