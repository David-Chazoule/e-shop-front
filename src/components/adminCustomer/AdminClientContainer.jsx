import { Routes, Route } from 'react-router-dom';


import BarCustomer from '../adminCustomer/BarCustomerChoice'
import ContactDetails from '../adminCustomer/ContactDetails';
import BillCard from '../adminCustomer/BillCard';

import '../../CSS/adminCustomer/adminClientContainer.css';




function AdminClientContainer () {
    return (
        <div className="admin-client_container">

            <div className="bar-choice-box">
                <BarCustomer />
            
            </div>

            

 

        </div>
    )
}

export default AdminClientContainer;