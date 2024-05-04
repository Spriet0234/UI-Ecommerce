import React, { useContext } from "react";
import { ItemsContext } from "./itemsContext"; // Ensure this import is correct
import Product from "./Product"; // Import the Product component
import "./App.css";
import dallePic from "./images/dallePic.jpg";

function Main() {
  const { items } = useContext(ItemsContext);
  const featuredProducts = items.slice(0, 3); // Get the first three items

  return (
    <main>
      <section id="featured">
        <h2>Featured Products</h2>
        <div className="products-container">
          {featuredProducts.map((product) => (
            <Product
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <div className="App">
      <div className="hero">
        <h1 className="out">Welcome to Our Store!</h1>
        <p className="out">Explore our wide range of electronics!</p>
      </div>
      <div className="banner">
        {/* <img src={dallePic} alt="Electronics Sale" /> */}
      </div>
      <Main />
    </div>
  );
}

export default HomePage;
