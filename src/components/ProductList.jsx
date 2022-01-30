import { useNavigate } from "react-router-dom";
// import { useEffect , useState } from "react";

import "../CSS/product-card/productList.css";

function ProductList({ title, brand, img, price, type, id }) {
  // const {id, img, title, marque, price} = product
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/card/${id}`);
  };

  // const handleClick = (id) => {
  //   navigate(`/card/${id}`);
  // };

  return (
    <div
      className="productlist_container"
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="list-card">
        <img
          className={type === "casque VR" ? "list-img-b" : "list-img"}
          src={img}
          alt=""
        />
        <p className="title-list">{title} </p>
        <div className="marque-list-box">
          <p className="marque-list">-{brand}-</p>
        </div>
        <p className="price-list">{price}€</p>
      </div>
    </div>
  );
}

export default ProductList;
