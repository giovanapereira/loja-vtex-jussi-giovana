import banner from "../../assets/img/hero-banner.png";
import "../../assets/sass/Home.scss";

function Banner() {
  return (
    <section className="banner__container">
      <div className="banner">
        <div className="banner__child">
          <span>//</span>

          <div className="banner_text">
            <h3>Criamos lojas que vendem mais.</h3>

            <p>
              A Jüssi é especialista na criação de lojas usando a plataforma
              VTEX. Precisa criar sua loja ou migrar de plataforma?
            </p>

            <a href="#products" className="banner__link">
              Veja nossas soluções
            </a>
          </div>
        </div>
        <div className="banner__child">
          <a href="#products">
            <img src={banner} className="banner__img" alt="Banner" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
