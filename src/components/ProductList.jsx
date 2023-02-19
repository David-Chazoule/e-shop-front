import { useNavigate } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

function ProductList({ title, brand, img, price, type, id }) {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/card/${id}/${title}`);
  };

  return (
    <div
      className="productlist_container"
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="list-card">
        <div className="img-container">
          <img
            className={type === "casque VR" ? "list-img-b" : "list-img"}
            src={img}
            alt={title}
            title={title}
          />
        </div>
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
