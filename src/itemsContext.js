import React, { createContext, useState } from "react";
import IphoneImg from "./images/iphone.jpg";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      image: IphoneImg,
      price: "539.99",
      description: "High-performance laptop",
    },
    {
      id: 2,
      name: "Smartphone",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Latest model smartphone",
    },
    {
      id: 3,
      name: "Headphones",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Noise-cancelling headphones",
    },
    {
      id: 4,
      name: "Laptop",
      image: IphoneImg,
      price: "539.99",
      description: "High-performance laptop",
    },
    {
      id: 5,
      name: "Smartphone",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Latest model smartphone",
    },
    {
      id: 6,
      name: "Headphones",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Noise-cancelling headphones",
    },
    {
      id: 7,
      name: "Laptop",
      image: IphoneImg,
      price: "539.99",
      description: "High-performance laptop",
    },
    {
      id: 8,
      name: "Smartphone",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Latest model smartphone",
    },
    {
      id: 9,
      name: "Headphones",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Noise-cancelling headphones",
    },
    {
      id: 10,
      name: "Headphones",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
      price: "539.99",
      description: "Noise-cancelling headphones",
    },
  ]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
