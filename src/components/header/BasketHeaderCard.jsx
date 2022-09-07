function BasketHeaderCard({ product }) {
  return (
    <>
      <div className="list-shop-box">
        <div className="produce-container">
          <p className="produce">{product.title}</p>
        </div>
        <div className="quantity-container">
          <p className="quantity-produce">X{product.quantity}</p>
        </div>
        <div className="total-container">
          <p className="quantity-produce">
            {+product.price * product.quantity}€
          </p>
        </div>
      </div>
    </>
  );
}

export default BasketHeaderCard;
