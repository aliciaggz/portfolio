import '../styles/App.scss';
import { useEffect, useState } from 'react';
import photome from '../images/alicia.png';
import { Link, Route } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import Header from './Header';
import AboutMe from './Aboutme';
import Footer from './Footer';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleNavButton = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      {/* <Header /> */}
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/aliciagallegogonzalez/"
                >
                  <FaIcons.FaLinkedin className="section__intro--icons" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/aliciaggz"
                >
                  <FaIcons.FaGithubSquare className="section__intro--icons" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/aliciaggz"
                >
                  <IoIcons.IoMdMail className="section__intro--icons" />
                </a>
              </li>
            </ul>
          </div>
          <div className="section__intro--div">
            <img src="" alt="" />
          </div>
        </section>

        <AboutMe />

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
            <li className="portfolio__list--item ">
              <div className="image cuatro"></div>
            </li>
            <li className="portfolio__list--item uno"></li>
            <li className="portfolio__list--item dos"></li>
          </ul>
        </section>

        <section className="contact">
          <h1 className="contact__title">Contacto</h1>
          <form className="contact__form" id="form">
            <input
              className="contact__form--input"
              type="text"
              placeholder="NAME"
            />
            <input
              className="contact__form--input"
              type="text"
              placeholder="E-MAIL"
            />
            <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
            <input
              className="contact__form--input"
              id="submit"
              type="submit"
              value="GO!"
            ></input>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
