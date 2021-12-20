
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../list.json'

import '../CSS/product-card/productCard.css';
import valid from '../img/IconValide.png';


function ProductCard() {

    const [productInfos, setProduct] = useState({})
    const [load, setLoad] = useState(true)

    const { id } = useParams();

    // const id = params.id

    // function getItem(){
    //     const data = products.map((p)=>{
    //         if(p.id === id){
    //             return p
    //         }
    //     })

    //     console.log(data)
    // }


    useEffect(() => {

        // getItem()


        // const data = products.map((x) => x.id === id )
        const data = products[id - 1]
        console.log(data, products);
        if (data === []) {
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
                    <img className="img-card" src={productInfos.img} alt="" />

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
            <div className="btn-back-next-box">

            <Link to="/produit">
                <button className='btn-back-next'>retour </button>
            </Link>

            </div>

        </div>
    )
}

export default ProductCard