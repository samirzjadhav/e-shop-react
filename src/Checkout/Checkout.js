import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal.js";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.js";
import { useStateValue } from "../StateProvider/StateProvider.js";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout flex gap-[40px]">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout-ad"
        />
        <h2 className="checkout-title">Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
