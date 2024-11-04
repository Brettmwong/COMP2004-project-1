import React from "react";
import CartCard from "./CartCard";

const CartContainer = ({ cart, setCart }) => {
  //emptyCart
  const handleEmptyCart = () => {
    setCart([]);
  };

  return (
    <div className="CartContainer">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <h2>Cart Items</h2>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              product={item}
              cart={cart}
              setCart={setCart}
            />
          ))}
          <div className="CartListBtns">
            <button onClick={handleEmptyCart}>Empty Cart</button>
            <button id="BuyButton">Buy</button>
          </div>
        </>
      )}
    </div>
  );
};
export default CartContainer;
