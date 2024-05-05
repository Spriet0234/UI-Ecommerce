import React, { createContext, useState } from "react";
import IphoneImg from "./images/iphone.jpg";

export const ItemsContext = createContext();
//import productsData from "./products.json";

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    // {
    //   id: -1,
    //   name: "Iphone 11",
    //   image: IphoneImg,
    //   price: "539.99",
    //   description: "Iphone 11",
    // },
    // {
    //   id: 0,
    //   name: "Iphone 12",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "539.99",
    //   description: "Latest model smartphone",
    // },
    // {
    //   id: 3,
    //   name: "Headphones",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "539.99",
    //   description: "Noise-cancelling headphones",
    // },
    // {
    //   id: 4,
    //   name: "Laptop",
    //   image: IphoneImg,
    //   price: "639.99",
    //   description: "High-performance laptop",
    // },
    // {
    //   id: 5,
    //   name: "Smartphone",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "53.99",
    //   description: "Latest model smartphone",
    // },
    // {
    //   id: 6,
    //   name: "Headphones",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "599.99",
    //   description: "Noise-cancelling headphones",
    // },
    // {
    //   id: 7,
    //   name: "Laptop",
    //   image: IphoneImg,
    //   price: "539.99",
    //   description: "High-performance laptop",
    // },
    // {
    //   id: 8,
    //   name: "Smartphone",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "539.99",
    //   description: "Latest model smartphone",
    // },
    // {
    //   id: 9,
    //   name: "Headphones",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "539.99",
    //   description: "Noise-cancelling headphones",
    // },
    // {
    //   id: 10,
    //   name: "Headphones",
    //   image:
    //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
    //   price: "539.99",
    //   description: "Noise-cancelling headphones",
    // },
    {
      id: 1,
      name: "Apple Airpods",
      image: "https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UY218_.jpg",
      price: 149.99,
      description:
        "High-quality wireless earbuds with noise-cancelling technology.",
    },
    {
      id: 2,
      name: "Apple iphone",
      image:
        "https://spriet0234.github.io/UI-Ecommerce/static/media/iphone.901d4ea34195610d135c.jpg",
      price: 1049.99,
      description: ".",
    },
    {
      id: 3,
      name: "Apple Watch SE",
      image:
        "https://www.apple.com/v/watch/bl/images/overview/select/product_se__frx4hb13romm_medium.png",
      price: 249.99,
      description:
        "Easy ways to stay connected. Motivating fitness metrics. Innovative health and safety features. And carbon neutral case and band combinations. Apple Watch SE offers totally lovable features at a feel‑good price.",
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      image:
        "https://www.apple.com/v/watch/shared/why-watch/o/images/overview/fitness/fitness_activity_rings__dyuo7v3xlsya_medium.jpg",
      price: 349.99,
      description:
        "Apple Watch, When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, innovative safety features, and a connection to the people you care about most.",
    },
    {
      id: 5,
      name: "Apple Watch Ulta 2",
      image:
        "https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/design/design_carbon__cttkpvv1k7cm_medium.jpg",
      price: 749.99,
      description:
        "Featuring the all-new S9 SiP. A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and band combination that is carbon neutral.",
    },
    {
      id: 6,
      name: "MacBook Air 13",
      image:
        "https://www.apple.com/v/mac/home/bz/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_medium.png",
      price: 989.99,
      description:
        "MacBook Air with M2 chip is superlight and under half an inch thin. Two perfectly portable sizes so it fits in your backpack.",
    },
    {
      id: 7,
      name: "ASUS ROG Strix GeForce RTX 4090",
      image:
        "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-616-03.jpg",
      price: 2149.99,
      description:
        "White OC Edition Gaming Graphics Card (PCIe 4.0, 24GB GDDR6X, HDMI 2.1a, DisplayPort 1.4a) ROG-STRIX-RTX4090-O24G-WHITE.",
    },
    {
      id: 8,
      name: "Mother Board",
      image: "https://c1.neweggimages.com/ProductImage/13-145-417-04.jpg",
      price: 229.99,
      description:
        "GIGABYTE Z790 AORUS ELITE AX LGA 1700 Intel Z790 ATX Motherboard with DDR5, Quad M.2, PCIe 5.0, USB 3.2 Gen2X2 Type-C, Intel WiFi 6E, 2.5GbE LAN, Q-Flash Plus, PCIe EZ-Latch.",
    },
    {
      id: 9,
      name: "Gaming Monitor",
      image: "",
      price: 149.99,
      description:
        "30'' Curved Gaming Monitor, 144Hz/200Hz Ultrawide Computer Monitor, WFHD(2560*1080P)VA Screen,21:9,1500R,99%sRGB, PC Monitors Support FreeSync, With HDMI/DP, Support Wall Mount- Black",
    },
    {
      id: 10,
      name: "Apple -iPhone Charger",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41iWogJnZQL._AC_UL600_SR600,400_.jpg",
      price: 14.99,
      description:
        "Charger with Fast Charging Capability, Type C Wall Charger.",
    },
    {
      id: 11,
      name: "Apple Pencil",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/21SPDoiRuGL._AC_UL600_SR600,400_.jpg",
      price: 80.99,
      description:
        "Apple Pencil (2nd Generation): Pixel-Perfect Precision and Industry-Leading Low Latency, Perfect for Note-Taking, Drawing.",
    },
    {
      id: 12,
      name: "USB to USB C Adapter",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61hh93h2ZbL._AC_UL600_SR600,400_.jpg",
      price: 8.99,
      description: "USBC Female to A Male OTG Charger Type C Converter.",
    },
    {
      id: 13,
      name: "Microphone for PC",
      image: "https://m.media-amazon.com/images/I/61kldcy+QGL._AC_UY218_.jpg",
      price: 50.99,
      description:
        "USB Condenser Microphone for PC, Camera, Podcast Microphone with Desk Stand for Stream/Record.",
    },
    {
      id: 14,
      name: "Pink Gaming Desk",
      image: "https://m.media-amazon.com/images/I/71z7dX1dtzL._AC_SX450_.jpg",
      price: 109.99,
      description:
        "L Shaped, 51 Inch Gamer Desk Gaming Table with Carbon Fiber Texture, Corner Computer Desk L Shape with Monitor Stand and Cup Holder and Headphone Hook, for Women and Girls Gift.",
    },
    {
      id: 15,
      name: "Gaming Mouse Pad",
      image: "https://m.media-amazon.com/images/I/71kfSzOp3FL._AC_UY218_.jpg",
      price: 10.99,
      description: "Large Led Mousepads Non-Slip Rubber Base.",
    },
    {
      id: 16,
      name: "Lenovo Legion Pro 7i",
      image: "https://m.media-amazon.com/images/I/61I-7jTKrKL._AC_SX355_.jpg",
      price: 2012.99,
      description:
        "The Lenovo Legion Pro is the best gaming laptop from all the new machines we've tested of this generation. It's also the best 16-inch notebook, too, which is our new favorite form factor, offering the best screens seen for modern laptops.",
    },
    {
      id: 17,
      name: "Beats Wireless Headphones",
      image:
        "https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0C8PR4W22?ref_=ast_sto_dp&th=1&psc=1",
      price: 222.99,
      description:
        "Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black.",
    },
    {
      id: 18,
      name: "Hp Print",
      image:
        "https://m.media-amazon.com/images/I/51GcZ8DOTRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      price: 99.99,
      description:
        "Wireless Color Inkjet Printer, Print, scan, copy, Easy setup, Mobile printing, Best-for home, Instant Ink with HP+,White.",
    },
    {
      id: 19,
      name: "Ink Cartridge",
      image: "https://m.media-amazon.com/images/I/715Ohdd62gL._AC_SY355_.jpg",
      price: 30.99,
      description:
        "HP 67XL Tri-color High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series.",
    },
    {
      id: 20,
      name: "Dell Inspiron",
      image: "https://m.media-amazon.com/images/I/71KGu5W9A2L._AC_SY450_.jpg",
      price: 1099.99,
      description:
        "All in One Desktop - 27-inch FHD Touchscreen Display, Intel Core i7-1355U, 32GB RAM, 512GB SSD + 1TB HDD, NVIDIA GeForce MX550 GDDR6, Windows 11 Pro, Services Included - White.",
    },
    {
      id: 21,
      name: "Chromebook",
      image: "https://m.media-amazon.com/images/I/81F1YLvNwEL._AC_SY450_.jpg",
      price: 369.99,
      description:
        "Acer Chromebook Spin 314 Convertible Laptop | Intel Pentium Silver N6000 | 14'' HD Corning Gorilla Glass Touch Display | 8GB LPDDR4X | 128GB eMMC | Intel Wi-Fi 6 AX201 | Chrome OS|.",
    },
    {
      id: 22,
      name: "Streaming Projector",
      image: "https://m.media-amazon.com/images/I/71z8je6U80L._AC_SY355_.jpg",
      price: 2649.99,
      description:
        "4K PRO-UHD, HDR, 3,600 Lumens, up to 120'', Epson Setting Assistant, Android TV, Sound by Yamaha - White.",
    },
    {
      id: 23,
      name: "External Hard Drive",
      image: "https://m.media-amazon.com/images/I/81HElDSuH0L._AC_UY218_.jpg",
      price: 69.99,
      description: "2TB Portable External Hard Drive USB 3.0, Black -.",
    },
    {
      id: 24,
      name: "KVM Switch",
      image: "https://m.media-amazon.com/images/I/71aLhQT586L._SX342_.jpg",
      price: 150.99,
      description:
        "KVM Switch 3 Computer 2 Monitors 8K, KCEVE Dual Monitors Displayport USB 3.0 KVM Switcher, Supports 8K@60Hz for 3 DP Computers Share 2 DP Monitors, Keyboard and Mouse.",
    },
    {
      id: 25,
      name: "Internal Solid State Drive",
      image: "https://m.media-amazon.com/images/I/71FHPYQ2JbL._AC_SY355_.jpg",
      price: 150.99,
      description:
        "READ/WRITE SPEEDS UP TO 5,000/4,200 MB/s: Load games and save files in a flash. Bring power to your productivity with read and write speeds of up to 5,000/4,200 MB/s.*.",
    },
    {
      id: 26,
      name: "Bitcoin Miner",
      image: "https://m.media-amazon.com/images/I/412QHzA03lL._AC_SY450_.jpg",
      price: 550.99,
      description:
        "High-Performance SHA256 AlgorithmBitcoin Miner boasts a robust hashrate of 76 TH/S ± 5%, making it a powerful solution for efficient mining of SHA256 algorithm-based cryptocurrencies like BTC.",
    },
    {
      id: 27,
      name: "Mining Rig Frame",
      image: "https://m.media-amazon.com/images/I/61lC5yVoX1L._AC_SY355_.jpg",
      price: 50.99,
      description:
        "Steel Open Air Miner Mining Frame Rig Case, Support to Dual Power Supply for Crypto Coin Currency Bitcoin ETH ETC ZEC Mining Tools - Frame Only.",
    },
    {
      id: 28,
      name: "Thermal Paste",
      image: "https://m.media-amazon.com/images/I/51fVtU+cDIL._AC_SL1500_.jpg",
      price: 5.99,
      description:
        "Premium Performance Thermal Paste for All Processors (CPU, GPU - PC), Very high Thermal Conductivity, Long Durability, Safe Application, Non-Conductive, CPU Thermal Paste.",
    },
    {
      id: 29,
      name: "Ram 32GB Laptop Memory",
      image: "https://m.media-amazon.com/images/I/61RMUrTPGKL._AC_SX355_.jpg",
      price: 69.99,
      description:
        "3200MHz RAM can downclock to 2933MHz or 2666MHz if system specification only supports 2933MHz or 2666MHz.",
    },
    {
      id: 30,
      name: "Power Supply",
      image: "https://m.media-amazon.com/images/I/71XeKGayJaL._SX385_.jpg",
      price: 99.99,
      description:
        " Fully Modular PSU: Reliable and efficient low-noise power supply with fully modular cabling, so you only have to connect the cables your system build needs.",
    },

    {
      id: 31,
      name: "Language Translator",
      image: "https://m.media-amazon.com/images/I/81GMTOSRWjL._AC_UL320_.jpg",
      price: 40.99,
      description: "Device,Two-Way Real-Time AI Voice Instant Translator.",
    },
    {
      id: 32,
      name: "Precision Screwdriver",
      image: "https://m.media-amazon.com/images/I/41Q8OGEeh5L._AC_UL320_.jpg",
      price: 10.99,
      description:
        "Precision Screwdriver Set, 4-in-1 Electronics Pocket Screwdriver.",
    },
    {
      id: 33,
      name: "Laptop Backpack",
      image: "https://m.media-amazon.com/images/I/71Y1ru0ocfL._AC_UL320_.jpg",
      price: 27.99,
      description:
        "15.6 Inch Travel Laptop Bag Rucksack with USB Charging Port.",
    },
    {
      id: 34,
      name: "2 Pack Keyboard Cleaner",
      image: "https://m.media-amazon.com/images/I/81ITlnEffZL._AC_UL320_.jpg",
      price: 8.99,
      description:
        "Dust Cleaning Gel with 5 Keyboard Cleaning Kit Detailing Cleaning Putty .",
    },
    {
      id: 35,
      name: "Quest 2",
      image: "https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_UL320_.jpg",
      price: 310.99,
      description: "In-One Virtual Reality Headset — 256 GB.",
    },
    {
      id: 36,
      name: "Smart Glasses",
      image: "https://m.media-amazon.com/images/I/51OnO5BqZuL._AC_SY355_.jpg",
      price: 450.99,
      description:
        "Air 2 AR Glasses - Smart Glasses with 201'' Micro OLED, Ultra-fast 120Hz, 600nits Brightness, 1080P Video Display Glasses, and Work on Android/iOS/Consoles/PC.",
    },
    {
      id: 37,
      name: "Wrist Worn Keyboard, AirMouse & Controller",
      image: "https://m.media-amazon.com/images/I/41nqmhQJ6yL._AC_SX355_.jpg",
      price: 300.99,
      description:
        "Wrist Worn Keyboard, AirMouse & Controller for VR, AR, MR, Tablets, PC, Laptops, Smartwatch, Smartphones, TVs & Projectors.",
    },
    {
      id: 38,
      name: "Keyboard and Mouse",
      image: "https://m.media-amazon.com/images/I/51NZ8DOfQTL._AC_UL320_.jpg",
      price: 80.99,
      description:
        "Logitech MK735 Performance Wireless Keyboard & Mouse Combo.",
    },
    {
      id: 39,
      name: "Retro Keyboard",
      image: "https://m.media-amazon.com/images/I/918ji9k7BzL._AC_UL320_.jpg",
      price: 109.99,
      description: "Retro Typewriter Keyboard Wireless Mechanical Keyboard.",
    },
    {
      id: 40,
      name: "Satellite Communicator",
      image: "",
      price: 355.99,
      description:
        "Mini 2, Lightweight and Compact Satellite Communicator, Hiking Handheld, Black.",
    },
    {
      id: 41,
      name: "Apple AirTag",
      image: "https://m.media-amazon.com/images/I/713xuNx00oS._AC_UY218_.jpg",
      price: 29.99,
      description:
        "Keep track of and find your items alongside friends and devices in the Find My app.",
    },
    {
      id: 42,
      name: "Portable Charger for Apple Watch",
      image: "https://m.media-amazon.com/images/I/71Wd55ahD2L._AC_SX522_.jpg",
      price: 15.99,
      description:
        "1200mAh Magnetic Keychain Wireless Power Bank Watch Charger for iWatch.",
    },
    {
      id: 43,
      name: "Desk Vacuum Cleaner",
      image: "https://m.media-amazon.com/images/I/71uWfO8AcaL._AC_SX466_.jpg",
      price: 20.99,
      description:
        "Mini Table Vacuum Improved Details Rechargeable More Durable Vac Sucks up Tiny Items Crumbs for Desktop Drawer Countertop.",
    },
    {
      id: 44,
      name: "CyberTruck",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/ce/Cybertruck-fremont-cropped.jpg",
      price: 80420.99,
      description:
        "DELIVERY IN 2025 |340 MI. RANGE (EST.) |4.1 SEC. 0-60 MPH |112 MPH TOP SPEED |600 HORSEPOWER |7,435 LB-FT TORQU |11,000 LBS. TOWING CAPACITY.",
    },
    {
      id: 44,
      name: "3D Printer",
      image: "https://m.media-amazon.com/images/I/61L4aoIqYOL._AC_SY355_.jpg",
      price: 170.99,
      description:
        "Fully Open Source with Resume Printing Function DIY 3D Printers Printing Size 8.66x8.66x9.84 inch.",
    },
    {
      id: 45,
      name: "GoPro",
      image: "https://m.media-amazon.com/images/I/8178l+fMLyL._AC_SY355_.jpg",
      price: 300.99,
      description:
        "Waterproof Action Camera with 5.3K60 Ultra HD Video, 27MP Photos, 1/1.9'' Image Sensor, Live Streaming, Webcam, Stabilization.",
    },
    {
      id: 46,
      name: "Bidet",
      image: "https://m.media-amazon.com/images/I/41SWud1CxJL._AC_SX425_.jpg",
      price: 399.99,
      description:
        "PureWash E590 Elongated Bidet Toilet Seat, Heated Bidet, Bidets for Existing Toilets, Nightlight, Self-Cleaning Nozzle.",
    },
    {
      id: 47,
      name: "Echo Show",
      image: "https://m.media-amazon.com/images/I/51XDkG-IhgL._AC_SY355_.jpg",
      price: 90.99,
      description:
        "Smart display with 2x the bass and clearer sound. Set alarms and timers, sleep soundly with a relaxing playlist.",
    },
    {
      id: 48,
      name: "Sony Camera",
      image: "https://m.media-amazon.com/images/I/71vpzW1nQJL._AC_SX355_.jpg",
      price: 2700.99,
      description:
        "Sony Alpha 7 IV Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Zoom Lens Kit.",
    },
    {
      id: 49,
      name: "PS5",
      image: "https://m.media-amazon.com/images/I/51eOztNdCkL._SX466_.jpg",
      price: 600.99,
      description:
        "Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.",
    },
    {
      id: 50,
      name: "Xbox One",
      image: "https://m.media-amazon.com/images/I/71RmaDXNRTL._SX342_.jpg",
      price: 210.99,
      description:
        "Games play better on Xbox One X With 40% more power than any other console, experience immersive true 4K gaming.",
    },
  ]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
