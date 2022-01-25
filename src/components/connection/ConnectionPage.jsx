import {useState} from 'react';

import axios from 'axios';

import '../../CSS/connection/connectionPage.css';
import logo from '../../img/logo.png';



function ConnectionPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword]=useState('');

    const handlePost = async (e) => {
        e.preventDefault();
       const result = await axios.post('http://localhost:8000/connect/login', {email, password});
        localStorage.setItem( 'token',  result.headers.accessToken)
    }
    return (
        <div className="Connection_container">
            
            <div className='logo-connection'>
            <img  src={logo} alt="" />
            <p>Technologeek</p>
            </div>

            <form onSubmit={(e)=>handlePost(e)}>
        
        <div className='connection-box'>
            <div className='user-box'>
                <p>Email*</p>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>

            <div className='user-box'>
                <p>mot de passe*</p>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
           

            <div className='btn-user-box'>
             
             <button className='btn-user'>Connection</button>

            </div>
            


        </div>
        </form>
        
     

        </div>
    )
}


export default ConnectionPage