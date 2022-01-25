import user from '../../img/user.png'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import  '../../CSS/header/connectHeader.css';

function ConnectHeader(){

    const [onConnect, setOnConnect] = useState(false);

    const showConnect = (value) => {
        
        setOnConnect(!value);
      };
    return(
        
        
        
        
        <div className="connect-header-container"onMouseEnter={()=>showConnect(false)} onMouseLeave={()=>showConnect(true)}>

<div className="connect-box" >
            <div className='connect-div'>
            <p className='customer'>Mon compte</p>
            <p className='identification'>Identifiez-vous</p>
            
            {/* <p className='customer'>Bienvenue!</p>
            <p className='identification'>David</p> */}
            
            </div>
            
                
                
               
            
            { onConnect && (
                <>
                            <div id="triangle-connect" ></div>
            <div className= "connect-list">
                <div className="list-connect-box">
                <div className="btn-connect-box">

            <Link to="/connection">
            <button className="btn-connect">Identifiez-vous</button>
            </Link>

            <div className='register-basket-box'>
            <p className='new-customer'>Nouveau Client ? </p> 
            <Link to="/register"><p  className='new-account'> Créez un compte</p>
            </Link>
            </div>
            </div> 

            
            {/* <div className="btn-connect-box">

            <Link to="/compte">
            <button className="btn-connect">Administration</button>
            </Link>

            <div className='disconnect-box'>
            
            <Link to="/"><p  className='disconnect-btn'> Déconnection</p>
            </Link>
            </div>
            </div>  */}

            


                   </div>

            </div>
            </>
            )}

            </div>






            {/* <img className='icon-user' src={user} alt="" />
            <div className="btn-connect-box">
            <button className="btn-connect">Connection</button>
            <button className="btn-connect">inscription</button>
            </div> */}

        </div>
    )
}

export default ConnectHeader;