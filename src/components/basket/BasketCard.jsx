import React, { useState, useContext } from "react";
import bin from "../../img/bin.png";
import Auth from "../../context/Auth";

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

  const deleteProduct = (e, id) => {
    e.preventDefault();
    setBasket(basket.filter((product) => product.id !== id));
  };

  const handleModal = () => {
    setModalDelete(!modalDelete);
  };

  return (
    <div className="recap-basket-box" key={product.title}>
      <div className="img-article-box">
        <img className="img-article" src={product.image} alt="" />
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
      <img className="bin" src={bin} alt="" onClick={handleModal} />

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
              supprimer
            </button>
            <button className="btn-cancel" onClick={handleModal}>
              annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketCard;
