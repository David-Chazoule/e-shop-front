import product from '../../list.js';
import '../../CSS/Basket/basket.css';

import {Link} from 'react-router-dom';

function Basket () {
    return (
        <div className="basket_container">
         <h1>Mon Panier</h1>
         <div className='basket'>
         <div className="basket-recap">
         <div className="article-title-box">
             <p className="article-title">Article</p>
             <p className="article-title">Prix</p>
             <p className="article-title">Quantité</p>
             <p className="article-title">Total</p>
             </div>
           
             <div className='recap-basket-box'>
                 <div className='img-article-box'>
             <img className="img-article" src={product[1].img} alt="" />
             <div className='title-result'>
             <p className="article-result-img">{product[1].title}</p>
             </div>
             </div>
             <p className="article-result">{product[1].price}</p>
             <div className='quantity-box'>
               <button className='btn-quantity-a'>-</button>
               <input className='input-basket' />
               <button className='btn-quantity-b'>+</button>
               </div>
               <p className="article-result">{product[1].price}</p>
             
             
             </div>
             
             
             
             
             <div className="article-bar"></div>
             
             
             
             

             
             
             
             <div>
                 
             
             </div>
         </div>
         

         <div className="basket-total">
        
         <div className="article-bar-total"></div>
         <div className='basket-final-result'>
         <p className='basket-total-title'>TOTAL</p>
             <p className='basket-total-price'>{product[1].price}</p>
             </div>
         </div>
         </div>

        

         <div className="btn-back-next-box">
             
             <Link to="/produit">
             <button className='btn-back-next'>revenir </button>
             </Link>

             <Link to="/information">
             <button className='btn-back-next'>paiement</button>
             </Link>
         </div>
         </div>
        
    )
}

export default Basket