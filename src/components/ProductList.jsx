


import '../CSS/productList.css';




function ProductList (props) {
    return (
        
        
        <div className="productlist_container">
          
          <div className="list-card">
              <img className="list-img" src={props.index.img} alt="" />
              <p className="title-list">{props.index.title} </p>
              <div className='marque-list-box'>
              <p className="marque-list">{props.index.marque}</p>
              </div>
              <p className="price-list">{props.index.price}</p>
              <div className="bar-seperate"></div>
          </div>

          <div className="bar-v-seperate"></div>

          

        </div>

        
    )
}

export default ProductList;