import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import products from "../data/products";

//container for groceries
const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]); //holds items

  const addToCart = (product, quantity) => {
    //add items to cart
    if (quantity < 1) {
      alert("Please add a quantity before adding to the cart");
      return;
    }

    //does not work/duplicate
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  //remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const emptyCart = () => {
    setCart([]);
  };

  //calling?rendering components
  return (
    <div className="GroceriesAppContainer">
      <NavBar cart={cart} />
      <ProductsContainer products={products} addToCart={addToCart} />
      <CartContainer
        cart={cart}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}
      />
    </div>
  );
};

export default GroceriesAppContainer;
