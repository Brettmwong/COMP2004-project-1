import React from "react";

const QuantityCounter = ({ quantity, setQuantity }) => {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="ProductQuantityDiv">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default QuantityCounter;
