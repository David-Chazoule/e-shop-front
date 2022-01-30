import {Link} from "react-router-dom";
import React, {useState, useContext} from "react";
import Auth from "../../context/Auth";


function BasketHeaderCard ({product}) {
  const { basket, setBasket } = useContext(Auth);
  


return(
  <>
                <div className="list-shop-box">
                   <p className="produce">{product.title}</p>
                   <p className="quantity-produce">X{product.quantity}</p>
                   <p className="quantity-produce">{product.price}€</p>
                   </div>
                    
                  

                   
            
                   </>
)

}

export default BasketHeaderCard