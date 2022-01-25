import { useEffect, useState } from "react";
// import products from "../list.json";
import ProductList from "../components/ProductList";
import Choicebox from "./filter/Choicebox";
// import SearchBar from "./filter/SearchBar";
import axios from "axios";
import "../CSS/filter/searchBar.css";

function ProductListContainer() {
  const [productInfos, setProductInfos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchproduct = async () => {
      const result = await axios.get("http://localhost:8000/product");
      setProductInfos(result.data);
    };
    fetchproduct();
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="container">
      <div className="search-bars-box">
        <div className="choice-box-bar">
          <Choicebox setType={setType} />
        </div>

        {/* <div className="search-box-bar"> */}
        <div className="search-bar-box">
          <input
            className="search"
            type="text"
            name="searchBar"
            id="search"
            placeholder="entrez votre recherche"
            onChange={handleSearchTerm}
          />
        </div>

        {/* <SearchBar /> */}

        {/* < div className="search-bar-box">
        <input className="search" type="text" name="searchBar" id="search" placeholder="" onChange={handleSearchTerm} />
        <button className="search-btn"  >Rechercher</button>

        </div> */}

        {/* </div> */}

        <div className="seperate-bar"></div>
      </div>

      <div className="div-map">
        {productInfos
          .filter((val) => {
              return (type.length && type !== "all") ? val.type === type : val
          })
          .filter((elem) => {
            return elem.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((prod, index) => {
            return (
              <ProductList
                key={index}
                id={prod.id}
                title={prod.title}
                img={prod.img}
                brand={prod.brand}
                price={prod.price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProductListContainer;
