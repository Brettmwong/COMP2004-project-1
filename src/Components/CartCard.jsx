import React from "react";
import QuantityCounter from "./QuantityCounter";

const CartCard = ({ product, cart, setCart }) => {
  const handleRemoveItem = () => {
    setCart(cart.filter((item) => item.id !== product.id)); //filter keeps items that = true and removes items that = false
  }; //sends array to setCart? should update to new state

  return (
    <div className="CartCard">
      <img src={product.image} alt={product.name} />
      <div className="CartCardInfo">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>Total: ${product.price * product.quantity}</p>
      </div>
      <QuantityCounter
        quantity={product.quantity}
        setQuantity={(newQuantity) => {
          if (newQuantity >= 1) {
            setCart(
              cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: newQuantity }
                  : item
              )
            );
          }
        }}
      />
      <button className="RemoveButton" onClick={handleRemoveItem}>
        Remove
      </button>
    </div>
  );
};

export default CartCard;
