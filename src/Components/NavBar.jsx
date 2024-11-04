import React from "react";
import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

const NavBar = ({ cart }) => {
  const cartNotEmpty = cart.length > 0;

  return (
    <nav className="NavBar">
      <div className="NavDiv NavTitle">
        <h1>Groceries App</h1>
        <div className="NavDiv NavUser">
          <div>Hello, Username</div>
        </div>
        <div className="NavDiv NavCart">
          <img
            src={cartNotEmpty ? cartFull : cartEmpty}
            alt="Cart Img"
            className="cart-icon"
          />

          {cartNotEmpty && <span className="cart-dot"></span>}
        </div>
      </div>
    </nav>
  );
}; //cart does not work? image switch incorrect?

export default NavBar;
