import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct flex">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        className="w-[300px]"
      />
      <div className="product-info">
        <p className="checkoutProduct-title">
          Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)
        </p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct-rating">⭐️ ⭐️ ⭐️ ⭐️</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
