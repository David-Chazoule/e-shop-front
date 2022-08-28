import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twiiter.png";
import logo from "../../img/logo.png";

function Footer() {
  return (
    <div className="footer_container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="copywrite">
        <p>© 2022 - Technologeek</p>
      </div>
      <div className="social-media-container">
        <img src={facebook} alt="facebook-icon" />
        <img src={instagram} alt="instagram-icon" />
        <img src={twitter} alt="twitter-icon" />
      </div>
    </div>
  );
}

export default Footer;
