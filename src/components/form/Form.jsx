import '../../CSS/form/form.css'
import {Link} from "react-router-dom"
import logo from '../../img/logo.png'

function Form () {
    return(
        <div className="form_container">
            <h1> Vos informations</h1>
        <form id="info-form">
               
                <div className="contact-adresse-box">
                    <div className="form-contact">

                        <img  src={logo} alt="" />
                       
                        <div className="form-input">
                            <div className="label-input">
                            <label>Nom*</label>
                            <input id="last-name" type="text"  required />
                            </div>
                            <div className="label-input">
                            <label>Prénom*</label>
                            <input id="first-name" type="text"  required />
                            </div>
                            </div>
                            
                            <div className="form-input">
                            <div className="label-input">
                            <label>Adresse*</label>
                            <input id="address" type="text"  required />
                            </div>
                             </div>
                            
                            <div className="form-input">
                            <div className="label-input">
                            <label>Ville*</label>
                            <input id="city" type="text" required />
                             </div>
                            <div className="label-input">
                            <label>Code postal*</label>
                            <input id="postal" name="zip" type="text"  required />
                            
                            </div>
                            </div>
                            <div className="form-input">
                            <div className="label-input">
                            <label>Email*</label>
                            <input id="email" type="email"  required />
                             </div>
                            <div className="label-input">
                            <label>Numéro de téléphone*</label>
                            <input id="phone" type="text" maxLength="15"  required />
                            </div>
                            </div>
                        </div>
                    </div>
                    
                        
                    
                    
                
            </form>

            <div className="btn-back-next-box">

             <Link to="/panier">
             <button className='btn-back-next'>revenir </button>
             </Link>
             
             <Link to="/paiement">
             <button className='btn-back-next'>paiement</button>
             </Link>
         </div>     

        </div>
    )
}

export default Form;