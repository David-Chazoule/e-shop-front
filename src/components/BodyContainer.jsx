import { Routes, Route } from "react-router-dom";

import Basket from "../components/basket/Basket";
import ProductListContainer from "../components/ProductListContainer";
import Form from "../components/form/Form";
import ConnectionPage from "../components/connection/ConnectionPage";
import Register from "../components/inscription/Register";
import ProductCard from "../components/ProductCard";
import PaymentContainer from "../components/Payment/PaymentContainer";
import AdminClientContainer from "../components/adminCustomer/AdminClientContainer";
import HomePage from "../components/homepage/HomePage";

function BodyContainer() {
  return (
    <div className="body_container">
      <div className="container-general">
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/information" element={<Form />} />

          <Route path="/panier" element={<Basket />} />

          <Route path="/produit" element={<ProductListContainer />} />

          <Route path="/connection" element={<ConnectionPage />} />

          <Route path="/register" element={<Register />} />

          <Route path="/card/:id/:title" element={<ProductCard />} />

          <Route path="/paiement" element={<PaymentContainer />} />

          <Route path="/compte" element={<AdminClientContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default BodyContainer;
