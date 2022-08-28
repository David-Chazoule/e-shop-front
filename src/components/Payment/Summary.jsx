function Summary({ product }) {
  return (
    <div className="summary_container">
      <div className="summary-box">
        <div className="img-product-summary">
          <img className="img-article" src={product.image} alt="" />
        </div>
        <div className="name-product-summary">
          <p>{product.title}</p>
        </div>
        <div className="quantity-product-summary">
          <p> {product.quantity}</p>
        </div>
        <div className="price-product-summary">
          <p>{product.price * product.quantity}€</p>
        </div>
      </div>

      <div className="bar-summary"></div>
    </div>
  );
}

export default Summary;
