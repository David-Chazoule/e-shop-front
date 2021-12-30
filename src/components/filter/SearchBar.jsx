import { useState } from "react";
import "../../CSS/filter/searchBar.css"


function SearchBar(props) {

    

    const [ searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value);
      };

    return(
        < div className="search-bar-box">
        <input className="search" type="text" name="searchBar" id="search" placeholder="" onChange={handleSearchTerm} />
        <button className="search-btn"  >Rechercher</button>

        </div>
    )
}

export default SearchBar