import React, { useContext, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ItemsContext } from "./itemsContext";
import Product from "./Product";
import "./Product.css";

function ProductsPage() {
  const { items } = useContext(ItemsContext);
  const location = useLocation();
  const searchTerm = location.state?.searchTerm?.toLowerCase();

  const [sortOrder, setSortOrder] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });

  const handlePriceChange = (field, value) => {
    setPriceFilter((prev) => ({
      ...prev,
      [field]: value === "" ? "" : Number(value),
    }));
  };

  const resetFilters = () => {
    setSortOrder("");
    setPriceFilter({ min: "", max: "" });
  };

  const sortedFilteredItems = useMemo(() => {
    let itemsToFilter = items.filter(
      (item) =>
        (!searchTerm || item.name.toLowerCase().includes(searchTerm)) &&
        (priceFilter.min === "" || item.price >= priceFilter.min) &&
        (priceFilter.max === "" || item.price <= priceFilter.max)
    );

    if (sortOrder === "lowToHigh") {
      return itemsToFilter.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      return itemsToFilter.sort((a, b) => b.price - a.price);
    }
    return itemsToFilter;
  }, [items, searchTerm, priceFilter, sortOrder]);

  return (
    <div className="page-layout">
      <div className="sidebar">
        <button className="btn2" onClick={resetFilters}>
          Reset
        </button>
        <label>Sort by price:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <label>Filter by price range:</label>
        <input
          type="number"
          placeholder="Min price"
          value={priceFilter.min}
          onFocus={(e) => e.target.value === "0" && (e.target.value = "")}
          onBlur={(e) => e.target.value === "" && handlePriceChange("min", "0")}
          onChange={(e) => handlePriceChange("min", e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          value={priceFilter.max}
          onFocus={(e) => e.target.value === "0" && (e.target.value = "")}
          onBlur={(e) => e.target.value === "" && handlePriceChange("max", "0")}
          onChange={(e) => handlePriceChange("max", e.target.value)}
        />
      </div>
      <div className="product-list">
        {sortedFilteredItems.map((item) => (
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
