
import '../../CSS/connection/connectionPage.css';
import logo from '../../img/logo.png';



function ConnectionPage () {
    return (
        <div className="Connection_container">
            
            <div className='logo-connection'>
            <img  src={logo} alt="" />
            <p>Technologeek</p>
            </div>
        
        <div className='connection-box'>
            <div className='user-box'>
                <p>Email*</p>
                <input></input>
            </div>

            <div className='user-box'>
                <p>mot de passe*</p>
                <input></input>
            </div>
           

            <div className='btn-user-box'>
             
             <button className='btn-user'>Connection</button>

            </div>



        </div>

        <div className='bar-h'></div>
     

        </div>
    )
}


export default ConnectionPage