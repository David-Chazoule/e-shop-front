import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../../context/Auth";

import logo from "../../img/logo.png";

function ConnectionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noExistUser, setNoExistUser] = useState(false);
  const { setUserInfo } = useContext(Auth);
  const { basket } = useContext(Auth);

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
      if (user && basket.length <= 0) {
        nav("/produit");
      }

      if (
        user &&
        basket.length > 0 &&
        user.data.firstname == null &&
        user.data.lastname == null &&
        user.data.adress == null &&
        user.data.postalcode == null &&
        user.data.city == null &&
        user.data.phone == null
      ) {
        nav("/information");
      }

      if (
        user &&
        basket.length > 0 &&
        user.data.firstname &&
        user.data.lastname &&
        user.data.adress &&
        user.data.postalcode &&
        user.data.city &&
        user.data.phone
      ) {
        nav("/paiement");
      }
    } catch (err) {
      setNoExistUser(true);

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
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="user-box">
            <p>mot de passe*</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            ></input>
          </div>

          <div className="btn-user-box">
            <button className="btn-user">Connection</button>
            <div className="error-box">
              {noExistUser && (
                <span className="error">
                  nous avons un problème avec votre identifiant ou votre mot de
                  passe
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConnectionPage;
