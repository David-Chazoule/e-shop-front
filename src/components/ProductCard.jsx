
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../list.json'

import '../CSS/product-card/productCard.css';
import valid from '../img/IconValide.png';
import wrong from '../img/Not_allowed.svg';


function ProductCard() {

    const [productInfos, setProduct] = useState({})
    const [load, setLoad] = useState(true)

    const { id } = useParams();

       useEffect(() => {

        
        products.forEach((x)=>{
            if(x.id === parseInt(id)){
                setProduct(x)
            }
        })
        
        setLoad(false)
    }, [])


    let titles = [
        {
        titleInfo1 : "Taille écran",
        titleInfo2 : "Système d'exploitation",
        titleInfo3 : "stockage",
        titleInfo4 : "memoire vive",
        },

        {
        titleInfo1 : "taille de l'écran",
        titleInfo2 : "Frequence d'affichage",
        titleInfo3 : "Champ de vision",
        titleInfo4 : "Poid",
        },

        {
        titleInfo1 : "Impétance",
        titleInfo2 : "Connection sans fil",
        titleInfo3 : "Autonomie",
        titleInfo4 : "Poid",
        },
        {
            titleInfo1 : "Taille de l'écran",
            titleInfo2 : "résolution",
            titleInfo3 : "Smart TV",
            titleInfo4 : "écran incurvé",
        },

        {
            titleInfo1 : "Taille de l'écran",
            titleInfo2 : "Processeur",
            titleInfo3 : "Stockage",
            titleInfo4 : "Mémoire vive",
        },

        {
            titleInfo1 : "Plateforme",
            titleInfo2 : "Genre",
            titleInfo3 : "Date de sortie",
            titleInfo4 : "Espace minimum",
        }
]


    function showQuantity() {
        if ( productInfos.quantity >= 10){
            return <>
                <div className="stock">
                            <img className='icon-valid' src={valid} alt="" />
                            <p className='good-stock'>En stock</p>
                        </div>
                        </>
        } }


    function noQuantity() {
        if( productInfos.quantity === 0 ){
           return <>
                <div className="stock">
                                <img className='icon-not-valid' src={wrong} alt="" />
                                <p className='no-stock'> produit indisponible</p>
                            </div>
                            </>
         }
    }

    function smallstock() {
        if (productInfos.quantity <= 10 && productInfos.quantity >= 1){
            return <>
            <div className="stock">
                            <img className='icon-valid' src={valid} alt="" />
                             <div className='small-stock'>
                             <p className='good-stock'>En stock</p>
                            <p className='limit-stock'>il ne reste que {productInfos.quantity} {productInfos.type}s</p>
                            </div>
                        </div>
            
            </>
        }
    }
                        
         
        
    


    return (
        



        <div className="product-card-container">


            <h1>{productInfos.title} </h1>


            <div className="card">



                <div className="img-card-box">
                    <img className="img-card" src={productInfos.img} alt="" />

                </div>

                <div className="information-box">
                    <div className="detail-box">
                        <div className="line-detail-a">
                            <p className="info-title">{productInfos.title1}</p>
                            <p className="info-detail">{productInfos.info1}</p>
                        </div>
                        <div className="line-detail-b">
                            <p className="info-title">{productInfos.title2}</p>
                            <p className="info-detail">{productInfos.info2}</p>
                        </div>
                        <div className="line-detail-a">
                            <p className="info-title">{productInfos.title3}</p>
                            <p className="info-detail">{productInfos.info3}</p>
                        </div>
                        <div className="line-detail-b">
                            <p className="info-title">{productInfos.title4}</p>
                            <p className="info-detail">{productInfos.info4}</p>
                        </div>
                    </div>

                    <div className="description-box">
                        <p>{productInfos.description}</p>
                    </div>

                    <div className="order-stock-box">
                          
                          {showQuantity()}
                          {noQuantity()}
                          {smallstock()}
                          

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