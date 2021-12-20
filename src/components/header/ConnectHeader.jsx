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
            <img className="icon-user" src={user} alt="" />
            
                
                
               
            
            { onConnect && (
                <>
                            <div id="triangle-connect" ></div>
            <div className= "connect-list">
                <div className="list-connect-box">
                <div className="btn-connect-box">

            <Link to="/connection">
            <button className="btn-connect">Connection</button>
            </Link>

            <Link to="/register">
            <button className="btn-connect">inscription</button>
            </Link>
            </div> 
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