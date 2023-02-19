import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Characteristic from "../components/Characteristic";
import Auth from "../context/Auth";
import Skeleton from "react-loading-skeleton";

import valid from "../img/IconValide.png";
import wrong from "../img/Not_allowed.svg";
import basketValidate from "../img/validate-basketW.png";

function ProductCard() {
  const params = useParams();
  const [productInfos, setProductInfos] = useState([]);
  const [isLoading, SetIsLoading] = useState([true]);

  const { basket, setBasket } = useContext(Auth);

  const addBasket = (product) => {
    const productInfo = {
      title: product.title,
      image: product.img,
      price: product.price,
      id: product.id,
      quantity: 1,
    };
    const itemAlreadyInBasket = basket.findIndex(
      (elem) => elem.id === product.id
    );

    if (itemAlreadyInBasket >= 0) {
      basket[itemAlreadyInBasket].quantity =
        basket[itemAlreadyInBasket].quantity + 1;
    } else {
      setBasket([...basket, productInfo]);
    }

    const modal = document.querySelector(".modal-basket");
    modal.style.visibility = "visible";

    setTimeout(() => {
      modal.style.opacity = 0;
      modal.style.transition = "0.6s";
      modal.style.visibility = "hidden";
      setTimeout(() => {
        modal.style.opacity = 1;
      }, 800);
    }, 2000);
  };

  useEffect(() => {
    const fetchproduct = async () => {
      const result = await axios.get(
        "http://localhost:8000/product/" + params.id
      );
      setProductInfos(result.data);
    };
    fetchproduct();
    SetIsLoading(false);
  }, [params.id]);

  function showQuantity() {
    if (productInfos.quantity >= 10) {
      return (
        <>
          <div className="stock">
            <img className="icon-valid" src={valid} alt="icon-valid" />
            <p className="good-stock">En stock</p>
          </div>
        </>
      );
    } else if (productInfos.quantity <= 0) {
      return (
        <>
          <div className="stock">
            <img className="icon-not-valid" src={wrong} alt="icon-not-vaalid" />
            <p className="no-stock"> produit indisponible</p>
          </div>
        </>
      );
    } else if (productInfos.quantity <= 10 && productInfos.quantity >= 1) {
      return (
        <>
          <div className="stock">
            <img className="icon-valid" src={valid} alt="icon-valid" />
            <div className="small-stock">
              <p className="good-stock">En stock</p>
              <p className="limit-stock">
                il ne reste que {productInfos.quantity} {productInfos.type}s
              </p>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <div className="product-card-container">
      <h1>
        {productInfos.title || <Skeleton className="skeleton-title-card" />}{" "}
      </h1>

      <div className="card">
        <div className="img-card-box">
          {isLoading && <Skeleton className="img-skeleton" />}

          <img
            className="img-card"
            src={productInfos.img}
            alt={productInfos.title}
            title={productInfos.title}
          />
        </div>

        <div className="information-box">
          <div className="stock-price-box">
            {isLoading && <Skeleton className="quantity-skeleton" />}

            {showQuantity()}

            <h2 className="price-card">
              {productInfos.price || <Skeleton className="skeleton-price" />}€
            </h2>
          </div>

          <div className="detail-box">
            <div className="line-detail-case-a">
              <p className="info-detail">
                {productInfos.info1 || <Skeleton className="info-skeleton" />}
              </p>

              <p className="info-detail">
                {productInfos.info2 || <Skeleton className="info-skeleton" />}
              </p>

              <p className="info-detail">
                {productInfos.info3 || <Skeleton className="info-skeleton" />}
              </p>

              <p className="info-detail">
                {productInfos.info4 || <Skeleton className="info-skeleton" />}
              </p>
            </div>
            <div className="line-detail-case-b">
              <Characteristic productInfos={productInfos} />
            </div>
          </div>

          <div className="description-box">
            <p>{productInfos.description || <Skeleton />}</p>
          </div>

          <div className="orders-basket-box">
            <button
              className="btn-put-basket"
              onClick={() => addBasket(productInfos)}
            >
              Mettre dans votre panier
            </button>

            <div className="modal-basket">
              <img src={basketValidate} alt="basket-logo" />
              <p>ajouté au panier</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-back-next-box">
        <Link to="/produit">
          <button className="btn-back-next">Poursuivre mes achats </button>
        </Link>

        <Link to="/panier">
          <button className="btn-back-next">Terminer ma commande </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
