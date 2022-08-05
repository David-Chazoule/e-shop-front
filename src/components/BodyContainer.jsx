import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Basket from "../components/basket/Basket";
import ProductListContainer from "../components/ProductListContainer";
import Form from "../components/form/Form";
import ConnectionPage from "../components/connection/ConnectionPage";
import Register from "../components/inscription/Register";
import ProductCard from "../components/ProductCard";
import PaymentContainer from "../components/Payment/PaymentContainer";
import ConfirmPayment from "./Payment/ConfirmPayment";
import AdminClientContainer from "../components/adminCustomer/AdminClientContainer";
import HomePage from "../components/homepage/HomePage";
import Auth from "../context/Auth";

import "../CSS/bodyContainer.css";

function BodyContainer() {
  const { basket, setBasket } = useContext(Auth);
  const { userInfo, setUserInfo } = useContext(Auth);
  const { tag, setTag } = useContext(Auth);
  return (
    <div className="body_container">
      <div className="container-general">
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/information" element={<Form value={{userInfo, setUserInfo}} />} />

          <Route
            path="/panier"
            element={
              <Basket value={{ basket, setBasket, userInfo, setUserInfo }} />
            }
          />

          <Route
            path="/produit"
            element={<ProductListContainer value={{ tag, setTag }} />}
          />

          <Route path="/connection" element={<ConnectionPage />} />

          <Route
            path="/register"
            element={<Register />}
            value={{ basket, setBasket }}
          />

          <Route
            path="/card/:id"
            element={<ProductCard value={{ basket, setBasket }} />}
          />

          <Route path="/paiement" element={<PaymentContainer value={{ basket, setBasket }}  />} />

          <Route path="/paiementConfirmation" element={<ConfirmPayment />} />

          <Route path="/compte" element={<AdminClientContainer value={{userInfo, setUserInfo}} />} />
        </Routes>
      </div>
    </div>
  );
}

export default BodyContainer;
