import product from "../list";
import ProductList from "../components/ProductList"





function ProductListContainer () {

    return (
        <div className="container">
            
        {product.map((index)=>(
           <ProductList  key={index.id} title={index.title}  img={index.img}
           marque={index.marque} price={index.price} />
        ))}
        </div>
    )
}


export default ProductListContainer;