import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Characteristic from "../components/Characteristic";
import "../CSS/product-card/productCard.css";
import valid from "../img/IconValide.png";
import wrong from "../img/Not_allowed.svg";
import Auth from "../context/Auth";

import basketValidate from "../img/validate-basketW.png"

function ProductCard() {
  const params = useParams();
  const [productInfos, setProductInfos] = useState([]);

  const { basket, setBasket } = useContext(Auth);
  const nav = useNavigate();

  const addBasket = (product) => {
    const productInfo = {
      title: product.title,
      image: product.img,
      price: product.price,
      id: product.id,
      quantity: 1,
    };
    setBasket([...basket, productInfo]);

    const modal = document.querySelector(".modal-basket");
    modal.style.visibility = "visible";

    setTimeout(() => {
      // modal.style.transform = "translateX(200px)";
      modal.style.opacity = 0;
      modal.style.transition = "0.6s";
      modal.style.visibility = "hidden";
      setTimeout(() => {
        // modal.style.transform = "";
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
  }, [params.id]);

  function showQuantity() {
    if (productInfos.quantity >= 10) {
      return (
        <>
          <div className="stock">
            <img className="icon-valid" src={valid} alt="" />
            <p className="good-stock">En stock</p>
          </div>
        </>
      );
    } else if (productInfos.quantity === 0) {
      return (
        <>
          <div className="stock">
            <img className="icon-not-valid" src={wrong} alt="" />
            <p className="no-stock"> produit indisponible</p>
          </div>
        </>
      );
    } else if (productInfos.quantity <= 10 && productInfos.quantity >= 1) {
      return (
        <>
          <div className="stock">
            <img className="icon-valid" src={valid} alt="" />
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
      <h1>{productInfos.title} </h1>

      <div className="card">
        <div className="img-card-box">
          <img className="img-card" src={productInfos.img} alt="" />
        </div>

        <div className="information-box">
          <div className="stock-price-box">
            {showQuantity()}

            <h2 className="price-card">{productInfos.price}€</h2>
          </div>

          {/* {title()} */}

          <div className="detail-box">
            <div className="line-detail-case-a">
              <p className="info-detail">{productInfos.info1}</p>

              <p className="info-detail">{productInfos.info2}</p>

              <p className="info-detail">{productInfos.info3}</p>

              <p className="info-detail">{productInfos.info4}</p>
            </div>
            <div className="line-detail-case-b">
              <Characteristic productInfos={productInfos} />
            </div>
          </div>

          <div className="description-box">
            <p>{productInfos.description}</p>
          </div>

          <div className="orders-basket-box">
            <button
              className="btn-put-basket"
              onClick={() => addBasket(productInfos)}
            >
              Mettre dans votre panier
            </button>

            <div className="modal-basket"><img src={basketValidate} alt="basket-logo" /><p >ajouté au panier</p></div>
          </div>
        </div>
      </div>
      <div className="btn-back-next-box">
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
