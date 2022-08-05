import { useState } from "react";
import ContactDetails from "./ContactDetails";
import OrderedList from "./OrderedList";
import "../../CSS/adminCustomer/barCustomerChoice.css";
import logo from "../../img/logo.png";
import setup from "../../img/setup.png";
import { useContext } from "react";
import Auth from "../../context/Auth";

function BarCustomerChoice() {
  const [detailBill, setDetailBill] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [homepage, setHomepage] = useState(true);
  const {userInfo, setUserInfo}= useContext(Auth);

  const showDetailBill = () => {
    setDetailBill(!detailBill);
    setOrdered(false);
    setHomepage(false);
  };

  const showOrdered = () => {
    setOrdered(!ordered);
    setDetailBill(false);
    setHomepage(false);
  };

  const showHomepage = () => {
    setHomepage(!homepage);
    setDetailBill(false);
    setOrdered(false);
  };

  return (
    <div className="bar-customer-choice_container">
      <div className="navbar-customer">
        <div className="navbar-box">
          <p className="" onClick={() => showHomepage()}>
            Accueil
          </p>

          <p className="" onClick={() => showDetailBill()} role="button">
            Mes coordonnées
          </p>

          <p className="bills-btn" onClick={() => showOrdered()} role="button">
            Mes factures
          </p>
        </div>
      </div>
     
      {homepage && (
        <div className="home-page">
          <div>
            <img src={logo} alt="" />
          </div>
          <h1>Mon compte</h1>
          <h2> Hello <span>{userInfo.name}</span>, bienvenue sur votre compte!</h2>
          <p> Ici vous trouverez tout pour gérer votre compte client.</p>
          <div className="setup-box">
          <img className="setup" src={setup} alt="" />
          </div>
        </div>
      )}

      {detailBill && (
        <div className="contact-details-box">
          <ContactDetails />
        </div>
      )}

      {ordered && (
        <div className="ordered-details-box">
          <OrderedList />
          <OrderedList />
          <OrderedList />
          <OrderedList />
          <OrderedList />
        </div>
      )}
    </div>
  );
}

export default BarCustomerChoice;
