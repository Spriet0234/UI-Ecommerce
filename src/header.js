import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ItemsContext } from "./itemsContext";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { items, setItems } = useContext(ItemsContext);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/products", { state: { searchTerm } });
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
