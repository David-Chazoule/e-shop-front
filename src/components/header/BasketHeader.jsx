import basketIcon from "../../img/shoppingCart.png";
import Auth from "../../context/Auth";
import BasketHeaderCard from "../header/BasketHeaderCard";
import React, { useState, useContext } from "react";
import "../../CSS/header/basketHeader.css";
import { Link } from "react-router-dom";

function BasketHeader(product) {
  const [onBasket, setOnBasket] = useState(false);
  const { basket, setBasket } = useContext(Auth);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = () => {
    let totalPrice = 0;
    basket.forEach((product) => {
      totalPrice += product.quantity * parseInt(product.price);
    });
    return totalPrice.toFixed(2);
  };

  const totalQuantity = () => {
    let totalQuantity = 0;
    basket.forEach((product) => {
      totalQuantity += +product.quantity;
    });
    return totalQuantity;
  };

  // const changeQuantity = (value) => {
  //     setQuantity(value);
  //     const productIndex = basket.findIndex(e => e.id === product.id);
  //     const myBasket = basket
  //     basket[productIndex].quantity = value
  //     setBasket([...myBasket])
  // }

  const showBasket = (value) => {
    setOnBasket(!value);
  };

  return (
    <div
      className="basket-header-container"
      onMouseEnter={() => showBasket(false)}
      onMouseLeave={() => showBasket(true)}
    >
      <div className="basket-box">
        <div className="basket-logo-box">
          <img className="icon-basket" src={basketIcon} alt="" />

          {/* <p className='basket-title'>Panier</p> */}
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
                      <button className="btn-order">Commander</button>
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
