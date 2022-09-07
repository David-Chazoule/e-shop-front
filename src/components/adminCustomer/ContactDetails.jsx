import { useContext, useState } from "react";
import ModalAdress from "./ModalAdress";
import Auth from "../../context/Auth";

import homeLogo from "../../img/homelogo.png";

function ContactDetails() {
  const { userInfo } = useContext(Auth);
  const [modalOn, setModalOn] = useState(false);

  const handlemodal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div className="contact-details_container" onClick={!setModalOn}>
      <div className=" billing-delivery-detail_container">
        <h1>Adresse de livraison</h1>
        <div className="detail-box">
          <div className="detail">
            <div className="name-delivery-detail">
              <p>{userInfo.firstname}</p>
              <p>{userInfo.lastname}</p>
            </div>
            <div className="adress-delivery-detail">
              <p>{userInfo.adress}</p>
            </div>
            <div className="city-delivery-detail">
              <p>{userInfo.postalcode}</p>
              <p> {userInfo.city}</p>
            </div>
            <div className="phone-delivery-detail">
              <p>{userInfo.phone}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
          <div className="img-container">
            <img src={homeLogo} alt="home-logo" />
          </div>
        </div>
        <div className="btn-change-delivery-detail">
          <button className="btn-change-delivery" onClick={handlemodal}>
            Modifier
          </button>
        </div>
      </div>

      {modalOn && <ModalAdress setmodal={setModalOn} />}
    </div>
  );
}

export default ContactDetails;
