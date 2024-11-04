import ProductCard from "./ProductCard";
import React from "react";

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  ); //pass addtocart to product cards
};

export default ProductsContainer;
