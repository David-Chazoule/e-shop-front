import { useState } from 'react';
import ContactDetails from './ContactDetails';
import OrderedList from './OrderedList';
import '../../CSS/adminCustomer/barCustomerChoice.css';


function BarCustomerChoice () {

    const [detailBill, setDetailBill] = useState(false);
    const [ordered, setOrdered] = useState(false);
    const [homepage, setHomepage] = useState(true);

    const showDetailBill=()=> {
        setDetailBill(!detailBill);
        setOrdered(false);
        setHomepage(false);
    }

    const showOrdered =()=> {
       setOrdered(!ordered)
       setDetailBill(false);
       setHomepage(false);
           
        
    }

    const showHomepage =() => {
        setHomepage(!homepage);
        setDetailBill(false);
        setOrdered(false);
    }

    return (
        <div className="bar-customer-choice_container">
        
        
        <div className="navbar-customer">
        <div className='navbar-box'>
            
             <p className='' onClick={()=>showHomepage()}>Accueil</p>

            <p className="" onClick={()=>showDetailBill()} role="button">Mes coordonnées</p>
            
            <p className='bills-btn' onClick={()=>showOrdered()} role="button">Mes factures</p>
            </div>
        </div>


        {homepage && (
        <div className="homepage">
            <h1>Mon compte</h1>
            <p> David, bienvenue sur votre compte!
                Ici vous trouverez tout pour gérer votre compte client.
                Message d' Aigle Rusé :
                Vous pouvez retenter le paiement d'une commande non réglée.
            </p>

        </div>

        )}

        { detailBill && (

        <div className='contact-details-box'>
        <ContactDetails />
        </div>

        )}

        { ordered && (

        <div className='ordered-details-box'>
           <OrderedList />
           <OrderedList />
           <OrderedList />
           <OrderedList />
           <OrderedList />
           

        </div>

        )}



        </div>
    )
}

export default BarCustomerChoice;