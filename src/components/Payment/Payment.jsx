import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../../context/Auth";

import CB from "../../img/cb.png";
import badge from "../../img/trust_badge_v3.png";

function Payment() {
  const [cbNumber, setCbNumber] = useState("");
  const [cbDate, setCbDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [modalPayment, setModalPayment] = useState(false);
  const [errorNotConnect, SetErrorNotConnect] = useState(false);
  const { basket, setBasket } = useContext(Auth);
  const { userInfo} = useContext(Auth);

  const nav = useNavigate();

  function handleInput(e) {
    e.preventDefault();
    

    const productList = basket.map((elem) => {
      return {
        id: elem.id,
        quantity: elem.quantity,
      };
    });

    const order = axios.post(
      `http://localhost:8000/order/${userInfo.id}`,
      productList
    );

    setBasket([]);

    if (basket.length <= 0 || userInfo === null) {
      SetErrorNotConnect(true);
      nav("/paiement");
    } else {
      setModalPayment(!modalPayment);
      setTimeout(() => {
        nav("/produit");
      }, 2500);
    }
  }

  function isNumberKey(evt) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
    }
  }

  return (
    <div className="payment_container">
      <div className="CB-container">
        <div className="CB">
          <form onSubmit={(e) => handleInput(e)}>
            <div className="CB-information">
              <img src={CB} alt="logo-cb" />
              <input
                className="cb-number"
                type="text"
                maxLength="16"
                value={cbNumber}
                placeholder="Numéro de carte"
                onKeyPress={(event) => {
                  return isNumberKey(event);
                }}
                onChange={(e) => setCbNumber(e.target.value)}
                required
              />
              <div className="cb-cvc-box">
                <input
                  className="cb-date"
                  type="text"
                  maxLength="4"
                  value={cbDate}
                  placeholder="MM / AA"
                  onKeyPress={(event) => {
                    return isNumberKey(event);
                  }}
                  onChange={(e) => setCbDate(e.target.value)}
                  required
                />
                <input
                  className="CVC"
                  type="text"
                  maxLength="3"
                  value={cvc}
                  placeholder="CVC"
                  onKeyPress={(event) => {
                    return isNumberKey(event);
                  }}
                  onChange={(e) => setCvc(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="button-pay">Payer</button>
          </form>
        </div>
      </div>

      <img className="security" src={badge} alt="" />
      {errorNotConnect && (
        <span className="error-payment">
          vous n'êtes pas connecté à votre compte
        </span>
      )}
      <div className="modalPaymentBox">
        {modalPayment && (
          <div className="modalPayment">
            <span>Votre paiement est validé</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
