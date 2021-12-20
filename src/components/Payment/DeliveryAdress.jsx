

import '../../CSS/payment/deliveryAdress.css';


function DeliveryAdress () {
    return (
        <div className=" billing-adress_container">
            <h1>Adresse de livraison</h1>
         <div className="name-billing"><p>David Chaz</p></div>
         <div className="adress-billing"><p>8 rue du futur</p></div>
         <div className="city-billing"><p>92000 Nanterre</p></div>
         <div className="phone-billing"><p>0147291006</p></div>
         <div className="email-billing"><p>d.chazoule@gmail.com</p></div>
        </div>
    )
}


export default DeliveryAdress;