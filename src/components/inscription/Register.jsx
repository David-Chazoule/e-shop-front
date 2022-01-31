import { useState } from "react";
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from '../../context/Auth';
import logo from "../../img/logo.png";
import "../../CSS/inscription/register.css";




function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { basket, setBasket } = useContext(Auth)

  const nav = useNavigate()

  const handlePost = async (e) => {
     e.preventDefault();
    const result = axios.post('http://localhost:8000/user', { name, email, password })
    if (result) {
      nav("/product")
    }
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
              type="password"
              value={password}
              className="input-register"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn-register-box">

            {/* <Link to="/information"> */}
            <button className="btn-register" type="submit">Créez un compte</button>
            {/* </Link> */}

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
