import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import BarCustomer from "../adminCustomer/BarCustomerChoice";
import ContactDetails from "../adminCustomer/ContactDetails";
import BillCard from "../adminCustomer/BillCard";
import Auth from "../../context/Auth";
import "../../CSS/adminCustomer/adminClientContainer.css";


function AdminClientContainer() {
  const { userInfo, setUserInfo } = useContext(Auth);

  return (
    <div className="admin-client_container">
      <div className="bar-choice-box">
        <BarCustomer value={{userInfo, setUserInfo}} />
      </div>
    </div>
  );
}

export default AdminClientContainer;
