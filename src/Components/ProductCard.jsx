import React from "react";
import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product, cart, setCart }) => {
  //addToCart
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity } //... copies object
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity }]); //... to create array then ...procut to add object
      } //new cart array with previous objects
    }
  };

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <div className="ProductQuantityDiv">
        <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      </div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
