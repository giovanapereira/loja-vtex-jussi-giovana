import logo1 from "../../assets/img/logo-brastemp@3x.svg";
import logo2 from "../../assets/img/logo-compra-certa.svg";
import logo3 from "../../assets/img/logo-consul@3x.svg";
import logo4 from "../../assets/img/logo-thebar@3x.svg";

function TipBar() {
  return (
    <section className="tipBar__container">
      <div className="tipBar">
        <div className="tipBar__child">
          <div className="tipBar_text">
            <p>Nossas principais lojas VTEX →</p>
          </div>
        </div>
        <div className="tipBar__child">
          <a href="#">
            <img src={logo1} className="tipBar__img" alt="tipBar" />
          </a>

          <a href="#">
            <img src={logo2} className="tipBar__img" alt="tipBar" />
          </a>

          <a href="#">
            <img src={logo3} className="tipBar__img" alt="tipBar" />
          </a>

          <a href="#">
            <img src={logo4} className="tipBar__img" alt="tipBar" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TipBar;
