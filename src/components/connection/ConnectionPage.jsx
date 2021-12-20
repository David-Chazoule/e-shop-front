
import '../../CSS/connection/connectionPage.css';




function ConnectionPage () {
    return (
        <div className="Connection_container">
        
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