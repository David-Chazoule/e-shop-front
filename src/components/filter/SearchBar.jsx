
import "../../CSS/filter/searchBar.css"


function SearchBar() {

    return(
        < div className="search-bar-box">
        <input className="search" type="text" />
        <button className="search-btn" >Rechercher</button>

        </div>
    )
}

export default SearchBar