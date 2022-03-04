import '../styles/App.scss';
import { useEffect, useState } from 'react';
import menu from '../images/menu.png';
// Fichero src/components/App.js

import { Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header className="header">
        <img className="menu__img" src={menu} alt="" />
        <nav className="menu">
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
            <h1>Hola, me llamo Alicia Gallego</h1>
            <p>y soy Front-End Developer</p>
            <i className="fab fa-linkedin"></i>
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
