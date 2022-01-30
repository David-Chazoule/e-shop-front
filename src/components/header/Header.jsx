import {Link} from 'react-router-dom';
import {useContext} from 'react';
import Auth from '../../context/Auth';
import BasketHeader from './BasketHeader';
import ConnectHeader from './ConnectHeader';
import logo from '../../img/logo.png';
import '../../CSS/header/header.css';


function Header() {

    const {basket, setBasket} = useContext(Auth)

    return (
        <div className="header-container"> 
         <Link to="/">
         <div className="logo">
             
             <img className="logo-img"src={logo} alt="logo" />
             <p className='logo-name'>Technologeek</p>
             
         </div>
         </Link>

         <div className="basket-connection">
             <BasketHeader value={{basket, setBasket}}  />
             <ConnectHeader/>
         </div>

        </div>
    )
}


export default Header