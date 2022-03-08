import '../styles/App.scss';
import { useEffect, useState } from 'react';
import photome from '../images/alicia.png';
import anime from '../images/anime.png';
import dice from '../images/dice.png';
import game from '../images/game.png';
import { Link, Route } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleNavButton = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <header className="header">
        <div className="menu__icon">
          <FaIcons.FaBars
            className="menu__icon--fa"
            onClick={handleNavButton}
          />
        </div>

        <nav className={sidebar ? 'menu active' : 'menu'}>
          <ul className="menu__list">
            <li className="menu__list--item">Inicio</li>
            <li className="menu__list--item">Sobre Mi</li>
            <li className="menu__list--item">Portfolio</li>
            <li className="menu__list--item">Contacto</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="section__intro">
          <div className="section__intro--div">
            <img className="section__intro--img" src={photome} alt="" />
            <h1 className="section__intro--title">
              Hola, me llamo Alicia Gallego
            </h1>
            <p className="section__intro--text">y soy Front-End Developer</p>
            <ul className="section__intro--list">
              <li>
                <FaIcons.FaLinkedin className="section__intro--icons" />
              </li>
              <li>
                <FaIcons.FaGithubSquare className="section__intro--icons" />
              </li>
            </ul>
          </div>
          <div className="section__intro--div">
            <img src="" alt="" />
          </div>
        </section>

        <section className="section__aboutme">
          <h1 className="section__aboutme--title">Sobre mí</h1>

          <p className="section__aboutme--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            voluptas labore facere voluptatem modi cupiditate eius rem, eligendi
            beatae voluptatibus rerum nam, magnam tenetur quaerat eos sint,
            minus asperiores suscipit.
          </p>
        </section>

        <section className="portfolio">
          <h1 className="portfolio__title">Portfolio</h1>

          <ul className="portfolio__list">
            <li className="portfolio__list--item">
              <div className="image uno"></div>
            </li>
            <li className="portfolio__list--item">
              <div className="image dos"></div>
            </li>
            <li className="portfolio__list--item">
              <div className="image tres"></div>
            </li>
            <li className="portfolio__list--item cuatro"></li>
            <li className="portfolio__list--item uno"></li>
            <li className="portfolio__list--item dos"></li>
          </ul>
        </section>

        <section className="contact">
          <h1 className="contact__title">Contacto</h1>
          <form id="form" className="top">
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="E-MAIL" />
            <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
            <input id="submit" type="submit" value="GO!"></input>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
