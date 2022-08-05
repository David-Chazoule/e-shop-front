import { useState,  useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../context/Auth";
import "../../CSS/header/connectHeader.css";
import axios from "axios";



function ConnectHeader() {
  const [onConnect, setOnConnect] = useState(false);
  const { userInfo, setUserInfo } = useContext(Auth);
  const { basket, setBasket } = useContext(Auth);

  const nav = useNavigate();

  // useEffect(async () => {
  //   try {
  //     const result = await axios.get('http://172.24.42.106:8080/connect/', {
  //       headers: {
  //         Authorization: 'bearer ' + localStorage.getItem('token'),
  //       },
  //     });
  //     setUsers(result.data);
  //   } catch (err) {
  //     nav('/');
  //   }
  // }, []);

  const showConnect = (value) => {
    setOnConnect(!value);
  };

  
 

 const disconnect = () => {
  setUserInfo(false);
  setBasket([]);
 }
  

  return (
    <div
      className="connect-header-container"
      onMouseEnter={() => showConnect(false)}
      onMouseLeave={() => showConnect(true)}
    >
      <div className="connect-box">
        <div className="connect-div">
          {!userInfo.id ? (
            <>
              <p className="customer">Mon compte</p>
              <p className="identification">Identifiez-vous</p>
            </>
          ) : (
            <>
              <p className="customer">Bienvenue!</p>
              <p className="identification">{userInfo.name}</p>
            </>
          )}
        </div>

        {onConnect && (
          <>
            <div id="triangle-connect"></div>
            <div className="connect-list">
              <div className="list-connect-box">
                {!userInfo.id ? (
                  <div className="btn-connect-box">
                    <Link to="/connection">
                      <button className="btn-connect">Identifiez-vous</button>
                    </Link>

                    <div className="register-basket-box">
                      <p className="new-customer">Nouveau Client ? </p>
                      <Link to="/register">
                        <p className="new-account"> Créez un compte</p>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="btn-connect-box">
                    <Link to="/compte">
                      <button className="btn-connect">Administration</button>
                    </Link>

                    <div className="disconnect-box">
                      <Link to="/">
                        <p className="disconnect-btn" onClick={disconnect}> Déconnection</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* <img className='icon-user' src={user} alt="" />
            <div className="btn-connect-box">
            <button className="btn-connect">Connection</button>
            <button className="btn-connect">inscription</button>
            </div> */}
    </div>
  );
}

export default ConnectHeader;
