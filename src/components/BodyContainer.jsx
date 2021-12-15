

import ProductList from './ProductList';

import product from '../list.js';


import '../CSS/bodyContainer.css';



function BodyContainer () {

    
    return (
        <div className="body_container">
            <div className="container">
            
            {product.map((index)=>(
               <ProductList index={index}  />
            ))}
            </div>






</div>    )
}



export default BodyContainer;