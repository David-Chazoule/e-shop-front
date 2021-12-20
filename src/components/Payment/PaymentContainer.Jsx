
import Summary from './Summary';
import BillingAdress from './BillingAdress';
import DeliveryAdress from './DeliveryAdress';
import Payment from './Payment';


import '../../CSS/payment/paymentContainer.css';

function PaymentContainer () {
   return (
       <div className="payment-page_container">
                

                <div className='summary-container'>
                <h1> Récapitulatif de votre Commande</h1>
                <Summary />
                </div>
        

        <div className='billing-delivery-container'>
           <BillingAdress />
           <DeliveryAdress />
        </div>

        

        <div className='payment-box'>
        <h1>Votre paiement</h1>
            <Payment />
        </div>
      
        </div>
   )

}

export default PaymentContainer;