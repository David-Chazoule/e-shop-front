import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../CSS/connection/connectionPage.css";
import logo from "../../img/logo.png";

import Auth from "../../context/Auth";

function ConnectionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo, setUserInfo } = useContext(Auth);

  const nav = useNavigate();

  const handlePost = async (e) => {
    try {
      e.preventDefault();
      
      const user = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });
      setUserInfo(user.data);

      localStorage.setItem("token", user.headers.accesstoken);

      nav("/produit");
    } catch (err) {
      const validation = document.querySelector(".error");
      validation.style.visibility = "visible";
      
      nav("/connection");
    }
  };


  

  return (
    <div className="Connection_container">
      <div className="logo-connection">
        <img src={logo} alt="" />
        <p>Technologeek</p>
      </div>

      <div className="connection-box">
        <form onSubmit={(e) => handlePost(e)}>
          <div className="user-box">
            <p>Email*</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="user-box">
            <p>mot de passe*</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          

          <div className="btn-user-box">
            <button className="btn-user">Connection</button>
            <span className="error">nous avons un problème avec votre identifiant ou votre mot de passe</span>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default ConnectionPage;
