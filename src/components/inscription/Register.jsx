
import '../../CSS/inscription/register.css'



function Register () {
    return(
        <div className="register_container">
        
        <div className='user-register-box'>
            
        <div className='register-box'>
                <p>Nom*</p>
                <input></input>
            </div>

            <div className='register-box'>
                <p>Prenom*</p>
                <input></input>
            </div>
            
            
            <div className='register-box'>
                <p>Email*</p>
                <input></input>
            </div>

            <div className='register-box'>
                <p>mot de passe*</p>
                <input></input>
            </div>

            <div className='register-box'>
                <p> Confirmer votre mot de passe*</p>
                <input></input>
            </div>

            <div className='btn-register-box'>
             
             <button className='btn-register'>Inscription</button>

            </div>

            
       
       
        </div>

        
        

        <div className='bar-h'></div>
     

        </div>

        
    )
}

export default Register;