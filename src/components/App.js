import '../styles/App.scss';
import { useEffect, useState } from 'react';

// Fichero src/components/App.js

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
        <div className="menu-icon">
          <FaIcons.FaBars onClick={handleNavButton} />
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
            <img
              className="section__intro--img"
              src="https://www.giftegwuenu.dev/assets/static/gift_transparent.d042d20.ee252893d96f0605601786b4ae04869c.svg"
              alt=""
            />
            <h1 className="section__intro--title">
              Hola, me llamo Alicia Gallego
            </h1>
            <p className="section__intro--text">y soy Front-End Developer</p>
            <FaIcons.FaLinkedin />
          </div>
          <div className="section__intro--div">
            <img src="" alt="" />
          </div>
        </section>

        <section className="section__aboutme">
          <h1>Sobre mi</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            voluptas labore facere voluptatem modi cupiditate eius rem, eligendi
            beatae voluptatibus rerum nam, magnam tenetur quaerat eos sint,
            minus asperiores suscipit.
          </p>
        </section>

        <section>
          <h1>Portfolio</h1>
          <p></p>
          <ul>
            <li>
              <a href="">
                <img src="" alt="" />
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h1>Contacto</h1>
          <form action=""></form>
        </section>
      </main>
    </div>
  );
};

export default App;
