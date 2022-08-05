import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import Auth from "../../context/Auth";

function BasketHeaderCard({ product }) {
  const { basket, setBasket } = useContext(Auth);

  return (
    <>
      <div className="list-shop-box">
        <div className="produce-container">
          <p className="produce">{product.title}</p>
        </div>
        <p className="quantity-produce">X{product.quantity}</p>
        <p className="quantity-produce">{+product.price * product.quantity}€</p>
      </div>
    </>
  );
}

export default BasketHeaderCard;
