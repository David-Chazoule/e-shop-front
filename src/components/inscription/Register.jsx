import "../../CSS/inscription/register.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePost = async (e) => {
      e.preventDefault();
   const result =   axios.post('http://localhost:8000/connect', { name, email, password })
   console.log(result);
  };

  return (
    <div className="register_container">
      <div className="logo-register">
        <img src={logo} alt="" />
        <p>Technologeek</p>
      </div>

      <div className="user-register-box">
        <p>Nouveau client ?</p>

        <form onSubmit={(e) => handlePost(e)}>
          <div className="register-box">
            <p>Name*</p>
            <input
              type="text"
              value={name}
              className="input-register"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register-box">
            <p>Email*</p>
            <input
              type="text"
              value={email}
              className="input-register"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-box">
            <p>mot de passe*</p>
            <input
              type="text"
              value={password}
              className="input-register"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn-register-box">
            <button className="btn-register">Créez un compte</button>
          </div>
        </form>
      </div>

      <div className="connect-box-b">
        <p>Déjà client?</p>
        <Link to="/connection">
          <button className="btn-connect-b">Se connecter</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
