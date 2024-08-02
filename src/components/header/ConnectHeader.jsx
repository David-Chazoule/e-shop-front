import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Auth from "../../context/Auth";

function ConnectHeader() {
  const [onConnect, setOnConnect] = useState(false);
  const { userInfo, setUserInfo } = useContext(Auth);
  const { setBasket } = useContext(Auth);

  const showConnect = () => {
    setOnConnect(!onConnect);
  };

  const disconnect = () => {
    setUserInfo([]);
    setBasket([]);
  };

  return (
    <div className="connect-header-container" onClick={showConnect}>
      <div className="connect-box">
        <div className="connect-div">
          {!userInfo.id ? (
            <>
              <p className="customer">Mon compte</p>
              <p className="identification">Identifiez-vous</p>
            </>
          ) : (
            <>
              <p className="customer">Bienvenue !</p>
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
                        <p className="disconnect-btn" onClick={disconnect}>
                          {" "}
                          Déconnection
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ConnectHeader;
