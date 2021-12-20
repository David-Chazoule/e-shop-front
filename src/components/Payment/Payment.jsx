
import paiement from '../../img/paimentlu.png';
import badge from '../../img/trust_badge_v3.png';

import '../../CSS/payment/payment.css';


function Payment () {
    return (
        <div className="payment_container">
            < img src={paiement} alt="" />
            < img className="security" src={badge} alt="" />


        </div>
    )
}

export default Payment;