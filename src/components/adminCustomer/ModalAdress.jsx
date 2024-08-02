import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../../context/Auth";
import { ValidNameFirstName } from "../regex/Regex";

function ModalAdress(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { userInfo, setUserInfo } = useContext(Auth);
  const { basket } = useContext(Auth);

  const nav = useNavigate();

  useEffect(() => {
    setFirstname(userInfo.firstname || "");
    setLastname(userInfo.lastname || "");
    setAdress(userInfo.adress || "");
    setCity(userInfo.city || "");
    setPostalCode(userInfo.postalcode || "");
    setPhone(userInfo.phone || "");
  }, []);

  // allows the customer to send his personal data

  const handlePost = async (e) => {
    e.preventDefault();
    const result = await axios.patch(
      `http://localhost:8000/user/${userInfo.id}`,
      {
        firstname,
        lastname,
        adress,
        city,
        postalcode,
        phone,
      }
    );

    if (result && basket.length > 0) {
      setUserInfo(result.data);
      nav("/paiement");
    } else {
      setUserInfo(result.data);
      nav("/produit");
    }
  };

  const errorDisplay = (tag, message, valid) => {
    const box = document.querySelector("." + tag + "-error-span");
    const span = document.querySelector("." + tag + "-error-span > span");

    if (!valid) {
      box.classList.add("error");
      span.textContent = message;
    } else {
      box.classList.remove("error");
      span.textContent = message;
    }
  };

  function ValidFirstName() {
    if (!ValidNameFirstName.test(firstname)) {
      errorDisplay("firstname", "pas de chiffre ou de characteres spéciaux");
    } else {
      errorDisplay("firstname", "", true);
    }
  }

  function ValidLastName() {
    if (!ValidNameFirstName.test(lastname)) {
      errorDisplay("lastname", "pas de chiffre ou de characteres spéciaux");
    } else {
      errorDisplay("lastname", "", true);
    }
  }

  function ValidCity() {
    if (!ValidNameFirstName.test(city)) {
      errorDisplay("cityname", "pas de chiffre ou de characteres spéciaux");
    } else {
      errorDisplay("cityname", "", true);
    }
  }

  function checkValue(value) {
    if (value.includes("@")) {
      setEmail(value);
    }
  }

  function isNumberKey(evt) {
    let charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
      errorDisplay("postcode", "nous voulons seulement des chiffres");
    } else {
      errorDisplay("postcode", "", true);
    }
  }

  const handlemodal = () => {
    props.setmodal(false);
  };

  return (
    <div className="modal_container" on>
      <form id="info-form-modal" onSubmit={(e) => handlePost(e)}>
        <div className="contact-adresse-box">
          <div className="form-contact-modal">
            <div className="form-input">
              <div className="label-input">
                <label>Nom*</label>
                <input
                  id="first-name"
                  type="text"
                  value={firstname}
                  onChange={(e) => ValidFirstName(setFirstname(e.target.value))}
                  required
                  autoComplete="off"
                />
                <div className="firstname-error-span">
                  <span></span>
                </div>
              </div>
              <div className="label-input">
                <label>Prénom*</label>
                <input
                  id="last-name"
                  type="text"
                  value={lastname}
                  onChange={(e) => ValidLastName(setLastname(e.target.value))}
                  required
                  autoComplete="off"
                />
                <div className="lastname-error-span">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="form-input">
              <div className="label-input">
                <label>Adresse*</label>
                <input
                  id="address"
                  type="text"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-input">
              <div className="label-input">
                <label>Ville*</label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => ValidCity(setCity(e.target.value))}
                  required
                  autoComplete="off"
                />
                <div className="cityname-error-span">
                  <span></span>
                </div>
              </div>
              <div className="label-input">
                <label>Code postal*</label>
                <input
                  id="postal"
                  name="zip"
                  value={postalcode}
                  type="text"
                  maxLength="5"
                  onChange={(e) => setPostalCode(e.target.value)}
                  onKeyPress={(event) => {
                    return isNumberKey(event);
                  }}
                  required
                  autoComplete="off"
                />
                <div className="postcode-error-span">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="form-input">
              <div className="label-input">
                <label>Email*</label>
                <input
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setEmail(e.target.value)}
                  onInput={(e) => checkValue(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="label-input">
                <label>Numéro de téléphone*</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  maxLength="15"
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={(event) => {
                    return isNumberKey(event);
                  }}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="btn-box">
              <button>valider</button>
              <button className="cancel" onClick={handlemodal}>
                annuler
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalAdress;
