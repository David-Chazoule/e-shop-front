
import products from "../list.json";
import ProductList from "../components/ProductList"
import Choicebox from "./filter/Choicebox";
import SearchBar from "./filter/SearchBar";




function ProductListContainer() {

    

    

    return (
        <div className="container">

            <div className="search-bars-box">
            
            <div className="choice-box-bar">
                
                
                <Choicebox />

                </div>
               
               <div className="search-box-bar">
              
              <SearchBar />

              {/* < div className="search-bar-box">
        <input className="search" type="text" name="searchBar" id="search" placeholder="" onChange={handleSearchTerm} />
        <button className="search-btn"  >Rechercher</button>

        </div> */}
                
                
                </div>

                <div className='seperate-bar'></div>
                </div>
            
                {/* {products.filter((val) =>{
        return val.title.toLowerCase().includes(searchTerm.toLowerCase());
      }).map((val)=>{
        return( */}

            <ProductList products={products} />

           
          
        </div>
    )
}


export default ProductListContainer;