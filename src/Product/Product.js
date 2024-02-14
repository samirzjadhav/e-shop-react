import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product-info">
        <p>Title</p>
        <p className="product-price">$39</p>
        <div className="product-rating">⭐️⭐️⭐️⭐️⭐️</div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
      />
      <button>Add To Basket</button>
    </div>
  );
};

export default Product;
