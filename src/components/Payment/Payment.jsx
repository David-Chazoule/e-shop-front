import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CB from "../../img/cb.png";
import badge from "../../img/trust_badge_v3.png";

import "../../CSS/payment/payment.css";

function Payment() {
  const [cbNumber, setCbNumber] = useState("");
  const [cbDate, setCbDate] = useState("");
  const [cvc, setCvc] = useState("");

  const nav = useNavigate();

  function handleInput(e) {
    e.preventDefault();
    nav("/paiementConfirmation");
    
  }

  function isNumberKey(evt) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
    }
  }

  console.log(cbNumber, cbDate, cvc);

  return (
    <div className="payment_container">
      <div className="CB-container">
        <div className="CB">
          <form onSubmit={(e) => handleInput(e)}>
            <div className="CB-information">
              <img src={CB} alt="" />
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

            <button className="button-pay">Payer</button>
          </form>
        </div>
      </div>

      <img className="security" src={badge} alt="" />
    </div>
  );
}

export default Payment;
