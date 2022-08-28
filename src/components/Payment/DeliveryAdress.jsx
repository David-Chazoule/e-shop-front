import { useContext } from "react";
import Auth from "../../context/Auth";
import delivery from "../../img/delivery.png";

function DeliveryAdress() {
  const { userInfo } = useContext(Auth);
  return (
    <div className=" billing-adress_container">
      <div className="title-billing">
        <h1>Adresse de livraison</h1>
      </div>
      <div className="billing-details">
        <div className="name-delivery">
          <p>{userInfo.firstname}</p>
          <p> {userInfo.lastname} </p>
        </div>
        <div className="adress-delivery">
          <p>{userInfo.adress}</p>
        </div>
        <div className="city-delivery">
          <p>{userInfo.postalcode}</p>
          <p>{userInfo.city}</p>
        </div>
        <div className="phone-email-delivery">
          <p>{userInfo.phone}</p> <p>{userInfo.email}</p>
        </div>
      </div>
      <div className="delivery-img-box">
        <img src={delivery} alt="delivery icone" />
      </div>
    </div>
  );
}

export default DeliveryAdress;
