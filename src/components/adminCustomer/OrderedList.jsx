import "../../CSS/adminCustomer/orderedList.css";

function OrderedList() {
  return (
    <div className="ordered-list_container">
      <div className="order-detail-box">
        <div className="order-box">
          <p className="order-title">Numero </p>
          <p>32156</p>
        </div>

        <div className="order-box">
          <p className="order-title">Date</p>
          <p>08/12/2021</p>
        </div>

        <div className="order-box">
          <p className="order-title">Montant</p>
          <p>900€</p>
        </div>

        <div className="order-box">
          <p className="order-title">Paiement</p>
          <p>Carte Bancaire</p>
        </div>
      </div>

      <div className="btn-detail-order">
        <button className="btn-detail">Detail</button>
      </div>
    </div>
  );
}

export default OrderedList;
