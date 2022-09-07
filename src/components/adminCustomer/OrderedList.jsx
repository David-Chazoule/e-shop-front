import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Auth from "../../context/Auth";

function OrderedList() {
  const [orderList, setOrderList] = useState([]);

  const { userInfo } = useContext(Auth);
  const [modalOrder, setModalOrder] = useState(false);

  const getOrderList = async () => {
    const result = await axios.get(
      `http://localhost:8000/order/${userInfo.id}`
    );
    setOrderList(result.data);
  };
  useEffect(() => {
    getOrderList();
  }, []);

  const handleModalOrder = () => {
    setModalOrder(!modalOrder);
  };

  return orderList.length > 0 ? (
    orderList &&
      orderList.map((elem) => (
        <div key={elem.id} className="ordered-list_container">
          <div className="order-detail-box">
            <div className="order-box">
              <p className="order-title">Numero </p>
              <p>{elem.orderId}</p>
            </div>

            <div className="order-box">
              <p className="order-title">Date</p>
              <p>{elem.createdAT}</p>
            </div>

            <div className="order-box">
              <p className="order-title">Montant</p>
              <p>{elem.price}€</p>
            </div>

            <div className="order-box">
              <p className="order-title">Paiement</p>
              <div>
                <div>
                  <p>CB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-detail-order">
            <button className="btn-detail" onClick={handleModalOrder}>
              Detail
            </button>
          </div>
          {modalOrder && (
            <div>
              {elem &&
                elem.products.map((product) => (
                  <div key={product.id}>
                    <p>{product.title}</p>

                    <p>{product.price}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))
  ) : (
    <div className="no-order-box">
      <p className="no-order-txt">Aucune commande effectuées</p>
    </div>
  );
}

export default OrderedList;
