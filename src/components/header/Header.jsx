
import BasketHeader from './BasketHeader';
import ConnectHeader from './ConnectHeader';
import logo from '../../img/logo.png';

import '../../CSS/header/header.css';


function Header() {
    return (
        < div className="header-container"> 
         <div className="logo">
             <img className="logo"src={logo} alt="logo" />
         </div>

         <div className="basket-connection">
             <BasketHeader />
             <ConnectHeader/>
         </div>

        </div>
    )
}


export default Header