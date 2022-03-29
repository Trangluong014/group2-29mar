import React, { useContext } from "react";
import { CartContext } from "../App";

function CartItem({ product, dispatch }) {
  const cardContext = useContext(CartContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
      }}
    >
      <h6>
        <button
          onClick={() => dispatch({ type: "INC_QUANT", payload: product })}
        >
          +
        </button>{" "}
        {product.quantity}{" "}
        <button
          onClick={() => dispatch({ type: "DEC_QUANT", payload: product })}
        >
          -
        </button>{" "}
        x {product.name}
      </h6>
      <h6>$ {product.price * product.quantity}</h6>
    </div>
  );
}

export default CartItem;
