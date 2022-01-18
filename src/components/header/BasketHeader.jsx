import product from '../../list.js';

import basket from '../../img/shoppingCart.png';

import '../../CSS/header/basketHeader.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function BasketHeader(){

    const [onBasket, setOnBasket] = useState(false);

    const showBasket = (value) => {
        
        setOnBasket(!value);
      };

    return (
        <div className="basket-header-container" onMouseEnter={()=>showBasket(false)} onMouseLeave={()=>showBasket(true)}>
            
            
            <div className="basket-box" >
                <div className='basket-logo-box'>
            <img className="icon-basket" src={basket} alt="" />
            {/* <p className='basket-title'>Panier</p> */}
            </div>
            <div id="circle"><p className="number-article-basket">1</p></div>
            
            { onBasket && (
                <>
                            <div id="triangle" ></div>
            <div className= "basket-list">
                <div className="list-shop-box">
                   <p className="produce">{product[1].title}</p>
                   <p className="quantity-produce">X1</p>
                   </div>

                   <div className="bar-separation"></div>

                   <div className="total-price-list">
                       <p className="total-title-basket-header">TOTAL</p>
                       <p className="total-price-basket-header">{product[1].price}</p>
                   </div>

                   <div className="btn-order-basket">

                       <Link to="/panier">
                       <button className="btn-order">Commander</button>
                       </Link>
                   </div>
            </div>
            </>
            )}

            </div>
        </div>
    )
}


export default BasketHeader;

