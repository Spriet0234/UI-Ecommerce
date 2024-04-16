import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage"; // Assuming HomePage is defined as shown
import ProductsPage from "./ProductsPage"; // Ensure this component is defined
import "./App.css";
import { ItemsProvider } from "./itemsContext";
import Header from "./header";
import logo from "./logo.svg";
import ProductDetails from "./productDetails.js";
import { CartProvider } from "./CartContext";
import CartPage from "./CartPage"; // Import the Cart page component

function Footer() {
  return (
    <footer>
      <p>© Footer Here</p>
    </footer>
  );
}

function App() {
  return (
    <ItemsProvider>
      {" "}
      {/* Items context for product information */}
      <CartProvider>
        {" "}
        {/* Cart context for shopping cart functionality */}
        <BrowserRouter>
          <Header />
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />{" "}
              <Route path="/about" element={<div>About Us Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ItemsProvider>
  );
}

export default App;
