import "../../CSS/Basket/basket.css";
import { useContext } from "react";
import Auth from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import BasketCard from "../../components/basket/BasketCard";
import basketFull from "../../img/basket-full.png";

function Basket() {
  const { basket, setBasket } = useContext(Auth);
  const { userInfo, setUserInfo } = useContext(Auth);

  const totalPrice = () => {
    let totalPrice = 0;
    basket.forEach((product) => {
      totalPrice += product.quantity * parseInt(product.price);
    });
    return totalPrice;
  };

  function Next() {
    if (userInfo.id && totalPrice() > 0) {
      return (
        <Link to="/information">
          <button className="btn-back-next">Terminer ma commande</button>
        </Link>
      );
    } else if (
      (userInfo.id && totalPrice() === 0) ||
      (!userInfo.id && totalPrice() === 0)
    ) {
      return (
        <div>
          <h5> votre panier est vide</h5>
        </div>
      );

      // } else if (!userInfo.id && totalPrice() === 0) {

      //   return <div>
      //     <button className="btn-back-next">Terminer ma commande</button>
      //     <h5> votre panier est vide</h5>
      //   </div>

      // }
    } else {
      return (
        <Link to="/register">
          <button className="btn-back-next">Terminer ma commande</button>
        </Link>
      );
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

        {/* {userInfo.id && totalPrice() > 0 ? (
          <Link to="/information">
            <button className="btn-back-next">Terminer ma commande</button>
          </Link>
        ) : (
          <Link to="/register">
            <button className="btn-back-next">Terminer ma commande</button>
          </Link>
        )} */}

        {Next()}
      </div>
    </div>
  );
}

export default Basket;
