import { useEffect, useState } from "react";
import { TypeButton } from "../Datas/TypeButton";

import ProductList from "../components/ProductList";
import Choicebox from "./filter/Choicebox";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./skeleton/SkeletonCard";

import axios from "axios";

function ProductListContainer() {
  const [productInfos, setProductInfos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get("http://localhost:8000/product");
      setProductInfos(result.data);
      SetIsLoading(false);
    };
    fetchProduct();
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  const cancelbtn = () => {
    setSearchTerm("");
    let input = document.querySelector(".search");
    input.value = "";
  };

  console.log("wesh", productInfos)

  return (
    <div className="container-filter-list">
      <div className="search-bars-box">
        <div className="choice-box-bar">
          <Choicebox setType={setType} type={type} />
        </div>

        <div className="search-bar-box">
          <input
            className="search"
            type="text"
            name="searchBar"
            id="search"
            placeholder="entrez votre recherche"
            onChange={handleSearchTerm}
          />
          {searchTerm.length > 0 ? (
            <button className="btn-cancel-search" onClick={cancelbtn}>
              X
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="seperate-bar"></div>

        <div className="tag-box">
          {TypeButton.filter((val) => {
            return val.type === type;
          }).map((elem) => (
            <>
              <button
                className="button-tag"
                onClick={() => setType(type.length && type !== "all")}
              >
                X
              </button>
              <p className="tag">{elem.name}</p>
            </>
          ))}
        </div>
      </div>

      <div className="div-map">
        {isLoading && <SkeletonCard cards={20} />}
        {productInfos
          .filter((val) => {
            return type.length && type !== "all" ? val.type === type : val;
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
