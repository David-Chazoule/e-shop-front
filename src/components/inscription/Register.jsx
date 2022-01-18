
import '../../CSS/inscription/register.css'
import logo from '../../img/logo.png'


function Register () {
    return(
        <div className="register_container">
        
        <div className='logo-register'>
         <img src={logo} alt="" />
         <p>Technologeek</p>
         </div>
        
        <div className='user-register-box'>
            
       
            <p>Nouveau client ?</p>
            
            <div className='register-box'>
                <p>Email*</p>
                <input className='input-register'></input>
            </div>

            <div className='register-box'>
                <p>mot de passe*</p>
                <input className='input-register'></input>
            </div>

            <div className='register-box'>
                <p> Confirmer votre mot de passe*</p>
                <input className='input-register'></input>
            </div>

            <div className='btn-register-box'>
             
             <button className='btn-register'>Créez un compte</button>

            </div>

            
       
       
        </div>

        <div className='connect-box-b'>
            <p>Déjà client?</p>
            <button className='btn-connect-b'>Se connecter</button>
        </div>

        
        

        <div className='bar-h-r'></div>
     

        </div>

        
    )
}

export default Register;