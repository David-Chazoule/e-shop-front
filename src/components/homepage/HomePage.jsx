import '../../CSS/homepage/homePage.css'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom';

function HomePage () {

   return (
     <div className="homepage_container">
      
      <img src={logo} alt="" />
      
      <h1>Bienvenue sur Technologeek</h1>
      

      <div className='shopping-box'>
      <Link to="/produit">
      <button className='btn-shopping'>Commencez votre shopping</button>
      </Link>
      </div>
     
     </div>
   )


}

export default HomePage;