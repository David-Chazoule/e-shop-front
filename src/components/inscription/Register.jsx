import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ValidEmail, ValidPseudo, ValidPassword } from "../regex/Regex";
import Auth from "../../context/Auth";
import logo from "../../img/logo.png";
import show from "../../img/show.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [isShownB, setIsShownB] = useState(false);
  const [modal, setModal] = useState(false);
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const { userInfo, setUserInfo } = useContext(Auth);

  const { basket } = useContext(Auth);

  const nav = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();

    if (confirmPassword === password) {
      try {
        const result = await axios.post("http://localhost:8000/user", {
          name,
          email,
          password,
        });
        setUserInfo(result.data);

        if (result && basket.length <= 0) {
          setModal(!modal);
          setTimeout(() => {
            nav("/produit");
          }, 2500);
        }

        if (result && basket.length > 0) {
          setModal(!modal);
          setTimeout(() => {
            nav("/information");
          }, 2500);
        }
      } catch (e) {
        if (e.response.status === 400) {
          setUserAlreadyExist(true);
        }
      }
    } else {
      const validation = document.querySelector(".confirm-pass");
      validation.style.visibility = "visible";

      setTimeout(() => {
        validation.style.visibility = "hidden";
      }, 4000);
    }
  };

  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };

  const togglePasswordB = () => {
    setIsShownB((isShownB) => !isShownB);
  };

  const errorDisplay = (tag, message, valid) => {
    const box = document.querySelector("." + tag + "-register");
    const span = document.querySelector("." + tag + "-register > span");

    if (!valid) {
      box.classList.add("error");
      span.textContent = message;
    } else {
      box.classList.remove("error");
      span.textContent = message;
    }
  };

  const validMail = () => {
    if (!ValidEmail.test(email)) {
      errorDisplay("mail", "Le mail n'est pas valide");
    } else {
      errorDisplay("mail", "", true);
    }
  };

  const validationPseudo = () => {
    if (!ValidPseudo.test(name)) {
      errorDisplay(
        "name",
        "Le pseudo ne doit pas contenir de caractères spéciaux"
      );
    } else if (name.length > 0 && (name.length < 3 || name.length > 20)) {
      errorDisplay("name", "Le pseudo doit faire entre 3 et 20 caractères");
    } else {
      errorDisplay("name", "", true);
    }
  };

  const validPassword = () => {
    if (!ValidPassword.test(password)) {
      errorDisplay(
        "password",
        "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
      );
    } else if (password.length < 14) {
      errorDisplay("password", "", true);
    } else {
      errorDisplay("password", "", true);
    }
  };

  function ValidPass() {
    if (password.length === 0) {
      const bar = "";
      return bar;
    }
    if (!ValidPassword.test(password)) {
      const bar = "progressRed";
      return bar;
    } else if (password.length < 14) {
      const bar = "progressBlue";
      return bar;
    } else {
      const bar = "progressGreen";
      return bar;
    }
  }

  return (
    <div className="register_container">
      <div className="logo-register">
        <img src={logo} alt="" />
        <p>Technologeek</p>
      </div>

      <div className="user-register-box">
        {!modal ? (
          <p className="new-user">Nouveau client ?</p>
        ) : (
          <p className="welcome">
            Bienvenue <span>{name}</span> sur Technologeek !
          </p>
        )}

        <form onSubmit={(e) => handlePost(e)}>
          <div className="register-box">
            <p>Name*</p>
            <input
              type="text"
              value={name}
              className="input-register"
              onChange={(e) => validationPseudo(setName(e.target.value))}
              required
                  autoComplete="off"
            />
            <div className="name-register">
              <span></span>
            </div>
          </div>

          <div className="register-box">
            <p>Email*</p>
            <input
              type="text"
              value={email}
              className="input-register"
              onChange={(e) => validMail(setEmail(e.target.value))}
              required
                  autoComplete="off"
            />
            <div className="mail-register">
              <span></span>
            </div>
          </div>

          <div className="register-box">
            <p>mot de passe*</p>
            <div className="password-container">
              <input
                type={isShown ? "text" : "password"}
                value={password}
                className="input-register"
                onChange={(e) => validPassword(setPassword(e.target.value))}
                required
                  autoComplete="off"
              />
              <img src={show} alt="show-password" onClick={togglePassword} />
            </div>

            <div className={ValidPass()}></div>
            <div className="password-register">
              <span></span>
            </div>
          </div>

          <div className="register-box">
            <p>confirmer votre mot de passe*</p>
            <div className="password-container">
              <input
                type={isShownB ? "text" : "password"}
                value={confirmPassword}
                className="input-register"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                  autoComplete="off"
              />
              <img src={show} alt="show-password" onClick={togglePasswordB} />
            </div>

            <span className="confirm-pass">problème avec votre mot de passe</span>
          </div>
          {userAlreadyExist && (
            <p className="user-exist">Cette email est déjà utilisé</p>
          )}

          <div className="btn-register-box">
            <button className="btn-register" type="submit">
              Créez un compte
            </button>
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
