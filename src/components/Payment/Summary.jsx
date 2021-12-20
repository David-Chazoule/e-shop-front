

import '../../CSS/payment/summary.css';


function Summary () {
    return (
        <div className="summary_container">
            <div className="summary-box">
                <div className="name-product-summary">
                    <p>Samsung S21</p>
                </div>
            <div className="quantity-product-summary">
               <p> X1</p>
            </div>
            <div className="price-product-summary">
                <p>600€</p>
            </div>
            
            </div>
            <div className='bar-separate'></div>
            <div className="total-summary-box">
            <p className='total-summary'>Total</p>
            <p className='bar-separate-total'></p>
            <p className='total-summary-price'>600€</p>
            </div>
            

        </div>
    )
}


export default Summary;

