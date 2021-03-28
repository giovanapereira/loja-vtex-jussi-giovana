import about from "../../assets/img/image-jussi@2x.png";

function About() {
  return (
    <section id="about" className="about__container">
      <div className="about">
        <div className="about__child">
          <div className="about_text">
            <h3>Olá, somos a Jüssi</h3>

            <p>
              A Jüssi é uma agência integrante do grupo global WPP que vem há 10
              anos consolidando o pensamento voltado para produtos e resolução
              de problemas. Nosso área dedicada exclusivamente para Produtos
              Digitais é organizada em 6 especialidades: Product Managamenet,
              User Experience Design, SEO, Tecnologia, Agile e User Behavior
              Analytics.
            </p>

            <a href="#products" className="about__link">
              Conheça a Jüssi
            </a>
          </div>
        </div>
        <div className="about__child">
          <a href="#products">
            <img src={about} className="about__img" alt="About" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
