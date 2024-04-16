import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ItemsContext } from "./itemsContext";
import Product from "./Product"; // Import the Product component

function ProductsPage() {
  const { items } = useContext(ItemsContext);
  const location = useLocation();
  const searchTerm = location.state?.searchTerm?.toLowerCase();

  // Filter items based on the search term if it exists; otherwise, use all items
  const filteredItems = searchTerm
    ? items.filter((item) => item.name.toLowerCase().includes(searchTerm))
    : items;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {filteredItems.map((item) => (
        <Product
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ProductsPage;
