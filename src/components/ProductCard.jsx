
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../list.json'

import Characteristic from "../components/Characteristic";
import '../CSS/product-card/productCard.css';
import valid from '../img/IconValide.png';
import wrong from '../img/Not_allowed.svg';


function ProductCard(props) {

    const [productInfos, setProductInfo] = useState({})
    const [load, setLoad] = useState(true)

    const { id } = useParams();

       useEffect(() => {

        
        products.forEach((x)=>{
            if(x.id === parseInt(id)){
                setProductInfo(x)
            }
        })
        
        setLoad(false)
    }, [])


  


    function showQuantity() {
        if ( productInfos.quantity >= 10){
            return <>
                <div className="stock">
                            <img className='icon-valid' src={valid} alt="" />
                            <p className='good-stock'>En stock</p>
                        </div>
                        </>
        } else if ( productInfos.quantity === 0 ){
            return <>
                 <div className="stock">
                                 <img className='icon-not-valid' src={wrong} alt="" />
                                 <p className='no-stock'> produit indisponible</p>
                             </div>
                             </>
          } else if (productInfos.quantity <= 10 && productInfos.quantity >= 1){
            return <>
            <div className="stock">
                            <img className='icon-valid' src={valid} alt="" />
                             <div className='small-stock'>
                             <p className='good-stock'>En stock</p>
                            <p className='limit-stock'>il ne reste que {productInfos.quantity} {productInfos.type}s</p>
                            </div>
                        </div>
            
            </>
        }}

                    //     function title() {
                    //         if (productInfos.type === "smartphone") {
                    //         return<>
                    //         <div className="detail-box">
                    //     <div className="line-detail-a">
                    //         <p className="info-title">taille de l'écran</p>
                    //         <p className="info-detail">{productInfos.info1}</p>
                    //     </div>
                    //     <div className="line-detail-b">
                    //         <p className="info-title">Système d'exploitation</p>
                    //         <p className="info-detail">{productInfos.info2}</p>
                    //     </div>
                    //     <div className="line-detail-a">
                    //         <p className="info-title">Stockage</p>
                    //         <p className="info-detail">{productInfos.info3}</p>
                    //     </div>
                    //     <div className="line-detail-b">
                    //         <p className="info-title">memoire vive</p>
                    //         <p className="info-detail">{productInfos.info4}</p>
                    //     </div>
                    // </div>
                    //         </>
                    //         }
                    //     }
         
        
    


    return (
        



        <div className="product-card-container">


            <h1>{productInfos.title} </h1>


            <div className="card">



                <div className="img-card-box">
                    <img className="img-card" src={productInfos.img} alt="" />
                    

                </div>

                <div className="information-box">

                {/* {title()} */}
                    
                    <div className="detail-box">
                        <div className="line-detail-case-a">
                        
                            <p className="info-detail">{productInfos.info1}</p>
                            
                            
                            <p className="info-detail">{productInfos.info2}</p>
                            
                            
                            <p className="info-detail">{productInfos.info3}</p>
                            
                            
                            <p className="info-detail">{productInfos.info4}</p>


                        </div>
                        <div className="line-detail-case-b">
                            < Characteristic productInfos={productInfos} />
                        </div>
                       
                    </div>

                    <div className="description-box">
                        <p>{productInfos.description}</p>
                    </div>

                    <div className="order-stock-box">
                          
                          {showQuantity()}
                         
                        
                          

                        <div className="btn-order-box">
                            <button className='btn-order'>mettre dans votre panier</button>
                        </div>
                    </div>

                </div>




            </div>
            <div className="btn-back-next-box">

            <Link to="/produit">
                <button className='btn-back-next'>retour </button>
            </Link>

            </div>

        </div>
    )
}

export default ProductCard