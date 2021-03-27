import wppcompany from "../assets/img/wppcompany@2x.png";
import facebook from "../assets/img/facebook@2x.png";
import instagram from "../assets/img/instagram@2x.png";
import linkedin from "../assets/img/linkedin@2x.png";

import "../assets/sass/Footer.scss";

function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div className="footer__child">
          <div className="newsletter">
            <div className="newsletter__text">
              <span>//</span>
              <h3>receba novidades da nossa área de produtos digitais.</h3>
            </div>

            <div className="newsletter__form">
              <input
                className="newsletter__form--input"
                placeholder="Digite seu e-mail"
              ></input>
              <button className="newsletter__form--btn">CADASTRAR</button>
            </div>
          </div>
        </div>

        <div className="footer__child">
          <div className="footer__logo">
            <a className="footer__logo--link" href="#">
              <img src={wppcompany} alt="wppcompany" />
            </a>
          </div>

          <ul className={`footer__menu`}>
            <li className="footer__menu--item">
              <a
                className="footer__menu--link"
                target="_blank"
                href="https://www.facebook.com/agencia.jussi"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </li>

            <li className="footer__menu--item">
              <a
                className="footer__menu--link"
                target="_blank"
                href="https://www.instagram.com/jussi/"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>

            <li className="footer__menu--item">
              <a
                className="footer__menu--link"
                target="_blank"
                href="https://www.linkedin.com/company/agencia-jussi/"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
