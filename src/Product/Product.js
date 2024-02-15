import React from "react";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button>Add To Basket</button>
    </div>
  );
};

export default Product;
