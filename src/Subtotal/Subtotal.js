import React from "react";
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../Reducer/Reducer";
import { formatCurrency } from "../utils";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <p>
        {" "}
        Subtotal ({basket.length} item):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> this order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
