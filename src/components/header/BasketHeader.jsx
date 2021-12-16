import basket from '../../img/shoppingCart.png';

import '../../CSS/basketHeader.css';

import { useState } from 'react';

function BasketHeader(){

    const [onBasket, setOnBasket] = useState(false);

    const showBasket = (value) => {
        
        setOnBasket(!value);
      };

    return (
        <div className="basket-header-container" onMouseEnter={()=>showBasket(false)} onMouseLeave={()=>showBasket(true)}>
            
            
            <div className="basket-box" >
            <img className="icon-basket" src={basket} alt="" />
            <div id="circle"><p className="number-article-basket">1</p></div>
            
            { onBasket && (
                <>
                            <div id="triangle" ></div>
            <div className= "basket-list">
                <div className="list-shop-box">
                   <p className="produce">Samsung S20</p>
                   <p className="quantity-produce">X1</p>
                   </div>

                   <div className="bar-separation"></div>

                   <div className="total-price-list">
                       <p className="total-title-basket-header">TOTAL</p>
                       <p className="total-price-basket-header">1100€</p>
                   </div>

                   <div className="btn-order-basket">
                       <button className="btn-order">Commander</button>
                   </div>
            </div>
            </>
            )}

            </div>
        </div>
    )
}


export default BasketHeader;

