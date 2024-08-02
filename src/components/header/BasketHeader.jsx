import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import BasketHeaderCard from "../header/BasketHeaderCard";
import Auth from "../../context/Auth";

import basketIcon from "../../img/shoppingCart.png";

function BasketHeader() {
  const [onBasket, setOnBasket] = useState(false);

  const { basket, setBasket } = useContext(Auth);
  const [quantity, setQuantity] = useState(1);

  //calculate the total price

  const totalPrice = () => {
    let totalPrice = 0;
    basket.forEach((product) => {
      totalPrice += product.quantity * parseInt(product.price);
    });
    return totalPrice.toFixed(2);
  };

  //calculate the total quantity

  const totalQuantity = () => {
    let totalQuantity = 0;
    basket.forEach((product) => {
      totalQuantity += +product.quantity;
    });
    return totalQuantity;
  };

  const showBasket = () => {
    setOnBasket(!onBasket);
  };

  const closeBasket = () => {
    setOnBasket(!onBasket);
  };

  return (
    <div className="basket-header-container">
      <div className="basket-box">
        <div className="basket-logo-box">
          <img
            className="icon-basket"
            src={basketIcon}
            alt="logo-basket"
            onClick={showBasket}
          />
        </div>
        {basket.length ? (
          <div id="circle">
            <p className="number-article-basket" value={quantity}>
              {totalQuantity()}
            </p>
          </div>
        ) : (
          <div></div>
        )}

        {onBasket && (
          <>
            <div id="triangle"></div>
            <div className="basket-list">
              {!basket.length ? (
                <div className="basket-empty-box">
                  <p className="basket-empty">Votre panier est vide</p>
                </div>
              ) : (
                <>
                  {basket.length > 0 &&
                    basket.map((product) => (
                      <BasketHeaderCard key={product.title} product={product} />
                    ))}

                  <div className="bar-separation"></div>

                  <div className="total-price-list">
                    <p className="total-title-basket-header">TOTAL</p>
                    <p className="total-price-basket-header">{totalPrice()}€</p>
                  </div>
                  <div className="btn-order-basket">
                    <Link to="/panier">
                      <button className="btn-order" onClick={closeBasket}>
                        Commander
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BasketHeader;
