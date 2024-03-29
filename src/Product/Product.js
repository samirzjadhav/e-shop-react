import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider.js";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info font-semibold">
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
      <img src={image} className="flex items-center text-center" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Product;
