import React, { useState, useContext, useEffect } from "react";
import Auth from "../../context/Auth";

import bin from "../../img/bin.png";

function BasketCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { basket, setBasket } = useContext(Auth);
  const [modalDelete, setModalDelete] = useState(false);

  const changeQuantity = (value) => {
    setQuantity(value);
    const productIndex = basket.findIndex((e) => e.id === product.id);
    const myBasket = basket;
    basket[productIndex].quantity = value;
    setBasket([...myBasket]);
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, []);

  const deleteProduct = (e, id) => {
    e.preventDefault();
    setBasket(basket.filter((product) => product.id !== id));
  };

  const handleModal = () => {
    setModalDelete(!modalDelete);
  };

  return (
    <div
      className={
        modalDelete ? "recap-basket-box recap-delete" : "recap-basket-box"
      }
      key={product.title}
    >
      <div className="img-article-box">
        <img
          className="img-article"
          src={product.image}
          alt={product.title}
          title={product.title}
        />
        <div className="title-result">
          <p className="article-result-img">{product.title}</p>
        </div>
      </div>
      <p className="article-result">{product.price}€</p>
      <div className="quantity-box">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => changeQuantity(e.target.value)}
        ></input>
      </div>
      <p className="article-result">{+product.price * quantity}€ </p>

      <img
        className="bin"
        src={bin}
        alt="bin-cancel"
        onClick={handleModal}
        title="supprimer"
      />

      {modalDelete && (
        <div className="modal-delete-container">
          {quantity > 1 ? (
            <p>Voulez-vous vraiment supprimer ses articles de votre panier?</p>
          ) : (
            <p>Voulez-vous vraiment supprimer cette article de votre panier?</p>
          )}

          <div className="delete-box">
            <button
              className="btn-delete"
              onClick={(e) => deleteProduct(e, product.id)}
            >
              oui
            </button>
            <button className="btn-cancel" onClick={handleModal}>
              non
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketCard;
