import { useContext } from "react";
import Summary from "./Summary";
import DeliveryAdress from "./DeliveryAdress";
import Payment from "./Payment";
import Auth from "../../context/Auth";

function PaymentContainer() {
  const { basket } = useContext(Auth);

  const totalPrice = () => {
    let totalPrice = 0;
    basket.forEach((product) => {
      totalPrice += product.quantity * parseInt(product.price);
    });
    return totalPrice;
  };
  return (
    <div className="payment-page_container">
      <h1> Récapitulatif de votre Commande</h1>
      <div className="summary-adress-box">
        <div className="summary-container">
          {basket.map((product) => (
            <Summary key={product.title} product={product} />
          ))}

          <div className="total-price-payment">
            <p> Prix Total : {totalPrice()}€</p>
          </div>
        </div>

        <div className="billing-delivery-container">
          <DeliveryAdress />
        </div>
      </div>

      <div className="payment-box">
        <h1>Votre paiement</h1>
        <Payment />
      </div>
    </div>
  );
}

export default PaymentContainer;
