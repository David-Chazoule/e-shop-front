
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import product from '../list.js'

import '../CSS/product-card/productCard.css';
import valid from '../img/IconValide.png';


function ProductCard ({}) {

    const [productInfos, setProduct] = useState([])
const [load, setLoad] = useState(true)

const params = useParams();

const id = params.id



useEffect(async() => {
  const data = await product.filter((x) => x.id === id )
  if(data[0] === undefined) {
    // AUCUN PRODUIT TROUVÉ
    return
  }

  setProduct(data)
  setLoad(false)
}, [])


return (
//check si load !== true donc affiché le contenue de la page sinon affiché un loading


    
        <div className="product-card-container">
       

       <h1>{productInfos.title} </h1>


      <div className="card">

          
        
        <div className="img-card-box">
            <img className="img-card" src={productInfos.img}alt="" />

        </div>

        <div className="information-box">
            <div className="detail-box">
                <div className="line-detail-a">
                    <p className="info-title">titre-info</p>
                    <p className="info-detail">{productInfos.info1}</p>               
                    </div>
                    <div className="line-detail-b">
                    <p className="info-title">titre-info</p>
                    <p className="info-detail">{productInfos.info2}</p>              
                    </div>
                    <div className="line-detail-a">
                    <p className="info-title">titre-info</p>
                    <p className="info-detail">{productInfos.info3}</p>               
                    </div>
                    <div className="line-detail-b">
                    <p className="info-title">titre-info</p>
                    <p className="info-detail">{productInfos.info4}</p>               
                    </div>
            </div>

            <div className="description-box">
                <p>{productInfos.description}</p>
            </div>

            <div className="order-stock-box">
                <div className="stock">
                    <img className='icon-valid' src={valid} alt="" />
                    <p>En stock</p>
                </div>

                <div className="btn-order-box">
                    <button className='btn-order'>mettre dans votre panier</button>
                </div>
            </div>

        </div>




      </div>

        </div>
    )
}

export default ProductCard