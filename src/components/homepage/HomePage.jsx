import { Link } from "react-router-dom";
import DynamicText from "./DynamicText";

import logo from "../../img/logo.png";

function HomePage() {
  return (
    <div className="homepage_container">
      <img src={logo} alt="logo" />

      <h1>Bienvenue sur Technologeek</h1>

      <div className="text-container">
        <h1>
          <DynamicText />
        </h1>
      </div>

      <p>Grande Selection de produit High Tech</p>

      <div className="shopping-box">
        <Link to="/produit">
          <button className="btn-shopping">Commencez votre shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
