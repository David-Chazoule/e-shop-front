import {  useNavigate} from "react-router-dom";


import '../CSS/product-card/productList.css';




function ProductList ({products}) {
  // const {id, img, title, marque, price} = product
    let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/card/${id}`);
  };

    
    return (
        
        <>
          {products.map((product) => {
          const {id, img, title, marque, price} = product
            return <div className="productlist_container" onClick={()=>{handleClick(id)}}
              onKeyPress={()=>{handleClick(id)}}
              role="button"
              tabIndex={0}>
              
              <div className="list-card" >
                  <img className="list-img" src={img} alt="" />
                  <p className="title-list">{title} </p>
                  <div className='marque-list-box'>
                  <p className="marque-list">{marque}</p>
                  </div>
                  <p className="price-list">{price}</p>
                  <div className="bar-seperate"></div>
              </div>
    
              <div className="bar-v-seperate"></div>
           </div>
          })}
        </>
       

        
    )
}

export default ProductList;