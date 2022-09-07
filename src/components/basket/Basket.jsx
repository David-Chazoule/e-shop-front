// import "../../CSS/Basket/basket.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../context/Auth";
import BasketCard from "../../components/basket/BasketCard";

import basketFull from "../../img/basket-full.png";

function Basket() {
  const { basket } = useContext(Auth);
  const { userInfo } = useContext(Auth);

  const nav = useNavigate();

  const totalPrice = () => {
    let totalPrice = 0;
    basket.forEach((product) => {
      totalPrice += product.quantity * parseInt(product.price);
    });
    return totalPrice;
  };

  function NextDirection() {
    if (
      userInfo.id &&
      totalPrice() > 0 &&
      userInfo.firstname &&
      userInfo.lastname &&
      userInfo.adress &&
      userInfo.city &&
      userInfo.postalcode &&
      userInfo.phone
    ) {
      nav("/paiement");
    } else if (
      userInfo.id &&
      totalPrice() > 0 &&
      userInfo.firstname == null &&
      userInfo.lastname == null &&
      userInfo.adress == null &&
      userInfo.city == null &&
      userInfo.postalcode == null &&
      userInfo.phone == null
    ) {
      nav("/information");
    } else {
      nav("/register");
    }
  }

  return (
    <div className="basket_container">
      <h1>Mon Panier</h1>
      <img className="basketfull-logo" src={basketFull} alt="logo-basket" />
      <div className="basket">
        <div className="basket-recap">
          <div className="article-title-box">
            <p className="article-title">Article</p>
            <p className="article-title">Prix</p>
            <p className="article-title">Quantité</p>
            <p className="article-title">Total</p>
            <p className="article-sup"></p>
          </div>

          {basket.length > 0 &&
            basket.map((product) => (
              <BasketCard key={product.title} product={product} />
            ))}

          <div className="article-bar"></div>

          <div></div>
        </div>

        <div className="basket-total">
          <div className="article-bar-total"></div>
          <div className="basket-final-result">
            <p className="basket-total-title">TOTAL</p>
            <p className="basket-total-price">{totalPrice()}€</p>
          </div>
        </div>
      </div>

      <div className="btn-back-next-box">
        <Link to="/produit">
          <button className="btn-back-next">Poursuivre mes achats </button>
        </Link>

        <div>
          {(userInfo.id && totalPrice() === 0) ||
          (!userInfo.id && totalPrice() === 0) ? (
            <h5> votre panier est vide</h5>
          ) : (
            <button className="btn-back-next" onClick={() => NextDirection()}>
              Terminer ma commande
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
