import React, {useState, useContext} from "react";
import Auth from "../../context/Auth";

function BasketCard({product}) {

const [quantity, setQuantity] = useState(1);
const {basket, setBasket} = useContext(Auth)

console.log(basket, "coucou")

const changeQuantity = (value) => {
    setQuantity(value);
    const productIndex = basket.findIndex(e => e.id === product.id);
    const myBasket = basket;
    basket[productIndex].quantity = value
    setBasket([...myBasket])
}

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
        min="0"
        value={quantity}
        onChange={(e) => changeQuantity(e.target.value)}
      ></input>
    </div>
    <p className="article-result">{+product.price * quantity}€</p>
  </div>
  )
}

export default BasketCard;
