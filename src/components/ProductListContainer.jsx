import products from "../list.json";
import ProductList from "../components/ProductList"
import Choicebox from "./filter/Choicebox";





function ProductListContainer () {

    return (
        <div className="container">

            <div className="choice-box-bar">

            <Choicebox />

            <div className='seperate-bar'></div>
            </div>

            
            <ProductList products={products}/>
        {/* {products.map((product)=>(
        //    <ProductList  key={index.id} title={index.title}  img={index.img}
        //    marque={index.marque} price={index.price} />
            <ProductList product={product}/>
        ))} */}
        </div>
    )
}


export default ProductListContainer;