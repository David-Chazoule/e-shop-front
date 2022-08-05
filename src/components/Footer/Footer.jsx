import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twiiter.png";
import logo from "../../img/logo.png";
import "../../CSS/footer/footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="copywrite">
        <p>© 2022 - Technologeek</p>
      </div>
      <div className="social-media-container">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </div>
    </div>
  );
}

export default Footer;
