"use client";

import { useState } from "react";

export default function Menu() {
  const [quantities, setQuantities] = useState(Array(12).fill(0));

  const addHandler = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const removeHandler = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const menuItems = [
    {
      name: "Beef Burger",
      description: "Juicy beef patty, fresh lettuce, and tomatoes in a toasted bun.",
      price: 20.99,
      oldPrice: 29.99,
      image: "/burger-menu.jpg",
      },
      {
        name: "Chicken Biryani",
        description: "Fragrant basmati rice layered with marinated meat and aromatic spices.",
        price: 30.99,
        oldPrice: 35.99,
        image: "/biryani.jpg",
      },
      {
        name: "Italian Pizza",
        description: "Classic Italian pizza topped with cheese and your choice of fresh toppings.",
        price: 25.99,
        oldPrice: 29.99,
        image: "/pizza.jpg",
      },
      {
        name: "Crispy Broast",
        description: "Crispy fried chicken, marinated in special spices and cooked to golden perfection.",
        price: 20.99,
        oldPrice: 25.99,
        image: "/broast.jpg",
      },
      {
        name: "Chicken Sandwich",
        description: "Crispy fried chicken breast with creamy mayo and crisp lettuce in a soft bun.",
        price: 15.99,
        oldPrice: 20.99,
        image: "/sandwich.jpg",
      },
      {
        name: "Seekh Kabab",
        description: "Spiced minced meat skewers grilled to perfection.",
        price: 18.99,
        oldPrice: 23.99,
        image: "/seekh-kabab.jpg",
      },
      {
        name: "Creamy Pasta",
        description: "Creamy pasta in a rich white sauce with garlic and cheese.",
        price: 15.99,
        oldPrice: 20.99,
        image: "/pasta.jpg",
      },
      {
        name: "Chicken Tikka",
        description: "Tender grilled meat glazed with smoky barbecue sauce.",
        price: 25.99,
        oldPrice: 28.99,
        image: "/tikka.jpg",
      },
      {
        name: "Fried Fish",
        description: "Tender grilled meat glazed with smoky barbecue sauce.",
        price: "30.99",
        oldPrice: "35.99",
        image: "/fish.jpg",
      },
      {
        name: "Gulab Jamun",
        description: "Soft dough balls soaked in rose-flavored syrup.",
        price: 12.99,
        oldPrice: 20.99,
        image: "/gulab-jamun.jpg",
      },
      {
        name: "Pancake",
        description: "Fluffy pancakes with maple syrup and whipped cream.",
        price: 14.99,
        oldPrice: 18.99,
        image: "/pancake.jpg",
      },
      {
        name: "Ice Cream",
        description: "Creamy ice cream available in various flavors to satisfy your sweet tooth.",
        price: 16.99,
        oldPrice: 20.99,
        image: "/icecream.jpg",
      },
  ];

  return (
    <section>
    <div className="menu-container">
      <h1 className="menu-heading">
        OUR <span className="highlight-yellow">MENU</span>
      </h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} className="menu-image" alt={item.name} />
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-description">{item.description}</p>
            <p className="menu-pricing">
              ${item.price} <span className="old-price">${item.oldPrice}</span>
            </p>
            <button className="cart-button">Add to Cart</button>
            <div className="quantity-container">
              <button className="quantity-button" onClick={() => addHandler(index)}>
                +
              </button>
              <h1>{quantities[index]}</h1>
              <button className="quantity-button" onClick={() => removeHandler(index)}>
                -
              </button>
            </div>
          </div>
        ))}
        <div style={{ paddingBottom: "110px" }}></div>
      </div>
    </div>
    </section>
  );
}
